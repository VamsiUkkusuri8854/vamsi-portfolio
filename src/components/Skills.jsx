import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaDocker, FaNodeJs, FaAws, FaRobot, FaGitAlt, FaBrain, FaNetworkWired } from 'react-icons/fa'
import { SiJavascript, SiSpring, SiMysql, SiPython, SiMongodb, SiPhp, SiPostman } from 'react-icons/si'

const skillsData = [
  { name: 'Java', icon: <FaJava size={44} />, color: '#E2231A', url: 'https://www.oracle.com/java/' },
  { name: 'Spring Boot', icon: <SiSpring size={42} />, color: '#6DB33F', url: 'https://spring.io/projects/spring-boot' },
  { name: 'MySQL / SQL', icon: <SiMysql size={44} />, color: '#00758F', url: 'https://www.mysql.com/' },
  { name: 'Python / ML', icon: <SiPython size={42} />, color: '#3776AB', url: 'https://www.python.org/' },
  { name: 'PHP', icon: <SiPhp size={44} />, color: '#777BB4', url: 'https://www.php.net/' },
  { name: 'MongoDB', icon: <SiMongodb size={42} />, color: '#47A248', url: 'https://www.mongodb.com/' },
  { name: 'REST APIs', icon: <SiPostman size={40} />, color: '#FF6C37', url: 'https://learning.postman.com/docs/publishing-your-api/documenting-your-api/' },
  { name: 'DSA', icon: <FaNetworkWired size={40} />, color: '#A855F7', url: 'https://www.geeksforgeeks.org/data-structures/' },
  { name: 'NLP', icon: <FaBrain size={40} />, color: '#EC4899', url: 'https://www.ibm.com/topics/natural-language-processing' },
  { name: 'HTML', icon: <FaHtml5 size={44} />, color: '#E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: <FaCss3Alt size={44} />, color: '#1572B6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <SiJavascript size={40} />, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: <FaReact size={44} className="animate-[spin_12s_linear_infinite]" />, color: '#61DAFB', url: 'https://react.dev/' },
  { name: 'Docker', icon: <FaDocker size={44} />, color: '#2496ED', url: 'https://www.docker.com/' },
  { name: 'Node.js', icon: <FaNodeJs size={44} />, color: '#339933', url: 'https://nodejs.org/' },
  { name: 'AI Agents', icon: <FaRobot size={42} />, color: '#EC4899', url: 'https://www.deeplearning.ai/' },
  { name: 'AWS', icon: <FaAws size={44} />, color: '#FF9900', url: 'https://aws.amazon.com/' },
  { name: 'Git', icon: <FaGitAlt size={44} />, color: '#F05032', url: 'https://git-scm.com/' }
]

export default function Skills({ theme }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isInside, setIsInside] = useState(false)

  return (
    <section
      id="skills"
      className={`py-12 relative overflow-hidden transition-all duration-150 ${isInside ? 'cursor-none' : ''
        }`}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      {/* Custom Bright Blinking Cursor */}
      {isInside && (
        <>
          <div
            className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full bg-cyan/20 border border-cyan shadow-[0_0_15px_#00F0FF] animate-ping"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div
            className="fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#00F0FF,0_0_20px_#00F0FF] animate-pulse"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: 'translate(-50%, -50%)'
            }}
          />
        </>
      )}

      {/* Ambient background glows */}
      <div className="absolute right-0 top-10 w-72 h-72 rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center">
        {/* Upper centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan bg-clip-text text-transparent tracking-tight">
            My Skills
          </h2>
        </motion.div>

        {/* Square rounded card flex stack exactly like reference template */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-6xl mx-auto py-2">
          {skillsData.map((skill, idx) => (
            <motion.a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center select-none group cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.025 }}
            >
              {/* Square rounded card */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.1,
                  borderColor: skill.color,
                  boxShadow: `0 15px 30px -5px ${skill.color}66, 0 10px 15px -6px ${skill.color}66`
                }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center p-3 border transition-all duration-300 bg-slate-950 cursor-pointer border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <motion.div
                  className="flex items-center justify-center transition-transform duration-300 group-hover:scale-130"
                  style={{ 
                    color: skill.color,
                    filter: `drop-shadow(0 0 10px ${skill.color}cc)`
                  }}
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.95, 1, 0.95]
                  }}
                  transition={{
                    duration: 2.5 + (idx % 4) * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {skill.icon}
                </motion.div>
              </motion.div>

              {/* Title below */}
              <span className={`text-[11px] md:text-[13px] font-bold tracking-wide mt-3 text-center transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-850'
                }`}>
                {skill.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
