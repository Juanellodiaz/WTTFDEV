/** Soft ambient layer for depth — no brand motifs, minimal tech surface */
export function TechBackdrop() {
  return (
    <div className="tech-backdrop" aria-hidden>
      <div className="tech-backdrop__bloom tech-backdrop__bloom--a" />
      <div className="tech-backdrop__bloom tech-backdrop__bloom--b" />
      <div className="tech-backdrop__grid" />
    </div>
  )
}
