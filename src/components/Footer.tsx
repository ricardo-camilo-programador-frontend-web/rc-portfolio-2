import type { FC } from 'react'
import { ChevronUp, Github } from 'lucide-react'
import { memo, useCallback, useRef } from 'react'
import { useFooterReveal } from '../hooks/useGsapAnimations'
import { env } from '../constants/env'

export const Footer: FC = memo(() => {
  const footerRef = useRef<HTMLElement>(null)

  useFooterReveal(footerRef)

  const currentYear = new Date().getFullYear()

  const scrollToTop = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer
      ref={footerRef}
      className="py-12 px-6 border-t border-white/5 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/80">
          © {currentYear} Ricardo Camilo. All rights reserved.
        </div>

        <ul className="flex items-center gap-6" aria-label="Footer links">
          <li>
            <a
              href={env.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded px-2 py-1"
              aria-label="Visit GitHub profile"
            >
              <Github size={16} aria-hidden="true" />
              <span className="text-[9px] font-bold uppercase tracking-widest">GitHub</span>
            </a>
          </li>

          <li>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[#E5D5C0]/20 flex items-center justify-center text-[#E5D5C0]/80 hover:text-[#E5D5C0] hover:border-[#E5D5C0] transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              aria-label="Scroll to top of page"
            >
              <ChevronUp size={18} aria-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'
