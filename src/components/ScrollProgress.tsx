import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 })
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#e4e4e8', '#9c9ca3'])

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: '0% 50%', backgroundColor }}
      aria-hidden
    />
  )
}
