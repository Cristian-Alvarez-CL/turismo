import { useState } from 'react'
import toursData from '@/data/tours.json'
import type { Tour, GaleriaImage, FeaturedTour, PopularTour, BaseTourInfo } from '@/types'

interface ToursData {
  tours: Tour[]
  categories: {
    [key: string]: string
  }
}

export function useTours() {
  const [data] = useState<ToursData>(toursData as ToursData)

  // Métodos existentes (sin cambios)
  const getAllTours = (): Tour[] => {
    return data.tours
  }

  const getTourById = (id: number): Tour | undefined => {
    return data.tours.find(tour => tour.id === id)
  }

  // NUEVOS MÉTODOS que retornan BaseTourInfo (solucionan el error de tipos)
  const getToursAsBasic = (): BaseTourInfo[] => {
    return data.tours.map(tour => ({
      id: tour.id,
      nombre: tour.nombre,
      descripcion: tour.descripcion,
      imagen: tour.imagen,
      precio: tour.precio,
      precioNino: tour.precioNino,
      duracion: tour.duracion
    }))
  }

  const getFeaturedToursAsBasic = (): BaseTourInfo[] => {
    return data.tours
      .filter(tour => tour.featured === true)
      .map(tour => ({
        id: tour.id,
        nombre: tour.nombre,
        descripcion: tour.descripcion,
        imagen: tour.imagen,
        precio: tour.precio,
        precioNino: tour.precioNino,
        duracion: tour.duracion
      }))
  }

  // Métodos actualizados para retornar tipos específicos
  const getFeaturedTours = (): FeaturedTour[] => {
    return data.tours
      .filter(tour => tour.featured === true)
      .map(tour => ({
        id: tour.id,
        nombre: tour.nombre,
        descripcion: tour.descripcion,
        imagen: tour.imagen,
        precio: tour.precio,
        precioNino: tour.precioNino,
        duracion: tour.duracion,
        featured: true as const
      }))
  }

  const getPopularTours = (): PopularTour[] => {
    return data.tours.slice(0, 5).map(tour => ({
      id: tour.id,
      nombre: tour.nombre
    }))
  }

  // Métodos de galería (sin cambios)
  const getAllGalleryImages = (): GaleriaImage[] => {
    const images: GaleriaImage[] = []
    
    data.tours.forEach(tour => {
      if (tour.galeria) {
        images.push(...tour.galeria.map(img => ({
          ...img,
          tourId: tour.id
        })))
      }
    })
    
    return images
  }

  const getImagesByTag = (tag: string): GaleriaImage[] => {
    return getAllGalleryImages().filter(img => img.tags.includes(tag))
  }

  const getCategories = () => {
    return data.categories
  }

  const getTourGallery = (tourId: number): GaleriaImage[] => {
    const tour = getTourById(tourId)
    return tour?.galeria || []
  }

  const getTourHero = (tourId: number): string => {
    const tour = getTourById(tourId)
    return tour?.imagen || ''
  }

  const getFeaturedImages = (limit: number = 12): GaleriaImage[] => {
    const images: GaleriaImage[] = []
    
    getFeaturedTours().forEach(tour => {
      const fullTour = getTourById(tour.id)
      if (fullTour?.galeria) {
        images.push(...fullTour.galeria.slice(0, 3).map(img => ({
          ...img,
          tourId: tour.id
        })))
      }
    })
    
    return images.slice(0, limit)
  }

  return {
    // Tours completos (para TourDetail)
    getAllTours,
    getTourById,
    
    // Tours como BaseTourInfo (para DestinoCard - SOLUCIONA EL ERROR)
    getToursAsBasic,
    getFeaturedToursAsBasic,
    
    // Tours con tipos específicos
    getFeaturedTours, // FeaturedTour[]
    getPopularTours, // PopularTour[]
    
    // Galería
    getAllGalleryImages,
    getImagesByTag,
    getTourGallery,
    getTourHero,
    getFeaturedImages,
    
    // Categorías
    getCategories,
    
    // Helpers
    hasTourGallery: (tourId: number) => getTourGallery(tourId).length > 0
  }
}

// Hook para optimización de imágenes (sin cambios)
export function useImageOptimization() {
  const getFillImageProps = (image: GaleriaImage) => {
    return {
      src: image.src,
      alt: image.title,
      title: image.description,
      fill: true,
      loading: "lazy" as const,
      className: "object-cover",
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    }
  }

  const getModalImageProps = (image: GaleriaImage) => {
    return {
      src: image.src,
      alt: image.title,
      title: image.description,
      width: 1200,
      height: 800,
      loading: "lazy" as const,
      className: "max-w-full max-h-[90vh] object-contain mx-auto"
    }
  }

  return {
    getFillImageProps,
    getModalImageProps
  }
}