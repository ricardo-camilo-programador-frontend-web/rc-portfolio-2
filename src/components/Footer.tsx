import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/40">
          © {currentYear} Ricardo Camilo. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ricardo-camilo-programador-frontend-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5D5C0]/40 hover:text-[#E5D5C0] transition-colors flex items-center gap-2"
            aria-label="GitHub Profile"
          >
            <Github size={16} aria-hidden="true" />
            <span className="text-[9px] font-bold uppercase tracking-widest">GitHub</span>
          </a>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full border border-[#E5D5C0]/20 flex items-center justify-center text-[#E5D5C0]/60 hover:text-[#E5D5C0] hover:border-[#E5D5C0] transition-all"
            aria-label="Scroll to top"
          >
            <ChevronUp size={18} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
