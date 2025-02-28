import { ServicioCard } from "@/components/servicio-card"

const servicios = [
  {
    id: 1,
    nombre: "Tours Guiados",
    descripcion: "Explora los destinos más emblemáticos con nuestros guías expertos.",
    icono: "Map",
    caracteristicas: [
      "Guías locales certificados",
      "Grupos pequeños",
      "Rutas personalizadas",
      "Información histórica y cultural",
    ],
  },
  {
    id: 2,
    nombre: "Alojamiento",
    descripcion: "Descansa en los mejores hoteles y lodges de la región.",
    icono: "Hotel",
    caracteristicas: [
      "Opciones para todos los presupuestos",
      "Ubicaciones privilegiadas",
      "Comodidades de alta calidad",
      "Desayuno incluido",
    ],
  },
  {
    id: 3,
    nombre: "Transporte",
    descripcion: "Viaja cómodo y seguro con nuestra flota de vehículos modernos.",
    icono: "Bus",
    caracteristicas: [
      "Vehículos modernos y seguros",
      "Conductores profesionales",
      "Traslados aeropuerto-hotel",
      "Excursiones en minibús",
    ],
  },
  {
    id: 4,
    nombre: "Actividades de Aventura",
    descripcion: "Vive la emoción con nuestras actividades de aventura.",
    icono: "Mountain",
    caracteristicas: ["Senderismo", "Kayak", "Canopy", "Escalada"],
  },
  {
    id: 5,
    nombre: "Gastronomía Local",
    descripcion: "Degusta los sabores auténticos de la cocina mapuche y chilena.",
    icono: "Utensils",
    caracteristicas: ["Tours gastronómicos", "Clases de cocina", "Cenas temáticas", "Visitas a mercados locales"],
  },
  {
    id: 6,
    nombre: "Experiencias Culturales",
    descripcion: "Sumérgete en la rica cultura de la región con actividades auténticas.",
    icono: "Landmark",
    caracteristicas: [
      "Visitas a comunidades indígenas",
      "Talleres de artesanía",
      "Ceremonias tradicionales",
      "Museos y sitios históricos",
    ],
  },
]

export default function ServiciosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
        En Turismo Mapumay, ofrecemos una amplia gama de servicios para hacer de tu visita una experiencia inolvidable.
        Descubre todo lo que tenemos para ti.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio) => (
          <ServicioCard key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </div>
  )
}