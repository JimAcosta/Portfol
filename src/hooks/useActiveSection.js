
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function useSectionNavigation() {
  const location = useLocation()
  const navigate = useNavigate()

  return useCallback((event, id) => {
    event?.preventDefault()

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [location.pathname, navigate])
}
