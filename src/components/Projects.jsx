import { useEffect, useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'Project #1',
    desc: 'A 3d model of sum very interesting and very professionnal.',
    color: 'bg-[#c4a8e8]',
  },
  {
    id: 2,
    title: 'Project #2',
    desc: 'A 3d model of sum very interesting and very professionnal.',
    color: 'bg-[#b89de0]',
  },
  {
    id: 3,
    title: 'Project #3',
    desc: 'A 3d model of sum very interesting and very professionnal.',
    color: 'bg-[#caaff0]',
  },
  {
    id: 4,
    title: 'Project #4',
    desc: 'A 3d model of sum very interesting and very professionnal.',
    color: 'bg-[#b89de0]',
  },
  {
    id: 5,
    title: 'Project #5',
    desc: 'A 3d model of sum very interesting and very professionnal.',
    color: 'bg-[#c4a8e8]',
  },
  {
    id: 6,
    title: 'Project #6',
    desc: 'A 3d model of sum very interesting and very professionnal.',
    color: 'bg-[#caaff0]',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 bg-[#9b7ed0]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-on-scroll">My Projects</h2>

        <p className="font-mono text-sm leading-relaxed mb-10 max-w-xl animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          Here's some of my projects and contributions that I'm
          <br />
          proud to share, alongside some of the details concerning
          <br />
          each project :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="animate-on-scroll card-hover group"
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="bg-[#7b5ea7] rounded-xl overflow-hidden border border-purple-300/20">
                {/* Thumbnail placeholder */}
                <div
                  className={`${p.color} w-full h-36 flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                  <span className="font-mono text-xs text-purple-800/60 select-none">
                    [ preview ]
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 space-y-1">
                  <h3 className="font-mono text-sm font-bold text-white underline underline-offset-2 decoration-purple-300">
                    {p.title} :
                  </h3>
                  <p className="font-mono text-xs text-purple-100 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
