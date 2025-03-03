"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface Imagen {
  src: string
  alt: string
  title: string
}

interface GaleriaGridProps {
  imagenes: Imagen[]
}

export function GaleriaGrid({ imagenes }: GaleriaGridProps) {
  const [selectedImage, setSelectedImage] = useState<Imagen | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagenes.map((imagen, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg">
                <Image
                  src={imagen.src || "/placeholder.svg"}
                  alt={imagen.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  onClick={() => setSelectedImage(imagen)}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 overflow-hidden">
              <div className="relative flex items-center justify-center">
                <Image
                  src={imagen.src || "/placeholder.svg"}
                  alt={imagen.alt}
                  width={800}
                  height={600}
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-lg font-semibold">{imagen.title}</h3>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  )
}
