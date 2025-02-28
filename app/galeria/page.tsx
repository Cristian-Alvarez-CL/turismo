import { GaleriaGrid } from "@/components/galeria-grid"

const imagenes = [
  {
    src: "/images/destinatios/lago-todos-los-santos.png",
    alt: "Lago Todos Los Santos",
    title: "Lago Todos Los Santos",
  },
  {
    src: "/images/destinatios/volcan-osorno.png",
    alt: "Volcán Osorno",
    title: "Volcán Osorno",
  },
  {
    src: "/images/destinatios/termas-de-puyehue.png",
    alt: "Termas de Puyehue",
    title: "Termas de Puyehue",
  },
  {
    src: "/images/destinatios/vicente-perez-rosales.png",
    alt: "Parque Nacional Vicente Pérez Rosales",
    title: "Parque Nacional Vicente Pérez Rosales",
  },
  {
    src: "/images/destinatios/isla-chiloe.png",
    alt: "Isla de Chiloé",
    title: "Isla de Chiloé",
  },
  {
    src: "/images/destinatios/frutillar.png",
    alt: "Frutillar",
    title: "Frutillar",
  },
  {
    src: "/images/destinatios/puerto-varas.png",
    alt: "Puerto Varas",
    title: "Puerto Varas",
  },
  {
    src: "/images/destinatios/saltos-del-petrohue.png",
    alt: "Saltos del Petrohué",
    title: "Saltos del Petrohué",
  },
  {
    src: "/images/destinatios/cochamo.png",
    alt: "Valle de Cochamó",
    title: "Valle de Cochamó",
  },
  {
    src: "/images/destinatios/alerce-andino.png",
    alt: "Parque Nacional Alerce Andino",
    title: "Parque Nacional Alerce Andino",
  },
  {
    src: "/images/destinatios/caleta-condor.png",
    alt: "Caleta Cóndor",
    title: "Caleta Cóndor",
  },
  {
    src: "/images/destinatios/lago-llanquihue.png",
    alt: "Lago Llanquihue",
    title: "Lago Llanquihue",
  },
]

export default function GaleriaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Galería de Imágenes</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
        Explora la belleza de nuestros destinos a través de esta colección de imágenes cautivadoras.
      </p>
      <GaleriaGrid imagenes={imagenes} />
    </div>
  )
}