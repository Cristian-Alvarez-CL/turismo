'use client'

import { useState } from "react"
import Image from "next/image"
import { Grid3X3 } from "lucide-react"
import { GalleryModal } from "@/components/ui/gallery-modal"
import { useTours, useImageOptimization } from "@/hooks/useTours"
import { TourGalleryProps } from "@/types"

export function TourGallery({ tourId, showTitle = true, maxImages = 6 }: TourGalleryProps) {
  const { getTourGallery, hasTourGallery } = useTours()
  const { getFillImageProps } = useImageOptimization()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const allImages = getTourGallery(tourId)
  const displayImages = allImages.slice(0, maxImages)
  const hasImages = hasTourGallery(tourId)

  if (!hasImages || displayImages.length === 0) {
    return null
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="space-y-4">
      {showTitle && (
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Galería del Tour</h3>
          {allImages.length > maxImages && (
            <p className="text-sm text-muted-foreground">
              Mostrando {displayImages.length} de {allImages.length} fotos
            </p>
          )}
        </div>
      )}

      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayImages.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => handleImageClick(index)}
          >
            <Image
              {...getFillImageProps(image)}
              alt={image.alt || image.title || `Imagen ${index + 1} de la galería del tour`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium">{image.title}</p>
            </div>
            
            {/* Indicador de más fotos en la última imagen */}
            {index === displayImages.length - 1 && allImages.length > maxImages && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-white text-center">
                  <Grid3X3 className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">
                    +{allImages.length - maxImages} más
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal con navegación usando el componente reutilizable */}
      <GalleryModal
        images={allImages}
        selectedIndex={selectedImageIndex}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  )
}