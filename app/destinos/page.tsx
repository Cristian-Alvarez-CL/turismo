import { DestinoCard } from "@/components/destino-card"
import { Button } from "@/components/ui/button"

// Datos de ejemplo para los destinos
const destinos = [
  {
    id: 1,
    nombre: "Lago Todos Los Santos",
    descripcion: "Un hermoso lago rodeado de montañas y bosques nativos.",
    imagen: "/images/destinations/lago-todos-los-santos.png",
    precio: 45000,
    duracion: "1 día",
  },
  {
    id: 2,
    nombre: "Volcán Osorno",
    descripcion: "Impresionante volcán con vistas panorámicas de la región.",
    imagen: "/images/destinations/volcan-osorno.png",
    precio: 65000,
    duracion: "2 días",
  },
  {
    id: 3,
    nombre: "Termas de Puyehue",
    descripcion: "Relajantes aguas termales en medio de la naturaleza.",
    imagen: "/images/destinations/termas-de-puyehue.png",
    precio: 55000,
    duracion: "1 día",
  },
  {
    id: 4,
    nombre: "Parque Nacional Vicente Pérez Rosales",
    descripcion: "Extenso parque nacional con diversa flora y fauna.",
    imagen: "/images/destinations/vicente-perez-rosales.png",
    precio: 35000,
    duracion: "1 día",
  },
  {
    id: 5,
    nombre: "Isla de Chiloé",
    descripcion: "Isla mágica conocida por su cultura única y palafitos.",
    imagen: "/images/destinations/isla-chiloe.png",
    precio: 85000,
    duracion: "3 días",
  },
  {
    id: 6,
    nombre: "Frutillar",
    descripcion: "Pintoresco pueblo a orillas del Lago Llanquihue.",
    imagen: "/images/destinations/frutillar.png",
    precio: 40000,
    duracion: "1 día",
  },
]

export default function DestinosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Destinos</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground">
        Descubre los lugares más hermosos y emocionantes que Mapumay tiene para ofrecer
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinos.map((destino) => (
          <DestinoCard key={destino.id} destino={destino} />
        ))}
      </div>
      {/* <div className="mt-12 text-center">
        <Button size="lg">Ver Más Destinos</Button>
      </div> */}
    </div>
  )
}