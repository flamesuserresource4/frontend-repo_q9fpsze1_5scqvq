import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Dashboard from './components/Dashboard'

function App() {
  useEffect(() => {
    document.title = 'Labs, writeups, and live code — Hacker Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-[#050507]">
      <Hero />
      <About />
      <Projects />
      <Dashboard />
      <footer className="border-t border-white/10 bg-[#050507] py-10 text-center text-sm text-[#9AA3B2]">
        <div className="mx-auto max-w-6xl px-6">
          Labs, writeups, and live code from [Your Name]. Explore demos and clone projects.
        </div>
      </footer>
    </div>
  )
}

export default App
