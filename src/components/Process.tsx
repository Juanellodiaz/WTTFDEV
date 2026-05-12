import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Process() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end start'],
  })
  const lineScale = useTransform(scrollYProgress, [0.08, 0.95], [0, 1])

  return (
    <section className="process" aria-labelledby="process-title">
      <div ref={ref} className="process__wrap">
        <div className="section-head">
          <p className="eyebrow">{t.process.label}</p>
          <h2 id="process-title" className="section-title">
            {t.process.title}
          </h2>
        </div>

        <div className="process__timeline">
          <motion.div className="process__line" style={{ scaleY: lineScale }} />
          <ol className="process__steps">
            {t.process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                className="process__step"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="process__dot" aria-hidden />
                <div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-body">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
