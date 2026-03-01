import type { FC } from 'react'
import type { Project } from '../types'
import { ArrowUpRight, ZoomIn } from 'lucide-react'
import { memo, useCallback, useEffect, useState } from 'react'

interface ProjectCardProps {
  project: Project
  comingSoonLabel: string
  isRtl: boolean
  isVisible: boolean
  loadDelay: number
  onImageLoad: (imageUrl: string) => void
  onOpenModal: (image: string, title: string, category: string) => void
}

const optimizeImageUrl = (url: string): string => {
  if (url.startsWith('https://raw.githubusercontent.com')) {
    return `${url}?format=webp`
  }
  return url
}

const generateSrcSet = (baseUrl: string): string => {
  if (baseUrl.startsWith('https://raw.githubusercontent.com')) {
    const base = `${baseUrl}?format=webp`
    return `${base} 400w, ${base} 800w, ${base} 1200w`
  }
  return `${baseUrl} 400w, ${baseUrl} 800w`
}

export const ProjectCard: FC<ProjectCardProps> = memo(
  ({ project, comingSoonLabel, isRtl, isVisible, loadDelay, onImageLoad, onOpenModal }) => {
    const [imageError, setImageError] = useState(false)

    useEffect(() => {
      if (isVisible && !project.comingSoon && project.image) {
        const timer = setTimeout(() => {
          onImageLoad(project.image)
        }, loadDelay)
        return () => clearTimeout(timer)
      }
    }, [isVisible, loadDelay, project.comingSoon, project.image, onImageLoad])

    const handleImageLoad = useCallback(() => {
      if (project.image) {
        onImageLoad(project.image)
      }
    }, [project.image, onImageLoad])

    const cardProps = {
      className:
        'group relative aspect-[4/3] overflow-hidden rounded-sm accent-border fade-in-on-scroll -translate-y-1 transition-transform duration-300 contain-layout focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D5C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]',
      dir: isRtl ? 'rtl' : ('ltr' as const),
      style: {
        contentVisibility: 'auto',
        containIntrinsicSize: '400px 300px',
      } as React.CSSProperties,
      role: 'article' as const,
    }

    if (project.comingSoon || !project.image) {
      return (
        <article className={cardProps.className} dir={cardProps.dir} style={cardProps.style}>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/70 mb-3">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-[#E5D5C0] mb-2">{project.title}</h3>
            <span className="text-[8px] uppercase tracking-widest text-[#E5D5C0]/60">
              {comingSoonLabel}
            </span>
          </div>
        </article>
      )
    }

    const optimizedImage = optimizeImageUrl(project.image)
    const srcSet = generateSrcSet(project.image)

    return (
      <a
        {...cardProps}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} project in ${project.category} category`}
      >
        {!imageError && project.image && (
          <>
            {project.year && (
              <span className="absolute top-2 right-2 text-[8px] bg-[#E5D5C0]/90 text-[#0A0A0A] px-2 py-1 rounded font-bold z-10">
                {project.year}
              </span>
            )}

            <button
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                onOpenModal(project.image, project.title, project.category)
              }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label={`View full size image of ${project.title}`}
            >
              <div className="bg-[#E5D5C0]/90 rounded-full p-3 hover:scale-110 transition-transform">
                <ZoomIn size={20} className="text-[#0A0A0A]" />
              </div>
            </button>

            <img
              src={optimizedImage}
              srcSet={srcSet}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt=""
              className="object-cover w-full h-full transition-opacity duration-300"
              loading="lazy"
              decoding="async"
              width={400}
              height={300}
              onLoad={handleImageLoad}
              onError={() => setImageError(true)}
              fetchPriority="low"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent transition-opacity duration-300"
              aria-hidden="true"
            />
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/80 mb-2 block">
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-[#E5D5C0] mb-3">{project.title}</h3>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#E5D5C0]">
            <span>View Project</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </div>
        </div>
      </a>
    )
  },
)

ProjectCard.displayName = 'ProjectCard'
