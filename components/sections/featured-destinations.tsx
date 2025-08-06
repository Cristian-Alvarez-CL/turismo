'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useContent } from "@/hooks/useContent"
import { useTours } from "@/hooks/useTours"
import { BaseTourInfo } from "@/types"
import { DestinoCard } from "@/components/cards/destino-card"

export function FeaturedDestinations() {
  const { getPageContent } = useContent()
  const { getFeaturedToursAsBasic } = useTours()
  
  const pageContent = getPageContent('home').featuredDestinations
  const featuredTours: BaseTourInfo[] = getFeaturedToursAsBasic()

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        {pageContent.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredTours.map((tour: BaseTourInfo) => (
          <DestinoCard key={tour.id} destino={tour} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link href="/destinos">
            {pageContent.viewAllText}
          </Link>
        </Button>
      </div>
    </section>
  )
}

