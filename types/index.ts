import { LucideIcon } from "lucide-react"

// ============================================================================
// BASE TYPES - Tipos fundamentales reutilizables
// ============================================================================

/** Entidad base con identificador único */
export interface BaseEntity {
  id: number
}

/** Entidad con nombre y descripción */
export interface NamedEntity extends BaseEntity {
  nombre: string
  descripcion: string
}

/** Entidad con imagen */
export interface ImageEntity {
  imagen: string
  alt?: string
}

/** Entidad con información de precio */
export interface PricedEntity {
  precio: number
  precioNino?: number | null
}

/** Información básica de horarios */
export interface ScheduleInfo {
  weekdays: string
  saturday: string
}

/** Información de redes sociales */
export interface SocialLinks {
  instagram: string
  facebook: string
  twitter: string
}

/** Información bancaria */
export interface BankingInfo {
  bank: string
  name: string
  rut: string
  accountType: string
  accountNumber: string
  email: string
}

// ============================================================================
// UI COMPONENT PROPS - Props comunes para componentes UI
// ============================================================================

/** Props base para componentes UI */
export interface BaseUIProps {
  className?: string
  children?: React.ReactNode
}

/** Props para componentes con variantes de tamaño */
export interface SizeVariantProps {
  size?: 'sm' | 'md' | 'lg'
}

/** Props para componentes con variantes visuales */
export interface VisualVariantProps {
  variant?: 'default' | 'compact' | 'warning' | 'info' | 'success' | 'error'
}

/** Props para componentes con título y descripción */
export interface TitleDescriptionProps {
  title?: string | React.ReactNode
  description?: string
}

/** Props para componentes con iconos */
export interface IconProps {
  icon: LucideIcon
  iconClassName?: string
}

// ============================================================================
// BUSINESS DOMAIN TYPES - Tipos específicos del dominio de negocio
// ============================================================================

/** Información básica del sitio */
export interface SiteInfo {
  name: string
  tagline: string
  description: string
  subtitle: string
  features: string[]
  logo: string
}

/** Información completa de contacto */
export interface ContactInfo {
  address: string
  phone: string
  email: string
  whatsapp: string
  schedule: ScheduleInfo
  social: SocialLinks
  banking: BankingInfo
}

/** Enlace de navegación */
export interface NavLink {
  href: string
  label: string
}

/** Configuración de botón */
export interface ButtonConfig {
  text: string
  href: string
}

/** Contenido de sección hero */
export interface HeroContent {
  title: string
  subtitle: string
  description: string
  image: string
  buttons: {
    primary: ButtonConfig
    secondary: ButtonConfig
  }
}

// ============================================================================
// TOUR TYPES - Jerarquía de tipos para tours
// ============================================================================

/** Información básica de un tour */
export interface BaseTourInfo extends NamedEntity, ImageEntity, PricedEntity {
  duracion: string
}

/** Tour completo con todas las propiedades */
export interface Tour extends BaseTourInfo {
  descripcionLarga?: string
  salida?: string
  regreso?: string
  ubicacion?: string
  participantesMinimos?: number
  edadMinima?: number | null
  featured: boolean
  itinerario?: string[]
  incluye?: string[]
  noIncluye?: string[]
  recomendaciones?: string[]
  noPermitido?: string[]
  infoImportante?: string[]
  galeria?: GaleriaImage[]
}

/** Tour destacado */
export interface FeaturedTour extends BaseTourInfo {
  featured: true
}

/** Tour popular (solo información esencial) */
export interface PopularTour extends BaseEntity {
  nombre: string
}

// ============================================================================
// CONTENT TYPES - Tipos para contenido y media
// ============================================================================

/** Imagen de galería */
export interface GaleriaImage {
  id: string
  title: string
  description: string
  src: string
  alt?: string
  tags: string[]
  category?: string
  tourId?: number | null
}

/** Galería de un tour */
export interface TourGallery {
  tourId: number
  tourName: string
  hero: string
  gallery: GaleriaImage[]
}

/** Datos completos de galería */
export interface GaleriaData {
  tours: Record<string, {
    tourId: number
    tourName: string
    hero: string
    gallery: GaleriaImage[]
  }>
  general: GaleriaImage[]
  categories: Record<string, string>
}

// ============================================================================
// SERVICE TYPES - Tipos para servicios
// ============================================================================

/** Servicio de la empresa */
export interface Servicio extends NamedEntity {
  icono: string
  caracteristicas: string[]
  actividades?: string[]
}

