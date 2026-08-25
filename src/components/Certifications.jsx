import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi'

const certs = [
  {
    title: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    date: 'Recent',
    url: 'https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280/',
    iconColor: 'text-[#00A1E0]',
    bgColor: 'bg-[#00A1E0]/10',
    borderColor: 'border-[#00A1E0]'
  },
  {
    title: 'Oracle Certified Generative AI Professional',
    issuer: 'Oracle',
    date: 'Recent',
    url: 'https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280/',
    iconColor: 'text-[#F80000]',
    bgColor: 'bg-[#F80000]/10',
    borderColor: 'border-[#F80000]'
  },
  {
    title: 'SAP Certified Professional',
    issuer: 'SAP',
    date: 'Recent',
    url: 'https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280/',
    iconColor: 'text-[#008FD3]',
    bgColor: 'bg-[#008FD3]/10',
    borderColor: 'border-[#008FD3]'
  }
]

export default function Certifications({ theme }) {
  return (
    <section id="certifications" className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />

      <div className="flex flex-col gap-8 relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent tracking-tight">
            My Certifications
          </h2>
          <p className="mt-2 text-base md:text-lg leading-relaxed max-w-2xl text-slate-600">
            Professional certifications and credentials verifying my expertise in modern technologies, AI, and enterprise platforms.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 bg-white border-slate-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${cert.bgColor} ${cert.iconColor}`}>
                    <FiAward size={28} strokeWidth={2.5} />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                    <FiCheckCircle size={12} /> Verified
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {cert.date}
                </span>
                
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg border transition-all bg-white hover:bg-slate-50 ${cert.iconColor} border-slate-200 hover:${cert.borderColor} shadow-sm`}
                >
                  View Credential <FiExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
