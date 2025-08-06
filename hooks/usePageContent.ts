import { useContent } from "@/hooks/useContent"

export function usePageContent(pageName: string) {
  const { getPageContent, getContactInfo, getLabel, getButton, getSiteInfo } = useContent()
  
  const pageContent = getPageContent(pageName)
  const contact = getContactInfo()
  const siteInfo = getSiteInfo()
  
  return {
    pageContent,
    contact,
    siteInfo,
    getLabel,
    getButton
  }
}