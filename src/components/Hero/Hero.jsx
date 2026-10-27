import { useEffect, useState } from 'react'
import { avatar } from '../../assets/images'
import { profile } from '../../data/profile'
import Button from '../Button/Button'
import './Hero.css'

const words = ['Páginas web', 'Logos', 'Sistemas', 'Tiendas','APIs', 'Apps']
const chips = [
  { label: 'Diseño', color: 'var(--coral)' },
  { label: 'Código', color: 'var(--mint)' },
  { label: 'Datos', color: 'var(--lilac)' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__hello">¡Hola! Soy {profile.name}</p>
          <h1 className="hero__title">
            Diseño
            <span className="hero__word" aria-live="off">
              <span key={words[index]} className="hero__word-inner">{words[index]}</span>
            </span>
          </h1>
          <p className="hero__text">
            Creo páginas web, sistemas y herramientas digitales que ayudan a las marcas a destacar, conectar con sus clientes y aprovechar nuevas oportunidades.
          </p>
          <div className="hero__actions">
            <Button href="#trabajos" icon="arrow">Ver Cv</Button>
            <Button href="#contacto" variant="ghost">Contacto</Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <img src={avatar} alt="" width="600" height="720" />
          </div>
          {chips.map((chip, i) => (
            <span key={chip.label} className={`hero__chip hero__chip--${i + 1}`} style={{ '--chip': chip.color }}>
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
