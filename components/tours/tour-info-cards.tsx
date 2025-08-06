'use client'

import { Clock, MapPin, Users, DollarSign } from "lucide-react"
import { BaseCard } from "@/components/ui/base-card"
import { useContent, usePriceFormat } from "@/hooks/useContent"
import { TourInfoCardsProps } from "@/types"

export function TourInfoCards({ tour }: TourInfoCardsProps) {
  const { getLabel } = useContent()
  const { formatPrice } = usePriceFormat()

  const cards = [
    {
      icon: Clock,
      title: getLabel('duration'),
      value: tour.duracion,
      show: true
    },
    {
      icon: MapPin,
      title: getLabel('location'),
      value: tour.ubicacion,
      show: !!tour.ubicacion
    },
    {
      icon: Users,
      title: "Mín. Participantes",
      value: tour.participantesMinimos?.toString(),
      show: !!tour.participantesMinimos
    },
    {
      icon: DollarSign,
      title: getLabel('price'),
      value: (
        <div className="space-y-1">
          <p className="font-semibold">{formatPrice(tour.precio)} {getLabel('adult')}</p>
          {tour.precioNino && (
            <p className="text-sm text-muted-foreground">
              {formatPrice(tour.precioNino)} {getLabel('child')}
            </p>
          )}
        </div>
      ),
      show: true
    }
  ].filter(card => card.show)

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <BaseCard key={index} className="text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <card.icon size={20} className="text-primary" />
              <span className="text-sm font-medium">{card.title}</span>
            </div>
            <div className="font-semibold">
              {typeof card.value === 'string' ? card.value : card.value}
            </div>
          </div>
        </BaseCard>
      ))}
    </div>
  )
}