import { useState } from "react"
import { useNotification } from "@/components/common/notification"
import type { FormHandlingOptions } from "@/types"

export function useFormHandling<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  resetOnSuccess = true
}: FormHandlingOptions<T>) {
  const [formData, setFormData] = useState<T>(initialValues)
  const [isLoading, setIsLoading] = useState(false)
  const { showNotification } = useNotification()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await onSubmit(formData)
      
      showNotification({
        message: result.message,
        type: result.success ? "success" : "error"
      })

      if (result.success && resetOnSuccess) {
        setFormData(initialValues)
      }
      
      return result
    } catch (error) {
      showNotification({
        message: "Error inesperado. Inténtalo nuevamente.",
        type: "error"
      })
      return { success: false, message: "Error inesperado" }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit,
    setFormData
  }
}