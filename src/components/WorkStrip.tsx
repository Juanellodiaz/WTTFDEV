import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import { useLanguage } from '../context/LanguageContext'

const cards = [
  { key: 'a', hue: 'var(--orb-highlight)' },
  { key: 'b', hue: 'var(--orb-mid)' },
  { key: 'c', hue: 'var(--orb-soft)' },
] as const

export function WorkStrip() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="work" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <p className="eyebrow">{t.nav.work}</p>
        <h2 id="work-title" className="section-title">
          {t.work.title}
        </h2>
        <p className="section-lead">{t.work.subtitle}</p>
      </div>
      <motion.div className="work__row" style={{ x }}>
        {cards.map((c, i) => (
          <motion.article
            key={c.key}
            className="work__card"
            style={{ '--card-accent': c.hue } as CSSProperties}
            initial={{ opacity: 0, y: 48, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="work__card-glare" aria-hidden />
            <p className="work__card-label">0{i + 1}</p>
            <h3 className="work__card-title">{t.work.cards[i]}</h3>
            <p className="work__card-body">{t.work.subtitle}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
