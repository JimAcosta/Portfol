import { Archer,Analisis,AutogestionCaC,BacklogSeries,GalaxyImpact,Vibras,Lanomina} from '../assets/images'
import { AutogestionCaCVideo } from '../assets/Videos'


export const categories = [
  { id: 'todo', label: 'Todo' },
  { id: 'landing', label: 'Landing Pages' },
  { id: 'Catalogos', label: 'Catalogos' },
  { id: 'Sistema', label: 'Sistemas' },
  { id: 'Automatizaciones', label: 'Automatizaciones' },
  { id: 'otros', label: 'Otros' },
]

// `ratio` define la proporción de la tarjeta en la grilla (ancho / alto)

export const works = [
  {
    id: 'Sistema 1',
    slug: 'archer',
    category: 'Sistema',
    title: 'Archer1',
    src: Archer,
    ratio: '1 / 1',
    description:
      'Sistema digital diseñado para optimizar procesos y ofrecer una experiencia de usuario clara e intuitiva.',
    role: 'Diseño y desarrollo del proyecto.',
    year: '',
    overview:
      'Proyecto digital enfocado en optimizar procesos y presentar la información de forma clara.',
    challenge:
      'Organizar la información y ofrecer una experiencia de uso intuitiva.',
    solution:
      'Una interfaz estructurada para facilitar la navegación y el acceso a la información.',
    demo: {
      type: 'image',
      src: Archer,
    },
    technologies: [
      { name: 'React', icon: Archer },
      { name: 'JavaScript', icon: Archer },
      { name: 'CSS', icon: Archer },
    ],
    gallery: [
      { src: Archer, alt: 'Vista principal de Archer' },
    ],
    liveUrl: '',
  },

  {
    id: 'Catalogo 1',
    slug: 'vibras-store',
    category: 'Catalogos',
    title: 'Vibras Store',
    src: Vibras,
    ratio: '1 / 1',
    description:
      'Proyecto de identidad visual y presentación de productos para Vibras Store.',
    role: 'Diseño visual y desarrollo de la propuesta.',
    year: '',
    overview:
      'Proyecto orientado a presentar una marca y sus productos mediante una propuesta visual coherente.',
    challenge:
      'Transmitir la identidad de la marca de manera atractiva y reconocible.',
    solution:
      'Una propuesta gráfica que mantiene la coherencia visual de la marca.',
    demo: {
      type: 'image',
      src: Vibras,
    },
    technologies: [
      { name: 'Diseño gráfico', icon: Vibras },
      { name: 'Identidad visual', icon: Vibras },
      { name: 'Diseño digital', icon: Vibras },
    ],
    gallery: [
      { src: Vibras, alt: 'Diseño de Vibras Store' },
    ],
    liveUrl: '',
  },

  {
    id: 'Landing 1',
    slug: 'abm-cac',
    category: 'landing',
    title: 'ABM CaC',
    src: AutogestionCaC,
    ratio: '1 / 1',
    description:
      'Landing page relacionada con el proyecto ABM CaC, diseñada para presentar información de forma clara y accesible.',
    role: 'Diseño y desarrollo de la interfaz.',
    year: '',
    overview:
      'Página web enfocada en comunicar la información principal del proyecto y facilitar su consulta.',
    challenge:
      'Organizar los contenidos para que los visitantes encuentren rápidamente la información relevante.',
    solution:
      'Una página estructurada con una jerarquía visual clara y una navegación sencilla.',
    demo: {
      type: 'video',
      src: AutogestionCaCVideo,
    },
    technologies: [
      { name: 'HTML', icon: AutogestionCaC },
      { name: 'CSS', icon: AutogestionCaC },
      { name: 'JavaScript', icon: AutogestionCaC },
    ],
    gallery: [
      { src: AutogestionCaC, alt: 'Vista de la landing page ABM CaC' },
    ],
    liveUrl: '',
  },

  {
    id: 'Analisis 1',
    slug: 'analisis-futbol-europeo',
    category: 'Automatizaciones',
    title: 'Análisis Estadístico Fútbol Europeo',
    src: Analisis,
    ratio: '1 / 1',
    description:
      'Proyecto de análisis estadístico orientado a explorar datos del fútbol europeo y facilitar la interpretación de sus resultados.',
    role: 'Análisis y presentación visual de datos.',
    year: '',
    overview:
      'Proyecto centrado en analizar estadísticas relacionadas con el fútbol europeo.',
    challenge:
      'Convertir datos estadísticos en información que resulte comprensible y útil.',
    solution:
      'Organización y presentación de los datos para facilitar su exploración e interpretación.',
    demo: {
      type: 'image',
      src: Analisis,
    },
    technologies: [
      { name: 'Análisis de datos', icon: Analisis },
      { name: 'Estadística', icon: Analisis },
      { name: 'Visualización de datos', icon: Analisis },
    ],
    gallery: [
      { src: Analisis, alt: 'Análisis estadístico del fútbol europeo' },
    ],
    liveUrl: '',
  },

  {
    id: 'Sistema 2',
    slug: 'backlog-series',
    category: 'Sistema',
    title: 'Backlog Series',
    src: BacklogSeries,
    ratio: '1 / 1',
    description:
      'Proyecto digital relacionado con la organización y gestión de series y contenidos audiovisuales.',
    role: 'Diseño y desarrollo de la propuesta.',
    year: '',
    overview:
      'Propuesta de sistema para organizar y consultar información relacionada con series.',
    challenge:
      'Facilitar la organización de contenidos y su consulta por parte de los usuarios.',
    solution:
      'Una presentación estructurada de la información para mejorar la experiencia de navegación.',
    demo: {
      type: 'image',
      src: BacklogSeries,
    },
    technologies: [
      { name: 'React', icon: BacklogSeries },
      { name: 'JavaScript', icon: BacklogSeries },
      { name: 'CSS', icon: BacklogSeries },
    ],
    gallery: [
      { src: BacklogSeries, alt: 'Vista de Backlog Series' },
    ],
    liveUrl: '',
  },

  {
    id: 'Otros 1',
    slug: 'galaxy-impact',
    category: 'otros',
    title: 'Galaxy Impact',
    src: GalaxyImpact,
    ratio: '1 / 1',
    description:
      'Proyecto creativo identificado como Galaxy Impact, con una propuesta visual propia.',
    role: 'Diseño y desarrollo de la propuesta visual.',
    year: '',
    overview:
      'Proyecto enfocado en presentar una identidad visual reconocible y coherente.',
    challenge:
      'Crear una presentación gráfica que destaque y comunique la identidad del proyecto.',
    solution:
      'Una propuesta visual centrada en la composición y el reconocimiento de la marca.',
    demo: {
      type: 'image',
      src: GalaxyImpact,
    },
    technologies: [
      { name: 'Diseño gráfico', icon: GalaxyImpact },
      { name: 'Composición visual', icon: GalaxyImpact },
      { name: 'Diseño digital', icon: GalaxyImpact },
    ],
    gallery: [
      { src: GalaxyImpact, alt: 'Diseño de Galaxy Impact' },
    ],
    liveUrl: '',
  },

  {
    id: 'Sistema 3',
    slug: 'la-nomina',
    category: 'Sistema',
    title: 'La Nómina',
    src: Lanomina,
    ratio: '1 / 1',
    description:
      'Proyecto de sistema digital relacionado con la gestión de información de nómina.',
    role: 'Diseño y desarrollo de la propuesta.',
    year: '',
    overview:
      'Sistema orientado a organizar y presentar información relacionada con la nómina.',
    challenge:
      'Facilitar el acceso a la información y mejorar su organización.',
    solution:
      'Una propuesta de interfaz que prioriza la claridad y la consulta de los datos.',
    demo: {
      type: 'image',
      src: Lanomina,
    },
    technologies: [
      { name: 'React', icon: Lanomina },
      { name: 'JavaScript', icon: Lanomina },
      { name: 'CSS', icon: Lanomina },
    ],
    gallery: [
      { src: Lanomina, alt: 'Vista de La Nómina' },
    ],
    liveUrl: '',
  },
]


