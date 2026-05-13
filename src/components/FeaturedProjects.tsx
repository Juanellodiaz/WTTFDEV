import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function FeaturedProjects() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3])
  const lift = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -20])

  const projects = [
    { key: 'dueDates', label: t.featured.dueDates.name, body: t.featured.dueDates.body, tone: 'coral' as const },
    { key: 'photoSwiper', label: t.featured.photoSwiper.name, body: t.featured.photoSwiper.body, tone: 'peach' as const },
  ]

  return (
    <section ref={ref} className="featured" id="work" aria-labelledby="featured-title">
      <div className="section-head">
        <p className="eyebrow">{t.featured.label}</p>
        <h2 id="featured-title" className="section-title">
          {t.featured.title}
        </h2>
        <p className="section-lead">{t.featured.subtitle}</p>
      </div>
      <motion.div className="featured__row" style={{ y: lift, rotate }}>
        {projects.map((p, i) => (
          <motion.article
            key={p.key}
            className={`featured__card featured__card--${p.tone}`}
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="featured__card-glare" aria-hidden />
            <h3 className="featured__card-name">{p.label}</h3>
            <p className="featured__card-body">{p.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
