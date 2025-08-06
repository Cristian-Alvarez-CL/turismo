export function useExternalLinks() {
  const openExternal = (url: string, target: '_blank' | '_self' = '_blank') => {
    window.open(url, target, target === '_blank' ? 'noopener,noreferrer' : '')
  }

  const createWhatsAppUrl = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message.trim())
    return `https://wa.me/${number}?text=${encodedMessage}`
  }

  const createEmailUrl = (email: string, subject?: string, body?: string) => {
    const params = new URLSearchParams()
    if (subject) params.append('subject', subject)
    if (body) params.append('body', body)
    
    const queryString = params.toString()
    return `mailto:${email}${queryString ? `?${queryString}` : ''}`
  }

  const createTelUrl = (phone: string) => {
    return `tel:${phone.replace(/\s+/g, '')}`
  }

  return {
    openExternal,
    createWhatsAppUrl,
    createEmailUrl,
    createTelUrl
  }
}