'use client'
import { ServicioCard } from "@/components/cards/servicio-card"
import { useContent, useServicios } from "@/hooks/useContent"

export default function ServiciosPage() {
  const { getPageContent } = useContent()
  const { getAllServicios } = useServicios()

  const pageContent = getPageContent('servicios')
  const servicios = getAllServicios()
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">{pageContent.title}</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
        {pageContent.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio) => (
          <ServicioCard key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </div>
  )
}