'use client'

import { Calendar } from "lucide-react"
import { useContent } from "@/hooks/useContent"
import { TourScheduleCardProps } from "@/types"
import { BaseCard } from "../ui/base-card"


export function TourScheduleCard({ tour }: TourScheduleCardProps) {
  const { getLabel } = useContent()

  if (!tour.salida && !tour.regreso) {
    return null
  }

  const title = (
    <div className="flex items-center gap-2">
      <Calendar className="h-5 w-5" />
      Horarios
    </div>
  )

  return (
    <BaseCard title={title}>
      <div className="space-y-2">
        {tour.salida && (
          <p><span className="font-semibold">{getLabel('departure')}:</span> {tour.salida}</p>
        )}
        {tour.regreso && (
          <p><span className="font-semibold">Regreso:</span> {tour.regreso}</p>
        )}
      </div>
    </BaseCard>
  )
}