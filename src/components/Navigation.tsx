import type { FC } from 'react'
import type { Language, LanguageCode } from '../constants/languages'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/use-reveal'
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
  menuLabel: string
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
    menuLabel,
  }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const langDropdownRef = useClickOutside<HTMLDivElement>(() => setIsLangOpen(false))
    const logoRef = useRef<HTMLAnchorElement>(null)
    const whatsappBtnRef = useRef<HTMLAnchorElement>(null)
    const navRef = useRef<HTMLElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const langOptionsRef = useRef<Array<HTMLButtonElement | null>>([])

    useReveal(logoRef, 'is-visible', 0.2)
    useReveal(whatsappBtnRef, 'is-visible', 0.3)

    // Close mobile menu on resize to desktop
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) setIsMobileOpen(false)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
      document.body.style.overflow = isMobileOpen ? 'hidden' : ''
      return () => {
        document.body.style.overflow = ''
      }
    }, [isMobileOpen])

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

    // Focus trap for language dropdown — ArrowUp/ArrowDown/Escape
    const handleLangKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (!isLangOpen) return
        const options = langOptionsRef.current.filter(Boolean) as Array<HTMLButtonElement>
        const currentIndex = options.indexOf(document.activeElement as HTMLButtonElement)

        switch (event.key) {
          case 'ArrowDown': {
            event.preventDefault()
            const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0
            options[nextIndex].focus()
            break
          }
          case 'ArrowUp': {
            event.preventDefault()
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1
            options[prevIndex].focus()
            break
          }
          case 'Escape': {
            event.preventDefault()
            setIsLangOpen(false)
            break
          }
        }
      },
      [isLangOpen, setIsLangOpen],
    )

    const handleMobileNavClick = useCallback(() => {
      setIsMobileOpen(false)
    }, [])

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

            {/* Desktop navigation */}
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
                  onKeyDown={handleLangKeyDown}
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
                    onKeyDown={handleLangKeyDown}
                  >
                    {languages.map((l, index) => (
                      <button
                        key={l.code}
                        ref={el => {
                          langOptionsRef.current[index] = el
                        }}
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

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="md:hidden text-[#E5D5C0] hover:text-[#E5D5C0]/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] rounded p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={menuLabel}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {isMobileOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile slide-down menu */}
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={`md:hidden fixed inset-x-0 top-[57px] z-30 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5 transition-all duration-300 ${isMobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            aria-hidden={!isMobileOpen}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <a
                href="#work"
                onClick={handleMobileNavClick}
                className="text-sm font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.work}
              </a>
              <a
                href="#about"
                onClick={handleMobileNavClick}
                className="text-sm font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.about}
              </a>
              <a
                href="#services"
                onClick={handleMobileNavClick}
                className="text-sm font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.services}
              </a>
              <a
                href="#career"
                onClick={handleMobileNavClick}
                className="text-sm font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.career}
              </a>
              <a
                href="#contact"
                onClick={handleMobileNavClick}
                className="text-sm font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
              >
                {nav.contact}
              </a>

              <div className="relative pt-4 border-t border-white/5">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] rounded px-2 py-1"
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
                    className="absolute top-full left-0 mt-2 py-2 bg-[#0A0A0A] border border-white/10 rounded-sm shadow-xl z-50 min-w-[140px]"
                    role="listbox"
                    aria-label="Language selection"
                    onKeyDown={handleLangKeyDown}
                  >
                    {languages.map((l, index) => (
                      <button
                        key={l.code}
                        ref={el => {
                          langOptionsRef.current[index] = el
                        }}
                        onClick={() => handleLangSelect(l.code)}
                        className="w-full px-4 py-2 text-start hover:bg-white/5 transition-colors flex items-center justify-between"
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
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[10px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#E5D5C0] transition-all"
                aria-label={whatsappLabel}
              >
                <MessageCircle size={14} aria-hidden={true} />
                <span>{whatsappLabel}</span>
              </a>
            </div>
          </div>
        </nav>
      </>
    )
  },
)

Navigation.displayName = 'Navigation'
