import React from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiAward, FiCode, FiAward as FiBadge, FiActivity } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const educationList = [
  {
    institution: 'Sri Vasavi Engineering College',
    degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
    period: 'Aug 2023 - Present',
    detail: 'CGPA: 8.0 • Direct focus on machine learning algorithms, deep neural architectures, and data structures.'
  },
  {
    institution: 'Sri Pragathi Junior College',
    degree: 'Intermediate (Class XII)',
    period: 'Jun 2021 - Mar 2023',
    detail: 'Percentage: 82% • Direct focus on advanced Mathematics, Physics, and Chemistry (MPC).'
  },
  {
    institution: 'Nava Jyothi E.M School',
    degree: 'SSC (Class X)',
    period: 'Mar 2020 - May 2021',
    detail: 'Percentage: 88% • Fundamental secondary education.'
  }
]

const certifications = [
  {
    name: 'Salesforce Certified Agentforce Specialist',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-verification-search/',
    issuer: 'Salesforce'
  },
  {
    name: 'Oracle Certified - Generative AI Professional',
    url: 'https://education.oracle.com/buy-certification',
    issuer: 'Oracle'
  }
]

export default function Education({ theme }) {
  return (
    <section id="about-journey" className="py-10 md:py-16 relative">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Rotated Label */}
        <div className="lg:col-span-1 hidden lg:flex justify-center pt-4">
          <div className="vertical-label text-xs font-bold text-slate-500 select-none tracking-widest whitespace-nowrap">
            JOURNEY / CREDENTIALS
          </div>
        </div>

        {/* Right Side: Consolidated Grid layout */}
        <div className="lg:col-span-11 grid md:grid-cols-12 gap-12 w-full">
          {/* Main Left: Timeline list */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
                Education
              </h2>
              <p className={`mt-2 text-base md:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-slate-350' : 'text-slate-650'
              }`}>
                My academic foundations, milestones, and timeline.
              </p>
            </motion.div>

            {/* Vertical timeline */}
            <div className={`relative border-l ml-4 flex flex-col gap-10 py-2 ${
              theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
            }`}>
              {educationList.map((edu, idx) => (
                <motion.div 
                  key={edu.institution}
                  className="relative pl-8 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {/* Timeline bullet dot */}
                  <span className={`absolute -left-[6px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-slate-950 border-slate-800 group-hover:border-pink-500 group-hover:bg-pink-500/20'
                      : 'bg-white border-slate-300 group-hover:border-violet-500 group-hover:bg-violet-500/20'
                  }`} />
                  
                  <span className={`text-xs font-mono px-2.5 py-1 rounded border ${
                    theme === 'dark'
                      ? 'text-cyan bg-slate-900/60 border-slate-800'
                      : 'text-violet-600 bg-slate-100 border-slate-200'
                  }`}>
                    {edu.period}
                  </span>
                  
                  <h3 className={`text-xl font-bold mt-2 group-hover:text-pink-500 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {edu.institution}
                  </h3>
                  
                  <p className={`text-base font-semibold mt-1 ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    {edu.degree}
                  </p>
                  
                  <p className={`text-sm md:text-base mt-2 font-sans max-w-lg leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {edu.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Right: Certs & Achievements */}
          <div className="md:col-span-5 flex flex-col gap-10">
            {/* Milestones Card */}
            <motion.div
              className={`p-6 rounded-2xl border shadow-2xl flex flex-col justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-pink-500/40 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-violet-400 hover:shadow-md text-slate-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded border shadow-inner ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <FiCode className="text-cyan" size={20} />
                  </div>
                  <h3 className="text-sm font-mono font-bold tracking-widest bg-gradient-to-r from-cyan to-violet-500 bg-clip-text text-transparent">CODING MILESTONES</h3>
                </div>

                <div className="my-4">
                  <div className={`text-5xl font-extrabold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>500+</div>
                  <span className="text-xs font-mono text-slate-400">Solved Competitive Programming Problems</span>
                </div>

                <p className="text-sm leading-relaxed mt-2">
                  Actively learning and practicing algorithmic execution. Proven performance on coding networks, delivering optimized algorithms with solid space-time complexities.
                </p>

                {/* Sub-profiles */}
                <div className="flex flex-col gap-3 mt-6">
                  <a
                    href="https://leetcode.com/u/VamsiUkkusuri/"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800/80 hover:border-orange-500/40 text-slate-300'
                        : 'bg-slate-50 border-slate-200 hover:border-orange-400 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <SiLeetcode className="text-orange-400" size={18} />
                      <span className="text-xs font-mono font-bold">LeetCode Profile</span>
                    </div>
                    <span className="text-xs text-slate-400 font-bold hover:text-white">View &gt;</span>
                  </a>

                  <a
                    href="https://www.geeksforgeeks.org/user/vamsiukky58r/"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800/80 hover:border-green-500/40 text-slate-300'
                        : 'bg-slate-50 border-slate-200 hover:border-green-400 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <SiGeeksforgeeks className="text-green-500" size={18} />
                      <span className="text-xs font-mono font-bold">GeeksforGeeks</span>
                    </div>
                    <span className="text-xs text-slate-400 font-bold hover:text-white">View &gt;</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Certifications Box */}
            <motion.div
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-cyan/40 text-slate-300 shadow-2xl'
                  : 'bg-white border-slate-200 hover:border-violet-400 hover:shadow-md text-slate-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded border shadow-inner ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <FiAward className="text-violet-400" size={20} />
                </div>
                <h3 className="text-sm font-mono font-bold tracking-widest bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">VERIFIED CREDENTIALS</h3>
              </div>

              <div className="flex flex-col gap-4">
                {certifications.map((c, idx) => (
                  <div key={c.name} className="flex gap-3 items-start group">
                    <span className="p-1.5 rounded bg-violet-500/10 text-violet-400 mt-0.5">
                      <FiBadge size={15} />
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-extrabold group-hover:text-cyan transition-colors">
                        {c.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">Issued by {c.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
