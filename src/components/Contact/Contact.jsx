import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { services } from '../../data/services'
import Button from '../Button/Button'
import './Contact.css'

export default function Contact({ selectedService }) {
  const [form, setForm] = useState({ name: '', service: '', message: '' })

  // Cuando el usuario toca "¡Me sirve!" en una tarjeta, se preselecciona el servicio.
  useEffect(() => {
    if (selectedService) setForm((f) => ({ ...f, service: selectedService }))
  }, [selectedService])

  const update = (field) => (event) => setForm((f) => ({ ...f, [field]: event.target.value }))

  const whatsappHref = `${profile.whatsappUrl}?text=${encodeURIComponent(profile.whatsappText)}`

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = `Consulta desde la web${form.service ? `: ${form.service}` : ''}`
    const body = `Hola, soy ${form.name || '(tu nombre)'}.\n\n${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" className="section contact" aria-labelledby="contacto-title">
      <div className="container contact__card">
        <div className="contact__copy">
          <h2 id="contacto-title" className="contact__title">¿Le mandamos mecha a tu proyecto?</h2>
          <p className="contact__text">Dejame un mensaje y charlamos de lo que necesitás.</p>
          <div className="contact__actions">
            <Button href={whatsappHref} variant="whatsapp" icon="chat" external>
              Mandar mensaje a WhatsApp
            </Button>
            <a className="contact__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="c-name">Tu nombre</label>
          <input id="c-name" type="text" value={form.name} onChange={update('name')} placeholder="¿Cómo te llamás?" autoComplete="name" required />

          <label htmlFor="c-service">¿Qué necesitás?</label>
          <select id="c-service" value={form.service} onChange={update('service')}>
            <option value="">Elegí una opción</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
          </select>

          <label htmlFor="c-message">Mensaje</label>
          <textarea id="c-message" rows="4" value={form.message} onChange={update('message')} placeholder="Contame un poco de tu idea" required />

          <Button type="submit" icon="mail">Enviar por mail</Button>
        </form>
      </div>
    </section>
  )
}
