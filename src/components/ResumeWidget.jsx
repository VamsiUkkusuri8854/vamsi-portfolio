import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFileText, FiMail, FiLinkedin, FiLayers, FiX, FiPrinter, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi'

export default function ResumeWidget({ theme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const items = [
    {
      icon: <FiFileText size={18} />,
      label: 'View Live CV Template',
      onClick: () => setIsModalOpen(true),
      color: 'from-cyan to-blue-500'
    },
    {
      icon: <FiLinkedin size={18} />,
      label: 'LinkedIn Connect',
      url: 'https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <FiMail size={18} />,
      label: 'Hire Me',
      url: '#contact',
      color: 'from-purple-500 to-pink-500',
      isAnchor: true
    }
  ]

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div 
        className="fixed right-6 bottom-6 z-50 flex flex-col items-end print:hidden"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col gap-3 mb-4 items-end">
              {items.map((item, idx) => (
                item.onClick ? (
                  <motion.button
                    key={item.label}
                    onClick={item.onClick}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all shadow-lg ${
                      theme === 'dark'
                        ? 'bg-slate-950/90 border-slate-800 text-slate-350 hover:border-pink-500'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-violet-400'
                    }`}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    whileHover={{ x: -6 }}
                  >
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-800 font-semibold'}>{item.label}</span>
                    <span className={`p-1 rounded text-pink-500 ${
                      theme === 'dark' ? 'bg-slate-900/60' : 'bg-slate-50'
                    }`}>
                      {item.icon}
                    </span>
                  </motion.button>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.url}
                    target={item.isAnchor ? '_self' : '_blank'}
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all shadow-lg ${
                      theme === 'dark'
                        ? 'bg-slate-950/90 border-slate-800 text-slate-350 hover:border-pink-500'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-violet-400'
                    }`}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    whileHover={{ x: -6 }}
                  >
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-800 font-semibold'}>{item.label}</span>
                    <span className={`p-1 rounded text-pink-500 ${
                      theme === 'dark' ? 'bg-slate-900/60' : 'bg-slate-50'
                    }`}>
                      {item.icon}
                    </span>
                  </motion.a>
                )
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan to-violet-600 text-white font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
          layout
        >
          <span className="tracking-wide text-sm font-bold uppercase">RESUME</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiLayers size={18} />
          </motion.div>
        </motion.button>
      </div>

      {/* Pristine White Background Resume Template Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl text-slate-800 overflow-hidden relative flex flex-col my-8 print:my-0 print:shadow-none print:rounded-none"
            >
              {/* Modal Top Control Bar */}
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center print:hidden">
                <div className="flex items-center gap-2">
                  <FiFileText className="text-violet-600" size={20} />
                  <span className="font-semibold text-slate-700 text-sm">Interactive Resume Template</span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold transition-colors"
                  >
                    <FiPrinter size={14} /> Print / Save PDF
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>

              {/* High-Fidelity Professional Printed CV Template */}
              <div id="resume-document-template" className="p-8 md:p-12 bg-white flex flex-col gap-8 print:p-0 font-sans leading-relaxed">
                {/* CV Header: Name & Titles */}
                <div className="border-b-2 border-slate-800 pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                  <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 font-sans">VAMSI UKKUSURI</h1>
                    <p className="text-lg font-medium text-violet-600 mt-1 font-sans">Artificial Intelligence & Machine Learning Student • Java Backend Engineer</p>
                  </div>
                  <div className="flex flex-col gap-1 text-xs md:text-sm text-slate-600 font-sans">
                    <div className="flex items-center gap-2">
                      <FiMail size={14} /> <span>vamsiukkusuri@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone size={14} /> <span>+91 88854 27136</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={14} /> <span>Andhra Pradesh, India</span>
                    </div>
                  </div>
                </div>

                {/* CV Content Columns */}
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left Sidebar: Profiles & Technical Skills */}
                  <div className="md:col-span-4 flex flex-col gap-6">
                    {/* Education Card */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 font-mono">Education</h3>
                      <div className="border-l-2 border-violet-500 pl-3">
                        <h4 className="text-sm font-bold text-slate-800">B.Tech in AI & ML</h4>
                        <p className="text-xs text-slate-500">2023 - Present</p>
                        <p className="text-xs text-slate-600 mt-1 font-semibold">Sri Vasavi Engineering College</p>
                        <p className="text-xs font-mono text-violet-600 font-bold mt-0.5">CGPA: 8.0 / 10</p>
                      </div>
                    </div>

                    {/* Profiles Card */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 font-mono">Professional Profiles</h3>
                      <div className="flex flex-col gap-2 text-xs">
                        <a href="https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280" target="_blank" rel="noreferrer" className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors">
                          <span className="font-semibold flex items-center gap-1"><FiLinkedin className="text-blue-500" /> LinkedIn</span>
                          <FiExternalLink size={12} />
                        </a>
                        <a href="https://leetcode.com/u/oNPlQuPkmI/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors">
                          <span className="font-semibold flex items-center gap-1">🏆 LeetCode (Solved 500+)</span>
                          <FiExternalLink size={12} />
                        </a>
                        <a href="https://www.geeksforgeeks.org/profile/vamsiuk1oml?tab=activity" target="_blank" rel="noreferrer" className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors">
                          <span className="font-semibold flex items-center gap-1">💡 GeeksforGeeks</span>
                          <FiExternalLink size={12} />
                        </a>
                      </div>
                    </div>

                    {/* Skill Matrix */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 font-mono">Core Skills</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {['Java', 'Spring Boot', 'MySQL', 'Python', 'PHP', 'MongoDB', 'REST APIs', 'Data Structures & Algorithms', 'NLP', 'Machine Learning'].map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] md:text-xs font-semibold text-slate-700 border border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Main Column: Profile Summary & Projects */}
                  <div className="md:col-span-8 flex flex-col gap-6">
                    {/* Career Statement */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 font-mono">Professional Summary</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                        Highly motivated and detail-oriented Artificial Intelligence and Machine Learning undergraduate. Deep technical specialization in enterprise Java backend frameworks (Spring Boot, Hibernate, Spring Security) and database design (MySQL, MongoDB). Strong algorithmic problemsolving background with a track record of solving 500+ platform issues on LeetCode.
                      </p>
                    </div>

                    {/* Showcase Projects */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 font-mono">Key Architectural Projects</h3>
                      <div className="flex flex-col gap-4">
                        <div className="border-l-2 border-slate-800 pl-4">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold text-slate-800">Airline Reservation System</h4>
                            <span className="text-[10px] font-mono font-bold text-violet-600 uppercase">Java & Spring Boot</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Engineered an enterprise-grade booking engine with transaction state security and multi-tenant scaling. Connected Spring Boot APIs to relational MySQL schemas using Spring Security user validations.
                          </p>
                        </div>

                        <div className="border-l-2 border-slate-800 pl-4">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold text-slate-800">Online Voting System</h4>
                            <span className="text-[10px] font-mono font-bold text-violet-600 uppercase">PHP & MongoDB</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Developed a secure remote electronic voting application with real-time tabulation dashboards, anti-fraud user validation scripts, and high-performance MongoDB NoSQL database.
                          </p>
                        </div>

                        <div className="border-l-2 border-slate-800 pl-4">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-bold text-slate-800">Research Paper NLP Analyzer</h4>
                            <span className="text-[10px] font-mono font-bold text-violet-600 uppercase">Python & FastAPI</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Created a documentation analysis platform using natural language processing. Engineered Python-based spaCy pipelines and classification layers hosted under high-speed FastAPI endpoints.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
