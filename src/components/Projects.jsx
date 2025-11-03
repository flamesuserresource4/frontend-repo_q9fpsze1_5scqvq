import React from 'react'
import { ExternalLink, Github, Play } from 'lucide-react'

const projects = [
  {
    title: 'Packet Lab',
    desc: 'Live demo with sandboxed environment. Explore traffic flows with a minimal UI and readable logs.',
    tags: ['React', 'Viz', 'NetOps'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Stealth UI Kit',
    desc: 'Glassmorphism components with soft scale + fade animations and accessible defaults.',
    tags: ['Design', 'CSS', 'Accessibility'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Terminal Notes',
    desc: 'Typewriter-powered blog engine with code-focused typography and short deep-dives.',
    tags: ['Content', 'MDX', 'SEO'],
    demo: '#',
    repo: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#050507] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="bg-gradient-to-r from-[#00FF9F] to-[#00E6FF] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Lab: Live Projects
          </h2>
          <span className="hidden text-sm text-[#9AA3B2] sm:block">Compiled at {new Date().toLocaleDateString()}</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.3,1)] hover:scale-[1.01]"
            >
              <div className="mb-3 h-32 w-full rounded-lg bg-gradient-to-br from-[#00FF9F]/10 to-[#00E6FF]/10 ring-1 ring-white/10" aria-label={`${p.title} preview`} />
              <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
              <p className="mb-3 text-sm text-[#9AA3B2]">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2 py-1 text-xs text-[#9AA3B2] ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <a href={p.demo} className="inline-flex items-center gap-1 rounded-md border border-[#00FF9F]/40 bg-[#00FF9F]/10 px-3 py-1.5 text-xs text-[#00FF9F] hover:bg-[#00FF9F]/20">
                  <Play className="h-3.5 w-3.5" /> Run in sandbox
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10">
                  <Github className="h-3.5 w-3.5" /> Fork this
                </a>
                <a href={p.demo} className="ml-auto inline-flex items-center gap-1 text-xs text-cyan-300 hover:underline">
                  Read Case Study <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
