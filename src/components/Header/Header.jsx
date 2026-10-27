
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSectionNavigation from '../../hooks/useActiveSection'
import { logo } from '../../assets/images'
import { profile, navLinks } from '../../data/profile'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import './Header.css'

export default function Header({ activeId }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigateToSection = useSectionNavigation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__bar">
        <Link
          className="header__brand"
          to="/"
          onClick={(event) => {
            close()
            navigateToSection(event, 'inicio')
          }}
          aria-label={`${profile.brand}, ir al inicio`}
        >
          <img src={logo} alt="" width="36" height="36" />
          <span>{profile.brand}</span>
        </Link>

        <nav
          className={`header__nav ${open ? 'header__nav--open' : ''}`}
          aria-label="Principal"
        >
          <ul>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  className={activeId === id ? 'is-active' : ''}
                  aria-current={activeId === id ? 'location' : undefined}
                  onClick={(event) => {
                    close()
                    navigateToSection(event, id)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            href="/#contacto"
            variant="primary"
            className="btn--small header__cta"
            onClick={(event) => {
              close()
              navigateToSection(event, 'contacto')
            }}
          >
            Hablemos
          </Button>
        </nav>

        <button
          className="header__toggle"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  )
}
