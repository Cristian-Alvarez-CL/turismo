import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const imageHero = "/images/mapumay/ocaso-sin-agua.png"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={ imageHero }
        alt="Paisaje turístico de Mapumay"
        fill
        className="object-contain"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> {/* Overlay con transparencia */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Descubre la Magia de Mapumay</h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Experiencias únicas en los destinos más hermosos</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="outline" className="bg-primary hover:bg-primary/90">
            <Link href="/destinos">Ver Destinos</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-primary text-white hover:bg-primary/20">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}    