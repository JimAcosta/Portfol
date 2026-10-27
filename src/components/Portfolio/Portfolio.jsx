import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, works } from '../../data/portfolio'
import Lightbox from '../Lightbox/Lightbox'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Portfolio.css'

export default function Portfolio() {
  const [category, setCategory] = useState('todo')
  const [openIndex, setOpenIndex] = useState(null)

  const visible = useMemo(
    () => (category === 'todo' ? works : works.filter((work) => work.category === category)),
    [category],
  )

  const close = useCallback(() => setOpenIndex(null), [])
  const navigate = useCallback(
    (delta) => setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length],
  )

  return (
    <section id="trabajos" className="section portfolio" aria-labelledby="trabajos-title">
      <div className="container">
        <SectionTitle
          id="trabajos-title"
          eyebrow="Trabajos"
          title="Un poco de lo que hago"
          subtitle="Logos, flyers, miniaturas y más. Tocá cualquier trabajo para verlo en grande."
        />

        <div className="portfolio__tabs" role="tablist" aria-label="Categorías de trabajos">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={category === id}
              className={`portfolio__tab ${category === id ? 'is-active' : ''}`}
              onClick={() => setCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className="portfolio__grid">
          {visible.map((work) => (
            <li
              key={work.id}
              className={`portfolio__item portfolio__item--${work.category}`}
            >
              <Link
                to={`/proyectos/${work.slug}`}
                className="portfolio__card"
                style={{ aspectRatio: work.ratio }}
                aria-label={`Ver proyecto ${work.title}`}
              >
                <img
                  src={work.src}
                  alt={work.title}
                  loading="lazy"
                />

                <span className="portfolio__label">
                  {work.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {openIndex !== null && (
        <Lightbox items={visible} index={openIndex} onClose={close} onNavigate={navigate} />
      )}
    </section>
  )
}
