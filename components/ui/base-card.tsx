'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BaseCardProps } from "@/types"
import type React from "react"

export function BaseCard({
  title,
  description,
  children,
  footer,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
  fullHeight = false,
  variant = 'default'
}: BaseCardProps) {
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'warning':
        return "border-orange-200 bg-orange-50 dark:bg-orange-950/20"
      case 'info':
        return "border-blue-200 bg-blue-50 dark:bg-blue-950/20"
      case 'success':
        return "border-green-200 bg-green-50 dark:bg-green-950/20"
      case 'error':
        return "border-red-200 bg-red-50 dark:bg-red-950/20"
      default:
        return ""
    }
  }

  return (
    <Card 
      className={cn(
        fullHeight && "flex flex-col h-full",
        "transition-all hover:shadow-lg",
        getVariantClasses(),
        className
      )}
    >
      {(title || description) && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      
      <CardContent className={cn(fullHeight && "flex-grow", contentClassName)}>
        {children}
      </CardContent>
      
      {footer && (
        <CardFooter className={cn(fullHeight && "mt-auto", footerClassName)}>
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}