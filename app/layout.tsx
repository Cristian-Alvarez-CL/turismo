import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { NotificationProvider } from "@/components/notification"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Turismo Mapumay | Descubre la magia de nuestra tierra",
  description: "Agencia de turismo especializada en experiencias únicas en la naturaleza y cultura local.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="turismo-mapumay-theme">
          <NotificationProvider>
            <Navbar />
            {children}
            <Footer />
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}