import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Philosophy() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const shift = useTransform(scrollYProgress, [0, 1], ['2%', '-2%'])

  return (
    <section ref={ref} className="philosophy" id="philosophy" aria-labelledby="philosophy-title">
      <div className="section-head">
        <p className="eyebrow">{t.philosophy.label}</p>
        <h2 id="philosophy-title" className="section-title">
          {t.philosophy.title}
        </h2>
      </div>
      <motion.ul className="philosophy__grid" style={{ x: shift }}>
        {t.philosophy.items.map((item, i) => (
          <motion.li
            key={item.title}
            className="philosophy__card"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{
              duration: 0.68,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="philosophy__index" aria-hidden>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="philosophy__card-title">{item.title}</h3>
            <p className="philosophy__card-body">{item.body}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
