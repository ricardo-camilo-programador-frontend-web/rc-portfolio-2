import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  badge: string;
  userPhoto: string;
  isRtl: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  cta,
  badge,
  userPhoto,
  isRtl,
}) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center relative overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={userPhoto}
          alt=""
          className="w-full h-full object-cover grayscale opacity-[0.05] scale-110 blur-[2px]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#E5D5C0]/10 bg-white/5 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/80">
            {badge}
          </span>
        </div>

        <h1 className="text-6xl md:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-10">
          <span className="text-gradient">{title}</span>{' '}
          <br />
          <span className="italic font-light opacity-60 text-[#E5D5C0]">
            {subtitle}
          </span>
        </h1>

        <p
          className="max-w-xl mx-auto text-[#E5D5C0]/40 text-xs md:text-sm uppercase tracking-[0.2em] font-medium leading-relaxed mb-16 px-4"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {description}
        </p>

        <div className="flex flex-col items-center gap-8">
          <a
            href="#contact"
            className="px-12 py-5 rounded-full border border-[#E5D5C0] text-[#0A0A0A] bg-[#E5D5C0] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#E5D5C0] transition-all mb-8 shadow-2xl flex items-center gap-3"
          >
            <MessageCircle size={18} aria-hidden="true" /> {cta}
          </a>
          <motion.a
            href="#services"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-24 bg-gradient-to-b from-[#E5D5C0]/40 to-transparent block cursor-pointer"
            aria-label="Scroll to services"
          />
        </div>
      </motion.div>
    </section>
  );
};
