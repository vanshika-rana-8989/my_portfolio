import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react'

/*
 * ─── CONFIG ───────────────────────────────────────────────────────────────────
 * Replace the placeholder values below with your real details.
 * EMAIL: Replace 'your.email@example.com' with your actual email address.
 * LINKEDIN: Replace the href with your real LinkedIn profile URL.
 * RESUME: Set SHOW_RESUME to true and add your PDF link once you have a resume.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const CONFIG = {
  EMAIL:       'vanshikaranag@gmail.com',    
  GITHUB:      'https://github.com/vanshika-rana-8989',
  LINKEDIN:    'https://www.linkedin.com/in/vanshika-rana-g8989/', 
  SHOW_RESUME: true,                        // ← set true when resume PDF is ready
  RESUME_URL:  '/resume.pdf',               // ← add your PDF to /public/resume.pdf
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Clipboard API unavailable — show the email in an alert as fallback
      window.prompt('Copy this email address:', CONFIG.EMAIL)
    }
  }

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div className="max-w-3xl mx-auto">

          {/* ── Headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <p className="section-label justify-center">Get in Touch</p>
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-ink mt-4 tracking-tight"
              style={{ letterSpacing: '-0.035em' }}
            >
              Let's make something{' '}
              <span className="relative inline-block">
                matter
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path d="M2 6 Q50 2 100 5 Q150 8 198 3" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              .
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
              Whether it's a project, an internship opportunity, a hackathon team, or just a chat about tech — I'm open to it.
            </p>
          </motion.div>

          {/* ── Contact card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-[#1A1A1A] rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#B8A9FF]/15" aria-hidden="true" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[#FF6B6B]/10" aria-hidden="true" />

            <div className="relative z-10 flex flex-col gap-6">

              {/* Email row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#7A7A7A] mb-1">Email</p>
                  {CONFIG.EMAIL === 'your.email@example.com' ? (
                    <p className="text-white text-lg font-semibold opacity-40 italic">
                      {/* ← Replace CONFIG.EMAIL at the top of this file */}
                      your.email@example.com
                    </p>
                  ) : (
                    <p className="text-white text-lg font-semibold">{CONFIG.EMAIL}</p>
                  )}
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    background: copied ? '#95E1D3' : '#B8A9FF',
                    color: '#1A1A1A',
                  }}
                  aria-label={copied ? 'Email copied!' : 'Copy email address'}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>

              <div className="h-px bg-white/8" />

              {/* Social links */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* GitHub */}
                <a
                  href={CONFIG.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/8 rounded-2xl px-5 py-4 transition-all duration-200 group"
                  aria-label="Visit Vanshika Rana's GitHub profile"
                >
                  <Github size={22} className="text-white" />
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">GitHub</p>
                    <p className="text-[#7A7A7A] text-xs">vanshika-rana-8989</p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#7A7A7A] group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={CONFIG.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/8 rounded-2xl px-5 py-4 transition-all duration-200 group"
                  aria-label="Visit Vanshika Rana's LinkedIn profile"
                >
                  <Linkedin size={22} className="text-white" />
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">LinkedIn</p>
                    <p className="text-[#7A7A7A] text-xs">
                      {/* ← Replace CONFIG.LINKEDIN at top of file */}
                      your-linkedin-handle
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#7A7A7A] group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Resume (only shown when SHOW_RESUME = true) */}
              {CONFIG.SHOW_RESUME && (
                <a
                  href={CONFIG.RESUME_URL}
                  download
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm bg-[#FFD166] text-[#1A1A1A] hover:bg-[#ffc833] transition-colors"
                  aria-label="Download Vanshika Rana's resume"
                >
                  ↓ Download Resume
                </a>
              )}
            </div>
          </motion.div>

          {/* Note about placeholders */}
          <p className="mt-5 text-center text-xs text-[#7A7A7A]">
            📝 Edit <code className="font-mono bg-[#F2F0EB] px-1.5 py-0.5 rounded">src/components/Contact.jsx</code> → <code className="font-mono bg-[#F2F0EB] px-1.5 py-0.5 rounded">CONFIG</code> to update email, LinkedIn, and resume settings.
          </p>
        </div>
      </div>
    </section>
  )
}
