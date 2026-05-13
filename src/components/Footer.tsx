import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__row">
        <p>{t.footer.line1}</p>
        <p className="footer__meta">{t.footer.line2}</p>
      </div>
    </footer>
  )
}
