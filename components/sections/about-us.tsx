'use client'
import { useContent } from "@/hooks/useContent"
import Image from "next/image"

export function AboutUs() {
  const { getPageContent } = useContent()
  const aboutContent = getPageContent('home').aboutUs
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">{aboutContent.title}</h2>
          {aboutContent.paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="text-justify text-lg text-muted-foreground mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src={aboutContent.image}
            alt="Equipo de Turismo Mapumay"
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1200px) 40vw, 30vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

