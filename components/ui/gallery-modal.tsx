'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Image from "next/image"
import type { GalleryModalProps } from "@/types"

export function GalleryModal({
  images,
  selectedIndex,
  isOpen,
  onOpenChange,
  onPrevious,
  onNext
}: GalleryModalProps) {
  
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({})
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set())
  
  if (!images || images.length === 0) return null
  
  const currentImage = images[selectedIndex]
  if (!currentImage) return null

  // Precargar imágenes adyacentes
  useEffect(() => {
    if (!isOpen) return

    const indicesToPreload = [
      selectedIndex - 1,
      selectedIndex,
      selectedIndex + 1
    ].filter(index => index >= 0 && index < images.length)

    indicesToPreload.forEach(index => {
      if (!preloadedImages.has(index)) {
        const img = new window.Image()
        img.src = images[index].src
        img.onload = () => {
          setPreloadedImages(prev => new Set(prev).add(index))
        }
      }
    })
  }, [selectedIndex, isOpen, images, preloadedImages])

  const handleImageLoad = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: false }))
  }

  const handleImageLoadStart = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: true }))
  }

  const isLoading = loadingStates[selectedIndex] ?? true

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-black/95">
        {/* Elementos requeridos para accesibilidad */}
        <VisuallyHidden>
          <DialogTitle>
            Vista ampliada: {currentImage.title}
          </DialogTitle>
        </VisuallyHidden>
        <DialogDescription className="sr-only">
          Imagen {selectedIndex + 1} de {images.length} en la galería. 
          {currentImage.description && ` ${currentImage.description}`}
          Usa las flechas para navegar entre imágenes.
        </DialogDescription>

        <div className="relative bg-black">
          {/* Indicador de carga */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-white text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                <p className="text-sm opacity-70">Cargando imagen...</p>
              </div>
            </div>
          )}

          {/* Imagen principal con optimizaciones */}
          <div className="relative min-h-[400px] max-h-[90vh] flex items-center justify-center">
            <Image
              key={currentImage.src} // Fuerza re-render al cambiar imagen
              src={currentImage.src}
              alt={currentImage.alt || currentImage.title}
              width={1200}
              height={800}
              className={`max-w-full max-h-[90vh] object-contain mx-auto transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              quality={75} // Reducido de 90 a 75
              priority // Prioridad alta para la imagen actual
              onLoadingComplete={() => handleImageLoad(selectedIndex)}
              onLoadStart={() => handleImageLoadStart(selectedIndex)}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          
          {/* Navegación - Solo mostrar si hay más de una imagen */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 transition-all"
                onClick={onPrevious}
                aria-label="Imagen anterior"
                disabled={isLoading}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 transition-all"
                onClick={onNext}
                aria-label="Imagen siguiente"
                disabled={isLoading}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
          
          {/* Info de la imagen */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-6">
            <h3 className="text-xl font-semibold mb-1">
              {currentImage.title}
            </h3>
            {currentImage.description && (
              <p className="text-sm opacity-90 mb-2">
                {currentImage.description}
              </p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {(currentImage.tags || []).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-white/20 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs opacity-70">
                {selectedIndex + 1} de {images.length}
              </span>
            </div>
          </div>

          {/* Indicadores de navegación con teclado */}
          <div className="absolute top-4 right-4 text-white/50 text-xs">
            <span>← → para navegar</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Hook opcional para navegación con teclado
export function useGalleryKeyboardNavigation(
  isOpen: boolean,
  onPrevious: () => void,
  onNext: () => void,
  onClose: () => void
) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          onPrevious()
          break
        case 'ArrowRight':
          e.preventDefault()
          onNext()
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onPrevious, onNext, onClose])
}