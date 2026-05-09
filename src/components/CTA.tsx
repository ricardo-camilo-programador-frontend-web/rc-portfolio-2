import type { FC } from 'react'
import { MessageCircle } from 'lucide-react'
import { memo } from 'react'

interface CTAProps {
  title: string
  subtitle: string
  description: string
  button: string
  whatsapp: string
  whatsappUrl: string
  isRtl: boolean
}

export const CTA: FC<CTAProps> = memo(
  ({ title, subtitle, description, button, whatsapp, whatsappUrl, isRtl }) => {
    return (
      <section
        id="contact"
        className="py-40 px-6 bg-[#0A0A0A] scroll-mt-20"
        aria-label="Contact section"
        style={{ contain: 'layout style paint' }}
      >
        <div className="max-w-4xl mx-auto text-center" dir={isRtl ? 'rtl' : 'ltr'}>
          <h2
            className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8"
            style={{ willChange: 'transform' }}
          >
            {title} <br />
            <span className="italic opacity-50">{subtitle}</span>
          </h2>
          <p className="text-[#E5D5C0]/80 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
              className="px-12 py-5 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#E5D5C0] transition-all shadow-2xl flex items-center gap-3"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {button}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 rounded-full border border-white/10 text-[#E5D5C0] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all flex items-center gap-3 hover:scale-105 transform duration-300"
            >
              {whatsapp}
            </a>
          </div>
        </div>
      </section>
    )
  },
)

CTA.displayName = 'CTA'
