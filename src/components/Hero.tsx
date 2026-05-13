import { useEffect, useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import heroBannerVideo from '../assets/Background_principal_banner.mp4'

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    if (reduce) return
    const el = videoRef.current
    if (!el) return
    el.defaultMuted = true
    el.muted = true
    void el.play().catch(() => {
      /* autoplay puede bloquearse hasta interacción */
    })
  }, [reduce])
  const yGlass = useTransform(scrollYProgress, [0, 0.45], [0, reduce ? 0 : 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, reduce ? 1 : 0.96])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.35], [1, reduce ? 1 : 0.4])
  const meshRotate = useTransform(scrollYProgress, [0, 1], [0, 0])
  const gridOpacity = useTransform(scrollYProgress, [0, 0.25], [0.45, 0.12])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const glassRotate = useTransform(scrollYProgress, [0, 0.55], [0, 0])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {reduce ? (
        <div className="hero__video-fallback" aria-hidden />
      ) : (
        <div className="hero__video-wrap" aria-hidden>
          <video
            ref={videoRef}
            className="hero__video"
            src={heroBannerVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="hero__video-veil" />
        </div>
      )}
      <motion.div
        className="hero__mesh"
        style={{ opacity: glowOpacity, rotate: meshRotate }}
        aria-hidden
      />
      <motion.div className="hero__grid" style={{ opacity: gridOpacity }} aria-hidden />

      <div className="hero__inner">
        <motion.div className="hero__glass" style={{ y: yGlass, scale, rotateX: glassRotate }}>
          <p className="hero__badge">{t.hero.badge}</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">{t.hero.title}</span>
            <span className="hero__title-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn--ghost" href="#philosophy">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero__scroll-hint" style={{ opacity: hintOpacity }} aria-hidden>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
