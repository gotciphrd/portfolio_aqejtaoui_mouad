import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let raf

    const move = (e) => {
      raf = requestAnimationFrame(() => {
        if (dot) {
          dot.style.left = e.clientX + 'px'
          dot.style.top = e.clientY + 'px'
        }
        if (ring) {
          ring.style.left = e.clientX + 'px'
          ring.style.top = e.clientY + 'px'
        }
      })
    }

    const onEnter = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1.8)'
    }
    const onLeave = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  )
}
