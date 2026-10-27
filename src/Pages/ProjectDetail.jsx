import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header, Footer } from '../components'
import { works } from '../data/portfolio'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const [activeImage, setActiveImage] = useState(null)

  const project = works.find((work) => work.slug === slug)

  if (!project) {
    return (
      <>
        <Header />

        <main className="project-detail project-detail--not-found">
          <h1>Proyecto no encontrado</h1>
          <Link to="/">Volver al portfolio</Link>
        </main>

        <Footer />
      </>
    )
  }

  const {
    title,
    category,
    description,
    role,
    year,
    demo,
    technologies = [],
    gallery = [],
    liveUrl,
  } = project

  return (
    <>
      <Header />

      <main className="project-detail">
        {/* Contenido principal: texto a la izquierda y demo a la derecha */}
        <section className="project-detail__overview">
          <div className="project-detail__overview-text">
            <p className="project-detail__eyebrow">
              {category}
              {year && ` · ${year}`}
            </p>

            <h1 className="project-detail__title">{title}</h1>

            <p className="project-detail__description">
              {description}
            </p>

            {role && (
              <div className="project-detail__role">
                <span className="project-detail__label">
                  Mi participación
                </span>
                <p>{role}</p>
              </div>
            )}

            <div className="project-detail__explanation">
              <p className="project-detail__eyebrow">
                El proyecto
              </p>

              <h2>¿Qué hace y cómo funciona?</h2>

              <p>{project.overview || description}</p>

              {project.challenge && (
                <>
                  <h3>El desafío</h3>
                  <p>{project.challenge}</p>
                </>
              )}

              {project.solution && (
                <>
                  <h3>La solución</h3>
                  <p>{project.solution}</p>
                </>
              )}
            </div>

            {liveUrl && (
              <a
                href={liveUrl}
                className="project-detail__button"
                target="_blank"
                rel="noreferrer"
              >
                Ver proyecto
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          {demo && (
            <div className="project-detail__demo">
              {demo.type === 'video' ? (
                <video
                  className="project-detail__video"
                  src={demo.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={demo.poster || undefined}
                >
                  Tu navegador no admite la reproducción de este video.
                </video>
              ) : demo.type === 'embed' ? (
                <iframe
                  className="project-detail__iframe"
                  src={demo.src}
                  title={`Demo de ${title}`}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  className="project-detail__demo-image"
                  src={demo.src}
                  alt={`Vista previa de ${title}`}
                  loading="lazy"
                />
              )}

              <span className="project-detail__demo-caption">
                Vista previa del proyecto
              </span>
            </div>
          )}
        </section>

        {/* Tecnologías debajo de las dos columnas */}
        {technologies.length > 0 && (
          <section className="project-detail__technologies">
            <div className="project-detail__section-heading">
              <p className="project-detail__eyebrow">
                Herramientas y desarrollo
              </p>

              <h2>Tecnologías utilizadas</h2>
            </div>

            <div className="project-detail__tech-list">
              {technologies.map((tech) => (
                <div
                  className="project-detail__tech"
                  key={tech.name}
                  title={tech.name}
                >
                  {tech.icon && (
                    <img
                      className="project-detail__tech-icon"
                      src={tech.icon}
                      alt=""
                      loading="lazy"
                    />
                  )}

                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Galería del proyecto */}
        {gallery.length > 0 && (
          <section className="project-detail__gallery">
            <div className="project-detail__section-heading">
              <p className="project-detail__eyebrow">En detalle</p>

              <h2>Explorá el proyecto</h2>

              <p>
                Algunas pantallas y funcionalidades del desarrollo.
              </p>
            </div>

            <div className="project-detail__gallery-grid">
              {gallery.map((image, index) => (
                <button
                  className="project-detail__gallery-item"
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  aria-label={`Ampliar imagen ${index + 1} de ${title}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt || `${title}, vista ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Llamada a la acción opcional */}
        {liveUrl && (
          <section className="project-detail__closing">
            <p>¿Querés conocerlo en profundidad?</p>

            <h2>Probá el proyecto por tu cuenta.</h2>

            <a
              href={liveUrl}
              className="project-detail__button"
              target="_blank"
              rel="noreferrer"
            >
              Visitar proyecto ↗
            </a>
          </section>
        )}

        {/* Visor de imágenes */}
        {activeImage && (
          <div
            className="project-detail__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Imagen ampliada"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              className="project-detail__lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Cerrar imagen"
            >
              ×
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt || title}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default ProjectDetail
