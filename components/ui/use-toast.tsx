// Este archivo es necesario para el funcionamiento del toast
// Normalmente, este archivo vendría con la instalación de shadcn/ui
// Aquí proporcionamos una implementación básica

import { useState } from "react"

interface Toast {
  title: string
  description?: string
}

export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null)

  const showToast = (newToast: Toast) => {
    setToast(newToast)
    setTimeout(() => setToast(null), 3000) // Oculta el toast después de 3 segundos
  }

  return { toast, showToast }
}