import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import iconDueDates from '../assets/featured/duedates00.jpg'
import iconPhotoSwiper from '../assets/featured/icondark.jpg'

const projectsMeta = [
  {
    key: 'dueDates',
    iconSrc: iconDueDates,
    iconKey: 'dueDates' as const,
  },
  {
    key: 'photoSwiper',
    iconSrc: iconPhotoSwiper,
    iconKey: 'photoSwiper' as const,
  },
] as const

export function FeaturedProjects() {
  const { t } = useLanguage()

  const projects = projectsMeta.map((meta) => ({
    ...meta,
    label: t.featured[meta.iconKey].name,
    body: t.featured[meta.iconKey].body,
    iconAlt: t.featured[meta.iconKey].iconAlt,
  }))

  return (
    <section className="featured" id="work" aria-labelledby="featured-title">
      <div className="section-head">
        <p className="eyebrow">{t.featured.label}</p>
        <h2 id="featured-title" className="section-title">
          {t.featured.title}
        </h2>
        <p className="section-lead">{t.featured.subtitle}</p>
      </div>

      <div className="featured__apps">
        {projects.map((p, i) => (
          <motion.article
            key={p.key}
            className="featured__app"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="featured__icon-stack">
              <motion.div
                className="featured__icon-glass"
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              >
                <div className="featured__icon-squircle">
                  <img
                    className="featured__icon-img"
                    src={p.iconSrc}
                    alt={p.iconAlt}
                    width={120}
                    height={120}
                    decoding="async"
                    loading="lazy"
                  />
                  <span className="featured__icon-sheen" aria-hidden />
                </div>
              </motion.div>
            </div>

            <div className="featured__copy">
              <h3 className="featured__name">{p.label}</h3>
              <p className="featured__body">{p.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
