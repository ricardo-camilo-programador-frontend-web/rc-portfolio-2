import type { FC } from 'react';
import { memo, useEffect, useRef, useState, useCallback, useMemo } from 'react';
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

const INITIAL_VISIBLE_COUNT = 6;

const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      }
    }, { threshold: 0.1, rootMargin: '50px', ...options });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [targetRef, isIntersecting] as const;
};

export const Projects: FC<ProjectsProps> = memo(({
  title,
  subtitle,
  viewAll,
  comingSoon,
  projects,
  isRtl,
}) => {
  const [containerRef, isVisible] = useIntersectionObserver();
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleImageLoad = useCallback((imageUrl: string) => {
    setLoadedImages(prev => new Set(prev).add(imageUrl));
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + INITIAL_VISIBLE_COUNT, projects.length));
  }, [projects.length]);

  useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= projects.length) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        handleLoadMore();
      }
    }, { threshold: 0.1, rootMargin: '100px' });

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [visibleCount, projects.length, handleLoadMore]);

  const visibleProjects = useMemo(() => projects.slice(0, visibleCount), [projects, visibleCount]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-40 px-6 scroll-mt-20"
      aria-label="Portfolio section"
      style={{ contain: 'layout style paint' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20" dir={isRtl ? 'rtl' : 'ltr'}>
          <div>
            <h2 className="text-5xl md:text-7xl font-serif" style={{ willChange: 'transform' }}>
              {title} <span className="italic opacity-50">{subtitle}</span>
            </h2>
          </div>
          <a
            href="https://github.com/ricardo-camilo-programador-frontend-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
          >
            {viewAll}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={isRtl ? 'rtl' : 'ltr'}>
          {visibleProjects.map((project: Project, index: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              comingSoonLabel={comingSoon}
              isRtl={isRtl}
              isVisible={isVisible}
              loadDelay={index * 100}
              onImageLoad={handleImageLoad}
              isLoaded={loadedImages.has(project.image)}
            />
          ))}
        </div>

        {visibleCount < projects.length && (
          <div ref={loadMoreRef} className="flex justify-center mt-12">
            <div className="w-8 h-8 border-2 border-[#E5D5C0]/30 border-t-[#E5D5C0] rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
