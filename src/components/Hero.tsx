import type { FC } from 'react'
import { memo, useRef } from 'react'
import { useHeroReveal } from '../hooks/useGsapAnimations'
import { MessageCircle } from '../icons'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  cta: string
  badge: string
  userPhoto: string
  isRtl: boolean
}

const generateHeroSrcSet = (baseUrl: string): string => {
  if (baseUrl.startsWith('https://raw.githubusercontent.com')) {
    const base = `${baseUrl}?format=webp`
    return `${base} 640w, ${base} 750w, ${base} 828w, ${base} 1080w, ${base} 1200w, ${base} 1920w`
  }
  return `${baseUrl} 640w, ${baseUrl} 1200w, ${baseUrl} 1920w`
}

export const Hero: FC<HeroProps> = memo(
  ({ title, subtitle, description, cta, badge, userPhoto, isRtl }) => {
    const sectionRef = useRef<HTMLElement>(null)

    useHeroReveal(sectionRef)

    const optimizedImage = userPhoto.startsWith('https://raw.githubusercontent.com')
      ? `${userPhoto}?format=webp`
      : userPhoto
    const srcSet = generateHeroSrcSet(userPhoto)

    return (
      <section
        id="home"
        ref={sectionRef}
        className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center relative overflow-hidden"
        aria-label="Hero section"
      >
        <div className="hero-bg absolute inset-0 z-0">
          <img
            src={optimizedImage}
            srcSet={srcSet}
            sizes="(max-width: 768px) 100vw, 1920px"
            alt=""
            className="w-full h-full object-cover grayscale opacity-[0.05] scale-110 blur-[2px]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10">
          <div className="hero-badge mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#E5D5C0]/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/80">
              {badge}
            </span>
          </div>

          <h1 className="text-6xl md:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-10">
            <span className="hero-title-line text-gradient block overflow-hidden">{title}</span>
            <span className="hero-title-line italic font-light opacity-60 text-[#E5D5C0] block overflow-hidden">
              {subtitle}
            </span>
          </h1>

          <p
            className="hero-desc max-w-xl mx-auto text-[#E5D5C0]/80 text-xs md:text-sm uppercase tracking-[0.2em] font-medium leading-relaxed mb-16 px-4"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {description}
          </p>

          <div className="hero-cta flex flex-col items-center gap-8">
            <a
              href="#contact"
              className="px-12 py-5 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#E5D5C0] transition-all mb-8 shadow-2xl flex items-center gap-3"
            >
              <MessageCircle size={18} aria-hidden={true} /> {cta}
            </a>
            <button
              type="button"
              onClick={() => {
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hero-scroll w-px h-24 bg-transparent block cursor-pointer animate-bounce-slow border-0 p-0"
              aria-label="Scroll to services"
            />
          </div>
        </div>
      </section>
    )
  },
)

Hero.displayName = 'Hero'
