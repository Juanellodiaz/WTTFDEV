import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

const platformKeys = ['web', 'ios', 'android', 'macos'] as const

export function Platforms() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <section ref={ref} className="platforms" id="platforms" aria-labelledby="platforms-title">
      <div className="platforms__layout">
        <div className="section-head section-head--left">
          <p className="eyebrow">{t.platforms.label}</p>
          <h2 id="platforms-title" className="section-title">
            {t.platforms.title}
          </h2>
          <p className="section-lead">{t.platforms.subtitle}</p>
        </div>

        <div className="platforms__visual" aria-hidden>
          <motion.div className="platforms__orbit" style={{ rotate: ringRotate }}>
            <span className="platforms__orbit-dot" />
          </motion.div>
          <div className="platforms__core" />
        </div>

        <ul className="platforms__grid">
          {platformKeys.map((key, i) => (
            <motion.li
              key={key}
              className="platforms__cell"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="platforms__glyph" data-platform={key} />
              <span className="platforms__name">{t.platforms[key]}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
