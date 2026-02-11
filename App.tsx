
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Code2, Rocket, MessageSquare, 
  Github, Linkedin, Instagram, Twitter, 
  ChevronRight, ArrowRight, Zap, Trophy, 
  Layers, User, Mail, Send, Sparkles, X, Bot, Menu
} from 'lucide-react';
import { Project, Skill, Testimonial } from './types';
import { askCamiloAI } from './services/geminiService';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Breath Natural',
    category: 'Next.js',
    description: 'E-commerce sustentável com foco em performance extrema e UX fluida.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#',
    metrics: '+40% Performance'
  },
  {
    id: '2',
    title: 'Food Hut',
    category: 'React',
    description: 'Plataforma de delivery com gestão de estado complexa e busca em tempo real.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Context API', 'Axios'],
    link: '#',
    metrics: 'Gestão de Estado'
  },
  {
    id: '3',
    title: 'Savana Nuxt',
    category: 'Vue',
    description: 'Plataforma internacionalizada com SEO avançado e arquitetura Nuxt 3.',
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800',
    tags: ['Vue 3', 'Nuxt', 'i18n'],
    link: '#',
    metrics: 'SEO 100/100'
  }
];

const SKILLS: Skill[] = [
  { name: 'React.js', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'Vue.js', level: 90, icon: '🟢', category: 'Frontend' },
  { name: 'TypeScript', level: 85, icon: '📘', category: 'Frontend' },
  { name: 'Next.js', level: 92, icon: '▲', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 98, icon: '🌊', category: 'Frontend' },
  { name: 'Node.js', level: 70, icon: '📦', category: 'Backend' },
];

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
      
      const reveals = document.querySelectorAll('.section-reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight * 0.85) el.classList.add('visible');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await askCamiloAI(userMsg, chatMessages);
      setChatMessages(prev => [...prev, { role: 'bot', text: response || 'Olá! Como posso ajudar?' }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'bot', text: 'Ops, tive um problema de conexão. Ricardo está codando algo épico agora!' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const filteredProjects = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 accent-gradient z-[100] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 accent-gradient rounded-xl flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform">R</div>
            <span className="font-bold tracking-tight text-xl max-sm:hidden">RICARDO <span className="text-teal-400">CAMILO</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-400">
            {['Início', 'Jornada', 'Projetos', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
            ))}
            <button className="px-5 py-2.5 rounded-full accent-gradient text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all">
              DOWNLOAD CV
            </button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="início" className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 blur-[120px] rounded-full -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-teal-500/20 text-teal-400 text-xs font-bold mb-8 float">
          <Sparkles size={14} /> DISPONÍVEL PARA NOVOS PROJETOS
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-tight text-gradient max-w-5xl">
          Construindo Experiências <span className="text-teal-400 underline decoration-teal-400/30 underline-offset-8">Extraordinárias</span> na Web
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Especialista Frontend transformando desafios empresariais em soluções digitais de alto impacto. Interfaces intuitivas, performance 100/100 e foco em conversão.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projetos" className="px-8 py-4 rounded-xl accent-gradient text-white font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all">
            VER PROJETOS <ArrowRight size={18} />
          </a>
          <button onClick={() => setChatOpen(true)} className="px-8 py-4 rounded-xl glass border border-white/10 hover:border-teal-500/30 text-white font-bold transition-all">
            FALAR COM ASSISTENTE IA
          </button>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
          <Stat label="4+ Anos" desc="De Experiência" />
          <Stat label="Sites 40%" desc="Mais Rápidos" />
          <Stat label="60% Mais" desc="Eficiência Dev" />
          <Stat label="100%" desc="Foco em Resultados" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto section-reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-4">Trabalhos Selecionados</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient">Resultados Reais</h2>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {['All', 'React', 'Vue', 'Next.js'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${activeFilter === cat ? 'accent-gradient text-white' : 'glass text-zinc-500 hover:text-white border-white/5'}`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group relative glass rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all hover-lift">
                <div className="h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded-md bg-teal-500/10 text-teal-400 text-[10px] font-bold uppercase tracking-widest border border-teal-500/20">{project.category}</span>
                    <span className="text-[10px] font-mono text-zinc-500">{project.metrics}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-zinc-400 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-zinc-500">#{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all uppercase tracking-widest">
                    Explorar Case <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Expertise */}
      <section id="jornada" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 section-reveal">
          <div className="flex-1">
            <p className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-4">Tech Stack & Mastery</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient mb-8 leading-tight">Soluções que não <br/>apenas funcionam, <br/><span className="text-teal-400">performam.</span></h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl leading-relaxed">
              Minha abordagem foca em código limpo, arquitetura escalável e SEO técnico. Graduado pela FATEC, busco a excelência em cada linha de código para garantir que seu negócio tenha a melhor fundação digital possível.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border-l-4 border-teal-500">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-teal-400" size={20} />
                  <span className="font-bold">Alta Performance</span>
                </div>
                <p className="text-xs text-zinc-500">Redução drástica no tempo de carregamento e melhoria de Core Web Vitals.</p>
              </div>
              <div className="glass p-6 rounded-2xl border-l-4 border-cyan-500">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="text-cyan-400" size={20} />
                  <span className="font-bold">Arquitetura Moderna</span>
                </div>
                <p className="text-xs text-zinc-500">Uso de Next.js, Nuxt e Micro-frontends para escalabilidade real.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {SKILLS.map(skill => (
              <div key={skill.name} className="glass p-8 rounded-2xl hover:bg-white/5 transition-all group hover-lift">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{skill.icon}</div>
                <h4 className="font-bold text-lg mb-4">{skill.name}</h4>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <div className="h-full accent-gradient group-hover:opacity-100 transition-all" style={{ width: `${skill.level}%` }} />
                </div>
                <span className="text-[10px] font-mono text-zinc-600 mt-2 block">{skill.level}% Mastery</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center border-teal-500/20 shadow-[0_0_80px_rgba(45,212,191,0.1)] section-reveal">
          <h2 className="text-4xl md:text-7xl font-extrabold text-gradient mb-8 tracking-tighter">Vamos criar algo <br/><span className="text-teal-400">Extraordinário?</span></h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Como desenvolvedor metódico e dedicado, transformo ideias em experiências digitais memoráveis. Seu próximo projeto merece o melhor.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:ricardo.camilo.dev@gmail.com" className="px-10 py-5 rounded-full accent-gradient text-white font-bold flex items-center gap-3 hover:scale-105 transition-all text-lg">
              <Mail size={20} /> ricardo.camilo.dev@gmail.com
            </a>
            <div className="flex gap-4">
              <SocialIcon icon={<Github size={20} />} href="https://github.com/ricardo-camilo-programador-frontend-web" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/ricardo-camilo-programador-frontend-web-developer/" />
              <SocialIcon icon={<Twitter size={20} />} href="#" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 glass">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 text-xs font-mono">© 2026 RICARDO CAMILO. BUILT WITH ☕ & REACT 19</p>
          <div className="flex gap-8 text-xs font-bold text-zinc-500">
            <a href="#" className="hover:text-teal-400 transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors uppercase tracking-widest">Sitemap</a>
            <a href="#" className="hover:text-teal-400 transition-colors uppercase tracking-widest">Legal</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant Bubble */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-16 h-16 rounded-2xl accent-gradient text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${chatOpen ? 'rotate-90' : ''}`}
        >
          {chatOpen ? <X size={28} /> : <Bot size={28} />}
        </button>
        <div className="absolute right-20 bottom-0 glass px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 pointer-events-none">
          Pergunte ao Camilo AI!
        </div>
      </div>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-28 right-8 w-80 md:w-96 glass rounded-[2rem] shadow-2xl z-[100] flex flex-col overflow-hidden border border-teal-500/20 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <div className="p-6 accent-gradient text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Camilo AI</h4>
                <p className="text-[10px] opacity-80 uppercase tracking-widest">Assistente Virtual</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="hover:bg-black/10 p-1 rounded-md transition-colors"><X size={18} /></button>
          </div>
          
          <div className="flex-1 h-80 overflow-y-auto p-6 space-y-4 bg-zinc-950/20">
            {chatMessages.length === 0 && (
              <p className="text-zinc-500 text-xs italic text-center py-10">Olá! Eu sou o assistente do Ricardo. Como posso te ajudar hoje?</p>
            )}
            {chatMessages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${m.role === 'user' ? 'bg-teal-500 text-white font-semibold' : 'glass border-white/5 text-zinc-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass p-3 rounded-2xl flex gap-1">
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleChatSubmit} className="p-4 bg-black/20 flex gap-2">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Digite sua dúvida..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-xs focus:outline-none focus:border-teal-500"
            />
            <button className="p-2 accent-gradient rounded-xl text-white hover:scale-105 transition-all"><Send size={16} /></button>
          </form>
        </div>
      )}
    </div>
  );
};

const Stat: React.FC<{ label: string, desc: string }> = ({ label, desc }) => (
  <div className="text-center group">
    <div className="text-3xl font-black text-white group-hover:text-teal-400 transition-colors">{label}</div>
    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">{desc}</div>
  </div>
);

const SocialIcon: React.FC<{ icon: React.ReactNode, href: string }> = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-500/40 transition-all hover-lift text-zinc-400 hover:text-teal-400">
    {icon}
  </a>
);

export default App;
