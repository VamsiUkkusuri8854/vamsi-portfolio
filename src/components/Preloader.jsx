import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GREETINGS = [
  { text: "Swagatam", lang: "Telugu" },
  { text: "Namaste", lang: "Hindi" },
  { text: "Hello World", lang: "Developer" },
  { text: "System.out.println('Welcome');", lang: "Java" },
  { text: "VAMSI UKKUSURI", lang: "Developer Universe" }
]

const LOADING_STEPS = [
  { pct: 0, text: "Initializing AIML weights..." },
  { pct: 25, text: "Connecting Spring Boot routes..." },
  { pct: 55, text: "Persisting SQL structures..." },
  { pct: 80, text: "Rendering cyber UI viewports..." },
  { pct: 100, text: "System ready. Launching portfolio..." }
]

export default function Preloader({ onComplete }) {
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [stepText, setStepText] = useState(LOADING_STEPS[0].text)

  // 1. Cycle through greetings
  useEffect(() => {
    if (greetingIndex < GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setGreetingIndex(prev => prev + 1)
      }, 550) // Cycle through initial greetings
      return () => clearTimeout(timer)
    } else {
      // Hold on his name before completing
      const timer = setTimeout(() => {
        onComplete()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [greetingIndex, onComplete])

  // 2. Increment loading percentage and update logs
  useEffect(() => {
    const duration = 2800 // Total boot duration in ms
    const intervalTime = 30
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setPercentage(prev => {
        const next = Math.min(prev + step, 100)

        // Find matching step description
        const matchedStep = [...LOADING_STEPS]
          .reverse()
          .find(s => next >= s.pct)
        if (matchedStep) {
          setStepText(matchedStep.text)
        }

        if (next >= 100) {
          clearInterval(timer)
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  const currentGreeting = GREETINGS[greetingIndex]
  const isFinalName = greetingIndex === GREETINGS.length - 1

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#070b13] flex flex-col items-center justify-center font-mono overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* 3D Cyber Background Grid Layout */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff1a_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff1a_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-radial-at-c from-cyan/30 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Main Glassmorphic Welcoming Capsule */}
      <motion.div
        className="relative z-10 px-8 py-10 md:px-12 md:py-14 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md max-w-xl w-[90%] text-center flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(0,240,255,0.03)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Animated Cyber Ring Border */}
        <div className="absolute -inset-[1px] rounded-2xl border border-cyan/30 pointer-events-none animate-pulse" />

        {/* Dynamic Welcoming Word Loop */}
        <div className="h-20 flex items-center justify-center overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentGreeting.text}
              className={`text-2xl md:text-4xl font-extrabold tracking-tight font-sans ${isFinalName
                  ? 'bg-gradient-to-r from-cyan via-violet-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-110'
                  : 'text-white'
                }`}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {currentGreeting.text}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Dynamic Category Tag Badge */}
        <span className="text-[10px] text-slate-500 uppercase tracking-widest border border-slate-800 px-2 py-0.5 rounded bg-slate-950/80">
          {currentGreeting.lang}
        </span>

        {/* Loading Progress Circle Component */}
        <div className="relative w-16 h-16 mt-4 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#1e293b"
              strokeWidth="3"
              fill="transparent"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="#00f0ff"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 28}
              strokeDashoffset={2 * Math.PI * 28 * (1 - percentage / 100)}
              transition={{ ease: 'easeOut' }}
            />
          </svg>
          <span className="absolute text-[11px] font-bold text-cyan">
            {Math.round(percentage)}%
          </span>
        </div>

        {/* Live Cybernetic Boot Logger */}
        <div className="w-full mt-2">
          <div className="text-[11px] text-slate-400 h-6 flex items-center justify-center font-mono truncate px-4">
            <span className="text-cyan font-bold mr-1.5">&gt;</span>
            <span className="text-slate-300">{stepText}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
