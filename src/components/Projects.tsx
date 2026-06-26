import type { FC } from 'react'
import type { Project } from '../types'
import { lazy, memo, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { env } from '../constants/env'
import { ProjectCard } from './ProjectCard'

const ImageModal = lazy(() => import('./ImageModal').then(m => ({ default: m.ImageModal })))

interface ProjectsProps {
  title: string
  subtitle: string
  viewAll: string
  viewProject: string
  comingSoon: string
  projects: Array<Project>
  isRtl: boolean
}

const INITIAL_VISIBLE_COUNT = 6

export const Projects: FC<ProjectsProps> = memo(
  ({ title, subtitle, viewAll, viewProject, comingSoon, projects, isRtl }) => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
    const loadMoreRef = useRef<HTMLDivElement | null>(null)

    const [modalState, setModalState] = useState<{
      isOpen: boolean
      image: string
      title: string
      category: string
    }>({ isOpen: false, image: '', title: '', category: '' })

    const handleLoadMore = useCallback(() => {
      setVisibleCount(prev => Math.min(prev + INITIAL_VISIBLE_COUNT, projects.length))
    }, [projects.length])

    const handleOpenModal = useCallback((image: string, title: string, category: string) => {
      setModalState({ isOpen: true, image, title, category })
    }, [])

    const handleCloseModal = useCallback(() => {
      setModalState(prev => ({ ...prev, isOpen: false }))
    }, [])

    useEffect(() => {
      if (!loadMoreRef.current || visibleCount >= projects.length) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            handleLoadMore()
          }
        },
        { threshold: 0.1, rootMargin: '100px' },
      )

      observer.observe(loadMoreRef.current)
      return () => observer.disconnect()
    }, [visibleCount, projects.length, handleLoadMore])

    const visibleProjects = useMemo(() => projects.slice(0, visibleCount), [projects, visibleCount])

    return (
      <section
        id="work"
        className="py-40 px-6 scroll-mt-20"
        aria-label="Portfolio section"
        style={{ contain: 'layout style paint' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-20" dir={isRtl ? 'rtl' : 'ltr'}>
            <div>
              <h2 className="text-5xl md:text-7xl font-serif">
                {title} <span className="italic opacity-50">{subtitle}</span>
              </h2>
            </div>
            <a
              href={env.githubReposUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#E5D5C0]/80 hover:text-[#E5D5C0] transition-colors"
            >
              {viewAll}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden={true}
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {visibleProjects.map((project: Project, index: number) => (
              <ProjectCard
                key={project.id}
                project={project}
                comingSoonLabel={comingSoon}
                viewProjectLabel={viewProject}
                isRtl={isRtl}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>

          {visibleCount < projects.length && (
            <div ref={loadMoreRef} className="flex justify-center mt-12">
              <div className="w-8 h-8 border-2 border-[#E5D5C0]/30 border-t-[#E5D5C0] rounded-full animate-spin" />
            </div>
          )}
        </div>

        <Suspense fallback={null}>
          <ImageModal
            image={modalState.image}
            alt={modalState.title}
            isOpen={modalState.isOpen}
            onClose={handleCloseModal}
            title={modalState.title}
            category={modalState.category}
          />
        </Suspense>
      </section>
    )
  },
)

Projects.displayName = 'Projects'
