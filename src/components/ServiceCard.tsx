import type { FC } from 'react'
import { memo, useEffect, useRef } from 'react'

interface ServiceCardProps {
  num: string
  title: string
  desc: string
  icon: React.ReactNode
  isRtl: boolean
  delay: number
}

export const ServiceCard: FC<ServiceCardProps> = memo(
  ({ num, title, desc, icon, isRtl, delay }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--delay', `${delay}ms`)
      }
    }, [delay])

    return (
      <div
        ref={cardRef}
        className="service-card group p-8 glass rounded-sm accent-border hover:border-[#E5D5C0]/30 transition-all duration-300 hover:-translate-y-2"
        dir={isRtl ? 'rtl' : 'ltr'}
        style={{ contain: 'layout style paint', willChange: 'opacity, transform' }}
      >
        <div className="flex items-start justify-between mb-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/50">
            {num}
          </span>
          <div className="text-[#E5D5C0]/80 group-hover:text-[#E5D5C0] transition-colors">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#E5D5C0] mb-4">{title}</h3>
        <p className="text-[#E5D5C0]/70 text-sm leading-relaxed">{desc}</p>
      </div>
    )
  },
)

ServiceCard.displayName = 'ServiceCard'
