'use client'

import { CheckCircle, XCircle, AlertCircle, Circle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { IconListProps } from "@/types"

export function IconList({
  items,
  variant = 'dot',
  color = 'primary',
  size = 'md',
  spacing = 'normal',
  customIcon,
  className
}: IconListProps) {
  
  if (!items || items.length === 0) {
    return null
  }

  const getIcon = () => {
    if (variant === 'custom' && customIcon) {
      return customIcon
    }
    
    switch (variant) {
      case 'check':
        return CheckCircle
      case 'x':
        return XCircle
      case 'alert':
        return AlertCircle
      case 'arrow':
        return ArrowRight
      case 'dot':
      default:
        return Circle
    }
  }

  const getColorClass = () => {
    switch (color) {
      case 'green':
        return "text-green-500"
      case 'red':
        return "text-red-500"
      case 'blue':
        return "text-blue-500"
      case 'orange':
        return "text-orange-500"
      case 'gray':
        return "text-gray-500"
      case 'primary':
      default:
        return "text-primary"
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return "h-3 w-3"
      case 'lg':
        return "h-5 w-5"
      case 'md':
      default:
        return "h-4 w-4"
    }
  }

  const getSpacingClass = () => {
    switch (spacing) {
      case 'tight':
        return "space-y-1"
      case 'loose':
        return "space-y-3"
      case 'normal':
      default:
        return "space-y-2"
    }
  }

  const Icon = getIcon()

  // Para variant dot, usar símbolo en lugar de icono
  if (variant === 'dot') {
    return (
      <ul className={cn(getSpacingClass(), className)}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={cn(getColorClass(), "mt-1")}>•</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className={cn(getSpacingClass(), className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <Icon className={cn(
            getSizeClass(),
            getColorClass(),
            "mt-0.5 flex-shrink-0"
          )} />
          <span className="flex-1">{item}</span>
        </li>
      ))}
    </ul>
  )
}

// Componentes especializados para casos comunes
export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <IconList
      items={items}
      variant="check"
      color="green"
      className={className}
    />
  )
}

export function XList({ items, className }: { items: string[]; className?: string }) {
  return (
    <IconList
      items={items}
      variant="x"
      color="red"
      className={className}
    />
  )
}

export function AlertList({ items, className }: { items: string[]; className?: string }) {
  return (
    <IconList
      items={items}
      variant="alert"
      color="blue"
      className={className}
    />
  )
}