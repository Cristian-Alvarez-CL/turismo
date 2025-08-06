'use client'

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { GalleryModal } from "@/components/ui/gallery-modal"
import type { GaleriaGridProps } from "@/types"

export function GaleriaGrid({ imagenes }: GaleriaGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<string>('todas')

  // Verificar que imagenes es un array válido
  if (!imagenes || !Array.isArray(imagenes)) {
    return <div>No hay imágenes disponibles</div>
  }

  // Obtener categorías únicas desde tags
  const categories = Array.from(new Set(
    imagenes
      .flatMap(img => img.tags || [])
      .filter(Boolean)
  ))

  // Filtrar imágenes según la categoría seleccionada
  const filteredImages = selectedFilter === 'todas' 
    ? imagenes 
    : imagenes.filter(img => img.tags?.includes(selectedFilter))

  const handleImageClick = (index: number) => {
    // Encontrar el índice real en el array filtrado
    const clickedImage = filteredImages[index]
    const realIndex = imagenes.findIndex(img => img.id === clickedImage.id)
    setSelectedImageIndex(realIndex !== -1 ? realIndex : index)
    setIsModalOpen(true)
  }

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? imagenes.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev === imagenes.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      {/* Filtros por categoría */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Badge 
          variant={selectedFilter === 'todas' ? "default" : "outline"} 
          className="cursor-pointer"
          onClick={() => setSelectedFilter('todas')}
        >
          Todas
        </Badge>
        {categories.map((category) => (
          <Badge 
            key={category} 
            variant={selectedFilter === category ? "default" : "secondary"} 
            className="cursor-pointer capitalize"
            onClick={() => setSelectedFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((imagen, index) => (
          <div
            key={imagen.id || index}
            className="relative cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative aspect-square">
              <Image
                src={imagen.src || "/placeholder.svg"}
                alt={imagen.alt || imagen.title || 'Imagen de galería'}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
            
            {/* Información overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-semibold text-sm">
                {imagen.title || 'Sin título'}
              </h3>
              {imagen.tags && imagen.tags.length > 0 && (
                <Badge variant="secondary" className="mt-1 capitalize text-xs">
                  {imagen.tags[0]}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal con navegación usando el componente reutilizable */}
      <GalleryModal
        images={imagenes}
        selectedIndex={selectedImageIndex}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  )
}