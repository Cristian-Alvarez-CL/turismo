'use client'

import { BaseCard } from "@/components/ui/base-card"
import { CheckList, XList, AlertList, IconList } from "@/components/ui/icon-list"
import { TourListsSectionProps } from "@/types"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export function TourListsSection({ title, items, type, variant = 'default' }: TourListsSectionProps) {
  if (!items || items.length === 0) {
    return null
  }

  const getConfig = () => {
    switch (type) {
      case 'includes':
        return { component: CheckList, titleColor: 'text-green-600', icon: CheckCircle }
      case 'notIncludes':
        return { component: XList, titleColor: 'text-red-600', icon: XCircle }
      case 'recommendations':
        return { component: AlertList, titleColor: 'text-blue-600', icon: AlertCircle }
      case 'notAllowed':
        return { component: XList, titleColor: 'text-red-600', icon: XCircle }
      case 'importantInfo':
        return { 
          component: (props: any) => <IconList {...props} variant="dot" color="orange" />, 
          titleColor: 'text-orange-600', 
          icon: AlertCircle 
        }
      default:
        return { component: AlertList, titleColor: 'text-gray-600', icon: AlertCircle }
    }
  }

  const config = getConfig()
  const ListComponent = config.component

  return (
    <BaseCard
      variant={variant === 'warning' ? 'warning' : 'default'}
      title={
        <div className={`flex items-center gap-2 ${config.titleColor}`}>
          <config.icon className="h-5 w-5" />
          {title}
        </div>
      }
    >
      <ListComponent items={items} />
    </BaseCard>
  )
}