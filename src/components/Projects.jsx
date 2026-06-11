import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiFolder, FiServer } from 'react-icons/fi'

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
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Dynamic Cyber Dotted Background */}
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Side: Rotated Label */}
        <div className="lg:col-span-1 hidden lg:flex justify-center pt-4">
          <div className="vertical-label text-sm font-bold text-slate-500 select-none tracking-widest whitespace-nowrap">
            SELECTED CREATIONS
          </div>
        </div>

        {/* Right Side: Staggered Diagonal Timeline */}
        <div className="lg:col-span-11 flex flex-col gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl flex flex-col gap-2"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan bg-clip-text text-transparent tracking-tight">
              My Projects
            </h2>
            <p className={`mt-3 text-base md:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              A curated timeline of industrial systems, scalable REST backends, and artificial intelligence wrappers.
            </p>
          </motion.div>

          {/* Timeline Cards Container exactly like Image 5 */}
          <div className="relative mt-8 flex flex-col gap-12 md:gap-16 w-full max-w-5xl self-center">
            
            {/* Staggered Connective dashed path */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-dashed border-l border-dashed border-violet-500/25 md:-translate-x-1/2 pointer-events-none" />

            {projects.map((p, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={p.title}
                  className="flex flex-col md:flex-row w-full items-center justify-between gap-6 md:gap-0 relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Staggered Timeline Node Icon */}
                  <div 
                    className="absolute left-4 md:left-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 flex items-center justify-center -translate-x-1/2 shadow-lg z-30 transition-all duration-300"
                    style={{ borderColor: p.accentColor, boxShadow: `0 0 12px ${p.accentColor}33` }}
                  >
                    <FiFolder size={14} style={{ color: p.accentColor }} />
                  </div>

                  {/* Staggered Project Card content */}
                  <div 
                    className={`w-[calc(100%-2.5rem)] md:w-[46%] ml-10 md:ml-0 rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 ${
                      isEven ? 'md:order-1' : 'md:order-2'
                    } ${
                      theme === 'dark'
                        ? 'bg-slate-950/70 border-slate-800/80 hover:border-pink-500/40'
                        : 'bg-white border-slate-200/80 hover:border-violet-400 hover:shadow-violet-100'
                    }`}
                    style={{
                      hover: { borderColor: p.accentColor }
                    }}
                  >
                    {/* Visual Card Image mock */}
                    <div className="h-48 md:h-52 w-full overflow-hidden relative bg-slate-950/20 border-b border-slate-900/10">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-cyan border border-slate-800/80 font-bold uppercase">
                        {p.date}
                      </span>
                    </div>

                    {/* Info Card Content */}
                    <div className="p-6 flex flex-col gap-4">
                      <div>
                        <h3 className={`text-xl font-bold tracking-tight mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                          {p.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${
                          theme === 'dark' ? 'text-slate-350' : 'text-slate-650'
                        }`}>
                          {p.desc}
                        </p>
                      </div>

                      {/* Architecture Spec Panel */}
                      <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
                        theme === 'dark'
                          ? 'bg-slate-950/60 border-slate-800/70 text-slate-300'
                          : 'bg-slate-50 border-slate-100 text-slate-600'
                      }`}>
                        <div className="flex items-center gap-1 font-bold mb-1.5 font-mono" style={{ color: p.accentColor }}>
                          <FiServer size={12} /> BACKEND SPECIFICATION
                        </div>
                        <p>{p.backend}</p>
                      </div>

                      {/* Tech Tags and Source Code */}
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tech.map(t => (
                            <span 
                              key={t}
                              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                                theme === 'dark'
                                  ? 'bg-slate-900/60 border-slate-800 text-cyan'
                                  : 'bg-slate-100 border-slate-200 text-violet-600'
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <a 
                          href={p.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className={`flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded-lg border w-full transition-all ${
                            theme === 'dark'
                              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                              : 'bg-slate-950 border-slate-950 text-white hover:bg-slate-800'
                          }`}
                          style={{
                            ':hover': { borderColor: p.accentColor }
                          }}
                        >
                          <FiGithub size={14} /> Github Source Repository ↗
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Staggered Secondary Brief & Performance Metrics Panel in the empty gap (on Desktop) */}
                  <div 
                    className={`w-[calc(100%-2.5rem)] md:w-[46%] ml-10 md:ml-0 p-6 rounded-2xl border bg-slate-950/45 border-slate-900/60 backdrop-blur-md shadow-xl flex flex-col gap-4 transition-all duration-300 ${
                      isEven ? 'md:order-2' : 'md:order-1'
                    } ${
                      theme === 'dark'
                        ? 'hover:border-slate-700/80 shadow-slate-950/50'
                        : 'hover:border-violet-300/80 shadow-slate-200/50'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800/40 pb-2.5">
                      <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                        ⚙️ ENGINEERING BRIEF
                      </h4>
                      <span 
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border bg-slate-900/80"
                        style={{ color: p.accentColor, borderColor: `${p.accentColor}33` }}
                      >
                        METRICS ACTIVE
                      </span>
                    </div>

                    {/* Grid of Key Metrics */}
                    <div className="grid grid-cols-3 gap-2.5 my-1">
                      {p.metrics.map(m => (
                        <div key={m.label} className="flex flex-col p-2.5 rounded-lg bg-slate-950/60 border border-slate-900/60 items-center justify-center text-center shadow-inner">
                          <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wide">
                            {m.label}
                          </span>
                          <span 
                            className="text-sm font-extrabold mt-1 tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            style={{ color: p.accentColor }}
                          >
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features list */}
                    <div className="flex flex-col gap-2.5 mt-2">
                      <div className="text-[10px] font-mono font-bold text-slate-500 tracking-wider">
                        KEY SYSTEMS DEVELOPED:
                      </div>
                      {p.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs">
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" 
                            style={{ backgroundColor: p.accentColor, boxShadow: `0 0 6px ${p.accentColor}` }} 
                          />
                          <p className="text-slate-300 leading-relaxed">
                            <span className="font-semibold text-white">{feat.split(':')[0]}:</span>
                            {feat.split(':')[1]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}



