import Image from "next/image"
import { Calendar, Clock, MapPin, Users, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TourProps {
  id: number
  nombre: string
  descripcion: string
  descripcionLarga: string
  imagen: string
  precio: number
  duracion: string
  ubicacion: string
  participantes: string
  fechasDisponibles: string[]
  incluye: string[]
  noIncluye: string[]
  recomendaciones: string[]
}

export function TourDetail({ tour }: { tour: TourProps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{tour.nombre}</h1>
        <div className="relative h-[400px] w-full mb-4">
          <Image
            src={tour.imagen || "/placeholder.svg"}
            alt={tour.nombre}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <p className="text-lg mb-6">{tour.descripcionLarga}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Clock size={20} />
              <CardTitle>Duración</CardTitle>
            </CardHeader>
            <CardContent>{tour.duracion}</CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <MapPin size={20} />
              <CardTitle>Ubicación</CardTitle>
            </CardHeader>
            <CardContent>{tour.ubicacion}</CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Users size={20} />
              <CardTitle>Participantes</CardTitle>
            </CardHeader>
            <CardContent>{tour.participantes}</CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center space-x-2">
              <DollarSign size={20} />
              <CardTitle>Precio</CardTitle>
            </CardHeader>
            <CardContent>${tour.precio.toLocaleString()} CLP</CardContent>
          </Card>
        </div>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Fechas Disponibles</CardTitle>
            <CardDescription>Selecciona una fecha para tu aventura</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {tour.fechasDisponibles.map((fecha, index) => (
                <Button key={index} variant="outline">
                  <Calendar className="mr-2 h-4 w-4" /> {fecha}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Reservar Ahora</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Qué incluye</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {tour.incluye.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Qué no incluye</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {tour.noIncluye.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recomendaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {tour.recomendaciones.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}