import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  comingSoonLabel: string;
  isRtl: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  comingSoonLabel,
  isRtl,
}) => {
  if (project.comingSoon || !project.image) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="group relative aspect-[4/3] overflow-hidden rounded-sm accent-border bg-[#1A1A1A]"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/40 mb-3">
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-[#E5D5C0] mb-2">{project.title}</h3>
          <span className="text-[8px] uppercase tracking-widest text-[#E5D5C0]/30">
            {comingSoonLabel}
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5 }}
      className="group relative aspect-[4/3] overflow-hidden rounded-sm accent-border"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <img
        src={project.image}
        alt={`${project.title} - ${project.category}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/60 mb-2 block">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-[#E5D5C0] mb-3">{project.title}</h3>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#E5D5C0]">
          <span>View Project</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </div>
      </div>
    </motion.a>
  );
};
