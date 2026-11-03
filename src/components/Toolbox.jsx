import { motion } from 'framer-motion'

const categories = [
  {
    id: 'web',
    label: 'Web Development',
    accent: '#B8A9FF',
    icon: '⚡',
    skills: [
      { name: 'HTML',       level: 'Comfortable' },
      { name: 'CSS',        level: 'Comfortable' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'React',      level: 'Learning'    },
    ],
  },
  {
    id: 'prog',
    label: 'Programming & Problem Solving',
    accent: '#FFD166',
    icon: '🧠',
    skills: [
      { name: 'C++',                level: 'Comfortable' },
      { name: 'Data Structures',    level: 'Comfortable' },
      { name: 'Algorithms',         level: 'Comfortable' },
      { name: 'Competitive Coding', level: 'Practising'  },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML Projects',
    accent: '#95E1D3',
    icon: '🤖',
    skills: [
      { name: 'Python',               level: 'Comfortable' },
      { name: 'Streamlit',            level: 'Used'        },
      { name: 'Predictive Analytics', level: 'Explored'    },
      { name: 'AI-Assisted Apps',     level: 'Explored'    },
    ],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    accent: '#FF6B6B',
    icon: '🛠️',
    skills: [
      { name: 'Git',    level: 'Comfortable' },
      { name: 'GitHub', level: 'Comfortable' },
      { name: 'VS Code',level: 'Daily driver' },
      { name: 'Vite',   level: 'Used'        },
    ],
  },
  {
    id: 'exploring',
    label: 'Currently Exploring',
    accent: '#1A1A1A',
    icon: '🔭',
    skills: [
      { name: 'Cybersecurity',    level: 'Exploring' },
      { name: 'Backend Dev',      level: 'Exploring' },
      { name: 'AI Automation',    level: 'Exploring' },
      { name: 'System Design',    level: 'Exploring' },
    ],
  },
]

const levelColor = {
  'Comfortable':      '#95E1D3',
  'Learning':         '#B8A9FF',
  'Practising':       '#FFD166',
  'Used':             '#B8A9FF',
  'Explored':         '#FFD166',
  'Daily driver':     '#95E1D3',
  'Exploring':        '#FF6B6B',
}

function SkillCategory({ cat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="skill-category"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xl" aria-hidden="true">{cat.icon}</span>
        <div>
          <h3 className="text-sm font-extrabold text-ink">{cat.label}</h3>
        </div>
        <div
          className="ml-auto w-2 h-2 rounded-full"
          style={{ background: cat.accent }}
          aria-hidden="true"
        />
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-3">
        {cat.skills.map(skill => (
          <div key={skill.name} className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-ink">{skill.name}</span>
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{
                background: (levelColor[skill.level] || '#B8A9FF') + '22',
                color: levelColor[skill.level] || '#B8A9FF',
              }}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Toolbox() {
  return (
    <section id="toolbox" className="section bg-[#F2F0EB]" aria-label="Skills and toolbox">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight" style={{ letterSpacing: '-0.025em' }}>
            My toolbox.
          </h2>
          <p className="mt-4 text-lg text-[#4A4A4A] max-w-xl">
            Tools and technologies I've worked with — honestly labelled.
            Developing areas are marked, not inflated.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-xs text-center text-[#7A7A7A] max-w-lg mx-auto"
        >
          Skills labelled "Exploring" are areas I'm actively reading about or experimenting in.
          I'll update this section as I grow.
        </motion.p>
      </div>
    </section>
  )
}
