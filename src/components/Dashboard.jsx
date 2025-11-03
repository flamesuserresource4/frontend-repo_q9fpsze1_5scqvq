import React, { useState } from 'react'
import { Lock, Unlock, Settings, Gauge, User } from 'lucide-react'

const Dashboard = () => {
  const [input, setInput] = useState('')
  const [authed, setAuthed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === '1234') setAuthed(true)
    else alert('Incorrect password')
  }

  return (
    <section id="dashboard" className="relative w-full bg-[#050507] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 bg-gradient-to-r from-[#00FF9F] to-[#00E6FF] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Blueprint: Private Dashboard
        </h2>

        {!authed ? (
          <form onSubmit={handleSubmit} className="max-w-md rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <label className="mb-2 block text-sm text-[#9AA3B2]">Enter password to continue</label>
            <div className="flex items-center gap-2">
              <input
                type="password"
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-[#9AA3B2]"
                placeholder="••••"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="inline-flex items-center gap-2 rounded-md border border-[#00FF9F]/50 bg-[#00FF9F]/10 px-3 py-2 text-sm text-[#00FF9F] hover:bg-[#00FF9F]/20">
                <Lock className="h-4 w-4" /> Unlock
              </button>
            </div>
            <p className="mt-2 text-xs text-[#9AA3B2]">Hint: 1234</p>
          </form>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-[#9AA3B2]">
                <Gauge className="h-4 w-4 text-[#00FF9F]" />
                <span className="text-sm">Build status</span>
              </div>
              <div className="text-2xl font-semibold">Stable</div>
              <div className="text-sm text-[#9AA3B2]">Compiled at {new Date().toLocaleTimeString()}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-[#9AA3B2]">
                <User className="h-4 w-4 text-cyan-300" />
                <span className="text-sm">Visitors (demo)</span>
              </div>
              <div className="text-2xl font-semibold">1,024</div>
              <div className="text-sm text-[#9AA3B2]">Last 7 days (sample)</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-2 flex items-center gap-2 text-[#9AA3B2]">
                <Settings className="h-4 w-4 text-white" />
                <span className="text-sm">Controls</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">Toggle dark trace</button>
                <button className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">Open console</button>
                <button className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">Run</button>
              </div>
            </div>
          </div>
        )}

        {authed && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-[#9AA3B2] ring-1 ring-white/10">
            <Unlock className="h-4 w-4 text-[#00FF9F]" /> Session unlocked — private controls active
          </div>
        )}
      </div>
    </section>
  )
}

export default Dashboard
