import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 })
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#e07850', '#f4a088'])

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: '0% 50%', backgroundColor }}
      aria-hidden
    />
  )
}
