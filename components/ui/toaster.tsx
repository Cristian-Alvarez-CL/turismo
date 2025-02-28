"use client"

import { useToast } from "./use-toast"

export function Toaster() {
  const { toast } = useToast()

  if (!toast) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm">
        <h3 className="font-semibold">{toast.title}</h3>
        {toast.description && <p className="text-sm text-gray-500 dark:text-gray-400">{toast.description}</p>}
      </div>
    </div>
  )
}