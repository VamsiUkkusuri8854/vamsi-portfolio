import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function SocialBar({ theme }) {
  const socials = [
    { 
      icon: <FiGithub size={20} />, 
      url: 'https://github.com/VamsiUkkusuri8854', 
      name: 'GitHub',
      colorClass: 'text-white border-white/25 bg-[#24292e]/60 shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:bg-[#24292e] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]'
    },
    { 
      icon: <FiLinkedin size={20} />, 
      url: 'https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280', 
      name: 'LinkedIn',
      colorClass: 'text-[#0A66C2] border-[#0A66C2]/30 bg-[#0A66C2]/15 shadow-[0_0_12px_rgba(10,102,194,0.3)] hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]'
    },
    { 
      icon: <FiMail size={20} />, 
      url: 'mailto:vamsiukkusuri@gmail.com', 
      name: 'Email',
      colorClass: 'text-cyan border-cyan/30 bg-[#00F0FF]/15 shadow-[0_0_12px_rgba(0,240,255,0.3)] hover:bg-cyan hover:text-slate-950 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]'
    }
  ]

  return (
    <div className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center">
      {/* Grouped Capsule Dock Container */}
      <div className="relative group flex flex-col items-center">
        
        {/* Glow backdrop based on website brand colors (White -> LinkedIn Blue -> Cyan) */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-b from-white/15 via-[#0A66C2]/25 to-cyan/25 blur-xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glassmorphism Capsule Body */}
        <div className="relative px-2.5 py-4 rounded-full bg-slate-950/65 backdrop-blur-xl border border-slate-800/50 flex flex-col gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {socials.map((s, idx) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className={`transition-all p-2.5 rounded-full border flex items-center justify-center cursor-glow hover:scale-115 shadow-lg ${s.colorClass}`}
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
        className="w-[1px] h-20 mt-4 bg-gradient-to-b from-cyan/40 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.7 }}
      />
    </div>
  )
}
