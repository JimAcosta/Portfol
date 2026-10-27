import Icon from '../Icon/Icon'
import './ServiceCard.css'

export default function ServiceCard({ service, onSelect }) {
  const { icon, title, text } = service

  return (
    <article className="service-card">
      <span className="service-card__icon">
        <Icon name={icon} size={26} />
      </span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{text}</p>
      <a className="service-card__link" href="#contacto" onClick={() => onSelect?.(title)}>
        ¡Me sirve! <Icon name="arrow" size={16} />
      </a>
    </article>
  )
}
