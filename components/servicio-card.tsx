import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Map, Hotel, Bus, Mountain, Utensils, Landmark } from "lucide-react"

interface ServicioCardProps {
  servicio: {
    id: number
    nombre: string
    descripcion: string
    icono: string
    caracteristicas: string[]
  }
}

const iconos = {
  Map,
  Hotel,
  Bus,
  Mountain,
  Utensils,
  Landmark,
}

export function ServicioCard({ servicio }: ServicioCardProps) {
  const IconComponent = iconos[servicio.icono as keyof typeof iconos]

  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle>{servicio.nombre}</CardTitle>
        <CardDescription>{servicio.descripcion}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {servicio.caracteristicas.map((caracteristica, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-primary" />
              <span>{caracteristica}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

