import type { FC } from 'react'
import { Code, Layers, Zap } from 'lucide-react'
import { memo, useRef } from 'react'
import { useSectionReveal, useStaggerReveal } from '../hooks/use-gsap-animations'
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
  const gridRef = useRef<HTMLUListElement>(null)

  useSectionReveal(sectionRef)
  useStaggerReveal(gridRef, '.service-card', 0.15)

  const services: Array<ServiceItem> = [
    { num: '01', title: s1.title, desc: s1.desc, icon: <Layers size={22} /> },
    { num: '02', title: s2.title, desc: s2.desc, icon: <Code size={22} /> },
    { num: '03', title: s3.title, desc: s3.desc, icon: <Zap size={22} /> },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-40 px-6 scroll-mt-20"
      aria-label="Services section"
    >
      <ul
        ref={gridRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 list-none"
        dir={isRtl ? 'rtl' : 'ltr'}
        aria-label="List of services"
      >
        {services.map(service => (
          <ServiceCard
            key={service.num}
            num={service.num}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
            isRtl={isRtl}
          />
        ))}
      </ul>
    </section>
  )
})

Services.displayName = 'Services'
