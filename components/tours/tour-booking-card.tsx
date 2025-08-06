'use client'

import { Button } from "@/components/ui/button"
import { BaseCard } from "@/components/ui/base-card"
import { useContent, useWhatsApp } from "@/hooks/useContent"
import type { Tour } from "@/types"

interface TourBookingCardProps {
  tour: Tour
}

export function TourBookingCard({ tour }: TourBookingCardProps) {
  const { getButton } = useContent()
  const { generateTourInquiry } = useWhatsApp()

  const handleReservation = () => {
    const whatsappUrl = generateTourInquiry(tour)
    window.open(whatsappUrl, '_blank')
  }

  return (
    <BaseCard>
      <div className="space-y-3">
        <Button onClick={handleReservation} className="w-full" size="lg">
          {getButton('bookNow')}
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          Consulta disponibilidad vía WhatsApp
        </p>
      </div>
    </BaseCard>
  )
}