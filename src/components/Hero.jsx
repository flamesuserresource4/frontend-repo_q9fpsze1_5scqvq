import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#050507] text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay (non-blocking for interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        {/* Terminal header typing effect */}
        <div className="mb-4 inline-flex items-center rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#00FF9F]" />
          <span className="font-mono text-xs text-[#9AA3B2]">$ whoami — hacker / builder / designer</span>
        </div>

        <h1 className="mb-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Black hat visuals. White-hat code. Welcome — I build clever tools, sleek apps, and readable chaos.
        </h1>

        <p className="max-w-2xl text-sm text-[#9AA3B2] sm:text-base">
          Live demos • Source links • No corporate fluff — Minimal UI. Max curiosity.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md border border-[#00FF9F]/50 bg-[#00FF9F]/10 px-4 py-2 text-sm font-medium text-[#00FF9F] transition-colors hover:bg-[#00FF9F]/20"
          >
            See Live Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
          >
            Clone on GitHub
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-cyan-500/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition-colors hover:bg-cyan-400/20"
          >
            Read Case Study
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
