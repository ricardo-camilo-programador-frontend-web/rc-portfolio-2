interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
}

type AnalyticsWindow = Window & {
  dataLayer?: Array<unknown>
  gtag?: (...arguments_: Array<unknown>) => void
}

class AnalyticsService {
  private queue: Array<AnalyticsEvent> = []
  private flushTimer: ReturnType<typeof setTimeout> | null = null
  private readonly flushInterval = 5000
  private readonly maxQueueSize = 10
  private isLoaded = false
  private isLoading = false
  private hasInteracted = false
  private loadTimeout: ReturnType<typeof setTimeout> | null = null
  private abortController: AbortController | null = null
  private idleCallbackHandle: number | null = null

  init(): void {
    this.abortController = new AbortController()
    this.setupInteractionListener()
    this.scheduleLoad()
  }

  private setupInteractionListener(): void {
    this.abortController = new AbortController()
    const markInteraction = (): void => {
      this.hasInteracted = true
      if (!this.isLoaded && !this.isLoading) {
        this.loadAnalytics()
      }
      this.removeInteractionListeners()
    }

    ;['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
      if (this.abortController) {
        document.addEventListener(event, markInteraction, {
          once: true,
          passive: true,
          signal: this.abortController.signal,
        })
      }
    })
  }

  private removeInteractionListeners(): void {
    if (this.abortController) {
      this.abortController.abort()
      this.abortController = null
    }
    if (this.idleCallbackHandle !== null && 'cancelIdleCallback' in window) {
      const cic = (
        window as Window & typeof globalThis & { cancelIdleCallback: (handle: number) => void }
      ).cancelIdleCallback
      cic(this.idleCallbackHandle)
      this.idleCallbackHandle = null
    }
  }

  private scheduleLoad(): void {
    if ('requestIdleCallback' in window) {
      const ric = (
        window as Window &
          typeof globalThis & {
            requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number
          }
      ).requestIdleCallback
      this.idleCallbackHandle = ric(
        () => {
          this.idleCallbackHandle = null
          if (!this.hasInteracted) {
            this.loadAnalytics()
          }
        },
        { timeout: 3000 },
      )
    } else {
      this.loadTimeout = setTimeout(() => this.loadAnalytics(), 2000)
    }
  }

  private loadAnalytics(): void {
    if (this.isLoaded || this.isLoading) return

    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (!measurementId || measurementId === 'undefined') {
      this.isLoading = false
      return
    }

    this.isLoading = true

    const gtmScript = document.createElement('script')
    gtmScript.async = true
    gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(gtmScript)
    gtmScript.onload = () => {
      const analyticsWindow = window as AnalyticsWindow
      analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
      analyticsWindow.gtag = (...arguments_: Array<unknown>) => {
        analyticsWindow.dataLayer?.push(arguments_)
      }
      analyticsWindow.gtag?.('js', new Date())
      analyticsWindow.gtag?.('config', measurementId)
      this.isLoaded = true
      this.flush()
    }

    if (this.loadTimeout) {
      clearTimeout(this.loadTimeout)
      this.loadTimeout = null
    }
  }

  track(event: AnalyticsEvent): void {
    this.queue.push(event)

    if (this.queue.length >= this.maxQueueSize) {
      this.flush()
    } else if (!this.flushTimer) {
      this.flushTimer = setTimeout(() => this.flush(), this.flushInterval)
    }
  }

  private flush(): void {
    if (this.flushTimer) {
      clearTimeout(this.flushTimer)
      this.flushTimer = null
    }

    if (this.queue.length === 0) return

    const events = [...this.queue]
    this.queue = []

    const analyticsWindow = window as AnalyticsWindow
    if (this.isLoaded && analyticsWindow.gtag) {
      events.forEach(event => {
        analyticsWindow.gtag?.('event', event.action, {
          ['event_category']: event.category,
          ...(event.label ? { ['event_label']: event.label } : {}),
          ...(event.value !== undefined ? { value: event.value } : {}),
        })
      })
    }
  }

  trackPageView(path: string, _title?: string): void {
    this.track({
      category: 'page',
      action: 'view',
      label: path,
    })
  }

  trackClick(element: string, label?: string): void {
    this.track({
      category: 'interaction',
      action: 'click',
      label: label || element,
    })
  }

  trackNavigation(section: string): void {
    this.track({
      category: 'navigation',
      action: 'navigate',
      label: section,
    })
  }
}

export const analytics = new AnalyticsService()
