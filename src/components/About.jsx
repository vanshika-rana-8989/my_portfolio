import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Vanshika Rana">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left: label + philosophy ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4"
          >
            <p className="section-label">About Me</p>

            {/* Philosophy card */}
            <div className="mt-8 bg-[#1A1A1A] rounded-2xl p-7 relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#B8A9FF]/20" aria-hidden="true" />
              <p className="text-[#B8A9FF] text-xs font-bold uppercase tracking-widest mb-3">Philosophy</p>
              <blockquote className="text-white text-xl font-extrabold leading-snug tracking-tight" style={{ letterSpacing: '-0.015em' }}>
                "Build it. Break it. Understand it. Make it better."
              </blockquote>
            </div>

            {/* Small decorative grid */}
            <div className="mt-8 grid grid-cols-2 gap-3" aria-hidden="true">
              {[
                { label: 'Student at', value: 'B.Tech CSE' },
                { label: 'Batch', value: "'27" },
                { label: 'Passions', value: 'Web & DSA' },
                { label: 'Exploring', value: 'AI / Sec' },
              ].map(item => (
                <div key={item.label} className="bg-[#F2F0EB] rounded-xl p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#7A7A7A] mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Main copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h2
              className="text-4xl sm:text-5xl font-black text-ink mb-8 tracking-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              Hey, nice to meet you.
            </h2>

            <div className="space-y-5 text-[#4A4A4A] text-base leading-relaxed max-w-2xl">
              <p>
                I'm <strong className="text-ink font-semibold">Vanshika Rana</strong>, a B.Tech Computer
                Science student with a genuine interest in understanding how things work — and then
                building my own version of them. Whether it's a React form, a machine-learning pipeline,
                or a data visualisation, I find the process of making something from scratch incredibly satisfying.
              </p>

              <p>
                My main playgrounds right now are <strong className="text-ink font-semibold">C++ and Data
                Structures & Algorithms</strong>. I practice consistently on LeetCode and CodeChef, not
                because of ratings (though those are a useful signal), but because I genuinely enjoy the
                puzzle-solving aspect of algorithmic thinking.
              </p>

              <p>
                On the web side, I've built registration portals, worked with React components, and deployed
                small projects to get comfortable with the full loop from idea to live URL. I'm drawn to clean
                interfaces and code that's easy for someone else to read.
              </p>

              <p>
                I've also been exploring <strong className="text-ink font-semibold">AI and machine learning</strong>
                — specifically how to build practical applications on top of ML models rather than just studying
                them theoretically. My SSB preparation platform and shipment prediction project came out of that
                curiosity. I'm separately starting to poke around in cybersecurity and backend development too —
                early days, but interesting.
              </p>

              <p>
                Beyond personal projects, I'm part of the <strong className="text-ink font-semibold">Technical
                Department at E-Cell</strong>, where I've contributed to website work, event promotions, and
                registration workflows. It's been a good way to apply my skills in a collaborative, real-deadline context.
              </p>

              <p>
                I'm currently looking for opportunities — internships, hackathons, open-source contributions — where
                I can keep learning by doing. If you're working on something interesting and want an
                enthusiastic collaborator, I'd love to hear about it.
              </p>
            </div>

            {/* Interest pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                { label: 'Web Development',        color: '#B8A9FF' },
                { label: 'C++ & Algorithms',       color: '#FFD166' },
                { label: 'AI / ML Applications',   color: '#95E1D3' },
                { label: 'Cybersecurity (Exploring)', color: '#FF6B6B' },
                { label: 'Open Source',            color: '#B8A9FF' },
                { label: 'Hackathons',             color: '#FFD166' },
              ].map(tag => (
                <span
                  key={tag.label}
                  className="tech-tag text-ink"
                  style={{ background: tag.color + '22', color: tag.color === '#FFD166' ? '#7A6200' : tag.color }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
