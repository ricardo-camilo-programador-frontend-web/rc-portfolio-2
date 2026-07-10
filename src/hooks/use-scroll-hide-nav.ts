import type * as React from 'react'
import { useEffect } from 'react'

/**
 * Hides the navigation element while scrolling down past a threshold.
 * Uses requestAnimationFrame to throttle scroll work.
 */
export function useScrollHideNav(
  navRef: React.RefObject<HTMLElement | null>,
  threshold = 100,
): void {
  useEffect(() => {
    const navElement = navRef.current
    if (!navElement) return

    let lastScrollY = 0
    let ticking = false

    const handleScroll = (): void => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
          navElement.classList.add('nav-hidden')
        } else {
          navElement.classList.remove('nav-hidden')
        }
        lastScrollY = currentScrollY
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navRef, threshold])
}
