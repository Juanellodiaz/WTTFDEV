import { motion, useScroll, useTransform } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const devNav: (
  | { id: 'studio'; to: '/studio' }
  | { id: 'projects' | 'philosophy' | 'craft' | 'platforms' | 'contact'; href: string }
)[] = [
  { id: 'studio', to: '/studio' },
  { id: 'projects', href: '#work' },
  { id: 'philosophy', href: '#philosophy' },
  { id: 'craft', href: '#services' },
  { id: 'platforms', href: '#platforms' },
  { id: 'contact', href: '#contact' },
]

export function Navbar() {
  const { t, locale, toggleLocale } = useLanguage()
  const { pathname } = useLocation()
  const isBranding = pathname === '/studio' || pathname.startsWith('/studio/')
  const { scrollY } = useScroll()
  const scrimOpacity = useTransform(scrollY, [0, 160], [0.94, 1])

  if (isBranding) {
    return (
      <header className="nav nav--branding">
        <motion.div className="nav__scrim" style={{ opacity: scrimOpacity }} aria-hidden />
        <Link className="nav__brand nav__brand--studio" to="/studio">
          <span className="nav__mark" aria-hidden>
            <img
              className="nav__mark-img"
              src="/assets/WTTF_icon.png"
              alt=""
              width={28}
              height={28}
              decoding="async"
            />
          </span>
          <span className="nav__brand-word">WTTF®</span>
          <span className="nav__brand-muted nav__brand-muted--tag">{t.branding.navTag}</span>
        </Link>
        <nav className="nav__links nav__links--branding" aria-label="Studio">
          <a
            className="nav__link"
            href="https://www.behance.net/WTTF"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.branding.navWork}
          </a>
        </nav>
        <div className="nav__actions nav__actions--branding">
          <Link className="nav__to-dev" to="/" title="WTTF® DEV">
            <span className="nav__to-dev-word">WTTF®</span>
            <span className="nav__to-dev-badge">DEV</span>
          </Link>
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

  return (
    <header className="nav">
      <motion.div className="nav__scrim" style={{ opacity: scrimOpacity }} aria-hidden />
      <Link className="nav__brand" to="/">
        <span className="nav__mark" aria-hidden>
          <img
            className="nav__mark-img"
            src="/assets/WTTF_icon.png"
            alt=""
            width={28}
            height={28}
            decoding="async"
          />
        </span>
        <span className="nav__brand-word">WTTF®</span>
        <span className="nav__brand-muted">DEV</span>
      </Link>
      <nav className="nav__links" aria-label="Primary">
        {devNav.map((item) =>
          'to' in item ? (
            <Link key={item.id} to={item.to} className="nav__link">
              {t.nav[item.id]}
            </Link>
          ) : (
            <a key={item.id} href={item.href} className="nav__link">
              {t.nav[item.id]}
            </a>
          ),
        )}
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
