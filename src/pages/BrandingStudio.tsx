import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TechBackdrop } from '../components/TechBackdrop'
import { Navbar } from '../components/Navbar'
import { ScrollProgress } from '../components/ScrollProgress'
import { useLanguage } from '../context/LanguageContext'

const BEHANCE = 'https://www.behance.net/WTTF'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
}

export function BrandingStudio() {
  const { t } = useLanguage()

  return (
    <div className="page page--branding">
      <TechBackdrop />
      <ScrollProgress />
      <Navbar />
      <main className="main main--branding">
        <section className="branding-hero" aria-labelledby="branding-hero-title">
          <motion.div
            className="branding-hero__inner"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p className="eyebrow" variants={fadeUp}>
              {t.branding.heroEyebrow}
            </motion.p>
            <motion.h1 id="branding-hero-title" className="branding-hero__title" variants={fadeUp}>
              {t.branding.heroTitle}
            </motion.h1>
            <motion.p className="branding-hero__lead" variants={fadeUp}>
              {t.branding.heroLead}
            </motion.p>
            <motion.div className="branding-hero__cta" variants={fadeUp}>
              <a
                className="btn btn--primary btn--wide"
                href={BEHANCE}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.branding.behanceLabel}
              </a>
              <p className="branding-hero__hint">{t.branding.behanceHint}</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="branding-pillars" aria-labelledby="branding-pillars-title">
          <h2 id="branding-pillars-title" className="branding-pillars__heading">
            {t.branding.pillarsHeading}
          </h2>
          <ul className="branding-pillars__list">
            {t.branding.pillars.map((pillar, i) => (
              <motion.li
                key={pillar.title}
                className="branding-pillars__item"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="branding-pillars__title">{pillar.title}</h3>
                <p className="branding-pillars__body">{pillar.body}</p>
              </motion.li>
            ))}
          </ul>
        </section>

        <footer className="branding-footer">
          <p className="branding-footer__line">{t.branding.footerLine}</p>
          <Link className="branding-footer__dev" to="/">
            WTTF® <span className="branding-footer__dev-tag">DEV</span>
          </Link>
        </footer>
      </main>
    </div>
  )
}
