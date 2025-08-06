// src/lib/email.ts
import type { ContactFormData, EmailResponse } from '@/types'

// Configuración de EmailJS (servicio gratuito para enviar emails)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

// Función para cargar EmailJS dinámicamente
async function loadEmailJS() {
  if (typeof window === 'undefined') return null
  
  try {
    const emailjs = await import('@emailjs/browser')
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.default.init(EMAILJS_PUBLIC_KEY)
    }
    return emailjs.default
  } catch (error) {
    console.error('Error loading EmailJS:', error)
    return null
  }
}

export async function sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
  try {
    // Validar datos requeridos
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        success: false,
        message: 'Por favor completa todos los campos requeridos.'
      }
    }

    // Verificar si EmailJS está configurado
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS no está configurado completamente')
      return {
        success: false,
        message: 'Servicio de email no disponible. Te redirigiremos a WhatsApp.'
      }
    }

    // Cargar EmailJS
    const emailjs = await loadEmailJS()
    if (!emailjs) {
      return {
        success: false,
        message: 'Error al cargar el servicio de email. Te redirigiremos a WhatsApp.'
      }
    }

    // Preparar parámetros para el template de email
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'No proporcionado',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
      to_email: 'info@turismomapumay.cl',
      // Agregar fecha y hora
      date: new Date().toLocaleString('es-CL', {
        timeZone: 'America/Santiago',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    // Enviar email usando EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      return {
        success: true,
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.'
      }
    } else {
      throw new Error('Error en el envío')
    }

  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      message: 'Error al enviar el mensaje. Te redirigiremos a WhatsApp para continuar.'
    }
  }
}

// Función para generar URL de WhatsApp con mensaje preformateado
export function generateWhatsAppURL(formData: ContactFormData, whatsappNumber: string): string {
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
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
}

// Función para generar mensaje de consulta de tour
export function generateTourInquiryMessage(tourName: string, tourPrice?: number): string {
  let message = `Hola! Me interesa conocer más sobre el *${tourName}*.`
  
  if (tourPrice) {
    message += `\n\nVi que el precio es $${tourPrice.toLocaleString('es-CL')}.`
  }
  
  message += `\n\n¿Podrían darme más información sobre:
• Disponibilidad de fechas
• Qué incluye exactamente el tour
• Forma de pago y reserva
• Cualquier requisito especial

¡Gracias!

_Consultado desde turismomapumay.cl_`
  
  return message
}

// Función alternativa para envío por API Route (para implementación futura)
export async function sendEmailViaAPI(formData: ContactFormData): Promise<EmailResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()
    
    return {
      success: response.ok,
      message: result.message || 'Error al enviar el mensaje'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Error de conexión. Intenta nuevamente.'
    }
  }
}