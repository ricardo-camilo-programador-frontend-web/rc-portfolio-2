import type { TranslationContent } from './translation-types'
import { LANGUAGES, type LanguageCode } from './languages'

const VALID_LANGUAGE_CODES = new Set<string>(LANGUAGES.map(language => language.code))

const isLanguageCode = (value: string): value is LanguageCode => VALID_LANGUAGE_CODES.has(value)

const getPreferredLanguage = (): LanguageCode => {
  const storedLanguage = localStorage.getItem('lang')
  if (storedLanguage && isLanguageCode(storedLanguage)) {
    return storedLanguage
  }

  const browserLanguage = navigator.language.split('-')[0]
  if (isLanguageCode(browserLanguage)) {
    return browserLanguage
  }

  return 'pt'
}

const loadTranslation = (code: LanguageCode): Promise<TranslationContent> =>
  import(`./translations/${code}.ts`).then(module => module.default)

export const loadErrorBoundaryTranslation = async (): Promise<{ title: string; retry: string }> => {
  const language = getPreferredLanguage()
  try {
    const translation = await loadTranslation(language)
    return translation.errorBoundary
  } catch {
    const fallbackTranslation = await loadTranslation('pt')
    return fallbackTranslation.errorBoundary
  }
}
