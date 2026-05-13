import { useEffect, useState } from 'react'

const TYPE_MS = 58
const DELETE_MS = 36
const PAUSE_FULL_MS = 2200
const PAUSE_EMPTY_MS = 520

type HeroTypewriterProps = {
  phrases: string[]
  reduce: boolean
}

export function HeroTypewriter({ phrases, reduce }: HeroTypewriterProps) {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [subLen, setSubLen] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const phrase = phrases[phraseIdx % phrases.length] ?? ''
    const delay = deleting
      ? subLen > 0
        ? DELETE_MS
        : PAUSE_EMPTY_MS
      : subLen < phrase.length
        ? TYPE_MS
        : PAUSE_FULL_MS

    const id = window.setTimeout(() => {
      if (!deleting) {
        if (subLen < phrase.length) {
          setSubLen((n) => n + 1)
        } else {
          setDeleting(true)
        }
      } else if (subLen > 0) {
        setSubLen((n) => n - 1)
      } else {
        setDeleting(false)
        setPhraseIdx((i) => (i + 1) % phrases.length)
      }
    }, delay)

    return () => clearTimeout(id)
  }, [phraseIdx, subLen, deleting, phrases, reduce])

  const current = phrases[phraseIdx % phrases.length] ?? ''
  const visible = reduce ? (phrases[0] ?? '') : current.slice(0, subLen)

  return (
    <span
      className="hero__title-line hero__title-line--type"
      aria-live={reduce ? undefined : 'polite'}
      aria-atomic="true"
    >
      {visible}
      {!reduce && <span className="hero__title-cursor" aria-hidden />}
    </span>
  )
}
