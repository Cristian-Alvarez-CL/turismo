import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useContent } from "@/hooks/useContent"
import { useExternalLinks } from "@/hooks/useExternalLinks"
import type { ContactItemData } from "@/types"

export function useContactInfo() {
  const { getContactInfo } = useContent()
  const { createWhatsAppUrl, createEmailUrl, createTelUrl } = useExternalLinks()
  
  const contact = getContactInfo()

  const contactItems: ContactItemData[] = [
    {
      icon: MapPin,
      title: "Dirección",
      value: contact.address
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: contact.phone,
      href: createTelUrl(contact.phone)
    },
    {
      icon: Mail,
      title: "Email",
      value: contact.email,
      href: createEmailUrl(contact.email)
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      value: [contact.schedule.weekdays, contact.schedule.saturday]
    }
  ]

  const whatsappUrl = createWhatsAppUrl(contact.whatsapp, "Hola, me interesa conocer más sobre sus servicios.")

  return {
    contact,
    contactItems,
    whatsappUrl
  }
}