import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function StudioIntro() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, -24])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.35, 1, 1, 0.85])
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.97, 1])

  return (
    <section ref={ref} className="studio" id="studio" aria-labelledby="studio-title">
      <motion.div className="studio__panel" style={{ y, opacity, scale }}>
        <p className="eyebrow">{t.intro.label}</p>
        <h2 id="studio-title" className="section-title section-title--left">
          {t.intro.title}
        </h2>
        <p className="studio__text">{t.intro.p1}</p>
        <p className="studio__text">{t.intro.p2}</p>
        <blockquote className="studio__quote">{t.intro.quote}</blockquote>
      </motion.div>
    </section>
  )
}
