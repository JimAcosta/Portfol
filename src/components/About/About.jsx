import { avatar } from '../../assets/images'
import { profile } from '../../data/profile'
import SectionTitle from '../SectionTitle/SectionTitle'
import './About.css'

const tools = ['React JS', 'Typescript', 'Python', 'Node JS', 'Diseño', 'Automatizaciones']

export default function About() {
  return (
    <section id="quien-soy" className="section about" aria-labelledby="quien-soy-title">
      <div className="container about__grid">
        <div className="about__photo">
          <img src={avatar} alt={`Retrato de ${profile.name}`} width="600" height="720" loading="lazy" />
        </div>

        <div>
          <SectionTitle id="quien-soy-title" eyebrow="Quién soy" title="¿Quién soy?" />
          <div className="about__text">
            <p>
              Soy <strong>{profile.name}</strong>, desarrollador y diseñador. Armo herramientas para negocios locales y
              creadores que quieren verse bien y trabajar con menos vueltas.
            </p>
            <p>
              Por ejemplo: un menú digital o una página que se actualiza sola desde Google Sheets, edición de video
              para tus redes o una app para llevar las ventas y el stock de tu local.
            </p>
          </div>
          <ul className="about__tools" aria-label="Herramientas">
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
