'use client'

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useContent } from "@/hooks/useContent"
import { useTours } from "@/hooks/useTours"
import Image from "next/image"

// Componente reutilizable para enlaces de navegación
function NavLink({ href, children, className = "" }: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-primary-foreground/80 hover:text-primary-foreground transition-colors ${className}`}
    >
      {children}
    </Link>
  )
}

// Componente para iconos sociales
function SocialIcon({ href, icon: Icon, label }: { 
  href: string; 
  icon: React.ComponentType<{ className?: string }>; 
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className="h-5 w-5 hover:text-primary-foreground/80 transition-colors" />
    </Link>
  )
}

export function Footer() {
  const { getContactInfo, getFooterContent, getSiteInfo, getNavigation } = useContent()
  const { getPopularTours } = useTours() // Ahora retorna PopularTour[]
  
  const contact = getContactInfo()
  const footerContent = getFooterContent()
  const siteInfo = getSiteInfo()
  const navLinks = getNavigation().main
  const destinosPopulares = getPopularTours() // PopularTour[] con id y nombre

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={siteInfo.logo}
                alt={`${siteInfo.name} Logo`}
                className="dark:brightness-110"
                sizes="40px"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">{siteInfo.name}</span>
            </Link>
            
            <p className="text-primary-foreground/80">
              {footerContent.description}
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-4">
              <SocialIcon href={contact.social.instagram} icon={Instagram} label="Instagram" />
              <SocialIcon href={contact.social.facebook} icon={Facebook} label="Facebook" />
              <SocialIcon href={contact.social.twitter} icon={Twitter} label="Twitter" />
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{footerContent.quickLinks}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinos populares */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{footerContent.popularDestinations}</h3>
            <ul className="space-y-2">
              {destinosPopulares.map((destino) => (
                <li key={destino.id}>
                  <NavLink href={`/destinos/${destino.id}`}>
                    {destino.nombre}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <address className="not-italic text-primary-foreground/80 space-y-2">
              <p>{contact.address}</p>
              <p>
                <NavLink href={`tel:${contact.phone}`}>
                  {contact.phone}
                </NavLink>
              </p>
              <p>
                <NavLink href={`mailto:${contact.email}`}>
                  {contact.email}
                </NavLink>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}. {footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  )
}