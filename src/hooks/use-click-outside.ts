import { useEffect, useRef } from 'react'

export function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null)
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (!(event.target instanceof Node)) return

      if (ref.current && !ref.current.contains(event.target)) {
        handlerRef.current()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return ref
}
