import type { FC } from 'react'
import { Code, Layers, Zap } from 'lucide-react'
import { memo, useCallback, useEffect, useRef } from 'react'
import { ServiceCard } from './ServiceCard'

interface ServicesProps {
  s1: { title: string; desc: string }
  s2: { title: string; desc: string }
  s3: { title: string; desc: string }
  isRtl: boolean
}

interface ServiceItem {
  num: string
  title: string
  desc: string
  icon: React.ReactNode
}

export const Services: FC<ServicesProps> = memo(({ s1, s2, s3, isRtl }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const services: Array<ServiceItem> = [
    { num: '01', title: s1.title, desc: s1.desc, icon: <Layers size={22} /> },
    { num: '02', title: s2.title, desc: s2.desc, icon: <Code size={22} /> },
    { num: '03', title: s3.title, desc: s3.desc, icon: <Zap size={22} /> },
  ]

  const handleIntersection = useCallback((entries: Array<IntersectionObserverEntry>) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('services-visible')
      }
    })
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    })

    const cards = section.querySelectorAll('.service-card')
    cards.forEach((card, index) => {
      card.setAttribute('data-delay', String(index * 150))
      observerRef.current?.observe(card)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleIntersection])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-40 px-6 scroll-mt-20"
      aria-label="Services section"
      style={{ contain: 'layout style paint' }}
    >
      <ul
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 list-none"
        dir={isRtl ? 'rtl' : 'ltr'}
        aria-label="List of services"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.num}
            num={service.num}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
            isRtl={isRtl}
            delay={index * 150}
          />
        ))}
      </ul>

      <style>{`
        .service-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          transition-delay: var(--delay, 0ms);
          will-change: opacity, transform;
        }

        .service-card.services-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
})

Services.displayName = 'Services'
