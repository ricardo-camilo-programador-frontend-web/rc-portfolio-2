
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, ArrowRight, Mail, Menu, ExternalLink, Calendar, Briefcase, 
  Instagram, Smartphone, GraduationCap, Globe, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, Skill } from './types';

type Language = 'pt' | 'en' | 'it' | 'es';

const LANGUAGES: { code: Language; label: string; flag: string; native: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', native: 'BR' },
  { code: 'en', label: 'English', flag: '🇺🇸', native: 'US' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹', native: 'IT' },
  { code: 'es', label: 'Español', flag: '🇪🇸', native: 'ES' }
];

const TRANSLATIONS = {
  pt: {
    nav: { home: 'Início', career: 'Carreira', projects: 'Projetos', skills: 'Skills', contact: 'Contato' },
    hero: { badge: 'Engenheiro Frontend Sênior', title: 'Soluções Digitais', subtitle: 'de Elite.', desc: 'Transformando complexidade técnica em elegância visual e performance extrema. Foco em interfaces que convertem.', cta: 'Ver Portfolio', stats: { exp: 'Anos Exp', degree: 'FATEC Jaú', eng: 'Inglês C1', profile: 'Investigador' } },
    career: { title: 'Jornada Profissional', subtitle: 'Experiência & Evolução', fatec: 'Bacharel em Gestão da TI', fatecDesc: 'Formação em governança, arquitetura e gestão de infraestrutura tech.', freelance: 'Freelancer Sênior', freelanceDesc: 'Desenvolvimento de soluções personalizadas para RvOne, Itú Pneus e Dra. Adriana Rezende usando Next.js 15.' },
    projects: { title: 'Trabalhos Selecionados', subtitle: 'Engenharia de Performance', tabs: { corporate: 'Corporativos', personal: 'Pessoais' }, visit: 'Visitar Site' },
    skills: { title: 'Arsenal Técnico', subtitle: 'Tecnologias Dominadas' },
    contact: { title: 'Conecte-se com o', subtitle: 'Especialista.', desc: 'Disponível para novos desafios profissionais e projetos freelance de alto nível.', footer: 'Engenheiro Frontend Sênior • Jaú, SP' }
  },
  en: {
    nav: { home: 'Home', career: 'Career', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hero: { badge: 'Senior Frontend Engineer', title: 'Elite Digital', subtitle: 'Solutions.', desc: 'Transforming technical complexity into visual elegance and extreme performance. Focused on high-converting UIs.', cta: 'View Portfolio', stats: { exp: 'Years Exp', degree: 'FATEC Degree', eng: 'English C1', profile: 'Investigator' } },
    career: { title: 'Professional Journey', subtitle: 'Experience & Evolution', fatec: 'B.S. in IT Management', fatecDesc: 'Degree focused on governance, architecture, and tech infrastructure management.', freelance: 'Senior Freelancer', freelanceDesc: 'Developed custom solutions for RvOne, Itú Pneus, and Dra. Adriana Rezende using Next.js 15.' },
    projects: { title: 'Selected Works', subtitle: 'Performance Engineering', tabs: { corporate: 'Corporate', personal: 'Personal' }, visit: 'Visit Site' },
    skills: { title: 'Technical Arsenal', subtitle: 'Mastered Tech' },
    contact: { title: 'Connect with the', subtitle: 'Expert.', desc: 'Available for new professional challenges and high-end freelance projects.', footer: 'Senior Frontend Engineer • Jaú, SP' }
  },
  it: {
    nav: { home: 'Inizio', career: 'Carriera', projects: 'Progetti', skills: 'Skill', contact: 'Contatto' },
    hero: { badge: 'Ingegnere Frontend Senior', title: 'Soluzioni Digitali', subtitle: 'di Élite.', desc: 'Trasformare la complessità tecnica in eleganza visiva e prestazioni estreme. Focus su interfacce che convertono.', cta: 'Vedi Portfolio', stats: { exp: 'Anni Exp', degree: 'FATEC Jaú', eng: 'Inglese C1', profile: 'Investigatore' } },
    career: { title: 'Percorso Professionale', subtitle: 'Esperienza ed Evoluzione', fatec: 'Laurea in Gestione TI', fatecDesc: 'Formazione in governance, architettura e gestione dell’infrastruttura tecnologica.', freelance: 'Freelancer Senior', freelanceDesc: 'Sviluppo di soluzioni personalizzate per RvOne, Itú Pneus e Dra. Adriana Rezende utilizzando Next.js 15.' },
    projects: { title: 'Opere Selezionate', subtitle: 'Ingegneria delle Prestazioni', tabs: { corporate: 'Aziendali', personal: 'Personali' }, visit: 'Visita il Sito' },
    skills: { title: 'Arsenale Técnico', subtitle: 'Tecnologie Padroneggiate' },
    contact: { title: 'Connettiti con', subtitle: 'l’Esperto.', desc: 'Disponibile per nuove sfide professionali e progetti freelance di alto livello.', footer: 'Ingegnere Frontend Senior • Jaú, SP' }
  },
  es: {
    nav: { home: 'Inicio', career: 'Carrera', projects: 'Proyectos', skills: 'Skills', contact: 'Contacto' },
    hero: { badge: 'Ingeniero Frontend Senior', title: 'Soluciones Digitales', subtitle: 'de Élite.', desc: 'Transformando la complejidad técnica en elegancia visual y rendimiento extremo. Foco en interfaces que convierten.', cta: 'Ver Portfolio', stats: { exp: 'Años Exp', degree: 'Título FATEC', eng: 'Inglés C1', profile: 'Investigador' } },
    career: { title: 'Trayectoria Profesional', subtitle: 'Experiencia y Evolución', fatec: 'Grado en Gestión de TI', fatecDesc: 'Formación en gobernanza, arquitectura y gestión de infraestructura tecnológica.', freelance: 'Freelancer Senior', freelanceDesc: 'Desarrollo de soluciones personalizadas para RvOne, El Itú Pneus y la Dra. Adriana Rezende usando Next.js 15.' },
    projects: { title: 'Obras Seleccionadas', subtitle: 'Ingeniería de Rendimiento', tabs: { corporate: 'Corporativos', personal: 'Personales' }, visit: 'Visitar Sitio' },
    skills: { title: 'Arsenal Técnico', subtitle: 'Tecnologías Dominadas' },
    contact: { title: 'Conecta con el', subtitle: 'Experto.', desc: 'Disponible para nuevos desafíos profesionales y proyectos freelance de alto nivel.', footer: 'Ingeniero Frontend Senior • Jaú, SP' }
  }
};

const CORPORATE_PROJECTS: Project[] = [
  { id: 'c1', title: 'Loor.vc Dashboard', category: 'React', description: 'Dashboard financeiro complexo para investidores de startups. Integração de APIs e visualização de dados em tempo real.', image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=800', tags: ['React', 'Tailwind', 'Redux', 'REST API'], link: 'https://painel.loor.vc/investor/login', metrics: '+40% Engagement' },
  { id: 'c2', title: 'Tipp Bank Fintech', category: 'Vue', description: 'Plataforma completa de soluções de pagamento com foco em UX fluida e segurança.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', tags: ['Nuxt.js', 'Vite', 'VueUse'], link: 'https://tippbank.com.br/', metrics: 'Fintech Scale' },
  { id: 'c3', title: 'Global Liberty Bank', category: 'Next.js', description: 'Interface bancária moderna focada em performance e acessibilidade para o mercado internacional.', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800', tags: ['Astro', 'Vue', 'Tailwind'], link: 'https://www.glbk.com.br/', metrics: 'Banking UI' }
];

const PERSONAL_PROJECTS: Project[] = [
  { id: 'p1', title: 'Breath Natural', category: 'Next.js', description: 'Arquitetura limpa para exposição de plantas. Uso de NestJS, TypeScript e Axios no ecossistema Chronicles.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800', tags: ['NestJS', 'TypeScript', 'Axios'], link: 'https://breath-natural-nest-chronicles-part1.netlify.app', metrics: 'Clean Arch' },
  { id: 'p2', title: 'Food Hut', category: 'React', description: 'Aplicação de delivery responsiva explorando o ecossistema Angular e PWA.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', tags: ['Angular', 'PWA', 'Tailwind'], link: 'https://food-hut-angular-chronicles-1.netlify.app/', metrics: 'UX Mobile' },
  { id: 'p3', title: 'Savana NuxtJS', category: 'Vue', description: 'E-commerce interativo com i18n e gerenciamento de estado global via Pinia.', image: 'https://images.unsplash.com/photo-1546213258-380eb0692b42?auto=format&fit=crop&q=80&w=800', tags: ['Nuxt 3', 'Pinia', 'i18n'], link: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/en', metrics: 'Global State' }
];

const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'Vue / Nuxt.js', level: 93, icon: '🟢', category: 'Frontend' },
  { name: 'TypeScript', level: 90, icon: '📘', category: 'Frontend' },
  { name: 'NestJS / Node', level: 82, icon: '🦁', category: 'Frontend' },
  { name: 'Clean Code', level: 95, icon: '🧹', category: 'Tools' },
  { name: 'Performance', level: 95, icon: '⚡', category: 'Tools' },
];

const LanguageDropdown: React.FC<{ current: Language; onSelect: (lang: Language) => void }> = ({ current, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === current) || LANGUAGES[0];

  return (
    <div className="relative" ref={containerRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 glass px-5 py-2.5 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all shadow-xl group"
      >
        <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{currentLang.flag}</span>
        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-white">{currentLang.native}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <ChevronDown size={14} className="text-teal-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
            className="absolute top-full mt-3 right-0 w-52 glass rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-[100]"
          >
            <div className="p-3 space-y-1">
              {LANGUAGES.map((l, i) => (
                <motion.button
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={l.code}
                  onClick={() => {
                    onSelect(l.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-4 px-4 py-3 rounded-xl transition-all group ${
                    current === l.code 
                      ? 'bg-teal-500/10 border border-teal-500/20' 
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base grayscale group-hover:grayscale-0 transition-all">{l.flag}</span>
                    <span className={`text-[10px] font-black uppercase tracking-wider transition-colors ${
                      current === l.code ? 'text-teal-400' : 'text-zinc-500 group-hover:text-zinc-200'
                    }`}>
                      {l.label}
                    </span>
                  </div>
                  {current === l.code && (
                    <motion.div layoutId="activeLang" className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => (localStorage.getItem('lang') as Language) || 'pt');
  const [activeTab, setActiveTab] = useState<'Corporate' | 'Personal'>('Corporate');

  const t = TRANSLATIONS[lang];
  const projectsToDisplay = activeTab === 'Corporate' ? CORPORATE_PROJECTS : PERSONAL_PROJECTS;

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const linkLinkedIn = "https://www.linkedin.com/in/ricardo-camilo-programador-frontend-web-developer/";
  const linkGitHub = "https://github.com/ricardo-camilo-programador-frontend-web";
  const phoneNumber = "+55 14 996765389";

  const TIMELINE = [
    { period: 'Jul 2025 - Presente', company: 'Consir Informática', role: 'Desenvolvedor Frontend Pleno', desc: 'Engenharia de software focada em Vue.js e TypeScript para sistemas de alta demanda.', type: 'CLT' },
    { period: 'Jan 2025 - Jul 2025', company: t.career.freelance, role: 'Frontend Specialist', desc: t.career.freelanceDesc, type: 'PJ / Freelance' },
    { period: 'Jan 2021 - Dez 2024', company: 'Labi9.com', role: 'Desenvolvedor Frontend', desc: '4 anos liderando o frontend de fintechs e dashboards de investimento corporativos.', type: 'CLT' },
    { period: 'Set 2019 - Dez 2019', company: 'SIALOG Software', role: 'Estagiário Frontend', desc: 'Início na programação com Ruby on Rails para sistemas de logística.', type: 'Estágio' }
  ];

  return (
    <div className="min-h-screen relative selection:bg-teal-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 h-20 flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 accent-gradient rounded-xl flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-all shadow-lg">R</div>
            <span className="font-bold tracking-tight text-xl max-sm:hidden uppercase tracking-tighter">RICARDO <span className="text-teal-400 font-black">CAMILO</span></span>
          </motion.div>
          
          <div className="hidden lg:flex gap-10 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
            {Object.keys(t.nav).map((key) => (
              <a key={key} href={`#${key}`} className="hover:text-white transition-colors relative group">
                {t.nav[key as keyof typeof t.nav]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <LanguageDropdown current={lang} onSelect={setLang} />
            
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:ricardo.camilo.dev@gmail.com" className="px-6 py-2.5 rounded-full accent-gradient text-white text-[10px] font-black shadow-lg uppercase tracking-widest hidden sm:block">Hire Ricardo</motion.a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full -z-10" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-teal-500/20 text-teal-400 text-[9px] font-black mb-10 uppercase tracking-[0.2em]">
          <GraduationCap size={12} /> {t.hero.badge}
        </motion.div>

        <h1 className="text-5xl md:text-[8rem] font-black text-gradient leading-[0.85] tracking-tighter mb-10 text-center max-w-6xl uppercase">
          {t.hero.title} <br/><span className="text-teal-400 italic">{t.hero.subtitle}</span>
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl text-center mb-16 leading-relaxed font-medium">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <a href="#projects" className="px-12 py-5 rounded-2xl accent-gradient text-white font-black flex items-center gap-3 hover:shadow-[0_0_40px_rgba(45,212,191,0.4)] transition-all uppercase text-xs tracking-widest">
            {t.hero.cta} <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl border-t border-white/5 pt-16">
          <HeroStat label="4+" desc={t.hero.stats.exp} />
          <HeroStat label="FATEC" desc={t.hero.stats.degree} />
          <HeroStat label="C1" desc={t.hero.stats.eng} />
          <HeroStat label="DISC" desc={t.hero.stats.profile} />
        </div>
      </section>

      {/* Timeline */}
      <section id="career" className="py-32 px-6 bg-zinc-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gradient uppercase tracking-tighter">{t.career.title}</h2>
            <p className="text-zinc-600 font-mono text-[10px] mt-4 uppercase tracking-[0.3em]">{t.career.subtitle}</p>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-zinc-900 hidden md:block" />
            {TIMELINE.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-12 group">
                <div className="absolute left-0 top-0 w-10 h-10 accent-gradient rounded-xl flex items-center justify-center text-white shadow-xl z-10 group-hover:scale-110 transition-all border-4 border-zinc-900">
                  <Briefcase size={18} />
                </div>
                <div className="glass p-10 rounded-[2.5rem] hover:border-teal-400/30 transition-all cursor-default group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1 group-hover:text-teal-400 transition-colors">{exp.role}</h3>
                      <p className="text-teal-400/80 font-black text-[10px] uppercase tracking-widest">{exp.company} • {exp.type}</p>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-[10px] uppercase">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="relative pl-12">
               <div className="absolute left-0 top-0 w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 border-4 border-zinc-900"><GraduationCap size={18} /></div>
               <div className="glass p-10 rounded-[2.5rem] border border-white/5 group hover:border-teal-400/30 transition-all">
                 <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">{t.career.fatec}</h3>
                 <p className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">FATEC Jaú • 2017 — 2023</p>
                 <p className="text-zinc-400 text-sm mt-4">{t.career.fatecDesc}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-gradient uppercase tracking-tighter">{t.projects.title}</h2>
              <p className="text-zinc-600 font-mono text-[10px] mt-4 uppercase tracking-[0.3em]">{t.projects.subtitle}</p>
            </div>
            <div className="flex p-1 bg-white/5 rounded-2xl glass">
              {(['Corporate', 'Personal'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'accent-gradient text-white shadow-xl' : 'text-zinc-500 hover:text-white'}`}>{t.projects.tabs[tab.toLowerCase() as keyof typeof t.projects.tabs]}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {projectsToDisplay.map((project) => (
                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} key={project.id} className="group glass rounded-[3rem] overflow-hidden hover:border-teal-400/30 transition-all cursor-pointer shadow-2xl">
                  <div className="h-64 relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-zinc-950/40" />
                    <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                      <span className="text-[9px] font-black text-teal-400 bg-black/60 px-3 py-1.5 rounded-lg border border-teal-400/20 uppercase tracking-widest">{project.metrics}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-black mb-3 text-white group-hover:text-teal-400 transition-all uppercase">{project.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2 mb-6">{project.tags.slice(0, 3).map(tag => <span key={tag} className="text-[8px] font-black text-zinc-600 uppercase tracking-tighter px-2 py-1 bg-white/5 rounded border border-white/5">{tag}</span>)}</div>
                    <a href={project.link} target="_blank" className="text-teal-400 font-black text-[10px] uppercase flex items-center gap-2 tracking-widest hover:gap-4 transition-all">{t.projects.visit} <ExternalLink size={12} /></a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gradient uppercase">{t.skills.title}</h2>
            <p className="text-zinc-600 font-mono text-[10px] mt-4 uppercase tracking-[0.3em]">{t.skills.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="glass p-8 rounded-[2rem] text-center hover:bg-teal-400/5 transition-all group">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{skill.icon}</div>
                <h4 className="font-black text-[10px] text-zinc-400 group-hover:text-white uppercase tracking-widest leading-tight">{skill.name}</h4>
                <div className="mt-4 w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} className="h-full accent-gradient shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass p-16 md:p-32 rounded-[4rem] text-center border-teal-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/5 blur-[120px] rounded-full" />
          <h2 className="text-5xl md:text-8xl font-black text-gradient leading-[0.85] tracking-tighter mb-10 uppercase">
            {t.contact.title} <br/><span className="text-teal-400 italic">{t.contact.subtitle}</span>
          </h2>
          <p className="text-zinc-500 text-lg mb-16 max-w-xl mx-auto font-medium">{t.contact.desc}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-left space-y-4">
              <ContactLink icon={<Mail />} label="ricardo.camilo.dev@gmail.com" href="mailto:ricardo.camilo.dev@gmail.com" />
              <ContactLink icon={<Smartphone />} label={phoneNumber} href={`tel:${phoneNumber.replace(/\s+/g, '')}`} />
            </div>
            <div className="flex gap-6">
              <SocialIcon icon={<Linkedin size={24} />} href={linkLinkedIn} />
              <SocialIcon icon={<Github size={24} />} href={linkGitHub} />
              <SocialIcon icon={<Instagram size={24} />} href="https://www.instagram.com/ricardo.camilo.dev/" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 text-center px-6">
        <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em]">© 2026 RICARDO CAMILO • {t.contact.footer}</p>
      </footer>
    </div>
  );
};

const ContactLink: React.FC<{ icon: React.ReactNode, label: string, href: string }> = ({ icon, label, href }) => (
  <a href={href} className="flex items-center gap-3 text-zinc-400 hover:text-teal-400 transition-all font-mono text-sm tracking-tighter group">
    <span className="p-2 glass rounded-lg group-hover:bg-teal-400/10 group-hover:text-teal-400 transition-all">{icon}</span>
    {label}
  </a>
);

const HeroStat: React.FC<{ label: string, desc: string }> = ({ label, desc }) => (
  <div className="text-center group cursor-default">
    <div className="text-3xl md:text-5xl font-black text-white group-hover:text-teal-400 transition-all tracking-tighter">{label}</div>
    <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mt-3">{desc}</div>
  </div>
);

const SocialIcon: React.FC<{ icon: React.ReactNode, href: string }> = ({ icon, href }) => (
  <motion.a whileHover={{ y: -5, scale: 1.1 }} href={href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-zinc-400 hover:text-teal-400 border border-white/5 shadow-2xl transition-all">
    {icon}
  </motion.a>
);

export default App;
