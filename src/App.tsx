import React, { useState, lazy, Suspense, ComponentType } from 'react';
import { useLanguage } from './composables/useLanguage';
import { LANGUAGES } from './constants/languages';
import { PROJECTS, TIMELINE, USER_PHOTO, WHATSAPP_URL } from './constants/data';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const About = lazy(() => import('./components/About')) as unknown as ComponentType<any>;
const Certificates = lazy(() => import('./components/Certificates')) as unknown as ComponentType<any>;
const Career = lazy(() => import('./components/Career')) as unknown as ComponentType<any>;

const App: React.FC = () => {
  const { langCode, setLangCode, t, isRtl } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLang = LANGUAGES.find((l) => l.code === langCode) || LANGUAGES[0];

  return (
    <div className={`min-h-screen bg-[#0A0A0A] selection:bg-[#E5D5C0] selection:text-[#0A0A0A] ${isRtl ? 'font-serif text-right' : 'text-left'}`}>
      <Navigation
        nav={t.nav}
        currentLang={currentLang}
        languages={LANGUAGES}
        langCode={langCode}
        setLangCode={setLangCode}
        isLangOpen={isLangOpen}
        setIsLangOpen={setIsLangOpen}
        isRtl={isRtl}
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

        <Suspense fallback={<SectionLoader />}>
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

        <Career
          title={t.career.title}
          subtitle={t.career.subtitle}
          present={t.career.present}
          timeline={TIMELINE}
          isRtl={isRtl}
        />

        <CTA
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          description={t.cta.desc}
          button={t.cta.button}
          whatsapp={t.cta.whatsapp}
          whatsappUrl={WHATSAPP_URL}
          isRtl={isRtl}
        />
      </main>

      <Footer />
    </div>
  );
};

const SectionLoader: React.FC = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#E5D5C0]/20 border-t-[#E5D5C0] rounded-full animate-spin" />
  </div>
);

export default App;
