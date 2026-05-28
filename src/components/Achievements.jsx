import React from 'react'

export default function Achievements(){
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      <div className="glass p-6 rounded-lg grid md:grid-cols-3 gap-4">
        <div className="p-4">
          <h3 className="font-semibold">DSA</h3>
          <p className="text-slate-300">Solved 500+ DSA problems</p>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">Projects</h3>
          <p className="text-slate-300">Built real-world projects in backend and AI</p>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">Experience</h3>
          <p className="text-slate-300">Backend & AI development experience</p>
        </div>
      </div>
    </section>
  )
}
