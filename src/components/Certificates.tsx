import type { FC } from 'react'
import { Award } from 'lucide-react'
import { memo } from 'react'

interface CertificatesProps {
  title: string
  subtitle: string
}

export const Certificates: FC<CertificatesProps> = memo(({ title, subtitle }) => {
  return (
    <section
      className="py-32 px-6 bg-[#0B0B0B]"
      aria-label="Certificates section"
      style={{ contain: 'layout style paint' }}
    >
      <div
        className="max-w-4xl mx-auto p-12 glass accent-border rounded-[3rem] text-center"
        style={{ contain: 'layout style' }}
      >
        <Award size={48} className="mx-auto mb-8 text-[#E5D5C0]" aria-hidden="true" />
        <h2 className="text-4xl md:text-6xl font-serif mb-6" style={{ willChange: 'transform' }}>
          {title} <span className="italic opacity-50">{subtitle}</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E5D5C0]/70">
              English Proficiency
            </span>
            <div className="text-2xl font-bold text-[#E5D5C0]">EF SET Certificate</div>
            <div className="text-[10px] uppercase tracking-widest text-[#E5D5C0]/80">
              C1 Advanced
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Certificates.displayName = 'Certificates'

export default Certificates
