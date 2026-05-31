import { memo, type FC, type ReactNode, useRef, useMemo } from 'react'
import {
  useSectionReveal,
  useParallax,
  useCounter,
  useScaleReveal,
} from '../hooks/useGsapAnimations'
import { Github, Instagram, Linkedin, ShieldCheck } from 'lucide-react'
import { env } from '../constants/env'

interface AboutProps {
  quote: string
  bio: string
  details: string
  stats: {
    exp: string
    projects: string
    eng: string
  }
  userPhoto: string
  isRtl: boolean
}

export const About: FC<AboutProps> = memo(({ quote, bio, details, stats, userPhoto, isRtl }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const stat1Ref = useRef<HTMLDivElement>(null)
  const stat2Ref = useRef<HTMLDivElement>(null)
  const stat3Ref = useRef<HTMLDivElement>(null)
  const glassRef = useRef<HTMLDivElement>(null)

  // Portfolio stats are fixed values — hardcode to avoid regex parsing issues
  // with non-Latin numerals (Bengali ০-৯, Devanagari ०-९) and C1 text parsing
  const counterValues = useMemo(
    () => ({ exp: 6, projects: 20, eng: 95 }),
    [],
  )

  useSectionReveal(sectionRef)
  useParallax(photoRef, 40)
  useScaleReveal(glassRef)
  useCounter(stat1Ref, counterValues.exp, '+')
  useCounter(stat2Ref, counterValues.projects, '+')
  useCounter(stat3Ref, counterValues.eng, '%')

  const quoteParts = quote.split(' ')
  const firstWord = quoteParts[0]
  const rest = quoteParts.slice(1).join(' ')

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-40 px-6 bg-[#0E0E0E] scroll-mt-20 overflow-hidden border-y border-white/5"
      aria-label="About section"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-24 lg:grid-cols-2">
          <div ref={photoRef} className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm accent-border relative z-10 shadow-2xl bg-[#1A1A1A]">
              <img
                src={userPhoto}
                alt="Ricardo Camilo Portrait"
                className="w-full h-full object-cover grayscale-[20%] transition-all duration-1000 hover:grayscale-0"
                loading="lazy"
                decoding="async"
                width={400}
                height={500}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#E5D5C0]/20 -z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-[#E5D5C0]/20 -z-0" />
          </div>

          <div className="space-y-16" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                {firstWord} <span className="italic font-light opacity-60">{rest}</span>
              </h2>
              <p className="text-[#E5D5C0]/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                {bio}
              </p>
              <div ref={glassRef} className="flex items-center gap-3 py-4 border-y border-white/5">
                <ShieldCheck size={18} className="text-[#E5D5C0]/70" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/70">
                  {details}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4">
              <StatItem ref={stat1Ref} value={stats.exp} label="Experience" />
              <StatItem ref={stat2Ref} value={stats.projects} label="Handcrafted" />
              <StatItem ref={stat3Ref} value={stats.eng} label="Proficiency" />
            </div>

            <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center">
              <div className="flex gap-6">
                <SocialLink icon={<Linkedin size={22} />} href={env.linkedinUrl} label="LinkedIn" />
                <SocialLink icon={<Github size={22} />} href={env.githubUrl} label="GitHub" />
                <SocialLink icon={<Instagram size={22} />} href={env.instagramUrl} label="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

About.displayName = 'About'

const StatItem = memo(function StatItem({
  value,
  label,
  ref,
}: { value: string; label: string; ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className="text-center">
      <div className="counter-value text-3xl md:text-4xl font-serif font-bold text-[#E5D5C0] mb-2" role="status" aria-live="polite">{value}</div>
      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/70">{label}</div>
    </div>
  )
})
StatItem.displayName = 'StatItem'

interface SocialLinkProps {
  icon: ReactNode
  href: string
  label: string
}

const SocialLink: FC<SocialLinkProps> = memo(({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#E5D5C0]/70 hover:text-[#E5D5C0] transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
))

SocialLink.displayName = 'SocialLink'
