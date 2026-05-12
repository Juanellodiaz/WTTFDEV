import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { id: 'work', href: '#work' },
  { id: 'services', href: '#services' },
  { id: 'platforms', href: '#platforms' },
  { id: 'contact', href: '#contact' },
] as const

export function Navbar() {
  const { t, locale, toggleLocale } = useLanguage()
  const { scrollY } = useScroll()
  const scrimOpacity = useTransform(scrollY, [0, 100], [0, 1])

  return (
    <header className="nav">
      <motion.div className="nav__scrim" style={{ opacity: scrimOpacity }} aria-hidden />
      <a className="nav__brand" href="#top">
        <span className="nav__mark" aria-hidden />
        WTTF<span className="nav__brand-muted">Dev</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        {links.map((l) => (
          <a key={l.id} href={l.href} className="nav__link">
            {t.nav[l.id]}
          </a>
        ))}
      </nav>
      <div className="nav__actions">
        <button
          type="button"
          className="nav__lang"
          onClick={toggleLocale}
          aria-label={locale === 'en' ? 'Cambiar a español' : 'Switch to English'}
        >
          <span className="nav__lang-current">{locale.toUpperCase()}</span>
          <span className="nav__lang-arrow" aria-hidden>
            →
          </span>
          <span className="nav__lang-target">{t.langShort}</span>
        </button>
      </div>
    </header>
  )
}
