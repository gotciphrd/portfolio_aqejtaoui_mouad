import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Projects', href: '#projects' },
    { label: 'About me', href: '#about' },
    { label: 'Contact Me', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a0e30]/90 backdrop-blur-md border-b border-purple-400/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <span className="font-mono text-lg font-bold tracking-widest text-white">
          Portfolio
          <span className="inline-block w-2 h-4 bg-purple-300 ml-1 animate-blink" />
        </span>
        <ul className="flex gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