/** Testimonio de cliente */
export interface Testimonial extends BaseEntity {
  name: string
  text: string
  rating: number
  image: string
}

// ============================================================================
// POLICY & BUSINESS RULES - Políticas y reglas de negocio
// ============================================================================

/** Políticas de reserva */
export interface ReservationPolicy {
  title: string
  deposit: string
  cancellation: string
  weather: string
  rain: string
}

// ============================================================================
// FORM TYPES - Tipos para formularios
// ============================================================================

/** Datos del formulario de contacto */
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

/** Respuesta de envío de email */
export interface EmailResponse {
  success: boolean
  message: string
}

/** Opciones para manejo de formularios */
export interface FormHandlingOptions<T> {
  initialValues: T
  onSubmit: (data: T) => Promise<{ success: boolean; message: string }>
  resetOnSuccess?: boolean
}

// ============================================================================
// CONTENT DATA STRUCTURE - Estructura de datos de contenido
// ============================================================================

/** Estructura completa de datos de contenido */
export interface ContentData {
  site: SiteInfo
  contact: ContactInfo
  navigation: {
    main: NavLink[]
  }
  pages: Record<string, any>
  reservations: {
    policy: ReservationPolicy
  }
  buttons: Record<string, string>
  labels: Record<string, string>
  whatsapp: {
    defaultMessage: string
  }
  footer: {
    description: string
    quickLinks: string
    popularDestinations: string
    copyright: string
  }
}

/** Datos de destinos */
export interface DestinosData {
  featured: FeaturedTour[]
  all: Tour[]
  popular: PopularTour[]
}

// ============================================================================
// COMPONENT PROPS - Props específicas para componentes
// ============================================================================

/** Props para tarjeta de destino */
export interface DestinoCardProps {
  destino: BaseTourInfo
}

/** Props para tarjeta de servicio */
export interface ServicioCardProps {
  servicio: Servicio
}

/** Props para detalle de tour */
export interface TourDetailProps {
  tour: Tour
}

/** Props para grid de galería */
export interface GaleriaGridProps {
  imagenes: GaleriaImage[]
}

/** Props para lista con iconos */
export interface IconListProps extends BaseUIProps, SizeVariantProps {
  items: string[]
  variant?: 'check' | 'x' | 'alert' | 'dot' | 'arrow' | 'custom'
  color?: 'primary' | 'green' | 'red' | 'blue' | 'orange' | 'gray'
  spacing?: 'tight' | 'normal' | 'loose'
  customIcon?: LucideIcon
}

/** Props para item de contacto */
export interface ContactItemProps extends IconProps, SizeVariantProps, BaseUIProps {
  title: string
  value: string | string[]
  href?: string
  variant?: 'default' | 'compact'
}

/** Props para imagen optimizada */
export interface OptimizedImageProps extends BaseUIProps {
  src: string
  alt: string
  priority?: boolean
  variant?: 'fill' | 'fixed' | 'responsive'
  aspectRatio?: 'square' | 'video' | 'hero' | 'card'
  width?: number
  height?: number
  size?: string
  sizes?: string
  quality?: number
}

/** Props para tarjeta base */
export interface BaseCardProps extends BaseUIProps, TitleDescriptionProps, VisualVariantProps {
  footer?: React.ReactNode
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
  fullHeight?: boolean
}

/** Datos para item de contacto */
export interface ContactItemData extends IconProps {
  title: string
  value: string | string[]
  href?: string
}

/** Props para lista de información de contacto */
export interface ContactInfoListProps extends BaseUIProps, SizeVariantProps {
  items: ContactItemData[]
  variant?: 'default' | 'compact'
}

export interface TourDetailPageProps {
  params: {
    id: string
  }
}

export interface TourGalleryProps {
  tourId: number
  showTitle?: boolean
  maxImages?: number

}

export interface TourListsSectionProps {
  title: string
  items: string[]
  type: 'includes' | 'notIncludes' | 'recommendations' | 'notAllowed' | 'importantInfo'
  variant?: 'default' | 'warning'
}

export interface TourScheduleCardProps extends TourDetailProps { }

export interface GalleryModalProps {
  images: GaleriaImage[]
  selectedIndex: number
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onPrevious: () => void
  onNext: () => void
}

export interface WhatsappIconProps {
  message?: string
}

export interface TourInfoCardsProps extends TourDetailProps{}

export interface TourItineraryCardProps {
  itinerary: string[]
}