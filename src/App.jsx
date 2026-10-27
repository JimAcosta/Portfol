
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
  Services,
  ScrollToTop,
} from './components'
import ProjectDetail from './Pages/ProjectDetail'
import { sectionIds } from './data/profile'
import useActiveSection from './hooks/useActiveSection'

function Home() {
  const activeId = useActiveSection(sectionIds)
  const [selectedService, setSelectedService] = useState('')

  return (
    <>
      <Header activeId={activeId === 'app' ? 'servicios' : activeId} />
      <main>
        <Hero />
        <Services onSelectService={setSelectedService} />
        <Portfolio />
        <About />
        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </>
  )
}

function ProjectRoute() {
  return <ProjectDetail />
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:slug" element={<ProjectRoute />} />
      </Routes>
    </>
  )
}
