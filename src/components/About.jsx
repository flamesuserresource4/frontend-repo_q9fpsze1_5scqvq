import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#050507] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-6 bg-gradient-to-r from-[#00FF9F] to-[#00E6FF] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Field Notes
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-[#9AA3B2]">
              I’m a full-stack tinkerer who loves performance, elegant debugging, and small, furious experiments. My work is practical — reproducible demos, step-by-step writeups, and minimal but meaningful UIs.
            </p>
            <div className="mt-4 rounded-lg bg-black/30 p-4">
              <p className="font-mono text-sm text-[#9AA3B2]">
                Meta: Portfolio of [Your Name] — interactive apps, security-minded tooling, deep technical posts.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-2 text-xl font-semibold">What I build</h3>
            <ul className="list-inside list-disc text-[#9AA3B2]">
              <li>Interactive tools and clean hacks</li>
              <li>Production-ready apps with deep writeups</li>
              <li>Glassmorphic UIs with subtle motion</li>
              <li>Readable systems and reproducible demos</li>
            </ul>
            <div className="mt-4 text-sm text-[#9AA3B2]">
              From exploit to elegant — building things that teach.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
