'use client'

import type React from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useContent } from "@/hooks/useContent";
import { ContactForm } from "@/components/forms/contact-form"
import { ContactInfoList } from "@/components/ui/contact-item"

const contact = {
  id: 1,
  direccion: "General Urrutia 436, Pucón, Chile",
  telefono: "+56 9 8945 68 16",
  email: "info@turismomapumay.cl",
};

export function ContactSection() {
  const { getContactInfo } = useContent()
  const contact = getContactInfo()

  const contactItems = [
    {
      icon: MapPin,
      title: "Dirección",
      value: contact.address
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: contact.phone,
      href: `tel:${contact.phone}`
    },
    {
      icon: Mail,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      value: [contact.schedule.weekdays, contact.schedule.saturday]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30" id="contacto">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte a planificar tu próxima aventura. 
            No dudes en contactarnos para cualquier consulta o reserva.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-start">
          
          {/* Formulario - Más ancho */}
          <div className="xl:col-span-3">
            <ContactForm />
          </div>

          {/* Información de contacto - Más compacta */}
          <div className="xl:col-span-2">
            <div className="bg-card rounded-xl p-8 shadow-lg border">
              <h3 className="text-2xl font-semibold mb-8 text-center xl:text-left">
                Información de Contacto
              </h3>
              
              <ContactInfoList 
                items={contactItems} 
                size="md"
                className="space-y-6"
              />
              
              {/* Call to action adicional */}
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-center text-muted-foreground">
                  <span className="font-semibold text-primary">¿Prefieres WhatsApp?</span>
                  <br />
                  También puedes escribirnos directamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}