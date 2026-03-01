interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

class AnalyticsService {
  private queue: AnalyticsEvent[] = [];
  private flushTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly FLUSH_INTERVAL = 5000;
  private readonly MAX_QUEUE_SIZE = 10;
  private isLoaded = false;
  private isLoading = false;
  private hasInteracted = false;
  private loadTimeout: ReturnType<typeof setTimeout> | null = null;
  private abortController: AbortController | null = null;

  init(): void {
    this.abortController = new AbortController();
    this.setupInteractionListener();
    this.scheduleLoad();
  }

  private setupInteractionListener(): void {
    this.abortController = new AbortController();
    const markInteraction = (): void => {
      this.hasInteracted = true;
      if (!this.isLoaded && !this.isLoading) {
        this.loadAnalytics();
      }
      this.removeInteractionListeners();
    };

    ['click', 'scroll', 'keydown', 'touchstart'].forEach((event) => {
      if (this.abortController) {
        document.addEventListener(event, markInteraction, { once: true, passive: true, signal: this.abortController.signal });
      }
    });
  }

  private removeInteractionListeners(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  private scheduleLoad(): void {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(
        () => {
          if (!this.hasInteracted) {
            this.loadAnalytics();
          }
        },
        { timeout: 3000 }
      );
    } else {
      this.loadTimeout = setTimeout(() => this.loadAnalytics(), 2000);
    }
  }

  private loadAnalytics(): void {
    if (this.isLoaded || this.isLoading) return;
    this.isLoading = true;

    const counterScript = document.createElement('script');
    counterScript.src = 'https://cdn.counter.dev/script.js';
    counterScript.setAttribute('data-id', 'f30df6f3-776d-4154-959d-0210ac8a8325');
    counterScript.setAttribute('data-utcoffset', '-3');
    counterScript.defer = true;
    counterScript.onload = () => {
      this.isLoaded = true;
      this.flush();
    };
    document.head.appendChild(counterScript);

    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID';
    document.head.appendChild(gtmScript);
    gtmScript.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      const gtag = function gtag(...args: unknown[]) {
        ((window as any).dataLayer as unknown[]).push(args);
      };
      gtag('js', new Date());
      gtag('config', 'AW-CONVERSION_ID');
    };

    if (this.loadTimeout) {
      clearTimeout(this.loadTimeout);
      this.loadTimeout = null;
    }
  }

  track(event: AnalyticsEvent): void {
    this.queue.push(event);

    if (this.queue.length >= this.MAX_QUEUE_SIZE) {
      this.flush();
    } else if (!this.flushTimer) {
      this.flushTimer = setTimeout(() => this.flush(), this.FLUSH_INTERVAL);
    }
  }

  private flush(): void {
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
    }

    if (this.queue.length === 0) return;

    const events = [...this.queue];
    this.queue = [];

    if ('sendBeacon' in navigator) {
      events.forEach((event) => {
        const payload = new URLSearchParams({
          category: event.category,
          action: event.action,
          ...(event.label && { label: event.label }),
          ...(event.value && { value: String(event.value) }),
        });

        navigator.sendBeacon('https://t.counter.dev/track', payload.toString());
      });
    }
  }

  trackPageView(path: string, title?: string): void {
    this.track({
      category: 'page',
      action: 'view',
      label: path,
    });
  }

  trackClick(element: string, label?: string): void {
    this.track({
      category: 'interaction',
      action: 'click',
      label: label || element,
    });
  }

  trackNavigation(section: string): void {
    this.track({
      category: 'navigation',
      action: 'navigate',
      label: section,
    });
  }
}

export const analytics = new AnalyticsService();
