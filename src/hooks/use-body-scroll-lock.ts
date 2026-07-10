import { useEffect } from 'react'

/**
 * Locks body scrolling while a modal or mobile menu is open.
 * Restores the body overflow style when unlocked or unmounted.
 */
export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    document.body.style.overflow = isLocked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLocked])
}
