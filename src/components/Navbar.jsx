import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work',     href: '#projects'  },
  { label: 'About',    href: '#about'     },
  { label: 'Toolbox',  href: '#toolbox'   },
  { label: 'Contact',  href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    // give menu animation time to close before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 220)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/8 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="vr-mono text-2xl text-ink tracking-tight hover:text-[#B8A9FF] transition-colors duration-200 focus-visible:outline-[#B8A9FF]"
            aria-label="Vanshika Rana — back to top"
          >
            VR.
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-600 font-semibold text-[#4A4A4A] hover:text-ink transition-colors duration-200 link-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn btn-primary text-sm py-2 px-5"
            >
              Say Hello
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/6 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#FAF9F6] flex flex-col pt-20 px-8 pb-12"
          >
            <nav className="flex flex-col gap-2 flex-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="text-4xl font-extrabold text-ink py-3 border-b border-black/8 hover:text-[#B8A9FF] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8"
            >
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn btn-primary w-full justify-center text-base py-4"
              >
                Say Hello
              </a>
            </motion.div>
            <p className="mt-6 text-xs text-[#7A7A7A] text-center">Vanshika Rana · VR.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
