"use client"

import { MessageCircle } from "lucide-react"

interface WhatsappIconProps {
  phoneNumber: string
  message?: string
}

export function WhatsappIcon({ phoneNumber, message = "Hola" }: WhatsappIconProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}

