import type { FC } from 'react'
import type { Language, LanguageCode } from '../constants/languages'
import { memo, useCallback } from 'react'
import { useClickOutside } from '../composables/useClickOutside'
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

        <div
          className="fixed top-0 left-0 right-0 h-1 bg-[#E5D5C0] origin-left z-[1000]"
          style={{ width: '100%' }}
          aria-hidden={true}
        />

        <nav
          className="fixed top-0 w-full z-[100] glass h-20 flex items-center px-6 md:px-12 border-b border-white/5"
          aria-label="Main navigation"
          style={{ contain: 'layout style paint' }}
        >
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <a
              href="#home"
              className="text-sm font-bold uppercase tracking-[0.4em] cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded"
              aria-label="Go to home page"
            >
              RICARDO
              <span className="opacity-40 italic group-hover:opacity-100 transition-opacity">
                .CAMILO
              </span>
            </a>

            <div
              className="hidden lg:flex gap-10 text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/80"
              role="menubar"
              aria-label="Primary navigation menu"
            >
              <a
                href="#work"
                className="hover:text-[#E5D5C0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded px-2 py-1"
                role="menuitem"
                aria-current={
                  typeof window !== 'undefined' && window.location.hash === '#work'
                    ? 'page'
                    : undefined
                }
              >
                {nav.work}
              </a>
              <a
                href="#about"
                className="hover:text-[#E5D5C0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded px-2 py-1"
                role="menuitem"
                aria-current={
                  typeof window !== 'undefined' && window.location.hash === '#about'
                    ? 'page'
                    : undefined
                }
              >
                {nav.about}
              </a>
              <a
                href="#services"
                className="hover:text-[#E5D5C0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded px-2 py-1"
                role="menuitem"
                aria-current={
                  typeof window !== 'undefined' && window.location.hash === '#services'
                    ? 'page'
                    : undefined
                }
              >
                {nav.services}
              </a>
              <a
                href="#career"
                className="hover:text-[#E5D5C0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded px-2 py-1"
                role="menuitem"
                aria-current={
                  typeof window !== 'undefined' && window.location.hash === '#career'
                    ? 'page'
                    : undefined
                }
              >
                {nav.career}
              </a>
            </div>

            <div className="flex items-center gap-6 relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-[10px] font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:border-[#E5D5C0]/40 transition-all flex items-center gap-3 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                aria-expanded={isLangOpen}
                aria-haspopup="listbox"
                aria-label="Select language"
              >
                <Globe size={14} className="text-[#E5D5C0]/80" />
                <span>{currentLang.native}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
                  aria-hidden={true}
                />
              </button>

              {isLangOpen && (
                <div
                  className="absolute top-full right-0 mt-4 w-64 glass rounded-3xl overflow-hidden accent-border z-[110] max-h-[70vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  role="listbox"
                  aria-label="Language selection"
                >
                  <div className="p-2 grid grid-cols-1">
                    {languages.map(l => (
                      <button
                        type="button"
                        key={l.code}
                        onClick={() => handleLangSelect(l.code)}
                        className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex justify-between items-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] ${
                          langCode === l.code ? 'text-[#E5D5C0] bg-white/5' : 'text-[#E5D5C0]/70'
                        }`}
                        role="option"
                        aria-selected={langCode === l.code}
                      >
                        <span className={l.rtl ? 'order-2' : 'order-1'}>{l.native}</span>
                        <span className={`text-[8px] opacity-30 ${l.rtl ? 'order-1' : 'order-2'}`}>
                          {l.code}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[9px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#E5D5C0] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                aria-label="Navigate to contact section"
              >
                {nav.contact}
              </a>
            </div>
          </div>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[150] w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] group transition-all hover:scale-110 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
          aria-label={whatsappLabel}
        >
          <MessageCircle size={32} aria-hidden={true} />
          <div className="absolute right-full mr-4 bg-[#0A0A0A] border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#E5D5C0] opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
            {whatsappLabel}
          </div>
        </a>
      </>
    )
  },
)

Navigation.displayName = 'Navigation'
