import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

/* ─── VR Monogram Illustration (pure CSS + SVG) ─── */
function VRIllustration() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center select-none" aria-hidden="true">
      {/* Outer rotating ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#B8A9FF]/40 shape-rotate" />

      {/* Colour blobs */}
      <div className="absolute top-6 right-8 w-16 h-16 rounded-full bg-[#FFD166]/60 blur-sm animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-10 left-6 w-20 h-20 rounded-full bg-[#95E1D3]/50 blur-sm animate-float" style={{ animationDelay: '1.8s' }} />
      <div className="absolute top-16 left-10 w-10 h-10 rounded-full bg-[#FF6B6B]/50 blur-sm animate-float" style={{ animationDelay: '0.9s' }} />

      {/* Centre card */}
      <div className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-3xl bg-[#1A1A1A] flex flex-col items-center justify-center shadow-2xl"
        style={{ boxShadow: '0 0 0 8px rgba(184,169,255,0.12), 0 24px 60px rgba(0,0,0,0.22)' }}
      >
        <span className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none" style={{ letterSpacing: '-0.04em' }}>VR</span>
        <span className="text-[#B8A9FF] text-2xl font-black leading-none mt-1">.</span>
      </div>

      {/* Floating sticker labels */}
      <div className="absolute -top-2 right-4 bg-[#FFD166] text-[#1A1A1A] text-xs font-bold px-3 py-1.5 rounded-full rotate-6 shadow">
        B.Tech '27
      </div>
      <div className="absolute bottom-4 -right-2 bg-[#B8A9FF] text-[#1A1A1A] text-xs font-bold px-3 py-1.5 rounded-full -rotate-3 shadow">
        Builder ✦
      </div>
      <div className="absolute -bottom-2 left-8 bg-[#95E1D3] text-[#1A1A1A] text-xs font-bold px-3 py-1.5 rounded-full rotate-2 shadow">
        C++ & DSA
      </div>

      {/* Small geometric accents */}
      <div className="absolute top-8 right-2 w-5 h-5 border-2 border-[#FF6B6B] rounded rotate-45" />
      <div className="absolute bottom-16 right-10 w-3 h-3 bg-[#FFD166] rounded-sm rotate-12" />
      <div className="absolute top-20 left-2 w-4 h-4 bg-[#B8A9FF] rounded-full" />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background geometric shapes */}
      <div aria-hidden="true" className="pointer-events-none">
        <div className="absolute top-32 -left-20 w-64 h-64 rounded-full bg-[#B8A9FF]/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-[#FFD166]/12 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-[#95E1D3]/10 blur-2xl" />
      </div>

      <div className="container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="badge border-[#95E1D3] text-[#1A1A1A] bg-[#95E1D3]/15 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2ec4a9] inline-block" />
                Open to internships &amp; hackathons
                {/* ↑ Edit this status to reflect your real availability */}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-ink leading-[1.04] tracking-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Building things
              <br />
              <span className="relative inline-block">
                for the{' '}
                <span className="relative">
                  curious
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                    <path d="M2 6 Q50 1 100 5 Q150 9 198 4" stroke="#B8A9FF" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>
                .
              </span>
            </motion.h1>

            {/* Intro paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-[#4A4A4A] leading-relaxed max-w-xl mb-10"
            >
              Hey, I'm{' '}
              <strong className="text-ink font-semibold">Vanshika Rana</strong> — a B.Tech
              student exploring web development, C++, problem-solving, and AI-powered ideas.
              I like learning by building.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn btn-primary text-base"
              >
                Explore My Work
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn btn-secondary text-base"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-black/8"
            >
              <div>
                <p className="text-2xl font-extrabold text-ink">200+</p>
                <p className="text-xs text-[#7A7A7A] font-medium mt-0.5">LeetCode Problems</p>
              </div>
              <div className="w-px bg-black/10 self-stretch" aria-hidden="true" />
              <div>
                <p className="text-2xl font-extrabold text-ink">2★</p>
                <p className="text-xs text-[#7A7A7A] font-medium mt-0.5">CodeChef (~1470)</p>
              </div>
              <div className="w-px bg-black/10 self-stretch" aria-hidden="true" />
              <div>
                <p className="text-2xl font-extrabold text-ink">4+</p>
                <p className="text-xs text-[#7A7A7A] font-medium mt-0.5">Projects Built</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: VR Illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <VRIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center mt-16 lg:mt-20"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 scroll-bounce">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7A7A7A]">Scroll</span>
            <ArrowDown size={14} className="text-[#7A7A7A]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
