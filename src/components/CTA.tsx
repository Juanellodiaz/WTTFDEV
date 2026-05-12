import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <motion.div
        className="cta__panel"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-12% 0px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="cta-title" className="cta__title">
          {t.cta.title}
        </h2>
        <p className="cta__body">{t.cta.body}</p>
        <a className="btn btn--primary btn--wide" href={`mailto:${t.cta.button}`}>
          {t.cta.button}
        </a>
        <p className="cta__note">{t.cta.footnote}</p>
      </motion.div>
    </section>
  )
}
