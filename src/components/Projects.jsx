import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiServer, FiChevronLeft, FiChevronRight } from 'react-icons/fi'


const projects = [
  {
    title: 'VamsiFlix Streaming Platform',
    desc: 'Developed a production-ready Netflix-inspired streaming platform featuring user authentication, movie catalog management, watchlists, watch history, recommendations, admin dashboard, analytics, and MongoDB Atlas integration. Implemented secure JWT-based authentication and deployed using Render and Netlify.',
    backend: 'Node.js Express backend with MongoDB Atlas NoSQL Database for scalable document storage and secure JWT-based authentication.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT Auth', 'Netflix UI'],
    image: '/vamsiflix.png',
    date: 'Summer 2026',
    github: 'https://github.com/VamsiUkkusuri8854/vamsi-flix',
    iconColor: 'text-red-500',
    accentColor: '#EF4444',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Auth', value: 'JWT' },
      { label: 'Database', value: 'MongoDB' }
    ],
    features: [
      'Authentication: Secure JWT-based user and admin authentication.',
      'Movie Management: Dynamic catalog, watchlists, and watch history tracking.',
      'Admin Dashboard: Comprehensive analytics and content management.'
    ]
  },
  {
    title: 'ShopHub E-Commerce',
    desc: 'ShopHub E-Commerce is a modern full-stack e-commerce platform with JWT authentication, product catalog, shopping cart, order management, wishlist, search & filtering, admin dashboard, and scalable architecture.',
    backend: 'Java (JDK 17) & Spring Boot framework with Hibernate JPA ORM, MySQL Relational Database, and Spring Security Session Auth.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT Auth', 'REST APIs'],
    image: '/shophub.png',
    date: 'Spring 2026',
    github: 'https://github.com/VamsiUkkusuri8854/ShopHub-E-Commerce',
    iconColor: 'text-emerald-500',
    accentColor: '#10B981',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Auth', value: 'JWT' },
      { label: 'Database', value: 'MySQL' }
    ],
    features: [
      'Authentication: Secure JWT-based user and admin authentication.',
      'Order Management: Full lifecycle shopping cart and order processing.',
      'Admin Dashboard: Comprehensive product and inventory management.'
    ]
  },
  {
    title: 'Smart DSA Tracker',
    desc: 'A full-stack DSA preparation and interview tracking platform built with Spring Boot, MySQL, and React. Features include roadmap tracking, progress analytics, daily streaks, and problem management.',
    backend: 'Java Spring Boot backend configured with MySQL for scalable relational data storage and JWT authentication.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Analytics', 'Java'],
    image: '/dsatracker.png',
    date: 'Spring 2026',
    github: 'https://github.com/VamsiUkkusuri8854/Dsa-Tracker',
    iconColor: 'text-amber-500',
    accentColor: '#F59E0B',
    metrics: [
      { label: 'Analytics', value: 'Real-time' },
      { label: 'Platform', value: 'Full-Stack' },
      { label: 'Storage', value: 'Relational' }
    ],
    features: [
      'Progress Analytics: Dynamic insights into coding interview preparation.',
      'Roadmap Tracking: Structured problem management and daily streaks.',
      'Performance: Scalable data processing with Spring Boot and MySQL.'
    ]
  },
  {
    title: 'Airline Reservation System',
    desc: 'An enterprise-grade flight scheduling and ticket booking engine. Engineered a highly secure seat allocation algorithm, multi-tenant database partitioning, and secure transaction states.',
    backend: 'Java (JDK 17) & Spring Boot framework with Hibernate JPA ORM, MySQL Relational Database, and Spring Security Session Auth.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Session Auth', 'Thymeleaf'],
    image: '/airlines.png',
    date: 'Spring 2026',
    github: 'https://github.com/VamsiUkkusuri8854/Airline-Reservation-System',
    iconColor: 'text-blue-500',
    accentColor: '#3B82F6',
    metrics: [
      { label: 'Uptime', value: '99.98%' },
      { label: 'Latency', value: '< 45ms' },
      { label: 'Capacity', value: '12k/s' }
    ],
    features: [
      'Seat Allocation: Real-time conflict-free locking matrix.',
      'Multi-Tenant: Scalable schema-based dynamic client isolation.',
      'ACID Security: Atomic validations for transaction states.'
    ]
  },
  {
    title: 'Online Voting System',
    desc: 'A secure remote voting application designed to ensure absolute structural integrity. Features multi-factor validation, anti-fraud algorithms, and real-time tabulation dashboards.',
    backend: 'PHP server-side scripting engine, REST APIs, Session Validations, and MongoDB NoSQL Database for robust data storage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MongoDB', 'REST APIs'],
    image: '/voting.png',
    date: 'Winter 2025',
    github: 'https://github.com/VamsiUkkusuri8854/Online-Voting-System',
    iconColor: 'text-cyan',
    accentColor: '#00F0FF',
    metrics: [
      { label: 'Security', value: 'SHA-256' },
      { label: 'Latency', value: '< 8ms' },
      { label: 'Accuracy', value: '100%' }
    ],
    features: [
      'MFA Tokenized: Multi-factor validation protocols per voter.',
      'Live Tabulation: Concurrent real-time dashboard updates.',
      'Session Shields: Strict anti-CSRF token verification.'
    ]
  },
  {
    title: 'Research Paper Analyzer',
    desc: 'An AI-powered document analysis system. Leverages natural language processing (NLP) pipelines to scan academic papers, extract key sentences, summarize documents, and tag research topics.',
    backend: 'Python, FastAPI high-performance microservices, spaCy NLP pipeline, and scikit-learn machine learning classification models.',
    tech: ['Python', 'NLP', 'scikit-learn', 'spaCy', 'FastAPI'],
    image: '/nlp.png',
    date: 'Autumn 2025',
    github: 'https://github.com/VamsiUkkusuri8854/Research-Paper-Analyzer',
    iconColor: 'text-purple-500',
    accentColor: '#A855F7',
    metrics: [
      { label: 'Parse Time', value: '1.2s' },
      { label: 'F1-Score', value: '94.5%' },
      { label: 'Concurrent', value: '500+' }
    ],
    features: [
      'Topic Tagging: Automated high-fidelity scikit-learn classifier.',
      'NLP Summarizer: Dense spaCy context-aware semantic compression.',
      'FastAPI Microservice: High-concurrency asynchronous pipeline.'
    ]
  }
]

