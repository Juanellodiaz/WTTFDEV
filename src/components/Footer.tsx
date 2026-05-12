import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__row">
        <p>{t.footer.rights}</p>
        <p className="footer__meta">{t.footer.built}</p>
      </div>
    </footer>
  )
}
