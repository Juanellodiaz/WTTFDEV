import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Services() {
  const { t } = useLanguage()

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="section-head section-head--left">
        <p className="eyebrow">{t.services.label}</p>
        <h2 id="services-title" className="section-title">
          {t.services.title}
        </h2>
        <p className="section-lead">{t.services.subtitle}</p>
      </div>

      <motion.ul
        className="services__list"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
      >
        {t.services.items.map((s) => (
          <motion.li key={s.title} className="services__item" variants={item}>
            <span className="services__index" aria-hidden />
            <div>
              <h3 className="services__item-title">{s.title}</h3>
              <p className="services__item-body">{s.body}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
