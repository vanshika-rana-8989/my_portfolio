import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-black/8 py-10" role="contentinfo">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand + tagline */}
          <div className="flex items-center gap-4">
            <span className="vr-mono text-2xl font-black text-ink">VR.</span>
            <div className="h-4 w-px bg-black/15" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-ink">Vanshika Rana</p>
              <p className="text-xs text-[#7A7A7A]">B.Tech Student · Builder · Learner</p>
            </div>
          </div>

          {/* Middle: year + credit */}
          <p className="text-xs text-[#7A7A7A] text-center order-3 sm:order-2">
            © {year} Vanshika Rana ·{' '}
            <span className="italic">Built with React, Vite &amp; Framer Motion</span>
          </p>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="order-2 sm:order-3 flex items-center gap-2 text-xs font-semibold text-[#4A4A4A] hover:text-ink transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-7 h-7 border border-black/15 rounded-lg flex items-center justify-center group-hover:border-black/40 transition-colors">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
