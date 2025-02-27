"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    alert("Gracias por contactarnos. Nos comunicaremos contigo pronto.")
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="contacto">
      <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Envíanos un Mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="¿En qué podemos ayudarte?"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>

          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Dirección</h4>
              <p className="text-muted-foreground">Av. Principal 123, Puerto Varas, Chile</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Teléfono</h4>
              <p className="text-muted-foreground">+56 9 1234 5678</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-primary mt-1" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">info@turismomapumay.cl</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-medium mb-2">Horario de Atención</h4>
            <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

