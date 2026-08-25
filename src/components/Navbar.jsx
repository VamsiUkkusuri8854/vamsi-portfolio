import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About Me', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact Me', id: 'contact' }
]

export default function Navbar({ theme, activeSection, setActiveSection }) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-40 top-0 px-6 py-4 print:hidden"
    >
      <div className={`max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center px-6 py-3 rounded-full border shadow-xl relative transition-all duration-300 ${theme === 'dark'
          ? 'bg-slate-950/65 border-slate-800/80 text-white shadow-black/40'
          : 'bg-white/75 backdrop-blur-md border-slate-200/80 text-slate-800 shadow-slate-200/50'
        }`}>
        {/* Left: Brand/Logo */}
        <div>
          <button onClick={() => { setActiveSection('home'); window.scrollTo(0,0); }} className="font-sans text-lg md:text-xl font-extrabold tracking-wide hover:opacity-80 transition-opacity">
            Vamsi <span className="text-violet-500 font-medium">Ukkusuri</span>
          </button>
        </div>

        {/* Navigation Links as Pill Buttons */}
        <nav className="flex flex-wrap gap-2 md:gap-3 items-center">
          {links.map(l => (
            <button
              key={l.name}
              onClick={() => { setActiveSection(l.id); window.scrollTo(0,0); }}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-bold transition-all hover:scale-105 border ${
                  activeSection === l.id 
                    ? 'bg-white border-violet-600 text-violet-700 shadow-md ring-1 ring-violet-600'
                    : (theme === 'dark'
                      ? 'bg-slate-900/60 border-slate-800/80 text-slate-200 hover:border-cyan hover:text-cyan'
                      : 'bg-white border-slate-300 text-slate-600 hover:border-violet-400 hover:text-violet-600 shadow-sm hover:shadow-md')
                }`}
            >
              {l.name}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

