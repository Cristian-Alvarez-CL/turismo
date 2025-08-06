'use client'

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ContactItemProps } from "@/types"

export function ContactItem({
  icon: Icon,
  title,
  value,
  href,
  className,
  iconClassName,
  size = 'md',
  variant = 'default'
}: ContactItemProps) {
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: "gap-2",
          icon: "h-4 w-4",
          title: "text-sm font-medium",
          value: "text-sm"
        }
      case 'lg':
        return {
          container: "gap-4",
          icon: "h-6 w-6",
          title: "text-lg font-medium",
          value: "text-base"
        }
      case 'md':
      default:
        return {
          container: "gap-3",
          icon: "h-5 w-5",
          title: "text-base font-medium",
          value: "text-sm"
        }
    }
  }

  const sizeClasses = getSizeClasses()

  const renderValue = () => {
    if (Array.isArray(value)) {
      return (
        <div className="space-y-1">
          {value.map((item, index) => (
            <p key={index} className={cn("text-muted-foreground", sizeClasses.value)}>
              {item}
            </p>
          ))}
        </div>
      )
    }

    if (href) {
      return (
        <a
          href={href}
          className={cn(
            "text-muted-foreground hover:text-primary transition-colors",
            sizeClasses.value
          )}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {value}
        </a>
      )
    }

    return (
      <p className={cn("text-muted-foreground", sizeClasses.value)}>
        {value}
      </p>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center", sizeClasses.container, className)}>
        <Icon className={cn(sizeClasses.icon, "text-primary", iconClassName)} />
        <span className={cn("font-medium", sizeClasses.title)}>{title}:</span>
        <span className={cn("text-muted-foreground", sizeClasses.value)}>
          {Array.isArray(value) ? value.join(', ') : value}
        </span>
      </div>
    )
  }

  return (
    <div className={cn("flex items-start", sizeClasses.container, className)}>
      <Icon className={cn(
        sizeClasses.icon,
        "text-primary mt-1 flex-shrink-0",
        iconClassName
      )} />
      <div className="flex-1">
        <h4 className={sizeClasses.title}>{title}</h4>
        {renderValue()}
      </div>
    </div>
  )
}

// Componentes especializados para casos comunes
interface ContactInfoListProps {
  items: Array<{
    icon: LucideIcon
    title: string
    value: string | string[]
    href?: string
  }>
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'compact'
  className?: string
}

export function ContactInfoList({ 
  items, 
  size = 'md', 
  variant = 'default',
  className 
}: ContactInfoListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          value={item.value}
          href={item.href}
          size={size}
          variant={variant}
        />
      ))}
    </div>
  )
}