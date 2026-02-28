import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Github,
  Linkedin,
  Instagram,
  Globe,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Language, LanguageCode } from '../constants/languages';

interface NavigationProps {
  nav: {
    work: string;
    about: string;
    services: string;
    career: string;
    contact: string;
  };
  currentLang: Language;
  languages: Language[];
  langCode: string;
  setLangCode: (code: LanguageCode) => void;
  isLangOpen: boolean;
  setIsLangOpen: (open: boolean) => void;
  isRtl: boolean;
  whatsappLabel: string;
  whatsappUrl: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  nav,
  currentLang,
  languages,
  langCode,
  setLangCode,
  isLangOpen,
  setIsLangOpen,
  isRtl,
  whatsappLabel,
  whatsappUrl,
}) => {
  const langDropdownRef = useClickOutside<HTMLDivElement>(() => setIsLangOpen(false));
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#E5D5C0] origin-left z-[1000]"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <nav
        className="fixed top-0 w-full z-[100] glass h-20 flex items-center px-6 md:px-12 border-b border-white/5"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#home"
            className="text-sm font-bold uppercase tracking-[0.4em] cursor-pointer group"
          >
            RICARDO
            <span className="opacity-40 italic group-hover:opacity-100 transition-opacity">
              .CAMILO
            </span>
          </motion.a>

          <div className="hidden lg:flex gap-10 text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/60">
            <a href="#work" className="hover:text-[#E5D5C0] transition-colors">
              {nav.work}
            </a>
            <a href="#about" className="hover:text-[#E5D5C0] transition-colors">
              {nav.about}
            </a>
            <a href="#services" className="hover:text-[#E5D5C0] transition-colors">
              {nav.services}
            </a>
            <a href="#career" className="hover:text-[#E5D5C0] transition-colors">
              {nav.career}
            </a>
          </div>

          <div className="flex items-center gap-6 relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-[10px] font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full hover:border-[#E5D5C0]/40 transition-all flex items-center gap-3 bg-white/5"
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <Globe size={14} className="text-[#E5D5C0]/60" aria-hidden="true" />
              <span>{currentLang.native}</span>
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-4 w-64 glass rounded-3xl overflow-hidden accent-border z-[110] max-h-[70vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  role="listbox"
                  aria-label="Language selection"
                >
                  <div className="p-2 grid grid-cols-1">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLangCode(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex justify-between items-center rounded-2xl ${
                          langCode === l.code
                            ? 'text-[#E5D5C0] bg-white/5'
                            : 'text-[#E5D5C0]/40'
                        }`}
                        role="option"
                        aria-selected={langCode === l.code}
                      >
                        <span className={l.rtl ? 'order-2' : 'order-1'}>{l.native}</span>
                        <span className={`text-[8px] opacity-30 ${l.rtl ? 'order-1' : 'order-2'}`}>
                          {l.code}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[9px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#E5D5C0] transition-all"
            >
              {nav.contact}
            </a>
          </div>
        </div>
      </nav>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="fixed bottom-8 right-8 z-[150] w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] group transition-all"
        aria-label={whatsappLabel}
      >
        <MessageCircle size={32} aria-hidden="true" />
        <div className="absolute right-full mr-4 bg-[#0A0A0A] border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#E5D5C0] opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
          {whatsappLabel}
        </div>
      </motion.a>
    </>
  );
};

function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = React.useRef<T>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handler]);
  return ref;
}
