import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'
import ResumeWidget from './components/ResumeWidget'
import Preloader from './components/Preloader'
import { AnimatePresence } from 'framer-motion'

export default function App() {
  const theme = 'light'
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen relative transition-colors duration-500 overflow-x-hidden ${theme === 'dark' ? 'bg-[#0b1120] text-slate-100' : 'bg-[#ffffff] text-slate-900 font-medium'
      }`}>
      {/* Dynamic Greetings Preloader Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      {/* Floating Side Components */}
      <SocialBar theme={theme} />
      <ResumeWidget theme={theme} />

      {/* Primary Navigation Header */}
      <Navbar theme={theme} activeSection={activeSection} onNavigate={navigateToSection} />

      <main className="relative z-10 flex flex-col flex-grow min-h-screen pt-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl">
          <Hero theme={theme} setActiveSection={navigateToSection} />
          <About theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Education theme={theme} />
          <Certifications theme={theme} />
          <Contact theme={theme} />
        </div>
      </main>

      {/* Grid Footer details */}
      <Footer theme={theme} />
    </div>
  )
}
