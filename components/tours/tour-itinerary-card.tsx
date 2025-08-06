'use client'

import { BaseCard } from "@/components/ui/base-card"
import { useContent } from "@/hooks/useContent"
import { TourItineraryCardProps } from "@/types"


export function TourItineraryCard({ itinerary }: TourItineraryCardProps) {
  const { getLabel } = useContent()

  if (!itinerary || itinerary.length === 0) {
    return null
  }

  return (
    <BaseCard title={getLabel('itinerary')}>
      <ul className="space-y-2">
        {itinerary.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="font-semibold text-primary min-w-6">{index + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </BaseCard>
  )
}