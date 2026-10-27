
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, state } = useLocation()

  useLayoutEffect(() => {
    const sectionId = state?.scrollTo

    if (!sectionId) {
      window.scrollTo(0, 0)
      return
    }

    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)

      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY,
          left: 0,
          behavior: 'instant',
        })
      } else {
        window.scrollTo(0, 0)
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, state])

  return null
}

