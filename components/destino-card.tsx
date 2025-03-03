import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DestinoCardProps {
  destino: {
    id: number
    nombre: string
    descripcion: string
    imagen: string
    precio: number
    duracion: string
  }
}

export function DestinoCard({ destino }: DestinoCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={destino.imagen}
          alt={destino.nombre}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <CardHeader>
          <CardTitle>{destino.nombre}</CardTitle>
          <CardDescription className="line-clamp-2">{destino.descripcion}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold text-primary">${destino.precio.toLocaleString()}</span>
            <span className="text-muted-foreground">{destino.duracion}</span>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button asChild className="w-full">
            <Link href={`/destinos/${destino.id}`}>Ver Detalles</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
