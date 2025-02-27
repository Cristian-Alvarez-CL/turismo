import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María González",
    text: "Nuestra experiencia con Turismo Mapumay fue increíble. El guía conocía perfectamente la zona y nos mostró lugares que no hubiéramos descubierto por nuestra cuenta.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    text: "El tour al volcán superó todas nuestras expectativas. La organización fue impecable y el paisaje simplemente espectacular.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Ana Martínez",
    text: "Viajamos en familia y fue una experiencia inolvidable. Los niños disfrutaron mucho y las actividades estaban perfectamente adaptadas para todas las edades.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">&ldquo;{testimonial.text}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

