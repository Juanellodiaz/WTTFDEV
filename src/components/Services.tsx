import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Services() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const listShift = useTransform(scrollYProgress, [0, 1], ['-1.5%', '1.5%'])

  return (
    <section ref={ref} className="services" id="services" aria-labelledby="services-title">
      <div className="section-head section-head--left">
        <p className="eyebrow">{t.services.label}</p>
        <h2 id="services-title" className="section-title section-title--left">
          {t.services.title}
        </h2>
        <p className="section-lead">{t.services.subtitle}</p>
      </div>

      <motion.ul
        className="services__list"
        style={{ x: listShift }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
      >
        {t.services.items.map((s) => (
          <motion.li key={s.title} className="services__item" variants={item}>
            <img
              className="services__index"
              src="/assets/WTTF_icon.png"
              alt=""
              width={9}
              height={9}
              decoding="async"
              loading="lazy"
              aria-hidden
            />
            <div>
              <h3 className="services__item-title">{s.title}</h3>
              <p className="services__item-body">{s.body}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
