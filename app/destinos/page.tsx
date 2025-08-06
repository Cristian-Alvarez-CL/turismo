'use client'
import { DestinoCard } from "@/components/cards/destino-card"
import { useContent } from "@/hooks/useContent"
import { useTours } from "@/hooks/useTours"
import { BaseTourInfo } from "@/types"

export default function DestinosPage() {
  const { getPageContent } = useContent()
  const { getToursAsBasic } = useTours()

  const pageContent = getPageContent('destinos')
  const destinos: BaseTourInfo[] = getToursAsBasic()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{pageContent.title}</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground">
        {pageContent.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinos.map((destino) => (
          <DestinoCard key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  )
}