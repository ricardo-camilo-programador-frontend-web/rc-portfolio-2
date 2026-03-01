import { useEffect, useRef, useState } from 'react'

export function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handler])

  return ref
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) {
        setProgress(0)
        return
      }
      const currentProgress = Math.max(0, Math.min(1, window.scrollY / totalHeight))
      setProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export function useIdleCallback(callback: () => void, delay = 0) {
  useEffect(() => {
    const id = requestIdleCallback(() => {
      setTimeout(callback, delay)
    })
    return () => cancelIdleCallback(id)
  }, [callback, delay])
}
