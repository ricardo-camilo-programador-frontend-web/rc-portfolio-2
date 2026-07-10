import type { FC } from 'react'
import type { Language, LanguageCode } from '../constants/languages'
import type { TranslationContent } from '../constants/translation-types'
import { memo, useEffect, useRef, useState } from 'react'
import { useBodyScrollLock } from '../hooks/use-body-scroll-lock'
import { useClickOutside } from '../hooks/use-click-outside'
import { useReveal } from '../hooks/use-reveal'
import { useScrollHideNav } from '../hooks/use-scroll-hide-nav'
import { MessageCircle } from '../icons'
import { NavLanguageSwitcher } from './NavLanguageSwitcher'
import { NavLinks } from './NavLinks'
import { NavMobileMenu } from './NavMobileMenu'

interface NavigationProps {
  nav: {
    work: string
    about: string
    services: string
    career: string
    contact: string
  }
  a11y: TranslationContent['a11y']
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

const DESKTOP_LINK_CLASS =
  'text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors'

export const Navigation: FC<NavigationProps> = memo(
  ({
    nav,
    a11y,
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

    useReveal(logoRef, 'is-visible', 0.2)
    useReveal(whatsappBtnRef, 'is-visible', 0.3)
    useBodyScrollLock(isMobileOpen)
    useScrollHideNav(navRef)

    useEffect(() => {
      const handleResize = (): void => {
        if (window.innerWidth >= 768) setIsMobileOpen(false)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleMobileNavClick = (): void => {
      setIsMobileOpen(false)
    }

    return (
      <>
        <a href="#main-content" className="skip-link z-[9999]" aria-label={a11y.skipToContent}>
          {a11y.skipToContent}
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
              aria-label="RICARDO.CAMILO — Home"
            >
              RICARDO.CAMILO
            </a>

            <div className="hidden md:flex items-center gap-8">
              <NavLinks nav={nav} className={DESKTOP_LINK_CLASS} />

              <div className="flex items-center gap-6 relative" ref={langDropdownRef}>
                <NavLanguageSwitcher
                  currentLang={currentLang}
                  languages={languages}
                  langCode={langCode}
                  setLangCode={setLangCode}
                  isLangOpen={isLangOpen}
                  setIsLangOpen={setIsLangOpen}
                  menuPosition="right"
                  a11y={a11y}
                />
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

          <NavMobileMenu
            nav={nav}
            currentLang={currentLang}
            languages={languages}
            langCode={langCode}
            setLangCode={setLangCode}
            isLangOpen={isLangOpen}
            setIsLangOpen={setIsLangOpen}
            isMobileOpen={isMobileOpen}
            onNavigate={handleMobileNavClick}
            whatsappLabel={whatsappLabel}
            whatsappUrl={whatsappUrl}
            a11y={a11y}
          />
        </nav>
      </>
    )
  },
)

Navigation.displayName = 'Navigation'
