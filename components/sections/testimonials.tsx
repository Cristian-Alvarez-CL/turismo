'use client'
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import { useContent, useTestimonials } from "@/hooks/useContent"


export function Testimonials() {

  const { getPageContent } = useContent()
  const { getAllTestimonials } = useTestimonials()

  const pageContent = getPageContent('home').testimonials
  const testimonials = getAllTestimonials()


  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{pageContent.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials .map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1200px) 40vw, 30vw"
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

