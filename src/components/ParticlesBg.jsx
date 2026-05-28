import React from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'

export default function ParticlesBg({ theme }){
  const init = async (engine) => { await loadFull(engine) }
  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { 
          color: { value: theme === 'dark' ? '#0b1120' : '#ffffff' } 
        },
        particles: {
          number: { value: 35 },
          color: { 
            value: theme === 'dark' ? ['#ec4899', '#8b5cf6', '#06b6d4'] : ['#8b5cf6', '#ec4899', '#6366f1'] 
          },
          shape: { type: 'circle' },
          opacity: { value: theme === 'dark' ? 0.08 : 0.05 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.4 }
        },
        interactivity: { 
          events: { 
            onhover: { enable: true, mode: 'bubble' } 
          } 
        }
      }}
    />
  )
}
