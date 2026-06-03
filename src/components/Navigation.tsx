import type { FC } from 'react'
import type { Language, LanguageCode } from '../constants/languages'
import { memo, useCallback, useEffect, useRef } from 'react'
import { useReveal, useMagnetic } from '../hooks/useReveal'
import { ChevronDown, Globe, MessageCircle } from '../icons'

interface NavigationProps {
  nav: {
    work: string
    about: string
    services: string
    career: string
    contact: string
  }
  currentLang: Language
  languages: Array<Language>
  langCode: string
  setLangCode: (code: LanguageCode) => void
  isLangOpen: boolean
  setIsLangOpen: (open: boolean) => void
  whatsappLabel: string
  whatsappUrl: string
}

function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null)
  const handlerRef = useRef(handler)
  handlerRef.current = handler

  useEffect(() => {
    if (!ref.current) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handlerRef.current()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return ref
}

export const Navigation: FC<NavigationProps> = memo(
  ({
    nav,
    currentLang,
    languages,
    langCode,
    setLangCode,
    isLangOpen,
    setIsLangOpen,
    whatsappLabel,
    whatsappUrl,
  }) => {
    const langDropdownRef = useClickOutside<HTMLDivElement>(() => setIsLangOpen(false))
    const logoRef = useRef<HTMLAnchorElement>(null)
    const whatsappBtnRef = useRef<HTMLAnchorElement>(null)
    const navRef = useRef<HTMLElement>(null)

    useMagnetic(logoRef, 0.2)
    useMagnetic(whatsappBtnRef, 0.3)

    // Scroll hide/show nav (rAF throttled)
    useEffect(() => {
      const nav = navRef.current
      if (!nav) return

      let lastScrollY = 0
      let ticking = false

      const handleScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.classList.add('nav-hidden')
          } else {
            nav.classList.remove('nav-hidden')
          }
          lastScrollY = currentScrollY
          ticking = false
        })
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLangSelect = useCallback(
      (code: LanguageCode) => {
        setLangCode(code)
        setIsLangOpen(false)
      },
      [setLangCode, setIsLangOpen],
    )

    return (
      <>
        <a href="#main-content" className="skip-link z-[9999]" aria-label="Skip to main content">
          Skip to main content
        </a>

        <nav
          ref={navRef}
          className="fixed top-0 inset-x-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a
              ref={logoRef}
              href="/"
              className="text-2xl font-serif font-bold text-[#E5D5C0] hover:text-[#E5D5C0]/80 transition-colors"
              aria-label="Ricardo Camilo home"
            >
              RICARDO.CAMILO
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#work"
                className="text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.work}
              </a>
              <a
                href="#about"
                className="text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.about}
              </a>
              <a
                href="#services"
                className="text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.services}
              </a>
              <a
                href="#career"
                className="text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.career}
              </a>
              <a
                href="#contact"
                className="text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.contact}
              </a>

              <div className="flex items-center gap-6 relative" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded px-2 py-1"
                  aria-label="Select language"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isLangOpen}
                >
                  <Globe size={14} className="text-[#E5D5C0]/80" aria-hidden={true} />
                  <span>{currentLang.native}</span>
                  <ChevronDown
                    size={14}
                    className={`text-[#E5D5C0]/80 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                    aria-hidden={true}
                  />
                </button>

                {isLangOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 py-2 bg-[#0A0A0A] border border-white/10 rounded-sm shadow-xl z-50 min-w-[140px]"
                    role="listbox"
                    aria-label="Language selection"
                  >
                    {languages.map(l => (
                      <button
                        key={l.code}
                        onClick={() => handleLangSelect(l.code)}
                        className="w-full px-4 py-2 text-start hover:bg-white/5 transition-colors flex items-center justify-between group"
                        role="option"
                        aria-selected={langCode === l.code}
                        type="button"
                      >
                        <span className={l.rtl ? 'order-2' : 'order-1'}>{l.native}</span>
                        <span
                          className={`text-[8px] opacity-30 ${l.rtl ? 'order-1' : 'order-2'} ${langCode === l.code ? 'text-[#E5D5C0]' : 'hidden'}`}
                        >
                          ✓
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                ref={whatsappBtnRef}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[9px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#E5D5C0] transition-all flex items-center gap-2"
                aria-label={whatsappLabel}
              >
                <MessageCircle size={14} aria-hidden={true} />
                <span className="hidden lg:inline">{whatsappLabel}</span>
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  },
)

Navigation.displayName = 'Navigation'
