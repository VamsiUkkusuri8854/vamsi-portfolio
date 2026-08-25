import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'
import ResumeWidget from './components/ResumeWidget'
import ParticlesBg from './components/ParticlesBg'
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

  return (
    <div className={`min-h-screen relative transition-colors duration-500 overflow-x-hidden ${theme === 'dark' ? 'bg-[#0b1120] text-slate-100' : 'bg-[#ffffff] text-slate-900 font-medium'
      }`}>
      {/* Dynamic Greetings Preloader Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      {/* Dynamic Viewport Cyber Neon Border */}
      <div className="viewport-glow-border pointer-events-none" />

      {/* Background Interactive Particles */}
      <ParticlesBg theme={theme} />

      {/* Floating Side Components */}
      <SocialBar theme={theme} />
      <ResumeWidget theme={theme} />

      {/* Primary Navigation Header */}
      <Navbar theme={theme} activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Core Pages Container */}
      <main className="relative z-10 flex flex-col flex-grow min-h-screen pt-24">
        {activeSection === 'home' && (
          <div className={`w-full flex-grow transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0b1120] via-[#09183d] to-[#0b1120]' : 'bg-white'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl">
              <Hero theme={theme} setActiveSection={setActiveSection} />
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className={`w-full flex-grow transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0b1120] via-[#1e1548] to-[#0b1120]' : 'bg-white'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl">
              <About theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className={`w-full flex-grow transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0b1120] via-[#092d24] to-[#0b1120]' : 'bg-white'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl">
              <Skills theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className={`w-full flex-grow transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0b1120] via-[#0e2158] to-[#0b1120]' : 'bg-white'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl">
              <Projects theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'education' && (
          <div className={`w-full flex-grow transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0b1120] via-[#240e3c] to-[#0b1120]' : 'bg-white'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl">
              <Education theme={theme} />
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className={`w-full flex-grow transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-[#0b1120] via-[#092545] to-[#0b1120]' : 'bg-white'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl">
              <Contact theme={theme} />
            </div>
          </div>
        )}
      </main>

      {/* Grid Footer details */}
      <Footer theme={theme} />
    </div>
  )
}
