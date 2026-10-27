import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logo } from '../../assets/images'
import { profile, navLinks } from '../../data/profile'
import './Footer.css'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const isProjectPage = location.pathname.startsWith('/proyectos')

  const handleNavigation = (event, id) => {
    event.preventDefault()

    if (isProjectPage) {
      // Volver a la página principal y luego ir a la sección.
      navigate('/', { state: { scrollTo: id } })
    } else {
      // Desplazarse directamente a la sección en la página principal.
      const section = document.getElementById(id)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.location.hash = id
      }
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__bar">
        <Link
          className="footer__brand"
          to="/"
          onClick={(event) => handleNavigation(event, 'inicio')}
        >
          <img src={logo} alt="" width="28" height="28" />
          <span>{profile.brand}</span>
        </Link>

        <nav aria-label="Pie de página">
          <ul className="footer__links">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  onClick={(event) => handleNavigation(event, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copy">
          © {profile.year} {profile.name}. Hecho con React.
        </p>
      </div>
    </footer>
  )
}
