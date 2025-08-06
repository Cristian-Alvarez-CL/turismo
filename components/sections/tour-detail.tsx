'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useContent } from "@/hooks/useContent"
import { useTours } from "@/hooks/useTours"
import { TourGallery } from "@/components/tours/tour-gallery"
import { TourInfoCards } from "@/components/tours/tour-info-cards"
import { TourScheduleCard } from "@/components/tours/tour-schedule-card"
import { TourBookingCard } from "@/components/tours/tour-booking-card"
import { TourItineraryCard } from "@/components/tours/tour-itinerary-card"
import { TourListsSection } from "@/components/tours/tour-lists-section"
import { TourReservationPolicy } from "@/components/tours/tour-reservation-policy"
import type { TourDetailProps } from "@/types"

export function TourDetail({ tour }: TourDetailProps) {
  const { getLabel } = useContent()
  const { getTourHero } = useTours()

  // Usar imagen hero del tour si existe, sino la imagen del destino
  const heroImage = getTourHero(tour.id) || tour.imagen

  return (
    <div className="space-y-8">
      {/* Header del Tour */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2">{tour.nombre}</h1>
            {tour.edadMinima && (
              <Badge variant="secondary" className="mb-4">
                {getLabel('minimumAge')}: {tour.edadMinima} {getLabel('years')}
              </Badge>
            )}
          </div>
          
          <div className="relative h-[400px] w-full mb-4 rounded-lg overflow-hidden">
            <Image
              src={heroImage}
              alt={tour.nombre}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          
          <p className="text-justify text-lg mb-6">{tour.descripcionLarga || tour.descripcion}</p>
        </div>

        <div className="space-y-6">
          {/* Información Básica */}
          <TourInfoCards tour={tour} />

          {/* Horarios */}
          <TourScheduleCard tour={tour} />

          {/* Botón de Reserva */}
          <TourBookingCard tour={tour} />
        </div>
      </div>

      {/* Galería del Tour */}
      <TourGallery tourId={tour.id} />

      {/* Itinerario */}
      <TourItineraryCard itinerary={tour.itinerario || []} />

      {/* Incluye y No Incluye */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TourListsSection
          title={getLabel('includes')}
          items={tour.incluye || []}
          type="includes"
        />
        <TourListsSection
          title={getLabel('notIncludes')}
          items={tour.noIncluye || []}
          type="notIncludes"
        />
      </div>

      {/* Recomendaciones y Restricciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TourListsSection
          title={getLabel('recommendations')}
          items={tour.recomendaciones || []}
          type="recommendations"
        />
        <TourListsSection
          title={getLabel('notAllowed')}
          items={tour.noPermitido || []}
          type="notAllowed"
        />
      </div>

      {/* Políticas de Reservas */}
      <TourReservationPolicy />

      {/* Información Importante */}
      <TourListsSection
        title={getLabel('importantInfo')}
        items={tour.infoImportante || []}
        type="importantInfo"
        variant="warning"
      />
    </div>
  )
}