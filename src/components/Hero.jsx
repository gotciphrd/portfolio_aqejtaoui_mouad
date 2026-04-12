import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    // Typed text effect on the welcome title
    const el = titleRef.current
    if (!el) return
    const text = 'WELCOME TO MY WORLD!'
    el.textContent = ''
    let i = 0
    const interval = setInterval(() => {
      el.textContent = text.slice(0, i + 1)
      i++
      if (i >= text.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 bg-[#2a1a4e] relative overflow-hidden"
    >
      {/* Decorative dot grid top-right */}
      <div className="dot-grid absolute top-12 right-8 w-48 h-48 opacity-50 pointer-events-none" />
      {/* Subtle glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="space-y-5 animate-fade-up">
            <h1
              ref={titleRef}
              className="font-mono text-2xl md:text-3xl font-bold underline underline-offset-4 decoration-purple-300 text-white leading-snug"
            />
            <p className="font-mono text-sm md:text-base leading-relaxed text-purple-100">
              Hello, I'm{' '}
              <span className="underline underline-offset-4 decoration-purple-300 text-white font-bold">
                Mouad AQEJTAOUI
              </span>
              ,<br />
              I go by{' '}
              <span className="underline underline-offset-4 decoration-purple-300 text-white">
                Cipher
              </span>
              , an alias i choose
              <br />
              since the beginning of my journey
              <br />
              in{' '}
              <span className="underline underline-offset-4 decoration-purple-300 text-white">
                Cipheron Group
              </span>
              , as a front-end
              <br />
              <span className="underline underline-offset-4 decoration-purple-300 text-white">
                developer
              </span>{' '}
              and{' '}
              <span className="underline underline-offset-4 decoration-purple-300 text-white">
                designer
              </span>
            </p>
          </div>

          {/* Right: dot grid decoration */}
          <div className="hidden md:flex justify-end">
            <div className="dot-grid w-56 h-44 rounded-lg animate-float opacity-70" />
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-20 flex flex-col items-center gap-5 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="font-mono text-sm text-center text-purple-200">
            Press the{' '}
            <span className="underline underline-offset-4 decoration-purple-300 text-white">
              magical
            </span>{' '}
            button below to
            <br />
            start the portfolio showcase
          </p>
          <a href="#projects" className="pixel-btn">
            Dive In
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#9b7ed0]/40 to-transparent pointer-events-none" />
    </section>
  )
}
