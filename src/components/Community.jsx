import { motion } from 'framer-motion'

const highlights = [
  {
    icon: '📚',
    accent: '#B8A9FF',
    title: 'Consistent DSA Practice',
    body: 'Solving problems daily on LeetCode and CodeChef, working through patterns in arrays, trees, graphs, and dynamic programming. 200+ problems done, more in progress.',
  },
  {
    icon: '🔨',
    accent: '#FFD166',
    title: 'Building & Iterating',
    body: 'Every project I take on teaches me something the docs don\'t — debugging React state, wiring ML models to a UI, or figuring out why a deployment breaks at the last minute.',
  },
  {
    icon: '🏆',
    accent: '#95E1D3',
    title: 'Hackathons & Challenges',
    body: 'Participated in hackathons where tight timelines push you to scope clearly, build fast, and communicate ideas under pressure — great training ground.',
  },
  {
    icon: '🌐',
    accent: '#FF6B6B',
    title: 'E-Cell Technical Team',
    body: 'Contributing to website work, event promotions, and registration workflows as part of the Technical Department. Real deadlines, real collaboration.',
  },
]

export default function Community() {
  return (
    <section id="community" className="section" aria-label="Learning and community">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Learning & Community</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight" style={{ letterSpacing: '-0.025em' }}>
            How I keep growing.
          </h2>
          <p className="mt-4 text-lg text-[#4A4A4A] max-w-xl">
            Beyond classes — the habits and communities that actually shape how I think and work.
          </p>
        </motion.div>

        {/* Bento-style highlight grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-black/[0.08] rounded-2xl p-7 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Accent blob */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-20 transition-opacity group-hover:opacity-30"
                style={{ background: item.accent }}
                aria-hidden="true"
              />
              <span className="text-3xl mb-4 block" aria-hidden="true">{item.icon}</span>
              <h3
                className="text-base font-extrabold mb-2"
                style={{ color: item.accent === '#FFD166' ? '#7A6200' : item.accent }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Coding stats marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 overflow-hidden py-5 border-y border-black/8"
          aria-label="Coding profile highlights"
        >
          <div className="flex whitespace-nowrap marquee-track gap-12" aria-hidden="true">
            {[
              '⭐ CodeChef 2-Star',
              '✦ ~1470 Rating',
              '💡 200+ LeetCode',
              '🧩 Arrays & Trees',
              '⚡ Dynamic Programming',
              '🔗 Graph Problems',
              '📈 Consistent Practice',
              '⭐ CodeChef 2-Star',
              '✦ ~1470 Rating',
              '💡 200+ LeetCode',
              '🧩 Arrays & Trees',
              '⚡ Dynamic Programming',
              '🔗 Graph Problems',
              '📈 Consistent Practice',
            ].map((item, i) => (
              <span key={i} className="text-sm font-semibold text-[#7A7A7A] inline-flex items-center gap-2">
                {item}
                <span className="w-1 h-1 rounded-full bg-[#7A7A7A] inline-block ml-6" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
