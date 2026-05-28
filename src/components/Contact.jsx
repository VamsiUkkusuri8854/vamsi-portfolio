import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compulsory field validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      return
    }

    // Direct trigger of native mailto client to vamsiukkusuri@gmail.com
    const mailSubject = encodeURIComponent(formData.subject)
    const mailBody = encodeURIComponent(
      `Hello Vamsi,\n\nYou received a new message from your portfolio contact form:\n\n` +
      `----------------------------------------\n` +
      `Sender: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n` +
      `----------------------------------------\n\n` +
      `Message Body:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    )
    
    window.location.href = `mailto:vamsiukkusuri@gmail.com?subject=${mailSubject}&body=${mailBody}`

    // Show visual dispatched status overlay
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 relative">
      {/* Glow backgrounds */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Rotated Label */}
        <div className="lg:col-span-1 hidden lg:flex justify-center pt-4">
          <div className="vertical-label text-xs font-bold text-slate-500 select-none tracking-widest whitespace-nowrap">
            CONTACT / CONNECT
          </div>
        </div>

        {/* Right Side: Showcase grid */}
        <div className="lg:col-span-11 grid md:grid-cols-12 gap-8 w-full">
          {/* Info Details Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan to-blue-500 bg-clip-text text-transparent tracking-tight">
                Contact Me
              </h2>
              <p className={`mt-4 text-base md:text-lg leading-relaxed font-sans ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-650'
              }`}>
                Have an interesting project, job opportunity, or just want to chat about Java backends and AI algorithms? Drop me a line, and let's coordinate!
              </p>
            </motion.div>

            <div className="flex flex-col gap-4 mt-2">
              <div className={`flex items-center gap-4 p-4 rounded-xl border shadow-xl ${
                theme === 'dark' ? 'bg-slate-950/70 border-slate-800/80' : 'bg-white border-slate-200'
              }`}>
                <div className={`p-3 rounded border shadow-inner ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800 text-cyan' : 'bg-slate-50 border-slate-200 text-violet-600'
                }`}>
                  <FiMail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email Address</div>
                  <a href="mailto:vamsiukkusuri@gmail.com" className={`text-sm font-bold hover:text-pink-500 transition-colors select-all ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    vamsiukkusuri@gmail.com
                  </a>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-xl border shadow-xl ${
                theme === 'dark' ? 'bg-slate-950/70 border-slate-800/80' : 'bg-white border-slate-200'
              }`}>
                <div className={`p-3 rounded border shadow-inner ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800 text-purple-400' : 'bg-slate-50 border-slate-200 text-violet-600'
                }`}>
                  <FiPhone size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Phone Number</div>
                  <a href="tel:+918885427136" className={`text-sm font-bold hover:text-pink-500 transition-colors select-all ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    +91 8885427136
                  </a>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-xl border shadow-xl ${
                theme === 'dark' ? 'bg-slate-950/70 border-slate-800/80' : 'bg-white border-slate-200'
              }`}>
                <div className={`p-3 rounded border shadow-inner ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800 text-pink-400' : 'bg-slate-50 border-slate-200 text-violet-600'
                }`}>
                  <FiMapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Based In</div>
                  <div className={`text-sm font-bold ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <motion.form 
              onSubmit={handleSubmit}
              className={`p-6 md:p-8 rounded-2xl border shadow-2xl flex flex-col gap-4 relative overflow-hidden ${
                theme === 'dark' ? 'bg-slate-950/70 border-slate-800/80' : 'bg-white border-slate-200'
              }`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Submission Status Overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    className="absolute inset-0 bg-slate-950/95 z-20 flex flex-col items-center justify-center p-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ scale: 0.5, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <FiCheckCircle className="text-cyan mb-4" size={56} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Message Dispatched!</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-2 max-w-xs leading-relaxed font-sans">
                      Thank you. Your message is fully validated and sent compulsory. Vamsi will reach back immediately!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5 block">Full Name <span className="text-pink-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg text-sm outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-violet-400'
                    }`} 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5 block">Email Address <span className="text-pink-500">*</span></label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg text-sm outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan'
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-violet-400'
                    }`} 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5 block">Subject <span className="text-pink-500">*</span></label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg text-sm outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan'
                      : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-violet-400'
                  }`} 
                  placeholder="Collaborating on a project" 
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5 block">Message Body <span className="text-pink-500">*</span></label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg text-sm outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan'
                      : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-violet-400'
                  }`} 
                  rows="4" 
                  placeholder="Hey Vamsi, I'd love to connect..."
                />
              </div>

              <button 
                type="submit" 
                className="mt-2 w-full md:w-fit px-6 py-3 bg-gradient-to-r from-cyan to-violet-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Send Message <FiSend size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}


