'use client'
import { notFound } from "next/navigation"
import { TourDetail } from "@/components/sections/tour-detail"
import { useTours } from "@/hooks/useTours";
import { TourDetailPageProps } from "@/types";

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const { getTourById } = useTours();
  const tour = getTourById(Number.parseInt(params.id))

  if (!tour) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TourDetail tour={tour} />
    </div>
  )
}