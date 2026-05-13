/** Foto de fondo + velos blancos; capas mínimas para lectura white-on-white */
export function TechBackdrop() {
  return (
    <div className="tech-backdrop" aria-hidden>
      <div className="tech-backdrop__photo" />
      <div className="tech-backdrop__veil" />
      <div className="tech-backdrop__bloom tech-backdrop__bloom--a" />
      <div className="tech-backdrop__bloom tech-backdrop__bloom--b" />
      <div className="tech-backdrop__grid" />
    </div>
  )
}
