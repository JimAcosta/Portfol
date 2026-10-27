# Portafolio (React + Vite)

Sitio de una sola página con estructura por componentes: cada componente vive en su propia carpeta con su
archivo `.jsx` y su `.css`.

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # genera /dist
npm run preview  # prueba el build
```

## Estructura

```
portafolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                 # punto de entrada
    ├── App.jsx                  # arma la página
    ├── assets/
    │   └── images/              # todas las imágenes (index.js es el punto único de importación)
    │       ├── brand/           # logo
    │       ├── profile/         # retrato
    │       ├── pos/             # capturas de la app de ventas
    │       └── portfolio/       # logos, flyers, thumbnails, web
    ├── components/
    │   ├── About/        About.jsx · About.css
    │   ├── Button/       Button.jsx · Button.css
    │   ├── Contact/      Contact.jsx · Contact.css
    │   ├── Footer/       Footer.jsx · Footer.css
    │   ├── Header/       Header.jsx · Header.css
    │   ├── Hero/         Hero.jsx · Hero.css
    │   ├── Icon/         Icon.jsx · Icon.css
    │   ├── Lightbox/     Lightbox.jsx · Lightbox.css
    │   ├── Portfolio/    Portfolio.jsx · Portfolio.css
    │   ├── PosApp/       PosApp.jsx · PosApp.css
    │   ├── SectionTitle/ SectionTitle.jsx · SectionTitle.css
    │   ├── ServiceCard/  ServiceCard.jsx · ServiceCard.css
    │   ├── Services/     Services.jsx · Services.css
    │   └── index.js             # barrel de exportaciones
    ├── data/                    # contenido separado de la UI
    │   ├── profile.js           # nombre, contacto y navegación
    │   ├── services.js
    │   ├── posApp.js
    │   └── portfolio.js
    ├── hooks/
    │   └── useActiveSection.js  # resalta el link activo del header
    └── styles/
        ├── variables.css        # tokens de diseño
        └── global.css           # reset y estilos base
```

## Personalizar

- **Tus datos:** `src/data/profile.js` (nombre, marca, mail, WhatsApp).
- **Servicios, trabajos y app destacada:** archivos de `src/data/`.
- **Imágenes:** reemplazá los SVG de ejemplo de `src/assets/images/` por tus archivos reales (PNG, JPG o
  WebP) y actualizá la ruta en `src/assets/images/index.js`.
- **Colores y tipografías:** `src/styles/variables.css`.
