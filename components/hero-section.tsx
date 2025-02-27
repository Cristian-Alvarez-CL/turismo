import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const imageHero = "/images/hero/mapumay_rectangular.jpeg"

export function HeroSection() {
  return (
    <section className="w-full relative h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={ imageHero }
          alt="Paisaje turístico de Mapumay"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay transition-colors duration-300"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Descubre la Magia de Mapumay</h1>
        <p className="text-xl md:text-2xl mb-8">Experiencias únicas en los destinos más hermosos</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/destinos">Ver Destinos</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

