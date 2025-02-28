import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    title: "Lago Todos Los Santos",
    description: "Disfruta de las aguas cristalinas y paisajes impresionantes.",
    image: "/images/destinatios/lago-todos-los-santos.png",
    price: "$45.000",
    duration: "1 día",
  },
  {
    id: 2,
    title: "Reserva Biológica Huilo Huilo",
    description: "Disfruta de una excursión única en medio de la patagonia norte con vistas sorprendentes.",
    image: "/images/destinatios/huilo-huilo.png",
    price: "$65.000",
    duration: "2 días",
  },
  {
    id: 3,
    title: "Termas Pucón Indomito",
    description: "Relájate en aguas termales rodeado de naturaleza. Con entornos únicos.",
    image: "/images/destinatios/termas-pucon-indomito.png",
    price: "$55.000",
    duration: "1 día",
  },
]

export function FeaturedDestinations() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Destinos Destacados</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{destination.title}</CardTitle>
              <CardDescription>{destination.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span className="font-bold text-primary">{destination.price}</span>
                <span className="text-muted-foreground">{destination.duration}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Link href={`/destinos/${destination.id}`} className="w-full">
                  Ver Detalles
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          <Link href="/destinos">Ver Todos los Destinos</Link>
        </Button>
      </div>
    </section>
  )
}

