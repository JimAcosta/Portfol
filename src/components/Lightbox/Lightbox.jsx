import { useEffect } from 'react'
import Icon from '../Icon/Icon'
import './Lightbox.css'

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index]

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate(1)
      if (event.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNavigate])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button className="lightbox__close" type="button" aria-label="Cerrar" onClick={onClose}>
        <Icon name="close" size={24} />
      </button>

      {items.length > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            type="button"
            aria-label="Anterior"
            onClick={(e) => { e.stopPropagation(); onNavigate(-1) }}
          >
            <Icon name="left" size={26} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            aria-label="Siguiente"
            onClick={(e) => { e.stopPropagation(); onNavigate(1) }}
          >
            <Icon name="right" size={26} />
          </button>
        </>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} />
        <figcaption>
          {item.title} <span>{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
    </div>
  )
}
