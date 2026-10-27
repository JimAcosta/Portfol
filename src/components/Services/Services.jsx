import { services } from '../../data/services'
import SectionTitle from '../SectionTitle/SectionTitle'
import ServiceCard from '../ServiceCard/ServiceCard'
import './Services.css'

export default function Services({ onSelectService }) {
  return (
    <section id="servicios" className="section services" aria-labelledby="servicios-title">
      <div className="container">
        <SectionTitle
          id="servicios-title"
          eyebrow="Servicios"
          title="¿Qué te soluciono hoy?"
          subtitle="Elegí lo que necesitás y lo charlamos. Cada trabajo se hace a medida de tu negocio."
        />
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={onSelectService} />
          ))}
        </div>
      </div>
    </section>
  )
}
