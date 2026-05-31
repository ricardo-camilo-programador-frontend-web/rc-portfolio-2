import type { FC } from 'react'
import { Award } from 'lucide-react'
import { memo, useRef } from 'react'
import { useScaleReveal, useSectionReveal } from '../hooks/use-gsap-animations'

interface CertificatesProps {
  title: string
  subtitle: string
  proficiency: string
  certificate: string
  level: string
}

export const Certificates: FC<CertificatesProps> = memo(({ title, subtitle, proficiency, certificate, level }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const glassRef = useRef<HTMLDivElement>(null)

  useSectionReveal(sectionRef)
  useScaleReveal(glassRef)

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[#0B0B0B]" aria-label="Certificates section">
      <div
        ref={glassRef}
        className="max-w-4xl mx-auto p-12 glass accent-border rounded-[3rem] text-center"
      >
        <div className="mb-8">
          <Award size={48} className="mx-auto text-[#E5D5C0]" aria-hidden="true" />
        </div>
        <h2 className="text-4xl md:text-6xl font-serif mb-6">
          {title} <span className="italic opacity-50">{subtitle}</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E5D5C0]/70">
              {proficiency}
            </span>
            <div className="text-2xl font-bold text-[#E5D5C0]">{certificate}</div>
            <div className="text-[10px] uppercase tracking-widest text-[#E5D5C0]/80">
              {level}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Certificates.displayName = 'Certificates'
