import React from 'react'
import Typewriter from './Typewriter'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiFileText } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

export default function Hero({ theme }) {
  // Trigger CV modal click (simulates clicking the floating resume widget)
  const triggerResumeModal = () => {
    const mainResumeBtn = document.querySelector('.fixed.right-6.bottom-6 button')
    if (mainResumeBtn) {
      mainResumeBtn.click()
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16">
      <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 w-fit border ${
            theme === 'dark'
              ? 'bg-slate-900/60 border-slate-800 text-cyan'
              : 'bg-slate-100 border-slate-200 text-violet-600'
          }`}>
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            Open to AI & Backend Engineering Roles
          </div>

          <h1 className={`text-6xl md:text-8xl font-extrabold leading-tight tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Vamsi <br/>
            <span className="bg-gradient-to-r from-cyan via-violet-500 to-pink-500 bg-clip-text text-transparent">Ukkusuri</span>
          </h1>

          <p className={`mt-4 text-lg md:text-xl font-medium font-sans max-w-lg leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-650'
          }`}>
            I'm a Java backend engineer & AI student specialized in building highly scalable enterprise architectures, secure REST APIs, and intelligent data-driven applications.
          </p>

          <div className={`mt-4 h-8 font-mono text-base md:text-lg flex items-center font-bold ${
            theme === 'dark' ? 'text-cyan' : 'text-violet-600'
          }`}>
            <span>&gt; Developing&nbsp;</span>
            <Typewriter words={["Scalable Backends", "Java Systems", "AI & ML Applications", "Robust DSA Solutions", "RESTful APIs"]} />
          </div>

          <p className={`mt-6 text-sm md:text-base max-w-xl leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Motivated AI & ML student with strong foundations in enterprise Java backend frameworks (Spring Boot, Hibernate, MySQL) and machine learning workflows. A passionate algorithmic problem solver with 500+ solved platform problems.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan to-violet-600 rounded-full text-white font-bold tracking-wide flex items-center gap-2 hover:scale-105 transition-all shadow-lg hover:shadow-cyan/20"
            >
              Explore Projects <FiArrowRight size={18} />
            </a>
            
            {/* Interactive Rounded CV Button */}
            <button
              onClick={triggerResumeModal}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all ${
                theme === 'dark'
                  ? 'border-slate-700 hover:border-pink-500 text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900'
                  : 'border-slate-350 hover:border-violet-600 text-slate-800 hover:text-violet-600 bg-slate-50 hover:bg-white shadow-sm'
              }`}
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
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Container */}
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] flex items-center justify-center">
            
            {/* Decorative orbit ring 1 (Pink) */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-pink-500/35 rounded-full pointer-events-none animate-[spin_24s_linear_infinite]" />
            
            {/* Decorative orbit ring 2 (Cyan dashed) */}
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-dashed border-cyan/25 rounded-full pointer-events-none animate-[spin_16s_linear_infinite_reverse]" />

            {/* Glowing Backdrop */}
            <div className="absolute w-64 h-64 rounded-full bg-violet-600/10 blur-3xl" />

            {/* Huge 3D Sphere */}
            <div className="glossy-orb-large w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center relative">
              
              {/* Internal Sphere Highlights */}
              <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-white/20 rounded-full blur-[2px] pointer-events-none" />
              <div className="absolute bottom-[8%] right-[8%] w-[25%] h-[25%] bg-black/45 rounded-full blur-[5px] pointer-events-none" />
              
              {/* Centered 2x2 Grid of Social Icons inside the Sphere */}
              <div className="grid grid-cols-2 gap-7 md:gap-9 z-20 relative">
                {/* GitHub Widget */}
                <motion.a
                  href="https://github.com/VamsiUkkusuri8854"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.25, boxShadow: '0 0 20px rgba(255,255,255,0.7)', zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/25 bg-[#24292e] text-[#ffffff] flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.25)] cursor-pointer transition-transform"
                >
                  <FaGithub size={18} />
                </motion.a>

                {/* GeeksforGeeks Widget */}
                <motion.a
                  href="https://www.geeksforgeeks.org/profile/vamsiuk1oml?tab=activity"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.25, boxShadow: '0 0 20px rgba(47,141,70,0.7)', zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-emerald-500/20 bg-[#2F8D46] text-white flex items-center justify-center shadow-[0_0_12px_rgba(47,141,70,0.35)] cursor-pointer transition-transform"
                >
                  <SiGeeksforgeeks size={18} />
                </motion.a>

                {/* LinkedIn Widget */}
                <motion.a
                  href="https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.25, boxShadow: '0 0 20px rgba(10,102,194,0.7)', zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#0077B5]/20 bg-[#0A66C2] text-white flex items-center justify-center shadow-[0_0_12px_rgba(10,102,194,0.35)] cursor-pointer transition-transform"
                >
                  <FaLinkedin size={18} />
                </motion.a>

                {/* LeetCode Widget */}
                <motion.a
                  href="https://leetcode.com/u/oNPlQuPkmI/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.25, boxShadow: '0 0 20px rgba(248,159,27,0.7)', zIndex: 30 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-orange-400/20 bg-[#F89F1B] text-white flex items-center justify-center shadow-[0_0_12px_rgba(248,159,27,0.35)] cursor-pointer transition-transform"
                >
                  <SiLeetcode size={18} />
                </motion.a>
              </div>

            </div>




          </div>
        </motion.div>
      </div>
    </section>
  )
}
