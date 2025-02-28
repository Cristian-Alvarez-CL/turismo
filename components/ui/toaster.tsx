"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode
  description?: React.ReactNode
  variant?: "default" | "destructive"
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, title, description, variant = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-md border bg-background px-4 py-3 shadow-sm",
          variant === "destructive"
            ? "border-destructive text-destructive-foreground"
            : "border-border text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      >
        {title && <div className="font-medium">{title}</div>}
        {description && <div className="text-sm opacity-80">{description}</div>}
      </div>
    )
  },
)
Toast.displayName = "Toast"

type ToastContextType = {
  toast: (props: ToastProps) => void
}

const ToastContext = React.createContext<ToastContextType>({
  toast: () => {},
})

const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

type ToastProviderProps = {
  children: React.ReactNode
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts([...toasts, props])
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1))
    }, 3000) // Remove after 3 seconds
  }

  const contextValue: ToastContextType = React.useMemo(() => ({ toast }), [toast])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toasts.map((toastProps, index) => (
        <Toast key={index} {...toastProps} className="absolute bottom-4 right-4" />
      ))}
    </ToastContext.Provider>
  )
}

export { Toast, ToastProvider, useToast }