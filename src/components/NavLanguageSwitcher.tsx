import type { FC, KeyboardEvent } from 'react'
import type { Language, LanguageCode } from '../constants/languages'
import type { TranslationContent } from '../constants/translation-types'
import { memo, useCallback, useRef } from 'react'
import { ChevronDown, Globe } from '../icons'

interface NavLanguageSwitcherProps {
  currentLang: Language
  languages: Array<Language>
  langCode: string
  isLangOpen: boolean
  setIsLangOpen: (open: boolean) => void
  setLangCode: (code: LanguageCode) => void
  menuPosition: 'left' | 'right'
  a11y: TranslationContent['a11y']
  className?: string
}

export const NavLanguageSwitcher: FC<NavLanguageSwitcherProps> = memo(
  ({
    currentLang,
    languages,
    langCode,
    isLangOpen,
    setIsLangOpen,
    setLangCode,
    menuPosition,
    a11y,
    className = '',
  }) => {
    const langOptionsRef = useRef<Array<HTMLButtonElement | null>>([])
    const triggerRef = useRef<HTMLButtonElement>(null)

    const handleLangSelect = useCallback(
      (code: LanguageCode) => {
        setLangCode(code)
        setIsLangOpen(false)
      },
      [setLangCode, setIsLangOpen],
    )

    const handleLangKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (!isLangOpen) return
        const options = langOptionsRef.current.filter(option => option !== null)
        const activeElement = document.activeElement
        const currentIndex =
          activeElement instanceof HTMLButtonElement ? options.indexOf(activeElement) : -1

        switch (event.key) {
          case 'ArrowDown': {
            event.preventDefault()
            const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0
            options[nextIndex]?.focus()
            break
          }
          case 'ArrowUp': {
            event.preventDefault()
            const previousIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1
            options[previousIndex]?.focus()
            break
          }
          case 'Escape': {
            event.preventDefault()
            setIsLangOpen(false)
            triggerRef.current?.focus()
            break
          }
        }
      },
      [isLangOpen, setIsLangOpen],
    )

    const menuAlignmentClass = menuPosition === 'right' ? 'right-0' : 'left-0'

    return (
      <div className={className}>
        <button
          ref={triggerRef}
          onClick={() => setIsLangOpen(!isLangOpen)}
          onKeyDown={handleLangKeyDown}
          className="text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] rounded px-2 py-1"
          aria-label={a11y.selectLanguage}
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
            className={`absolute top-full ${menuAlignmentClass} mt-2 py-2 bg-[#0A0A0A] border border-white/10 rounded-sm shadow-xl z-50 min-w-[140px]`}
            role="listbox"
            tabIndex={-1}
            aria-label={a11y.languageSelection}
            onKeyDown={handleLangKeyDown}
          >
            {languages.map((language, index) => (
              <button
                key={language.code}
                ref={element => {
                  langOptionsRef.current[index] = element
                }}
                onClick={() => handleLangSelect(language.code)}
                className="w-full px-4 py-2 text-start hover:bg-white/5 transition-colors flex items-center justify-between group"
                role="option"
                aria-selected={langCode === language.code}
                type="button"
              >
                <span className={language.rtl ? 'order-2' : 'order-1'}>{language.native}</span>
                <span
                  className={`text-[8px] opacity-30 ${language.rtl ? 'order-1' : 'order-2'} ${langCode === language.code ? 'text-[#E5D5C0]' : 'hidden'}`}
                >
                  ✓
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  },
)

NavLanguageSwitcher.displayName = 'NavLanguageSwitcher'
