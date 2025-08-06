"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useContent } from "@/hooks/useContent"
import { ContactForm } from "@/components/forms/contact-form"

export default function ContactoPage() {
  const { getPageContent, getContactInfo } = useContent()
  
  const pageContent = getPageContent('contacto')
  const contact = getContactInfo()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">{pageContent.title}</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
        {pageContent.subtitle}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">{pageContent.info.title}</h2>
            
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Dirección</h3>
                <p className="text-muted-foreground">{contact.address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Teléfono</h3>
                <p className="text-muted-foreground">{contact.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">{contact.email}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">{pageContent.info.schedule.title}</h3>
                <p className="text-muted-foreground">{contact.schedule.weekdays}</p>
                <p className="text-muted-foreground">{contact.schedule.saturday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}