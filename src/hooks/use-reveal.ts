import { type RefObject, useEffect } from 'react'

/**
 * Lightweight IntersectionObserver hook — zero dependencies.
 * Adds 'is-visible' CSS class when element enters viewport.
 * Content is ALWAYS visible if JS fails (no opacity:0 by default).
 */
export function useReveal(
  elementRef: RefObject<HTMLElement | null>,
  className = 'is-visible',
  threshold = 0.15,
): void {
  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [elementRef, className, threshold])
}

/**
 * Stagger children — observes parent, adds class to each child with delay.
 */
export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  childSelector = '.reveal-child',
  baseDelay = 80,
  threshold = 0.1,
): void {
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const timers: Array<ReturnType<typeof setTimeout>> = []

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll(childSelector)
          children.forEach((child, i) => {
            const timer = setTimeout(() => {
              child.classList.add('is-visible')
            }, i * baseDelay)
            timers.push(timer)
          })
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      for (const timer of timers) clearTimeout(timer)
    }
  }, [containerRef, childSelector, baseDelay, threshold])
}
