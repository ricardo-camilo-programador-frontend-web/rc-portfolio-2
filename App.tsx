import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, ArrowUpRight, Instagram, Layers, Code, Zap, 
  ShieldCheck, Terminal, Cpu, Globe, ChevronRight, ExternalLink, Award, ChevronDown, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Project } from './types';

type LanguageCode = 
  | 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'ar' | 'bn' | 'pt' | 'ru' | 'ur' 
  | 'id' | 'de' | 'ja' | 'mr' | 'te' | 'tr' | 'ta' | 'vi' | 'ko' | 'it';

const LANGUAGES: { code: LanguageCode; label: string; native: string; rtl?: boolean }[] = [
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
  { code: 'mr', label: 'Marathi', native: 'مراठी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'ko', label: 'Korean', native: '한국어' },
  { code: 'it', label: 'Italian', native: 'Italiano' }
];

const TRANSLATIONS: Partial<Record<LanguageCode, any>> = {
  en: {
    seo: { title: 'Ricardo Camilo | Senior Frontend Engineer', desc: 'Elite Frontend Engineer with 4+ years of experience. Expert in React, Vue, and Next.js.' },
    nav: { work: 'Portfolio', about: 'About', services: 'Services', career: 'Career', contact: 'Contact' },
    hero: { title: 'Frontend Engineer', subtitle: '& UI/UX Strategist', desc: '4+ years of turning business challenges into high-impact digital solutions. Expert in React, Vue ecosystems, and extreme performance architectures.', cta: 'Let\'s Talk', badge: 'Available for High-End Projects' },
    about: { quote: 'Technical excellence is the result of intention and flawless execution.', bio: 'I am Ricardo Camilo, B.S. in IT Management. My approach blends the "Boy Scout Rule" with a manic focus on performance (Core Web Vitals) and accessibility (WCAG).', details: 'DISC Profile: Investigator — Focus on technical precision and scalable solutions.', stats: { exp: '4+ Years', projects: '20+ Delivered', eng: 'English C1' } },
    services: { s1: { title: 'Luxury Web Design', desc: 'Interfaces that breathe exclusivity, focused on elevating your brand\'s perceived value.' }, s2: { title: 'Frontend Engineering', desc: 'Robust applications with Next.js, Nuxt, and Angular. Clean code, tested and ready for scale.' }, s3: { title: 'Performance & SEO', desc: 'Extreme optimization ensuring instant loading and maximum organic visibility.' } },
    work: { title: 'Selected', subtitle: 'Works', viewAll: 'View Full GitHub', comingSoon: 'Coming Soon' },
    career: { title: 'Professional', subtitle: 'History', present: 'Present' },
    certs: { title: 'Recognition', subtitle: '& Certifications' },
    cta: { title: 'Upgrade your', subtitle: 'Digital Product', desc: 'Ready to collaborate with brands seeking elite engineering and world-class design.', button: 'Email Me', whatsapp: 'WhatsApp Me' }
  },
  pt: {
    seo: { title: 'Ricardo Camilo | Engenheiro Frontend Sênior', desc: 'Engenheiro Frontend de Elite com 4+ anos de experiência. Especialista em React, Vue e Next.js.' },
    nav: { work: 'Portfolio', about: 'Sobre', services: 'Serviços', career: 'Carreira', contact: 'Contato' },
    hero: { title: 'Frontend Engineer', subtitle: '& UI/UX Strategist', desc: '4+ anos transformando desafios de negócios em soluções digitais de alto impacto. Especialista em ecossistemas React, Vue e arquiteturas de performance extrema.', cta: 'Iniciar Conversa', badge: 'Disponível para Projetos High-End' },
    about: { quote: 'Excelência técnica é o resultado de intenção e execução impecável.', bio: 'Sou Ricardo Camilo, Bacharel em Gestão de TI pela FATEC Jaú. Minha abordagem une a "Boy Scout Rule" (sempre deixar o código melhor do que encontrei) com um foco maníaco em performance (Core Web Vitals) e acessibilidade (WCAG).', details: 'Perfil DISC: Investigador — Foco em precisão técnica e soluções escaláveis.', stats: { exp: '4+ Anos', projects: '20+ Entregues', eng: 'Inglês C1' } },
    services: { s1: { title: 'Web Design de Luxo', desc: 'Interfaces que respiram exclusividade, focadas em elevar o valor percebido da sua marca.' }, s2: { title: 'Engenharia Frontend', desc: 'Aplicações robustas com Next.js, Nuxt e Angular. Código limpo, testado e pronto para escala.' }, s3: { title: 'Performance & SEO', desc: 'Otimização extrema para garantir carregamento instantâneo e visibilidade orgânica máxima.' } },
    work: { title: 'Trabalhos', subtitle: 'Selecionados', viewAll: 'Ver GitHub Completo', comingSoon: 'Em Breve' },
    career: { title: 'Histórico', subtitle: 'Profissional', present: 'Atualmente' },
    certs: { title: 'Reconhecimento', subtitle: '& Certificações' },
    cta: { title: 'Eleve o nível do seu', subtitle: 'Produto Digital', desc: 'Pronto para colaborar com marcas que buscam engenharia de elite e design de classe mundial.', button: 'Enviar E-mail', whatsapp: 'Conversar no WhatsApp' }
  }
};

LANGUAGES.forEach(lang => {
  if (!TRANSLATIONS[lang.code]) {
    TRANSLATIONS[lang.code] = { ...TRANSLATIONS.en, seo: { title: `Ricardo Camilo | Frontend Engineer (${lang.label})`, desc: TRANSLATIONS.en?.seo?.desc }, work: { ...TRANSLATIONS.en.work, comingSoon: 'Coming Soon' } };
  }
});

const PROJECTS: Project[] = [
  // CORPORATIVOS
  { id: 'c1', title: 'Labi9.com', category: 'Qwik', description: 'Corporate website for software development leader.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/labi9.png', tags: ['Qwik', 'PWA', 'Tailwind'], link: 'https://labi9.com/' },
  { id: 'c2', title: 'Loor.vc', category: 'Astro', description: 'Connecting investors with high-potential startups.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/loor.png', tags: ['Astro', 'Vue', 'Tailwind'], link: 'https://loor.vc/' },
  { id: 'c3', title: 'Loor Dashboard', category: 'React', description: 'Professional-grade investment management platform.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/loor-admin.png', tags: ['React', 'Redux', 'Vite'], link: 'https://painel.loor.vc/investor/login' },
  { id: 'c4', title: 'Global Liberty Bank', category: 'Astro/Vue', description: 'Modern banking interface with elegant financial sector aesthetics.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/glbk.png', tags: ['Astro', 'Vue.js', 'Tailwind'], link: 'https://www.glbk.com.br/' },
  { id: 'c5', title: 'Tippbank', category: 'Astro/Vue', description: 'Financial planning and payment solutions platform.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/tippbank.png', tags: ['Astro', 'Vue', 'Tailwind'], link: 'https://tippbank.com.br/' },
  
  // FREELANCE
  { id: 'f1', title: 'Edifício Canadá', category: 'Next.js', description: 'Luxury real estate landing page with Lighthouse 90+.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/edificio-canada-rvone-freelance.png', tags: ['Next.js 13', 'SSR', 'SEO'], link: 'https://edificio-canada-freelance-langing.netlify.app/' },
  
  // CHRONICLES / ESTUDO
  { id: 'ch1', title: 'Breath Natural', category: 'Next.js', description: 'Premium e-commerce for indoor plants with fluid UX.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/breath-natural.png', tags: ['Next.js 15', 'Framer Motion', 'Tailwind'], link: 'https://breath-natural-nextjs-chronicles.netlify.app' },
  { id: 'ch2', title: 'Food Hut', category: 'Angular', description: 'Restaurant landing page with mobile-first PWA capabilities.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/food-hut.png', tags: ['Angular', 'PWA', 'Tailwind'], link: 'https://food-hut-angular-chronicles-1.netlify.app/' },
  { id: 'ch3', title: 'Savana Nuxt', category: 'Vue', description: 'Multi-language e-commerce with global state management.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/savana.webp', tags: ['Nuxt 3', 'Pinia', 'i18n'], link: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/en' },
  { id: 'ch4', title: 'Persona NextJS', category: 'Next.js', description: 'Elite engineering portfolio showcasing 4+ years of expertise.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/persona.png', tags: ['Next.js', 'Lighthouse', 'PWA'], link: 'https://persona-nextjs-chronicles-2.netlify.app' },
  { id: 'ch5', title: 'Zenith Node', category: 'Node.js', description: 'Fundamental backend informational site with native HTTP.', image: 'https://raw.githubusercontent.com/ricardo-camilo-programador-frontend-web/ricardo-camilo-programador-frontend-web/refs/heads/main/assets/projects/zenith-node-chronicles-part-1.png', tags: ['Node.js', 'FS', 'HTTP'], link: 'https://replit.com/@ricardo564/zenith-node-chronicles-part-1' },
  
  // OUTROS
  { id: 'o1', title: 'Cigana Lila', category: 'Astro', description: 'Spiritual services website with WhatsApp integration.', image: '', comingSoon: true, tags: ['Astro', 'TypeScript', 'Netlify'], link: 'https://cigana-lila.netlify.app/' },
  { id: 'o2', title: 'Lembre de Mim', category: 'Python', description: 'Visual Novel game combining storytelling and technical implementation.', image: '', comingSoon: true, tags: ['RenPy', 'Python', 'Game'], link: 'https://lembredemin.netlify.app/' }
];

const TIMELINE = [
  { id: 1, period: 'Jul 2025 — Present', company: 'Consir Informática', role: 'Pleno Frontend Engineer', desc: 'Engenharia de sistemas corporativos escaláveis focada em Vue.js, TypeScript e manutenção de alto nível.', tags: ['Vue.js', 'TypeScript', 'Enterprise'] },
  { id: 2, period: 'Jan 2025 — Jul 2025', company: 'Freelance Specialist', role: 'Frontend Consultant', desc: 'Liderança técnica em projetos de alto impacto (Itu Pneus, RvOne, Cajuscript) com foco em conversão e performance.', tags: ['Next.js 15', 'SEO', 'Consultancy'] },
  { id: 3, period: 'Oct 2021 — Dec 2024', company: 'Labi9 Tecnologia', role: 'Frontend Developer', desc: '3+ anos em ecossistema de fintechs. Desenvolvimento de interfaces complexas com React, Qwik e Nuxt.', tags: ['React', 'Nuxt', 'Fintech'] },
  { id: 4, period: '2019', company: 'SIALOG Software', role: 'Tech Intern', desc: 'Fundamentos em Ruby on Rails e JasperReports para logística.', tags: ['Ruby on Rails', 'Git'] }
];

const USER_PHOTO = "https://persona-nextjs-chronicles-part-2.netlify.app/_next/static/media/ricardo-camilo-programador-frontend-web-developer-frontend-engineer-software-engineer-web-developer-vuejs-vue-reactjs-react-javascript-typescript.cebcabde.png";
const WHATSAPP_URL = "https://wa.me/5514996765389";

const App: React.FC = () => {
  const [langCode, setLangCode] = useState<LanguageCode>(() => (localStorage.getItem('lang') as LanguageCode) || 'pt');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const currentLang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  const isRtl = currentLang.rtl;

  useEffect(() => { 
    localStorage.setItem('lang', langCode);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
    document.title = t.seo.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', t.seo.desc);
  }, [langCode, isRtl, t]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0A] selection:bg-[#E5D5C0] selection:text-[#0A0A0A] ${isRtl ? 'font-serif text-right' : 'text-left'}`}>
      
      {/* Scroll Progress Bar for Engagement */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#E5D5C0] origin-left z-[1000]" style={{ scaleX }} />

      {/* WhatsApp Floating Button */}
      <motion.a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="fixed bottom-8 right-8 z-[150] w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] group transition-all"
      >
        <MessageCircle size={32} />
        <div className="absolute right-full mr-4 bg-[#0A0A0A] border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#E5D5C0] opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
          {t.cta.whatsapp}
        </div>
      </motion.a>

      {/* Navigation - Anchors pointed to internal IDs */}
      <nav className="fixed top-0 w-full z-[100] glass h-20 flex items-center px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#home"
            className="text-sm font-bold uppercase tracking-[0.4em] cursor-pointer group"
          >
            RICARDO<span className="opacity-40 italic group-hover:opacity-100 transition-opacity">.CAMILO</span>
          </motion.a>
          
          <div className="hidden lg:flex gap-10 text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/60">
            <a href="#work" className="hover:text-[#E5D5C0] transition-colors">{t.nav.work}</a>
            <a href="#about" className="hover:text-[#E5D5C0] transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-[#E5D5C0] transition-colors">{t.nav.services}</a>
            <a href="#career" className="hover:text-[#E5D5C0] transition-colors">{t.nav.career}</a>
          </div>

          <div className="flex items-center gap-6 relative" ref={langDropdownRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-[10px] font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:border-[#E5D5C0]/40 transition-all flex items-center gap-3 bg-white/5"
            >
              <Globe size={14} className="text-[#E5D5C0]/60" />
              <span>{currentLang.native}</span>
              <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-4 w-64 glass rounded-3xl overflow-hidden accent-border z-[110] max-h-[70vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <div className="p-2 grid grid-cols-1">
                    {LANGUAGES.map(l => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLangCode(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex justify-between items-center rounded-2xl ${langCode === l.code ? 'text-[#E5D5C0] bg-white/5' : 'text-[#E5D5C0]/40'}`}
                      >
                        <span className={l.rtl ? 'order-2' : 'order-1'}>{l.native}</span>
                        <span className={`text-[8px] opacity-30 ${l.rtl ? 'order-1' : 'order-2'}`}>{l.code}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <a href="#contact" className="px-6 py-2.5 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[9px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#E5D5C0] transition-all">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={USER_PHOTO} alt="Ricardo Camilo Background" className="w-full h-full object-cover grayscale opacity-[0.05] scale-110 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10">
          <div className="mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#E5D5C0]/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/80">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-6xl md:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-10">
            <span className="text-gradient">{t.hero.title}</span> <br/>
            <span className="italic font-light opacity-60 text-[#E5D5C0]">{t.hero.subtitle}</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-[#E5D5C0]/40 text-xs md:text-sm uppercase tracking-[0.2em] font-medium leading-relaxed mb-16 px-4">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a href="#contact" className="px-12 py-5 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#E5D5C0] transition-all mb-8 shadow-2xl flex items-center gap-3">
              <MessageCircle size={18} /> {t.hero.cta}
            </a>
            <motion.a href="#services" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-24 bg-gradient-to-b from-[#E5D5C0]/40 to-transparent block cursor-pointer" />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-40 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard num="01" title={t.services.s1.title} desc={t.services.s1.desc} icon={<Layers size={22}/>} isRtl={isRtl} />
          <ServiceCard num="02" title={t.services.s2.title} desc={t.services.s2.desc} icon={<Code size={22}/>} isRtl={isRtl} />
          <ServiceCard num="03" title={t.services.s3.title} desc={t.services.s3.desc} icon={<Zap size={22}/>} isRtl={isRtl} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 bg-[#0E0E0E] scroll-mt-20 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm accent-border relative z-10 shadow-2xl bg-[#1A1A1A]">
                <img src={USER_PHOTO} alt="Ricardo Camilo Portrait" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#E5D5C0]/20 -z-0" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-[#E5D5C0]/20 -z-0" />
            </motion.div>
            
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                  {t.about.quote.split(' ')[0]} <span className="italic opacity-60 font-light">{t.about.quote.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-[#E5D5C0]/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  {t.about.bio}
                </p>
                <div className="flex items-center gap-3 py-4 border-y border-white/5">
                  <ShieldCheck size={18} className="text-[#E5D5C0]/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/50">{t.about.details}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-4">
                <StatItem value={t.about.stats.exp} label="Experience" />
                <StatItem value={t.about.stats.projects} label="Handcrafted" />
                <StatItem value={t.about.stats.eng} label="Proficiency" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
                <div className="flex gap-6">
                  <SocialLink icon={<Linkedin size={22}/>} href="https://www.linkedin.com/in/ricardo-camilo-frontend-web-developer/" />
                  <SocialLink icon={<Github size={22}/>} href="https://github.com/ricardo-camilo-programador-frontend-web" />
                  <SocialLink icon={<Instagram size={22}/>} href="https://instagram.com/ricardo.camilo.dev/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EF SET Certificate Highlight */}
      <section className="py-32 px-6 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto p-12 glass accent-border rounded-[3rem] text-center">
          <Award size={48} className="mx-auto mb-8 text-[#E5D5C0]" />
          <h2 className="text-4xl md:text-6xl font-serif mb-6">{t.certs.title} <span className="italic opacity-50">{t.certs.subtitle}</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E5D5C0]/40">English Proficiency</span>
              <p className="text-4xl font-serif">EF SET: C1 Advanced</p>
              <div className="flex gap-4 justify-center text-[10px] font-mono text-[#E5D5C0]/60">
                <span>Reading: C2 Mastery</span>
                <span>Listening: B2 Independent</span>
              </div>
            </div>
            <a href="https://cert.efset.org/pt/75Zscf" target="_blank" className="px-8 py-3 rounded-full border border-white/10 hover:border-[#E5D5C0]/40 transition-all text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
              View Certificate <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-40 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-6">
            <h2 className="text-6xl md:text-[9rem] font-serif leading-none tracking-tighter">
              {t.work.title} <span className="italic font-light opacity-50">{t.work.subtitle}</span>
            </h2>
            <a href="https://github.com/ricardo-camilo-programador-frontend-web" target="_blank" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all">
              {t.work.viewAll} 
              <motion.div whileHover={{ x: isRtl ? -5 : 5, y: -5 }}><ArrowUpRight size={18} /></motion.div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            {PROJECTS.map((project, i) => (
              <motion.a 
                key={project.id} 
                href={project.link}
                target="_blank"
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.8 }} 
                className="group cursor-pointer block"
              >
                <div className="relative aspect-video overflow-hidden bg-[#111] mb-10 accent-border group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] transition-all duration-700">
                  {project.comingSoon ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0D0D0D] text-[#E5D5C0]/20 gap-4 border-2 border-dashed border-white/5">
                      <Terminal size={40} className="opacity-10" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.6em]">{t.work.comingSoon}</span>
                    </div>
                  ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000" />
                  )}
                  
                  <div className={`absolute top-6 ${isRtl ? 'right-6' : 'left-6'} flex gap-2`}>
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="text-3xl font-serif mb-2 uppercase tracking-tight group-hover:text-[#E5D5C0] transition-colors">{project.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#E5D5C0]/30 font-bold">{project.category} • {project.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E5D5C0] group-hover:text-[#0A0A0A] group-hover:border-[#E5D5C0] transition-all duration-500">
                    <ArrowUpRight size={20} className={isRtl ? 'rotate-[-90deg]' : ''} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="career" className="py-40 px-6 bg-[#0B0B0B] scroll-mt-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-9xl font-serif tracking-tighter mb-4">
              {t.career.title} <span className="italic font-light opacity-50">{t.career.subtitle}</span>
            </h2>
            <div className="w-20 h-px bg-[#E5D5C0]/20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-10 glass rounded-[2.5rem] accent-border hover:bg-white/5 transition-all group border-t-2 border-t-[#E5D5C0]/5"
              >
                <div className="text-[10px] font-bold text-[#E5D5C0]/30 tracking-[0.3em] mb-10 flex items-center justify-between">
                  <span>{item.period}</span>
                  {idx === 0 && <span className="bg-[#E5D5C0]/10 text-[#E5D5C0] px-2 py-0.5 rounded-full text-[8px] animate-pulse">LIVE</span>}
                </div>
                <h3 className="text-2xl font-serif mb-2 uppercase tracking-tight group-hover:text-[#E5D5C0] transition-colors">{item.role}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#E5D5C0]/40 mb-8">{item.company}</p>
                <p className="text-xs text-[#E5D5C0]/50 leading-relaxed mb-10 min-h-[60px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed invisibility issue on "Produto Digital" */}
      <section id="contact" className="py-56 px-6 text-center relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="space-y-16">
            <h2 className="text-7xl md:text-[13rem] font-serif leading-[0.8] tracking-tighter mb-12">
              <span className="text-gradient block">{t.cta.title}</span>
              <span className="italic font-light opacity-100 text-[#E5D5C0] block mt-4">{t.cta.subtitle}</span>
            </h2>
            <p className="max-w-md mx-auto text-[#E5D5C0]/40 text-xs md:text-sm uppercase tracking-[0.3em] font-medium leading-loose">
              {t.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                href={WHATSAPP_URL} 
                target="_blank"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-flex items-center gap-6 px-16 py-7 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-white hover:text-[#25D366] transition-all group"
              >
                <MessageCircle size={20} />
                {t.cta.whatsapp}
                <ArrowUpRight size={20} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </motion.a>
              
              <motion.a 
                href="mailto:ricardo.camilo.dev@gmail.com" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-flex items-center gap-6 px-16 py-7 rounded-full accent-bg font-bold text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-white transition-all group"
              >
                {t.cta.button}
                <ArrowUpRight size={20} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Finalized "TO TOP" fix and anchor integration */}
      <footer className="py-24 px-6 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 text-[10px] font-bold uppercase tracking-[0.4em] text-[#E5D5C0]/40">
            <a href="mailto:ricardo.camilo.dev@gmail.com" className="hover:text-[#E5D5C0] transition-colors">EMAIL</a>
            <a href={WHATSAPP_URL} target="_blank" className="hover:text-[#E5D5C0] transition-colors">WHATSAPP</a>
            <a href="https://linkedin.com/in/ricardo-camilo-frontend-web-developer/" target="_blank" className="hover:text-[#E5D5C0] transition-colors">LINKEDIN</a>
            <a href="https://github.com/ricardo-camilo-programador-frontend-web" target="_blank" className="hover:text-[#E5D5C0] transition-colors">GITHUB</a>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#E5D5C0]/20 order-2 md:order-1 text-center md:text-left">
              © 2026 RICARDO CAMILO • ELITE FRONTEND ENGINEERING
            </div>
            
            <a 
              href="#home" 
              onClick={scrollToTop}
              className="flex flex-col items-center gap-4 cursor-pointer order-1 md:order-2 group"
              aria-label="Scroll to top"
            >
              <div className="w-px h-12 bg-white/10 group-hover:bg-[#E5D5C0]/40 transition-colors" />
              <span className="text-[8px] font-bold uppercase tracking-[0.6em] text-[#E5D5C0]/30 group-hover:text-[#E5D5C0] transition-colors">TO TOP</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard: React.FC<{ num: string, title: string, desc: string, icon: React.ReactNode, isRtl: boolean }> = ({ num, title, desc, icon, isRtl }) => (
  <a href="#contact" className="p-12 glass rounded-[3.5rem] accent-border group hover:bg-[#E5D5C0]/5 transition-all relative overflow-hidden block text-left">
    <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} p-8 text-[11px] font-bold text-[#E5D5C0]/10 tracking-[0.4em] font-serif`}>{num}</div>
    <div className="text-[#E5D5C0]/30 group-hover:text-[#E5D5C0] transition-all duration-500 mb-12 translate-y-0 group-hover:-translate-y-2">{icon}</div>
    <h3 className="text-3xl font-serif mb-8 uppercase tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
    <p className="text-xs text-[#E5D5C0]/40 leading-relaxed font-medium mb-12 group-hover:opacity-80 transition-opacity">{desc}</p>
    <div className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/40 group-hover:text-[#E5D5C0] transition-all">
      Start Project <ChevronRight size={14} className={`group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
    </div>
  </a>
);

const StatItem: React.FC<{ value: string, label: string }> = ({ value, label }) => (
  <div className="flex flex-col">
    <span className="text-3xl md:text-4xl font-serif text-[#E5D5C0] mb-1">{value}</span>
    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/30">{label}</span>
  </div>
);

const SocialLink: React.FC<{ icon: React.ReactNode, href: string }> = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-[#E5D5C0]/30 hover:text-[#E5D5C0] hover:border-[#E5D5C0]/40 hover:bg-white/5 transition-all duration-500 shadow-2xl">
    {icon}
  </a>
);

export default App;