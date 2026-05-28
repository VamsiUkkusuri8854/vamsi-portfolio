import React from 'react'

export default function Footer({ theme }) {
  const socialLinks = [
    { 
      label: 'GitHub ↗', 
      url: 'https://github.com/VamsiUkkusuri8854',
      btnClass: 'border-slate-800/80 hover:border-white/30 bg-[#24292e]/10 hover:bg-[#24292e]/40 text-slate-350 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.15)]'
    },
    { 
      label: 'LinkedIn ↗', 
      url: 'https://www.linkedin.com/in/vamsi-ukkusuri-9ab0aa280',
      btnClass: 'border-slate-800/80 hover:border-[#0A66C2]/30 bg-[#0A66C2]/5 hover:bg-[#0A66C2]/15 text-[#0A66C2]/80 hover:text-white hover:bg-[#0A66C2]/60 hover:shadow-[0_0_10px_rgba(10,102,194,0.2)]'
    },
    { 
      label: 'LeetCode ↗', 
      url: 'https://leetcode.com/u/oNPlQuPkmI/',
      btnClass: 'border-slate-800/80 hover:border-[#FFA116]/30 bg-[#FFA116]/5 hover:bg-[#FFA116]/15 text-[#FFA116]/80 hover:text-white hover:bg-[#FFA116]/60 hover:shadow-[0_0_10px_rgba(255,161,22,0.2)]'
    },
    { 
      label: 'GeeksforGeeks ↗', 
      url: 'https://www.geeksforgeeks.org/profile/vamsiuk1oml?tab=activity',
      btnClass: 'border-slate-800/80 hover:border-[#2F8D46]/30 bg-[#2F8D46]/5 hover:bg-[#2F8D46]/15 text-[#2F8D46]/80 hover:text-white hover:bg-[#2F8D46]/60 hover:shadow-[0_0_10px_rgba(47,141,70,0.2)]'
    }
  ]

  return (
    <footer className={`border-t pt-16 pb-12 mt-16 font-sans relative transition-all duration-300 ${theme === 'dark' ? 'border-slate-900 bg-slate-950/20' : 'border-slate-200/80 bg-slate-50/40'
      }`}>
      <div className="container mx-auto px-6 lg:pl-32 lg:pr-20">
        <div className={`grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b ${theme === 'dark' ? 'border-slate-900' : 'border-slate-200/80'
          }`}>

          {/* Main big name */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter uppercase">
                Vamsi <span className="text-violet-500 font-medium">Ukkusuri</span>
              </h2>
              <p className="mt-4 text-xs text-slate-400 tracking-wide max-w-sm leading-relaxed">
                Specialized AIML engine designer & Java Spring Boot backend developer focused on structural code beauty and algorithm optimization.
              </p>
            </div>
          </div>

          {/* Contact coordinates */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <div>
              <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-1.5">Email</div>
              <a href="mailto:vamsiukkusuri@gmail.com" className={`hover:text-pink-500 transition-colors text-xs font-semibold tracking-wide ${theme === 'dark' ? 'text-slate-300' : 'text-slate-750'
                }`}>
                vamsiukkusuri@gmail.com
              </a>
            </div>
            <div>
              <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-1.5">Location</div>
              <span className={`text-xs font-semibold tracking-wide ${theme === 'dark' ? 'text-slate-300' : 'text-slate-750'}`}>
                Tadepalligudem, AP, India
              </span>
            </div>
          </div>

          {/* Social connections */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-1">Network Links</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center text-center py-2 px-2 rounded-md border text-[11px] font-semibold tracking-wide transition-all duration-300 ${link.btnClass}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Closing details */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-slate-500 gap-4">
          <div className="font-mono select-none">
            DESIGNED & DEVELOPED BY VAMSI UKKUSURI
          </div>
          <div>
            © {new Date().getFullYear()} Vamsi Ukkusuri — Tadepalligudem. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

