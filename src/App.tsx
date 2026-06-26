import type { FC } from 'react'
import type { TranslationContent } from './constants/translation-types'
import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { PROJECTS, TIMELINE, USER_PHOTO, WHATSAPP_URL } from './constants/data'
import { LANGUAGES, type LanguageCode } from './constants/languages'
import { analytics } from './services/analytics'

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })))
const Career = lazy(() => import('./components/Career').then(m => ({ default: m.Career })))
const Certificates = lazy(() =>
  import('./components/Certificates').then(m => ({ default: m.Certificates })),
)
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })))
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })))
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })))

const VALID_LANG_CODES = new Set<string>(LANGUAGES.map(l => l.code))

const loadTranslation = (code: LanguageCode): Promise<TranslationContent> =>
  import(`./constants/translations/${code}.ts`).then(m => m.default)

// Lazy-load English as fallback for when translation chunks fail to load
let _enFallback: Promise<TranslationContent> | null = null
const getEnglishFallback = (): Promise<TranslationContent> => {
  if (!_enFallback) _enFallback = import('./constants/translations/en.ts').then(m => m.default)
  return _enFallback
}

// Minimal inline fallback for the brief moment before dynamic import resolves
const INITIAL_TRANSLATION: TranslationContent = {
  seo: { title: 'Ricardo Camilo', desc: '' },
  nav: { work: '', about: '', services: '', career: '', contact: '' },
  hero: { title: '', subtitle: '', desc: '', cta: '', badge: '' },
  about: { quote: '', bio: '', details: '', stats: { exp: '', projects: '', eng: '' } },
  services: {
    s1: { title: '', desc: '' },
    s2: { title: '', desc: '' },
    s3: { title: '', desc: '' },
  },
  skills: { title: '', subtitle: '' },
  work: { title: '', subtitle: '', viewAll: '', viewProject: '', comingSoon: '' },
  career: { title: '', subtitle: '', present: '' },
  certs: { title: '', subtitle: '', proficiency: '', certificate: '', level: '' },
  cta: { title: '', subtitle: '', desc: '', button: '', whatsapp: '' },
}

interface LoadingFallbackProps {
  height?: string
}

const LoadingFallback: FC<LoadingFallbackProps> = ({ height = 'h-96' }) => (
  // biome-ignore lint/a11y/useSemanticElements: loading placeholder uses ARIA status role
  <div className={`${height} flex items-center justify-center`} role="status" aria-label="Loading">
    <div className="w-8 h-8 border-2 border-[#E5D5C0]/30 border-t-[#E5D5C0] rounded-full animate-spin" />
    <span className="sr-only">Loading...</span>
  </div>
)

const App: FC = () => {
  const [langCode, setLangCode] = useState<LanguageCode>('pt')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [t, setT] = useState<TranslationContent>(INITIAL_TRANSLATION)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as LanguageCode | null
    if (stored && VALID_LANG_CODES.has(stored)) {
      setLangCode(stored)
    } else {
      const browserLang = navigator.language.split('-')[0] as LanguageCode
      if (VALID_LANG_CODES.has(browserLang)) {
        setLangCode(browserLang)
      }
    }
  }, [])

  useEffect(() => {
    let stale = false
    loadTranslation(langCode)
      .catch(() => getEnglishFallback())
      .then(data => {
        if (!stale) {
          setT(data)
          // Apply DOM/SEO updates immediately with correct translation data
          localStorage.setItem('lang', langCode)
          document.documentElement.lang = langCode
          document.title = data.seo.title
          const descTag = document.querySelector('meta[name="description"]')
          if (descTag) descTag.setAttribute('content', data.seo.desc)
        }
      })
      .catch(() => {
        // Both target and English fallback failed — keep INITIAL_TRANSLATION
        console.warn(`Failed to load translation for "${langCode}" and English fallback`)
      })
    return () => {
      stale = true
    }
  }, [langCode])

  // RTL direction change — separate from translation load since it depends only on langCode
  useEffect(() => {
    const isRtl = ['ar', 'ur'].includes(langCode)
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
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

        <Suspense fallback={<LoadingFallback height="py-40" />}>
          <Services s1={t.services.s1} s2={t.services.s2} s3={t.services.s3} isRtl={isRtl} />
        </Suspense>

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

        <Suspense fallback={<LoadingFallback height="py-40" />}>
          <Certificates
            title={t.certs.title}
            subtitle={t.certs.subtitle}
            proficiency={t.certs.proficiency}
            certificate={t.certs.certificate}
            level={t.certs.level}
          />
        </Suspense>

        <Suspense fallback={<LoadingFallback height="py-40" />}>
          <Skills title={t.skills.title} subtitle={t.skills.subtitle} isRtl={isRtl} />
        </Suspense>

        <Suspense fallback={<LoadingFallback height="py-40" />}>
          <Projects
            title={t.work.title}
            subtitle={t.work.subtitle}
            viewAll={t.work.viewAll}
            viewProject={t.work.viewProject}
            comingSoon={t.work.comingSoon}
            projects={PROJECTS}
            isRtl={isRtl}
          />
        </Suspense>

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

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
