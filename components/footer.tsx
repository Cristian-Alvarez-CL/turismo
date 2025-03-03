import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

const imageLogo = "/images/mapumay/pajaro-mapumay.png"
const contact = {
  id: 1,
  direccion: "General Urrutia 436, Pucón, Chile",
  telefono: "+56 9 8945 68 16",
  email: "info@turismomapumay.cl",
};

const destinosPopulares = [
  { id: 1, nombre: "Lago Todos Los Santos" },
  { id: 2, nombre: "Volcán Osorno" },
  { id: 3, nombre: "Termas de Puyehue" },
  { id: 4, nombre: "Parque Nacional Puyehue" },
  { id: 5, nombre: "Frutillar" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={ imageLogo }
                alt="Turismo Mapumay Logo"
                width={40}
                height={40}
                className="dark:brightness-110"
              />
              <span className="text-xl font-bold">Turismo Mapumay</span>
            </Link>
            <p className="text-primary-foreground/80">
              Descubre la magia de nuestra tierra con experiencias turísticas únicas y memorables.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/turismo_mapumay/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 hover:text-primary-foreground/80" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-primary-foreground/80" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-primary-foreground/80" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["Inicio", "Destinos", "Servicios", "Galería", "Blog", "Contacto"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Inicio"
                        ? "/"
                        : `/${item
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")}`
                    }
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Destinos Populares</h3>
            <ul className="space-y-2">
              {destinosPopulares.map((destino) => (
                <li key={destino.id}>
                  <Link
                    href={`/destinos/${destino.id}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {destino.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <address className="not-italic text-primary-foreground/80 space-y-2">
              <p>{ contact.direccion}</p>
              <p>{ contact.telefono}</p>
              <p>{ contact.email}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Turismo Mapumay. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}