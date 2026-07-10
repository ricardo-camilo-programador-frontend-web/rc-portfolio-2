import type { FC } from 'react'
import type { Language, LanguageCode } from '../constants/languages'
import type { NavCopy, TranslationContent } from '../constants/translation-types'
import { memo } from 'react'
import { MessageCircle } from '../icons'
import { NavLanguageSwitcher } from './NavLanguageSwitcher'
import { NavLinks } from './NavLinks'

interface NavMobileMenuProps {
  nav: NavCopy
  currentLang: Language
  languages: Array<Language>
  langCode: string
  setLangCode: (code: LanguageCode) => void
  isLangOpen: boolean
  setIsLangOpen: (open: boolean) => void
  isMobileOpen: boolean
  onNavigate: () => void
  whatsappLabel: string
  whatsappUrl: string
  a11y: TranslationContent['a11y']
}

const MOBILE_LINK_CLASS =
  'text-sm font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors'

export const NavMobileMenu: FC<NavMobileMenuProps> = memo(
  ({
    nav,
    currentLang,
    languages,
    langCode,
    setLangCode,
    isLangOpen,
    setIsLangOpen,
    isMobileOpen,
    onNavigate,
    whatsappLabel,
    whatsappUrl,
    a11y,
  }) => (
    <div
      id="mobile-menu"
      className={`md:hidden fixed inset-x-0 top-[57px] z-30 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5 transition-all duration-300 ${isMobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      aria-hidden={!isMobileOpen}
      inert={!isMobileOpen}
    >
      <div className="px-6 py-8 flex flex-col gap-6">
        <NavLinks nav={nav} className={MOBILE_LINK_CLASS} onNavigate={onNavigate} />

        <NavLanguageSwitcher
          currentLang={currentLang}
          languages={languages}
          langCode={langCode}
          setLangCode={setLangCode}
          isLangOpen={isLangOpen}
          setIsLangOpen={setIsLangOpen}
          menuPosition="left"
          a11y={a11y}
          className="relative pt-4 border-t border-white/5"
        />

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
  ),
)

NavMobileMenu.displayName = 'NavMobileMenu'