export default function Projects({ theme }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  // Mouse wheel horizontal scrolling
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onWheel = (e) => {
      // Prevent default vertical scroll and map to horizontal
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollBy({ left: e.deltaY, behavior: 'auto' })
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  // Update active index based on scroll position using IntersectionObserver
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setActiveIndex(index)
          }
        })
      },
      { root: el, threshold: 0.6 } // 60% of the item must be visible
    )

    Array.from(el.children).forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  // Navigation handlers
  const scrollTo = (index) => {
    if (scrollRef.current && scrollRef.current.children[index]) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  const scrollNext = () => {
    if (activeIndex < projects.length - 1) scrollTo(activeIndex + 1)
  }

  const scrollPrev = () => {
    if (activeIndex > 0) scrollTo(activeIndex - 1)
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Dynamic Cyber Dotted Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl flex flex-col gap-3 mb-12"
        >
          <div className="text-sm font-bold text-slate-500 tracking-widest uppercase">
            SELECTED CREATIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan bg-clip-text text-transparent tracking-tight">
            My Projects
          </h2>
          <p className={`text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            A curated showcase of industrial systems, scalable REST backends, and artificial intelligence wrappers.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button 
            onClick={scrollPrev}
            disabled={activeIndex === 0}
            className={`hidden md:flex absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-xl transition-all ${
              activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'
            } ${theme === 'dark' ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'}`}
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Scroll Area */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 md:px-16 lg:px-12 [&::-webkit-scrollbar]:hidden scroll-smooth"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {projects.map((p, idx) => (
              <div 
                key={p.title}
                data-index={idx}
                className={`w-screen h-screen snap-center rounded-2xl overflow-hidden border shadow-2xl transition-all duration-500 flex flex-col md:flex-row relative z-20 ${
                  activeIndex === idx ? 'scale-100 opacity-100' : 'scale-[0.95] opacity-50 hover:opacity-80'
                } ${
                  theme === 'dark'
                    ? 'bg-slate-950/90 border-slate-800/80'
                    : 'bg-white border-slate-200/80'
                }`}
                style={{
                  ...(activeIndex === idx ? { borderColor: p.accentColor, boxShadow: `0 0 35px ${p.accentColor}25` } : {})
                }}
              >
                {/* Left Side: Info & Image */}
                <div className="w-full md:w-[55%] flex flex-col border-b md:border-b-0 md:border-r border-slate-800/40 relative">
                  {/* Image */}
                  <div className="h-96 md:h-[500px] w-full overflow-hidden relative bg-slate-950/20 group">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-cyan border border-slate-800/80 font-bold uppercase">
                      {p.date}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col grow gap-4 overflow-y-auto" style={{maxHeight: 'calc(100vh - 12rem)'}}>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {p.title}
                      </h3>
                      <p className={`text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-350' : 'text-slate-600'}`}>
                        {p.desc}
                      </p>
                    </div>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {p.tech.map(t => (
                        <span key={t} className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase border ${
                          theme === 'dark' ? 'bg-slate-900/60 border-slate-800 text-cyan' : 'bg-slate-100 border-slate-200 text-violet-600'
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Engineering Brief */}
                <div className={`w-full md:w-[45%] p-6 flex flex-col gap-4 justify-between ${
                  theme === 'dark' ? 'bg-slate-950/45' : 'bg-slate-50'
                }`} style={{maxHeight: 'calc(100vh - 12rem)', overflowY: 'auto'}}>
                  
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-800/20 pb-3 mb-4">
                      <h4 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                        ⚙️ ENGINEERING BRIEF
                      </h4>
                    </div>
                    
                    {/* Backend Spec */}
                    <div className={`p-4 rounded-xl border text-xs leading-relaxed mb-5 shadow-sm ${
                      theme === 'dark' ? 'bg-slate-950/60 border-slate-800/70 text-slate-300' : 'bg-white border-slate-200 text-slate-600'
                    }`}>
                      <div className="flex items-center gap-2 font-bold mb-2 font-mono" style={{ color: p.accentColor }}>
                        <FiServer size={14} /> BACKEND SPECIFICATION
                      </div>
                      <p className="leading-relaxed">{p.backend}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-col gap-3">
                      {p.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2.5 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 shadow-sm" style={{ backgroundColor: p.accentColor, boxShadow: `0 0 8px ${p.accentColor}` }} />
                          <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                            <span className={theme === 'dark' ? 'font-semibold text-white' : 'font-semibold text-slate-900'}>{feat.split(':')[0]}:</span>
                            {feat.split(':')[1]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-5 mt-4">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {p.metrics.map(m => (
                        <div key={m.label} className={`flex flex-col p-2.5 rounded-xl border items-center justify-center text-center shadow-inner ${
                          theme === 'dark' ? 'bg-slate-950/60 border-slate-900/60' : 'bg-white border-slate-200'
                        }`}>
                          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wide">{m.label}</span>
                          <span className="text-base font-extrabold mt-1 tracking-tight drop-shadow-sm" style={{ color: p.accentColor }}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Github Link */}
                    <a 
                      href={p.github} target="_blank" rel="noreferrer"
                      className={`flex items-center justify-center gap-2 text-sm font-bold py-3.5 rounded-xl border w-full transition-all group shadow-sm ${
                        theme === 'dark'
                          ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                          : 'bg-slate-900 border-slate-900 text-white hover:bg-slate-800'
                      }`}
                      style={{ hover: { borderColor: p.accentColor } }}
                    >
                      <FiGithub size={16} className="group-hover:scale-110 transition-transform" /> 
                      <span className="tracking-wide">Github Source Repository</span> ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={scrollNext}
            disabled={activeIndex === projects.length - 1}
            className={`hidden md:flex absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full shadow-xl transition-all ${
              activeIndex === projects.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-110'
            } ${theme === 'dark' ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'}`}
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-3 mt-4">
          {projects.map((p, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                activeIndex === idx 
                  ? 'w-10' 
                  : `w-2.5 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-500' : 'bg-slate-300 hover:bg-slate-400'}`
              }`}
              style={activeIndex === idx ? { backgroundColor: p.accentColor } : {}}
              aria-label={`Go to ${p.title}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}



