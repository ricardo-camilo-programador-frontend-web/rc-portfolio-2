import { env } from '../constants/env'

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

type ClarityFn = ((...arguments_: Array<unknown>) => void) & { q?: Array<unknown> }

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
    if (this.idleCallbackHandle !== null && globalThis.cancelIdleCallback) {
      globalThis.cancelIdleCallback(this.idleCallbackHandle)
      this.idleCallbackHandle = null
    }
  }

  private scheduleLoad(): void {
    if (globalThis.requestIdleCallback) {
      this.idleCallbackHandle = globalThis.requestIdleCallback(
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
    this.isLoading = true

    const config = env.analytics
    if (!config.enabled) {
      this.isLoading = false
      return
    }

    if (this.loadTimeout) {
      clearTimeout(this.loadTimeout)
      this.loadTimeout = null
    }

    const gtmActive = config.gtmEnabled && config.gtmId !== ''
    if (gtmActive) {
      this.injectGtm(config.gtmId)
    }

    const gtagHandledByGtm = gtmActive && config.gtmGa4Id === config.ga4Id
    if (config.ga4Id !== '' && !gtagHandledByGtm) {
      this.injectGa4(config.ga4Id)
    }

    this.injectClarity(config.clarityId)
    this.injectCounter(config.counterId, config.counterUtcOffset)
  }

  private injectGtm(containerId: string): void {
    const analyticsWindow = window as AnalyticsWindow
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
    analyticsWindow.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`
    document.head.appendChild(script)
  }

  private injectGa4(measurementId: string): void {
    const analyticsWindow = window as AnalyticsWindow
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
    if (!analyticsWindow.gtag) {
      analyticsWindow.gtag = (...arguments_: Array<unknown>) => {
        analyticsWindow.dataLayer?.push(arguments_)
      }
    }
    analyticsWindow.gtag?.('js', new Date())
    analyticsWindow.gtag?.('config', measurementId)
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
    this.isLoaded = true
    this.flush()
  }

  private injectClarity(clarityId: string): void {
    if (clarityId === '') return
    const clarityWindow = window as Window & { clarity?: ClarityFn }
    if (!clarityWindow.clarity) {
      const clarityFn: ClarityFn = (...arguments_: Array<unknown>): void => {
        if (!clarityFn.q) {
          clarityFn.q = []
        }
        clarityFn.q.push(arguments_)
      }
      clarityWindow.clarity = clarityFn
    }
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.clarity.ms/tag/${clarityId}`
    document.head.appendChild(script)
  }

  private injectCounter(counterId: string, utcOffset: string): void {
    if (counterId === '') return
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://cdn.counter.dev/script.js'
    script.dataset.id = counterId
    script.dataset.utcoffset = utcOffset
    document.head.appendChild(script)
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
          // biome-ignore lint/style/useNamingConvention: GA4 API requires snake_case payload keys
          event_category: event.category,
          // biome-ignore lint/style/useNamingConvention: GA4 API requires snake_case payload keys
          ...(event.label ? { event_label: event.label } : {}),
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
