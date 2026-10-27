import './Icon.css'

// Iconos de trazo (viewBox 24x24). Para sumar uno nuevo, agregá su path acá.
const paths = {
  globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.500 18.400 12 21c-2.500-2.600-3.800-5.600-3.800-9S9.500 5.600 12 3z',
  video: 'M3 7.500A2.500 2.500 0 015.500 5h8A2.500 2.500 0 0116 7.500v9a2.500 2.500 0 01-2.500 2.500h-8A2.500 2.500 0 013 16.500v-9zM16 10l5-3v10l-5-3',
  pen: 'M4 20l4.500-1L19 8.500a2.100 2.100 0 00-3-3L5.500 16 4 20zM14 7l3 3',
  phone: 'M8 3h8a1.500 1.500 0 011.500 1.500v15A1.500 1.500 0 0116 21H8a1.500 1.500 0 01-1.500-1.500v-15A1.500 1.500 0 018 3zM11 18h2',
  file: 'M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM14 3v4h4M9 12h6M9 16h6',
  bolt: 'M13 2L4.500 13.500H11L10 22l9-12h-6.500L13 2z',
  store: 'M4 9l1.500-5h13L20 9M4 9a2.700 2.700 0 005.300 0 2.700 2.700 0 005.400 0A2.700 2.700 0 0020 9M5.500 12v8h13v-8M10 20v-5h4v5',
  share: 'M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.600 13.500l6.800 4M15.400 6.500l-6.800 4',
  cube: 'M12 2.500l8.500 4.700v9.600L12 21.500l-8.500-4.700V7.200L12 2.500zM3.500 7.200L12 12l8.500-4.800M12 12v9.500',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  mail: 'M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zM3.500 7.500L12 13l8.500-5.500',
  chat: 'M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1h-8l-5 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z',
  close: 'M5 5l14 14M19 5L5 19',
  menu: 'M4 7h16M4 12h16M4 17h16',
  check: 'M5 12.500l4.500 4.500L19 7.500',
  left: 'M15 5l-7 7 7 7',
  right: 'M9 5l7 7-7 7',
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
