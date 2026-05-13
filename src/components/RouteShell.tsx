import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

/** Scroll al cambiar de ruta y título del documento según página. */
export function RouteShell() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const isBranding = pathname === '/studio' || pathname.startsWith('/studio/')
    document.title = isBranding ? t.branding.metaTitle : t.metaTitle
  }, [pathname, t])

  return null
}
