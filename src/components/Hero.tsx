import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 0.45], [0, reduce ? 0 : 160])
  const y2 = useTransform(scrollYProgress, [0, 0.45], [0, reduce ? 0 : 90])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, reduce ? 1 : 0.92])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.35], [1, reduce ? 1 : 0.35])
  const meshRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 28])
  const gridOpacity = useTransform(scrollYProgress, [0, 0.25], [0.5, 0.15])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.div
        className="hero__mesh"
        style={{ opacity: glowOpacity, rotate: meshRotate }}
        aria-hidden
      />
      <motion.div className="hero__grid" style={{ y: y2, opacity: gridOpacity }} aria-hidden />

      <div className="hero__inner">
        <motion.p className="hero__badge" style={{ y: y2 }}>
          {t.hero.badge}
        </motion.p>
        <motion.h1 id="hero-title" className="hero__title" style={{ y: y1, scale }}>
          <span className="hero__title-line">{t.hero.title}</span>
          <span className="hero__title-accent">{t.hero.titleAccent}</span>
        </motion.h1>
        <motion.p className="hero__subtitle" style={{ y: y2 }}>
          {t.hero.subtitle}
        </motion.p>
        <motion.div className="hero__actions" style={{ y: y2 }}>
          <a className="btn btn--primary" href="#contact">
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn--ghost" href="#services">
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div className="hero__scroll-hint" style={{ opacity: hintOpacity }} aria-hidden>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
