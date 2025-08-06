import { useState } from 'react'
import type { 
  ContentData, 
  Servicio, 
  Testimonial,
  Tour,
  ContactFormData
} from '@/types'

// Importar datos JSON
import contentData from '@/data/content.json'
import serviciosData from '@/data/servicios.json'
import testimonialsData from '@/data/testimonials.json'
// Importar tours desde el nuevo hook
import { useTours } from '@/hooks/useTours'

// Hook principal para contenido del sitio
export function useContent() {
  const [content] = useState<ContentData>(contentData as ContentData)
  
  return {
    content,
    // Funciones helper para acceso rápido
    getSiteInfo: () => content.site,
    getContactInfo: () => content.contact,
    getNavigation: () => content.navigation,
    getPageContent: (page: string) => content.pages[page],
    getReservationPolicy: () => content.reservations.policy,
    getButton: (key: string) => content.buttons[key],
    getLabel: (key: string) => content.labels[key],
    getWhatsAppMessage: () => content.whatsapp.defaultMessage,
    getFooterContent: () => content.footer
  }
}

// Hook para servicios (sin cambios)
export function useServicios() {
  const [servicios] = useState<Servicio[]>(serviciosData as Servicio[])
  
  return {
    getAllServicios: (): Servicio[] => servicios,
    getServicioById: (id: number): Servicio | undefined => 
      servicios.find(s => s.id === id),
    getServiciosByType: (type?: string): Servicio[] => {
      return servicios
    }
  }
}

// Hook para testimonials (sin cambios)
export function useTestimonials() {
  const [testimonials] = useState<Testimonial[]>(testimonialsData as Testimonial[])
  
  return {
    getAllTestimonials: (): Testimonial[] => testimonials,
    getFeaturedTestimonials: (limit?: number): Testimonial[] => {
      return limit ? testimonials.slice(0, limit) : testimonials
    }
  }
}

// Hook combinado para fácil acceso (actualizado)
export function useAppData() {
  const content = useContent()
  const servicios = useServicios()
  const testimonials = useTestimonials()
  const tours = useTours() // Usar el nuevo hook de tours
  
  return {
    ...content,
    ...servicios,
    ...testimonials,
    ...tours // Incluir todas las funciones de tours
  }
}

// Hook especializado para formateo de precios
export function usePriceFormat() {
  const formatPrice = (price: number, includeText: boolean = true): string => {
    const formatted = price.toLocaleString('es-CL')
    return includeText ? `${formatted}` : formatted
  }

  const formatTourPrice = (tour: Tour): string => {
    let priceText = formatPrice(tour.precio)
    
    if (tour.precioNino) {
      priceText += ` adulto / ${tour.precioNino.toLocaleString('es-CL')} niño`
    } else {
      priceText += ' p/p'
    }
    
    return priceText
  }

  return {
    formatPrice,
    formatTourPrice
  }
}

// Hook para generar URLs de WhatsApp
export function useWhatsApp() {
  const { getContactInfo, getWhatsAppMessage } = useContent()
  
  const generateWhatsAppURL = (customMessage?: string): string => {
    const contact = getContactInfo()
    const message = customMessage || getWhatsAppMessage()
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`
  }

  const generateTourInquiry = (tour: Tour): string => {
    const message = `Hola! Me interesa conocer más sobre el ${tour.nombre}. ¿Podrían darme más información sobre disponibilidad y precios?`
    return generateWhatsAppURL(message)
  }

  const generateFormFallback = (formData: ContactFormData): string => {
    const contact = getContactInfo()
    const message = `
Hola! Me gustaría obtener más información sobre sus servicios.

*Datos de contacto:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone || 'No proporcionado'}

*Consulta:*
${formData.subject}

*Mensaje:*
${formData.message}

_Enviado desde turismomapumay.cl_
    `.trim()
    
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`
  }

  return {
    generateWhatsAppURL,
    generateTourInquiry,
    generateFormFallback
  }
}