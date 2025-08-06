'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useContent } from "@/hooks/useContent"


export function HeroSection() {
  const { getPageContent, getSiteInfo } = useContent()
  const heroContent = getPageContent('home').hero
  const siteInfo = getSiteInfo()

  return (
    <section className="relative w-full h-screen">
      <Image
        src={heroContent.image}
        alt="Paisaje turístico de Mapumay"
        fill
        className="object-contain"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            {heroContent.title}
          </h1>

          <p className="text-xl md:text-2xl drop-shadow-md">
            {heroContent.subtitle}
          </p>

          <p className="text-xl drop-shadow-md opacity-90 max-w-4xl">
            {heroContent.description}
          </p>

          {/* Features del sitio */}
          <div className="space-y-2 my-8">
            {siteInfo.features.map((feature, index) => (
              <p key={index} className="text-lg font-medium drop-shadow-md">
                {feature}
              </p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" variant="outline" className="bg-primary hover:bg-primary/90">
              <Link href={heroContent.buttons.primary.href}>
                {heroContent.buttons.primary.text}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary text-white hover:bg-primary/90">
              <Link href={heroContent.buttons.secondary.href}>
                {heroContent.buttons.secondary.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}    