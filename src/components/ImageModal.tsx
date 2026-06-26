import type { FC } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, ZoomIn, ZoomOut } from 'lucide-react'
import { Fragment, memo, useCallback, useEffect, useState } from 'react'

interface ImageModalProps {
  image: string
  alt: string
  isOpen: boolean
  onClose: () => void
  title?: string
  category?: string
}

export const ImageModal: FC<ImageModalProps> = memo(
  ({ image, alt, isOpen, onClose, title, category }) => {
    const [zoom, setZoom] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [startPos, setStartPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
      if (zoom <= 1) return
      const preventScroll = (e: TouchEvent) => {
        e.preventDefault()
      }
      document.addEventListener('touchmove', preventScroll, { passive: false })
      return () => document.removeEventListener('touchmove', preventScroll)
    }, [zoom])

    const handleWheel = useCallback((e: React.WheelEvent) => {
      e.preventDefault()
      setZoom(prev => Math.min(Math.max(prev - e.deltaY * 0.001, 1), 3))
    }, [])

    const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
        if (zoom <= 1) return
        setIsDragging(true)
        setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y })
      },
      [zoom, position],
    )

    const handleMouseMove = useCallback(
      (e: React.MouseEvent) => {
        if (!isDragging || zoom <= 1) return
        setPosition({
          x: e.clientX - startPos.x,
          y: e.clientY - startPos.y,
        })
      },
      [isDragging, zoom, startPos],
    )

    const handleMouseUp = useCallback(() => {
      setIsDragging(false)
    }, [])

    const handleResetZoom = useCallback(() => {
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }, [])

    const handleClose = useCallback(() => {
      handleResetZoom()
      onClose()
    }, [handleResetZoom, onClose])

    useEffect(() => {
      if (!isOpen) return

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose()
        }
      }

      window.addEventListener('keydown', handleEscape)

      return () => {
        window.removeEventListener('keydown', handleEscape)
      }
    }, [isOpen, handleClose])

    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          open={isOpen}
          className="relative z-50 focus:outline-none"
          onClose={handleClose}
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-sm" aria-hidden="true" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative flex flex-col items-center justify-center w-full max-w-[95vw] h-[calc(100vh-2rem)] overflow-hidden">
                {title && (
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
                    <div className="text-[#E5D5C0]">
                      <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
                      {category && (
                        <p className="text-[8px] uppercase tracking-widest opacity-70">
                          {category}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 bg-[#E5D5C0]/20 hover:bg-[#E5D5C0]/40 rounded-full transition-colors"
                      aria-label="Close modal"
                      type="button"
                    >
                      <X size={24} className="text-[#E5D5C0]" />
                    </button>
                  </div>
                )}

                {/* biome-ignore lint/a11y/noStaticElementInteractions: modal backdrop click-to-close surface */}
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: keyboard handled by close button and Esc handler */}
                <div
                  className="flex-1 flex items-center justify-center w-full overflow-hidden"
                  onClick={e => e.stopPropagation()}
                  onWheel={handleWheel}
                >
                  <img
                    src={image}
                    alt={alt}
                    className="max-w-full max-h-full object-contain transition-transform duration-200"
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                      cursor: zoom > 1 ? 'grab' : 'default',
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#E5D5C0]/20 backdrop-blur-sm px-4 py-3 rounded-full mb-4">
                  <button
                    onClick={() => setZoom(prev => Math.max(prev - 0.5, 1))}
                    className="p-2 hover:bg-[#E5D5C0]/40 rounded-full transition-colors"
                    aria-label="Zoom out"
                    type="button"
                  >
                    <ZoomOut size={20} className="text-[#E5D5C0]" />
                  </button>
                  <span className="text-[#E5D5C0] text-sm font-mono w-16 text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom(prev => Math.min(prev + 0.5, 3))}
                    className="p-2 hover:bg-[#E5D5C0]/40 rounded-full transition-colors"
                    aria-label="Zoom in"
                    type="button"
                  >
                    <ZoomIn size={20} className="text-[#E5D5C0]" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    )
  },
)

ImageModal.displayName = 'ImageModal'
