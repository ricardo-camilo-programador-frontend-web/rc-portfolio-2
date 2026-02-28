import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Linkedin, Github, Instagram } from 'lucide-react';

interface AboutProps {
  quote: string;
  bio: string;
  details: string;
  stats: {
    exp: string;
    projects: string;
    eng: string;
  };
  userPhoto: string;
  isRtl: boolean;
}

export const About: React.FC<AboutProps> = ({
  quote,
  bio,
  details,
  stats,
  userPhoto,
  isRtl,
}) => {
  const quoteParts = quote.split(' ');
  const firstWord = quoteParts[0];
  const rest = quoteParts.slice(1).join(' ');

  return (
    <section
      id="about"
      className="py-40 px-6 bg-[#0E0E0E] scroll-mt-20 overflow-hidden border-y border-white/5"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="relative group"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm accent-border relative z-10 shadow-2xl bg-[#1A1A1A]">
              <img
                src={userPhoto}
                alt="Ricardo Camilo Portrait"
                className="w-full h-full object-cover grayscale-[20%] transition-all duration-1000 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#E5D5C0]/20 -z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-[#E5D5C0]/20 -z-0" />
          </motion.div>

          <div className="space-y-16" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                {firstWord}{' '}
                <span className="italic opacity-60 font-light">{rest}</span>
              </h2>
              <p className="text-[#E5D5C0]/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                {bio}
              </p>
              <div className="flex items-center gap-3 py-4 border-y border-white/5">
                <ShieldCheck
                  size={18}
                  className="text-[#E5D5C0]/40"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/50">
                  {details}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4">
              <StatItem value={stats.exp} label="Experience" />
              <StatItem value={stats.projects} label="Handcrafted" />
              <StatItem value={stats.eng} label="Proficiency" />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
              <div className="flex gap-6">
                <SocialLink
                  icon={<Linkedin size={22} />}
                  href="https://www.linkedin.com/in/ricardo-camilo-frontend-web-developer/"
                  label="LinkedIn"
                />
                <SocialLink
                  icon={<Github size={22} />}
                  href="https://github.com/ricardo-camilo-programador-frontend-web"
                  label="GitHub"
                />
                <SocialLink
                  icon={<Instagram size={22} />}
                  href="https://instagram.com/ricardo.camilo.dev/"
                  label="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-serif font-bold text-[#E5D5C0] mb-2">
      {value}
    </div>
    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/40">
      {label}
    </div>
  </div>
);

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#E5D5C0]/40 hover:text-[#E5D5C0] transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);
