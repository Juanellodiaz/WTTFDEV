import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Locale } from '../i18n/translations'

const STORAGE_KEY = 'wttf-locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  t: (typeof translations)['en']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  const nav = navigator.language.toLowerCase()
  return nav.startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === 'en' ? 'es' : 'en'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'es' ? 'es' : 'en'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
    }),
    [locale, setLocale, toggleLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

// Colocated hook for this provider; Fast Refresh expects component-only exports in some setups.
// eslint-disable-next-line react-refresh/only-export-components -- useLanguage is the public API for this context
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
