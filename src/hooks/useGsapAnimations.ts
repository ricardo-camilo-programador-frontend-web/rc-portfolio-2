import { useEffect, useRef, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Call ONCE at App level — never in individual components
export function useGsapInit() {
  useEffect(() => {
    gsap.defaults({
      ease: 'power3.out',
      duration: 1,
    })

    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
    })

    // React to motion preference changes at runtime
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        gsap.globalTimeline.getChildren().forEach((t) => t.kill())
        ScrollTrigger.getAll().forEach((st) => st.kill())
      }
    }
    mq.addEventListener('change', handleMotionChange)
    return () => mq.removeEventListener('change', handleMotionChange)
  }, [])
}

// Hero text reveal (clip-path + stagger from bottom)
export function useHeroReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = containerRef.current
    if (!el) return

    const badge = el.querySelector('.hero-badge')
    const desc = el.querySelector('.hero-desc')
    const cta = el.querySelector('.hero-cta')
    const scroll = el.querySelector('.hero-scroll')
    const bg = el.querySelector('.hero-bg')
    const titleLines = el.querySelectorAll('.hero-title-line')

    if (!badge || !desc || !cta || !scroll || !bg || titleLines.length === 0) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        badge,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 },
      )

      titleLines.forEach((line) => {
        tl.fromTo(
          line,
          { clipPath: 'inset(100% 0% 0% 0%)', y: 80 },
          { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.2, ease: 'power4.out' },
          '-=0.6',
        )
      })

      tl.fromTo(
        desc,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4',
      )

      tl.fromTo(
        cta,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        '-=0.3',
      )

      tl.fromTo(
        scroll,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.2',
      )

      // Parallax background — scroll-driven
      gsap.to(bg, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [containerRef])
}

// Section element reveal on scroll
export function useSectionReveal(elementRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = elementRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [elementRef])
}

// Stagger children reveal on scroll
export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  childSelector: string,
  stagger = 0.12,
) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = containerRef.current
    if (!el) return

    const children = el.querySelectorAll(childSelector)
    if (children.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [containerRef, childSelector, stagger])
}

// Parallax element on scroll
export function useParallax(elementRef: RefObject<HTMLElement | null>, speed = 20) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = elementRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [elementRef, speed])
}

// Counter animation on scroll
export function useCounter(
  elementRef: RefObject<HTMLDivElement | null>,
  endValue: number,
  suffix = '+',
) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = elementRef.current
    if (!el) return

    // Cache DOM query — runs inside ctx but query is done once
    const ctx = gsap.context(() => {
      const target = el.querySelector('.counter-value')
      if (!target) return

      const obj = { value: 0 }

      gsap.to(obj, {
        value: endValue,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        onUpdate: () => {
          target.textContent = `${Math.round(obj.value)}${suffix}`
        },
      })
    }, el)

    return () => ctx.revert()
  }, [elementRef, endValue, suffix])
}

// Scale reveal on scroll
export function useScaleReveal(elementRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = elementRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [elementRef])
}

// Timeline line draw on scroll
export function useLineDraw(lineRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = lineRef.current
    if (!el || !el.parentElement) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [lineRef])
}

// Magnetic cursor effect — manual cleanup (no gsap.context needed for non-ScrollTrigger hooks)
export function useMagnetic(elementRef: RefObject<HTMLElement | null>, strength = 0.3) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = elementRef.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.killTweensOf(el)
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
      gsap.killTweensOf(el)
      gsap.set(el, { x: 0, y: 0 })
    }
  }, [elementRef, strength])
}

// Footer reveal on scroll
export function useFooterReveal(elementRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const el = elementRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [elementRef])
}
