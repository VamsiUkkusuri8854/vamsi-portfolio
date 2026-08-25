import React from 'react'
import Typewriter from './Typewriter'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiFileText } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

export default function Hero({ theme, setActiveSection }) {
  // Trigger CV modal click (simulates clicking the floating resume widget)
  const triggerResumeModal = () => {
    const mainResumeBtn = document.querySelector('.fixed.right-6.bottom-6 button')
    if (mainResumeBtn) {
      mainResumeBtn.click()
    }
  }

  return (
    <section id="home" className="min-h-[85vh] md:min-h-screen flex items-center pt-20 md:pt-28 pb-10 md:pb-16">
      <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 w-fit border ${theme === 'dark'
              ? 'bg-slate-900/60 border-slate-800 text-cyan'
              : 'bg-slate-100 border-slate-200 text-violet-600'
            }`}>
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            Open to AI & Backend Engineering Roles
          </div>

          <h1 className={`text-6xl md:text-8xl font-extrabold leading-tight tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
            Vamsi <br />
            <span className="bg-gradient-to-r from-cyan via-violet-500 to-pink-500 bg-clip-text text-transparent">Ukkusuri</span>
          </h1>

          <p className={`mt-4 text-lg md:text-xl font-medium font-sans max-w-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-650'
            }`}>
            I'm a Java backend engineer & AI student specialized in building highly scalable enterprise architectures, secure REST APIs, and intelligent data-driven applications.
          </p>

          <div className={`mt-4 h-8 font-mono text-base md:text-lg flex items-center font-bold ${theme === 'dark' ? 'text-cyan' : 'text-violet-600'
            }`}>
            <span>&gt; Developing&nbsp;</span>
            <Typewriter words={["Scalable Backends", "Java Systems", "AI & ML Applications", "Robust DSA Solutions", "RESTful APIs"]} />
          </div>

          <p className={`mt-6 text-sm md:text-base max-w-xl leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
            Motivated AI & ML student with strong foundations in enterprise Java backend frameworks (Spring Boot, Hibernate, MySQL) and machine learning workflows. A passionate algorithmic problem solver with 500+ solved platform problems.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              onClick={() => { setActiveSection('projects'); window.scrollTo(0,0); }}
              className="px-6 py-3 bg-white border-2 border-violet-600 rounded-full text-violet-700 font-bold tracking-wide flex items-center gap-2 hover:scale-105 transition-all shadow-md hover:bg-violet-50"
            >
              Explore Projects <FiArrowRight size={18} />
            </button>

            {/* Interactive Rounded CV Button */}
            <button
              onClick={triggerResumeModal}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 hover:border-pink-500 text-slate-800 hover:text-pink-600 bg-white shadow-sm transition-all"
            >
              <FiFileText className="text-pink-500" size={18} />
              <span className="text-sm font-bold tracking-wide">View Live CV</span>
            </button>
          </div>
        </motion.div>

        {/* Right Graphic Column: 3D sphere and orbit rings */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          {/* Main Container */}
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] flex items-center justify-center">

            {/* Decorative orbit ring 1 (Pink) */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-pink-500/35 rounded-full pointer-events-none animate-[spin_24s_linear_infinite]" />

            {/* Decorative orbit ring 2 (Cyan dashed) */}
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-dashed border-cyan/25 rounded-full pointer-events-none animate-[spin_16s_linear_infinite_reverse]" />

            {/* Glowing Backdrop */}
            <div className="absolute w-64 h-64 rounded-full bg-violet-600/10 blur-3xl" />

            {/* Profile Image Container */}
            <div className="w-64 h-64 md:w-[300px] md:h-[300px] rounded-full relative p-1.5 bg-gradient-to-tr from-cyan via-violet-500 to-pink-500 shadow-2xl z-10 hover:scale-105 transition-transform duration-500">
              <img src="/profile.png" alt="Vamsi Ukkusuri" className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner bg-white" />
            </div>

            {/* Floating Social Icons around the image */}
            <motion.a
              href="https://github.com/VamsiUkkusuri8854"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, zIndex: 30 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-[10%] left-[5%] md:top-[12%] md:left-[8%] w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 bg-white text-[#24292e] flex items-center justify-center shadow-lg cursor-pointer transition-transform z-20"
            >
              <FaGithub size={22} />
            </motion.a>

            <motion.a
              href="https://www.geeksforgeeks.org/profile/vamsiuk1oml?tab=activity"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, zIndex: 30 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-[10%] right-[5%] md:top-[12%] md:right-[8%] w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 bg-white text-[#2F8D46] flex items-center justify-center shadow-lg cursor-pointer transition-transform z-20"
            >
              <SiGeeksforgeeks size={22} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, zIndex: 30 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-[10%] left-[5%] md:bottom-[12%] md:left-[8%] w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 bg-white text-[#0A66C2] flex items-center justify-center shadow-lg cursor-pointer transition-transform z-20"
            >
              <FaLinkedin size={22} />
            </motion.a>

            <motion.a
              href="https://leetcode.com/u/oNPlQuPkmI/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, zIndex: 30 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-[10%] right-[5%] md:bottom-[12%] md:right-[8%] w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 bg-white text-[#F89F1B] flex items-center justify-center shadow-lg cursor-pointer transition-transform z-20"
            >
              <SiLeetcode size={22} />
            </motion.a>




          </div>
        </motion.div>
      </div>
    </section>
  )
}
