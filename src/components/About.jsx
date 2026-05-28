import React from 'react'
import { motion } from 'framer-motion'
import { FiServer, FiCpu, FiTrendingUp } from 'react-icons/fi'

export default function About({ theme }) {
  const categories = [
    {
      title: 'BACKEND SYSTEMS',
      icon: <FiServer size={22} className="text-purple-400" />,
      desc: 'Specialized in crafting highly scalable, reliable backends using Java and Spring Boot. Proficient in database structure design, REST API design, OOP design principles, and MVC architectures.',
      tags: ['Spring Boot', 'REST APIs', 'FastAPI', 'MySQL', 'MongoDB', 'OOP']
    },
    {
      title: 'AI & MACHINE LEARNING',
      icon: <FiCpu size={22} className="text-cyan" />,
      desc: 'Passionate about integrating AI capabilities into software solutions. Experienced in Natural Language Processing (NLP), text miners, and predictive models using Python, scikit-learn, and spaCy.',
      tags: ['Python', 'NLP', 'scikit-learn', 'spaCy', 'FastAPI']
    },
    {
      title: 'DSA & PROBLEM SOLVING',
      icon: <FiTrendingUp size={22} className="text-pink-400" />,
      desc: 'Equipped with a solid computer science foundation. Successfully solved over 500+ complex algorithms and data structure challenges on major platforms with optimal space-time performance.',
      tags: ['Java', 'Algorithms', 'Complexities', 'LeetCode', 'GeeksforGeeks']
    }
  ]

  return (
    <section id="about" className="py-16 relative overflow-hidden scroll-mt-28">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Rotated Vertical Header */}
        <div className="lg:col-span-1 hidden lg:flex justify-center pt-4">
          <div className="vertical-label text-xs font-bold text-slate-500 select-none tracking-widest whitespace-nowrap">
            ABOUT / WHAT I DO
          </div>
        </div>

        {/* Right Side: Grid Cards */}
        <div className="lg:col-span-11 flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-2xl"
          >
            {/* Mobile/Tablet Badge label for About */}
            <div className={`inline-flex lg:hidden items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono mb-4 w-fit border ${
              theme === 'dark'
                ? 'bg-slate-900/60 border-slate-800 text-purple-400'
                : 'bg-slate-100 border-slate-200 text-purple-650'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              ABOUT / WHAT I DO
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
              About Me
            </h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4 tracking-tight leading-snug">
              Bridging Backend Scalability & Machine Intelligence.
            </h3>
            <p className={`mt-4 leading-relaxed text-base md:text-lg ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-650'
            }`}>
              I am a Bachelor of Technology student specializing in Artificial Intelligence & Machine Learning. I spend my days building REST-based server architectures, solving algorithmic challenges, and exploring modern NLP techniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((c, idx) => (
              <motion.div
                key={c.title}
                className={`p-6 rounded-xl border shadow-xl flex flex-col justify-between transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-950/70 border-slate-800/80 hover:border-pink-500/40 text-slate-300'
                    : 'bg-white border-slate-200 hover:border-violet-400 hover:shadow-md text-slate-700'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded border shadow-inner ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      {c.icon}
                    </div>
                    <h3 className={`text-sm font-mono font-bold tracking-widest ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>{c.title}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 font-sans ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {c.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {c.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        theme === 'dark'
                          ? 'bg-slate-900/60 border-slate-800 text-cyan'
                          : 'bg-slate-100 border-slate-200 text-violet-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

