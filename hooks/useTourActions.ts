import { useWhatsApp, useContent } from "@/hooks/useContent"
import { useExternalLinks } from "@/hooks/useExternalLinks"
import type { Tour, BaseTourInfo } from "@/types"

export function useTourActions() {
  const { generateTourInquiry } = useWhatsApp()
  const { getContactInfo } = useContent()
  const { createWhatsAppUrl, openExternal } = useExternalLinks()

  const bookTour = (tour: Tour) => {
    const whatsappUrl = generateTourInquiry(tour)
    openExternal(whatsappUrl)
  }

  const bookBasicTour = (tour: BaseTourInfo) => {
    // Para tours básicos, crear mensaje manualmente
    const contact = getContactInfo()
    
    const message = `Hola! Me interesa conocer más sobre el *${tour.nombre}*.

Vi que el precio es $${tour.precio.toLocaleString('es-CL')}.

¿Podrían darme más información sobre:
• Disponibilidad de fechas
• Qué incluye exactamente el tour
• Forma de pago y reserva
• Cualquier requisito especial

¡Gracias!

_Consultado desde turismomapumay.cl_`
    
    const whatsappUrl = createWhatsAppUrl(contact.whatsapp, message)
    openExternal(whatsappUrl)
  }

  const shareTour = async (tour: BaseTourInfo | Tour) => {
    const url = `${window.location.origin}/destinos/${tour.id}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: tour.nombre,
          text: tour.descripcion,
          url: url
        })
      } catch (error) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(url)
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(url)
    }
  }

  return {
    bookTour, // Para Tour completo
    bookBasicTour, // Para BaseTourInfo
    shareTour // Para ambos tipos
  }
}