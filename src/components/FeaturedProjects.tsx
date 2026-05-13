import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export function FeaturedProjects() {
  const { t } = useLanguage()

  const projects = [
    { key: 'dueDates', label: t.featured.dueDates.name, body: t.featured.dueDates.body, tone: 'coral' as const },
    { key: 'photoSwiper', label: t.featured.photoSwiper.name, body: t.featured.photoSwiper.body, tone: 'peach' as const },
  ]

  return (
    <section className="featured" id="work" aria-labelledby="featured-title">
      <div className="section-head">
        <p className="eyebrow">{t.featured.label}</p>
        <h2 id="featured-title" className="section-title">
          {t.featured.title}
        </h2>
        <p className="section-lead">{t.featured.subtitle}</p>
      </div>
      <div className="featured__row">
        {projects.map((p, i) => (
          <motion.article
            key={p.key}
            className={`featured__card featured__card--${p.tone}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="featured__card-glare" aria-hidden />
            <h3 className="featured__card-name">{p.label}</h3>
            <p className="featured__card-body">{p.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
