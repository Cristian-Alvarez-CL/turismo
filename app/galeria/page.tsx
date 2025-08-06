'use client'

import { GaleriaGrid } from "@/components/common/galeria-grid"
import { useContent } from "@/hooks/useContent"
import { useTours } from "@/hooks/useTours"

export default function GaleriaPage() {
  const { getPageContent } = useContent()
  const { getAllGalleryImages } = useTours()
  
  const pageContent = getPageContent('galeria')
  const imagenes = getAllGalleryImages()

  // Verificar que tenemos el contenido
  if (!pageContent) {
    return <div>Cargando...</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        {pageContent.title || 'Galería de Imágenes'}
      </h1>
      <p className="text-xl text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
        {pageContent.subtitle || 'Explora la belleza de nuestros destinos a través de esta colección de imágenes cautivadoras.'}
      </p>
      
      <GaleriaGrid imagenes={imagenes} />
    </div>
  )
}