import './SectionTitle.css'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', id }) {
  return (
    <header className={`section-title section-title--${align}`}>
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-title__title">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </header>
  )
}
