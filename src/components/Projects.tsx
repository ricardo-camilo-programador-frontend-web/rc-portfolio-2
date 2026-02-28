import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

interface ProjectsProps {
  title: string;
  subtitle: string;
  viewAll: string;
  comingSoon: string;
  projects: Project[];
  isRtl: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({
  title,
  subtitle,
  viewAll,
  comingSoon,
  projects,
  isRtl,
}) => {
  return (
    <section id="work" className="py-40 px-6 scroll-mt-20" aria-label="Portfolio section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20" dir={isRtl ? 'rtl' : 'ltr'}>
          <div>
            <h2 className="text-5xl md:text-7xl font-serif">
              {title} <span className="italic opacity-50">{subtitle}</span>
            </h2>
          </div>
          <a
            href="https://github.com/ricardo-camilo-programador-frontend-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/60 hover:text-[#E5D5C0] transition-colors"
          >
            {viewAll}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={isRtl ? 'rtl' : 'ltr'}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              comingSoonLabel={comingSoon}
              isRtl={isRtl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
