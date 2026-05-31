export type LanguageCode =
  | 'en'
  | 'zh'
  | 'hi'
  | 'es'
  | 'fr'
  | 'ar'
  | 'bn'
  | 'pt'
  | 'ru'
  | 'ur'
  | 'id'
  | 'de'
  | 'ja'
  | 'mr'
  | 'te'
  | 'tr'
  | 'ta'
  | 'vi'
  | 'ko'
  | 'it'

export interface Language {
  code: LanguageCode
  label: string
  native: string
  rtl?: boolean
}

export const LANGUAGES: Array<Language> = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'zh', label: 'Chinese', native: '中文' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'es', label: 'Spanish', native: 'Español' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'ar', label: 'Arabic', native: 'العربية', rtl: true },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'pt', label: 'Portuguese', native: 'Português' },
  { code: 'ru', label: 'Russian', native: 'Русский' },
  { code: 'ur', label: 'Urdu', native: 'اردو', rtl: true },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'de', label: 'German', native: 'Deutsch' },
  { code: 'ja', label: 'Japanese', native: '日本語' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'ko', label: 'Korean', native: '한국어' },
  { code: 'it', label: 'Italian', native: 'Italiano' },
]
