// Datos personales y navegación. Editá este archivo para personalizar el sitio.
export const profile = {
  name: 'Jimmy Acosta',
  brand: 'Jimmy Acosta',
  tagline: 'Páginas y Diseños',
  email: 'acostaoviedojimmy@gmail.com',
  whatsappUrl: 'https://wa.me/3764897106',
  whatsappText: 'Hola! Vi tu portafolio y quiero consultarte por un proyecto.',
  year: new Date().getFullYear(),
}

export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'quien-soy', label: 'Quién soy' },
  { id: 'contacto', label: 'Contacto' },
]

// Orden en el que se observan las secciones para resaltar el link activo del header
export const sectionIds = ['inicio', 'servicios', 'app', 'trabajos', 'quien-soy', 'contacto']
