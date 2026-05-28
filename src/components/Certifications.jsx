import React from 'react'

const certs = [
  {title:'Salesforce Certified Agentforce Specialist', url:'#'},
  {title:'Oracle Certified Generative AI Professional', url:'#'}
]

export default function Certifications(){
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map(c=> (
          <div key={c.title} className="glass p-4 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="font-semibold">{c.title}</h4>
            </div>
            <div>
              <a href={c.url} className="px-3 py-2 bg-slate-800 rounded-md">Verify</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
