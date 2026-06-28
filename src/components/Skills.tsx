import type { FC } from 'react'
import { memo, useRef } from 'react'
import { useReveal } from '../hooks/use-reveal'

interface SkillsProps {
  title: string
  subtitle: string
  isRtl: boolean
}

interface SkillBadge {
  name: string
  category: 'frontend' | 'framework' | 'tooling' | 'architecture'
}

const SKILLS: Array<SkillBadge> = [
  { name: 'Vue 3', category: 'framework' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'framework' },
  { name: 'Nuxt', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Pinia', category: 'tooling' },
  { name: 'PWA', category: 'architecture' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Angular', category: 'framework' },
  { name: 'Node.js', category: 'tooling' },
  { name: 'Vite', category: 'tooling' },
  { name: 'SEO', category: 'architecture' },
  { name: 'Performance', category: 'architecture' },
  { name: 'Git', category: 'tooling' },
  { name: 'Figma', category: 'tooling' },
  { name: 'i18n', category: 'architecture' },
]

const CATEGORY_STYLES: Record<SkillBadge['category'], string> = {
  framework: 'border-[#E5D5C0]/30 text-[#E5D5C0]',
  frontend: 'border-[#E5D5C0]/20 text-[#E5D5C0]/90',
  tooling: 'border-white/15 text-[#E5D5C0]/80',
  architecture: 'border-[#E5D5C0]/25 text-[#E5D5C0]/85',
}

export const Skills: FC<SkillsProps> = memo(({ title, subtitle, isRtl }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLUListElement>(null)

  useReveal(sectionRef)
  useReveal(gridRef)

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal py-40 px-6 bg-[#0A0A0A] scroll-mt-20"
      aria-label="Technical skills section"
    >
      <div className="max-w-7xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
        <h2 className="text-5xl md:text-7xl font-serif mb-20 text-center">
          {title} <span className="italic opacity-50">{subtitle}</span>
        </h2>

        <ul
          ref={gridRef}
          className="reveal flex flex-wrap justify-center gap-4 max-w-4xl mx-auto list-none p-0 m-0"
          aria-label="Technical skills"
        >
          {SKILLS.map(skill => (
            <li
              key={skill.name}
              className={`px-6 py-3 rounded-full border ${CATEGORY_STYLES[skill.category]} text-[10px] font-bold uppercase tracking-[0.15em] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#E5D5C0]/50 transition-all duration-300 hover:scale-105`}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})

Skills.displayName = 'Skills'
