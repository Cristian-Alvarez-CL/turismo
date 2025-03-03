import { notFound } from "next/navigation"
import { TourDetail } from "@/components/tour-detail"

// Esta función simularía la obtención de datos de una API o base de datos
async function getTourData(id: string) {
  // Aquí normalmente harías una llamada a una API o base de datos
  // Por ahora, usaremos datos de ejemplo
  const tours = [
    {
      id: 1,
      nombre: "Lago Todos Los Santos",
      descripcion: "Un hermoso lago rodeado de montañas y bosques nativos.",
      descripcionLarga:
        "Explora las cristalinas aguas del Lago Todos Los Santos, también conocido como el 'Lago Esmeralda' por su impresionante color. Rodeado de majestuosos volcanes y exuberante vegetación, este tour te llevará a través de paisajes impresionantes y te permitirá disfrutar de la tranquilidad de la naturaleza chilena.",
      imagen: "/images/destinatios/lago-todos-los-santos.png",
      precio: 45000,
      duracion: "1 día",
      ubicacion: "Parque Nacional Vicente Pérez Rosales",
      participantes: "2-12",
      fechasDisponibles: ["2023-12-15", "2023-12-22", "2023-12-29"],
      incluye: [
        "Transporte ida y vuelta desde Puerto Varas",
        "Guía turístico bilingüe",
        "Almuerzo tipo picnic",
        "Paseo en catamarán por el lago",
        "Caminata guiada por senderos del parque",
      ],
      noIncluye: ["Propinas", "Seguro de viaje", "Gastos personales"],
      recomendaciones: [
        "Llevar ropa cómoda y abrigada",
        "Calzado apropiado para caminatas",
        "Protector solar y gorra",
        "Cámara fotográfica",
        "Botella de agua reutilizable",
      ],
    },
    // ... Otros tours
  ]

  return tours.find((tour) => tour.id === Number.parseInt(id))
}

export default async function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = await getTourData(params.id)

  if (!tour) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TourDetail tour={tour} />
    </div>
  )
}