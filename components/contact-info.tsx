import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-primary mt-1" />
        <div>
          <h3 className="font-medium">Dirección</h3>
          <p className="text-muted-foreground">General Urrutia 436, Pucón, Chile</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <Phone className="w-5 h-5 text-primary mt-1" />
        <div>
          <h3 className="font-medium">Teléfono</h3>
          <p className="text-muted-foreground">+56 9 1234 5678</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <Mail className="w-5 h-5 text-primary mt-1" />
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-muted-foreground">info@turismomapumay.cl</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <Clock className="w-5 h-5 text-primary mt-1" />
        <div>
          <h3 className="font-medium">Horario de Atención</h3>
          <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
          <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
        </div>
      </div>
    </div>
  )
}