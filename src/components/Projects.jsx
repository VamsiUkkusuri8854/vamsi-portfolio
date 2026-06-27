import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiServer, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const projects = [
  {
    title: 'QuickLink URL Shortener',
    desc: 'A full-stack URL shortening platform featuring custom aliases, QR code generation, expiration management, and real-time link analytics. Fully deployed on cloud infrastructure.',
    backend: 'Java Spring Boot with Spring Security JWT, and TiDB Cloud / MySQL for high-availability data storage.',
    tech: ['React', 'Spring Boot', 'TiDB', 'JWT', 'Render'],
    image: '/url-shortener.png',
    date: 'Summer 2026',
    github: 'https://github.com/VamsiUkkusuri8854/url-shortener',
    live: 'https://quicklinkvamsi.vercel.app',
    iconColor: 'text-violet-500',
    accentColor: '#8B5CF6',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Latency', value: '< 80ms' },
      { label: 'Storage', value: 'TiDB Cloud' }
    ],
    features: [
      'Link Management: Create, manage, and expire shortened URLs with custom aliases.',
      'Analytics Tracking: Real-time insights on clicks, browsers, and devices.',
      'Cloud Deployment: Fully deployed on Render (Backend) and Vercel (Frontend).'
    ]
  },
  {
    title: 'VamsiFlix Streaming Platform',
    desc: 'Developed a production-ready Netflix-inspired streaming platform featuring user authentication, movie catalog management, watchlists, watch history, recommendations, admin dashboard, analytics, and MongoDB Atlas integration.',
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
  }
]

export default function Projects({ theme }) {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollWidth - clientWidth) === 0 ? 0 : (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const onMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseUp = () => {
    isDown.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />

      <div className="flex flex-col gap-8 relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan bg-clip-text text-transparent tracking-tight">
              My Projects
            </h2>
            <p className={`mt-2 text-base md:text-lg leading-relaxed max-w-2xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              A curated showcase of industrial systems, scalable REST backends, and full-stack applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="flex gap-2"
          >
            <button 
              onClick={scrollLeft}
              className={`p-3 rounded-full border transition-all hover:scale-105 active:scale-95 ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 text-white' 
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-900'
              }`}
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className={`p-3 rounded-full border transition-all hover:scale-105 active:scale-95 ${
                theme === 'dark' 
                  ? 'bg-slate-900 border-slate-700 hover:bg-slate-800 text-white' 
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-900'
              }`}
            >
              <FiChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 scrollbar-hide cursor-grab select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className={`min-w-[85vw] md:min-w-[400px] max-w-[450px] snap-center shrink-0 flex flex-col rounded-2xl overflow-hidden border shadow-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-950/70 border-slate-800/80 hover:border-slate-600/80'
                  : 'bg-white border-slate-200/80 hover:border-violet-300 hover:shadow-violet-100'
              }`}
            >
              {/* Card Image */}
              <div className="h-48 w-full overflow-hidden relative bg-slate-950/20 border-b border-slate-900/10 shrink-0">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-cyan border border-slate-800/80 font-bold uppercase backdrop-blur-md">
                  {p.date}
                </span>
              </div>

              {/* Card Content Wrapper to ensure equal height behavior */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className={`text-xl font-bold tracking-tight mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm leading-relaxed line-clamp-3 ${
                    theme === 'dark' ? 'text-slate-350' : 'text-slate-650'
                  }`}>
                    {p.desc}
                  </p>
                </div>

                {/* Architecture Spec Panel */}
                <div className={`p-3 rounded-lg border text-xs leading-relaxed mt-auto ${
                  theme === 'dark'
                    ? 'bg-slate-950/60 border-slate-800/70 text-slate-300'
                    : 'bg-slate-50 border-slate-100 text-slate-600'
                }`}>
                  <div className="flex items-center gap-1 font-bold mb-1.5 font-mono" style={{ color: p.accentColor }}>
                    <FiServer size={12} /> BACKEND SPECIFICATION
                  </div>
                  <p className="line-clamp-2">{p.backend}</p>
                </div>

                {/* Tech Tags */}
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

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 w-full mt-2">
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded-lg border flex-1 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                        : 'bg-slate-950 border-slate-950 text-white hover:bg-slate-800'
                    }`}
                  >
                    <FiGithub size={14} /> Source ↗
                  </a>
                  
                  {p.live && (
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded-lg border flex-1 transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                          : 'bg-slate-950 border-slate-950 text-white hover:bg-slate-800'
                      }`}
                    >
                      <FiExternalLink size={14} /> Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="w-full max-w-3xl mx-auto h-1.5 bg-slate-800/40 rounded-full overflow-hidden mt-2">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 to-cyan rounded-full transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  )
}
