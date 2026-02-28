import { useState, useEffect } from 'react';
import { LanguageCode } from '../constants/languages';
import { TRANSLATIONS } from '../constants/translations';

export function useLanguage() {
  const [langCode, setLangCode] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang') as LanguageCode;
      if (stored && TRANSLATIONS[stored]) {
        return stored;
      }
      const browserLang = navigator.language.split('-')[0] as LanguageCode;
      if (TRANSLATIONS[browserLang]) {
        return browserLang;
      }
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('lang', langCode);
    const isRtl = ['ar', 'ur'].includes(langCode);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
    
    const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
    document.title = t.seo.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', t.seo.desc);
    }
  }, [langCode]);

  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  const isRtl = ['ar', 'ur'].includes(langCode);

  return { langCode, setLangCode, t, isRtl };
}
