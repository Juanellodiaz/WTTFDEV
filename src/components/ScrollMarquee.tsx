import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function ScrollMarquee() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])

  const doubled = useMemo(() => [...t.marquee.items, ...t.marquee.items], [t.marquee.items])

  return (
    <section ref={ref} className="marquee" aria-label={t.marquee.label}>
      <p className="marquee__label">{t.marquee.label}</p>
      <div className="marquee__mask">
        <motion.div className="marquee__track" style={{ x }}>
          {doubled.map((label, i) => (
            <span key={`${label}-${i}`} className="marquee__chip">
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
