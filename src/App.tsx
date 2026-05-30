import type { FC } from 'react'
import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { Certificates } from './components/Certificates'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { useGsapInit } from './hooks/useGsapAnimations'
import { PROJECTS, TIMELINE, USER_PHOTO, WHATSAPP_URL } from './constants/data'
import { LANGUAGES, type LanguageCode } from './constants/languages'
import { TRANSLATIONS } from './constants/translations'
import { analytics } from './services/analytics'

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })))
const Career = lazy(() => import('./components/Career').then(m => ({ default: m.Career })))
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })))

interface LoadingFallbackProps {
  height?: string
}

const LoadingFallback: FC<LoadingFallbackProps> = ({ height = 'h-96' }) => (
  <div className={`${height} flex items-center justify-center`}>
    <div className="w-8 h-8 border-2 border-[#E5D5C0]/30 border-t-[#E5D5C0] rounded-full animate-spin" />
  </div>
)

const App: FC = () => {
  useGsapInit()

  const [langCode, setLangCode] = useState<LanguageCode>('pt')
  const [isLangOpen, setIsLangOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as LanguageCode | null
    if (stored && TRANSLATIONS[stored]) {
      setLangCode(stored)
    } else {
      const browserLang = navigator.language.split('-')[0] as LanguageCode
      if (TRANSLATIONS[browserLang]) {
        setLangCode(browserLang)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', langCode)
    const isRtl = ['ar', 'ur'].includes(langCode)
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
    document.documentElement.lang = langCode

    const t = TRANSLATIONS[langCode] || TRANSLATIONS.en
    document.title = t.seo.title
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag) {
      descTag.setAttribute('content', t.seo.desc)
    }

    analytics.trackPageView(window.location.hash || '/')
  }, [langCode])

  useEffect(() => {
    const handleHashChange = (): void => {
      analytics.trackNavigation(window.location.hash.replace('#', '') || 'home')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleLangChange = useCallback((code: LanguageCode) => {
    setLangCode(code)
  }, [])

  const t = useMemo(() => TRANSLATIONS[langCode] || TRANSLATIONS.en, [langCode])
  const currentLang = useMemo(
    () => LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0],
    [langCode],
  )
  const isRtl = useMemo(() => ['ar', 'ur'].includes(langCode), [langCode])

  return (
    <div
        className={`min-h-screen bg-[#0A0A0A] selection:bg-[#E5D5C0] selection:text-[#0A0A0A] ${isRtl ? 'font-serif text-right' : 'text-left'}`}
      >
        <Navigation
          nav={t.nav}
          currentLang={currentLang}
          languages={LANGUAGES}
          langCode={langCode}
          setLangCode={handleLangChange}
          isLangOpen={isLangOpen}
          setIsLangOpen={setIsLangOpen}
          whatsappLabel={t.cta.whatsapp}
          whatsappUrl={WHATSAPP_URL}
        />

        <main id="main-content">
          <Hero
            title={t.hero.title}
            subtitle={t.hero.subtitle}
            description={t.hero.desc}
            cta={t.hero.cta}
            badge={t.hero.badge}
            userPhoto={USER_PHOTO}
            isRtl={isRtl}
          />

          <Services s1={t.services.s1} s2={t.services.s2} s3={t.services.s3} isRtl={isRtl} />

          <Suspense fallback={<LoadingFallback height="py-40" />}>
            <About
              quote={t.about.quote}
              bio={t.about.bio}
              details={t.about.details}
              stats={t.about.stats}
              userPhoto={USER_PHOTO}
              isRtl={isRtl}
            />
          </Suspense>

          <Certificates title={t.certs.title} subtitle={t.certs.subtitle} />

          <Projects
            title={t.work.title}
            subtitle={t.work.subtitle}
            viewAll={t.work.viewAll}
            comingSoon={t.work.comingSoon}
            projects={PROJECTS}
            isRtl={isRtl}
          />

          <Suspense fallback={<LoadingFallback height="py-40" />}>
            <Career
              title={t.career.title}
              subtitle={t.career.subtitle}
              timeline={TIMELINE}
              isRtl={isRtl}
            />
          </Suspense>

          <Suspense fallback={<LoadingFallback height="py-40" />}>
            <CTA
              title={t.cta.title}
              subtitle={t.cta.subtitle}
              description={t.cta.desc}
              button={t.cta.button}
              whatsapp={t.cta.whatsapp}
              whatsappUrl={WHATSAPP_URL}
              isRtl={isRtl}
            />
          </Suspense>
        </main>

        <Footer />
      </div>
  )
}

export default App
