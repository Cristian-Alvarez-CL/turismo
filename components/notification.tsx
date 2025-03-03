"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface NotificationProps {
  message: string
  type: "success" | "error"
  duration?: number
}

export const Notification: React.FC<NotificationProps> = ({ message, type, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-md shadow-md ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      <div className="flex items-center justify-between">
        <p>{message}</p>
        <button onClick={() => setIsVisible(false)} className="ml-4">
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

export const useNotification = () => {
  const [notificationProps, setNotificationProps] = useState<NotificationProps | null>(null)

  const showNotification = (props: NotificationProps) => {
    setNotificationProps(props)
  }

  return { Notification, showNotification, notificationProps }
}