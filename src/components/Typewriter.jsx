import React, { useState, useEffect } from 'react'

export default function Typewriter({ words = [], speed = 120, pause = 1200 }){
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(()=>{
    if(!words.length) return
    const current = words[idx % words.length]
    const timeout = setTimeout(()=>{
      setDisplay(prev => deleting ? current.slice(0, prev.length-1) : current.slice(0, prev.length+1))
      if(!deleting && display === current){
        setDeleting(true)
        setTimeout(()=>{}, pause)
      } else if (deleting && display === ''){
        setDeleting(false)
        setIdx(i => i+1)
      }
    }, deleting ? speed/2 : speed)
    return ()=> clearTimeout(timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[display, deleting, idx, words])

  return <span>{display}<span className="inline-block ml-1">|</span></span>
}
