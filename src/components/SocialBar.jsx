import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function SocialBar({ theme }) {
  const socials = [
    { 
      icon: <FiGithub size={26} strokeWidth={2.5} />, 
      url: 'https://github.com/VamsiUkkusuri8854', 
      name: 'GitHub',
      colorClass: 'text-slate-800 border-slate-300 bg-white shadow-sm hover:bg-slate-800 hover:text-white hover:shadow-md'
    },
    { 
      icon: <FiLinkedin size={26} strokeWidth={2.5} />, 
      url: 'https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280', 
      name: 'LinkedIn',
      colorClass: 'text-[#0A66C2] border-[#0A66C2]/30 bg-white shadow-sm hover:bg-[#0A66C2] hover:text-white hover:shadow-md'
    },
    { 
      icon: <FiMail size={26} strokeWidth={2.5} />, 
      url: 'mailto:vamsiukkusuri@gmail.com', 
      name: 'Email',
      colorClass: 'text-cyan-600 border-cyan-300 bg-white shadow-sm hover:bg-cyan-500 hover:text-white hover:shadow-md'
    }
  ]

  return (
    <div className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center">
      {/* Grouped Capsule Dock Container */}
      <div className="relative group flex flex-col items-center">
        
        {/* Glow backdrop based on website brand colors (White -> LinkedIn Blue -> Cyan) */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-b from-white/50 via-[#0A66C2]/15 to-cyan/15 blur-xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glassmorphism Capsule Body */}
        <div className="relative px-3 py-5 rounded-full bg-white backdrop-blur-xl border border-slate-200 flex flex-col gap-5 shadow-lg">
          {socials.map((s, idx) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className={`transition-all p-3 rounded-full border flex items-center justify-center hover:scale-110 shadow-sm ${s.colorClass}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              title={s.name}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Connecting Vertical line to bottom */}
      <motion.div 
        className="w-[1px] h-20 mt-4 bg-gradient-to-b from-cyan-400 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.7 }}
      />
    </div>
  )
}
