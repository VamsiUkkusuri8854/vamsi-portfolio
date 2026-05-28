import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { name: 'Home', target: '#home' },
  { name: 'About Me', target: '#about' },
  { name: 'Skills', target: '#skills' },
  { name: 'Projects', target: '#projects' },
  { name: 'Education', target: '#about-journey' },
  { name: 'Contact Me', target: '#contact' }
]

export default function Navbar({ theme }) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-40 top-0 px-6 py-4 print:hidden"
    >
      <div className={`max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center px-6 py-3 rounded-full border shadow-xl relative transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-slate-950/65 border-slate-800/80 text-white shadow-black/40' 
          : 'bg-white/75 backdrop-blur-md border-slate-200/80 text-slate-800 shadow-slate-200/50'
      }`}>
        {/* Left: Brand/Logo */}
        <div>
          <a href="#" className="font-sans text-lg md:text-xl font-extrabold tracking-wide hover:opacity-80 transition-opacity">
            Vamsi <span className="text-violet-500 font-medium">Ukkusuri</span>
          </a>
        </div>

        {/* Navigation Links as Pill Buttons */}
        <nav className="flex flex-wrap gap-2 md:gap-3 items-center">
          {links.map(l => (
            <a
              key={l.name}
              href={l.target}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-bold transition-all hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border border-slate-800/80 text-slate-200 hover:border-cyan hover:text-cyan hover:shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                  : 'bg-slate-950 text-white hover:bg-slate-800 shadow-lg'
              }`}
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}


