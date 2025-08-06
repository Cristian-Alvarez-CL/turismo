'use client'

import { FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useContent } from "@/hooks/useContent"

export function TourReservationPolicy() {
  const { getReservationPolicy } = useContent()
  const reservationPolicy = getReservationPolicy()

  return (
    <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-600">
          <FileText className="h-5 w-5" />
          {reservationPolicy.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">💰</span>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Forma de Pago</h4>
              <p className="text-sm">{reservationPolicy.deposit}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">⏰</span>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Política de Cancelación</h4>
              <p className="text-sm">{reservationPolicy.cancellation}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">🌦️</span>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Condiciones Climáticas</h4>
              <p className="text-sm mb-2">{reservationPolicy.weather}</p>
              <p className="text-sm">{reservationPolicy.rain}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}