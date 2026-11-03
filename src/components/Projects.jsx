import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

/* ─── CSS-based project illustrations (defined first) ─── */
function SSBIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden" aria-hidden="true">
      <div className="flex flex-col gap-3 w-full px-4">
        <div className="bg-[#B8A9FF]/30 rounded-xl rounded-tl-none px-4 py-2.5 text-xs font-semibold text-[#1A1A1A] max-w-[80%] border border-[#B8A9FF]/40">
          How do you handle pressure in a group task?
        </div>
        <div className="self-end bg-[#1A1A1A] rounded-xl rounded-tr-none px-4 py-2.5 text-xs font-semibold text-white max-w-[80%]">
          I focus on collaboration and clear roles...
        </div>
        <div className="bg-[#B8A9FF]/30 rounded-xl rounded-tl-none px-4 py-2.5 text-xs font-semibold text-[#1A1A1A] max-w-[72%] border border-[#B8A9FF]/40">
          ✓ Good answer — try adding an example.
        </div>
      </div>
      <div className="absolute top-3 right-3 text-2xl">🎖️</div>
    </div>
  )
}

function ShipmentIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4" aria-hidden="true">
      <div className="w-full">
        <div className="flex items-end gap-2 h-20 mb-3">
          {[55, 70, 45, 85, 60, 92, 68].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-[#95E1D3] transition-all"
              style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }}
            />
          ))}
        </div>
        <svg viewBox="0 0 200 30" className="w-full" aria-hidden="true">
          <polyline
            points="0,25 28,18 56,22 84,10 112,15 140,5 168,11 200,8"
            fill="none"
            stroke="#2EC4B6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="200" cy="8" r="4" fill="#2EC4B6" />
        </svg>
        <p className="text-[10px] font-semibold text-[#2EC4B6] mt-1 text-right tracking-wide">ETA Prediction ↗</p>
      </div>
    </div>
  )
}

function PortalIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center px-5" aria-hidden="true">
      <div className="w-full bg-white rounded-xl border border-[#FFD166]/60 shadow p-4 space-y-3">
        <div className="h-2.5 bg-[#FFD166]/50 rounded w-3/4" />
        <div className="h-7 bg-[#F5F5F5] border border-[#E0E0E0] rounded-md" />
        <div className="h-7 bg-[#F5F5F5] border border-[#E0E0E0] rounded-md" />
        <div className="h-7 bg-[#F5F5F5] border border-[#E0E0E0] rounded-md w-2/3" />
        <div className="h-8 bg-[#FFD166] rounded-lg flex items-center justify-center">
          <span className="text-[11px] font-bold text-[#1A1A1A]">Submit Registration →</span>
        </div>
      </div>
    </div>
  )
}

function CredentialIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center px-5" aria-hidden="true">
      <div className="w-full space-y-2">
        <div className="bg-[#1A1A1A] rounded-xl p-4 text-white">
          <p className="text-[10px] font-semibold text-[#FF6B6B] uppercase tracking-widest mb-1">Credential ID</p>
          <p className="font-mono text-xs text-[#95E1D3] break-all">a3f9...d14c</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-2 h-2 rounded-full bg-[#95E1D3]" />
            <span className="text-[10px] text-[#7A7A7A]">Hash verified · tamper-evident</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pl-1">
          <span className="text-lg">🔐</span>
          <p className="text-[11px] font-semibold text-[#4A4A4A]">Cryptographic integrity concept</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Project data (illustrations defined above) ─── */
const projects = [
  {
    id: '01',
    category: 'AI / EdTech',
    title: 'SSB Interview Preparation Platform',
    description:
      'An AI-assisted preparation platform for defence aspirants, featuring dynamic questions and structured response evaluation. Built to help candidates practise SSB interview rounds systematically.',
    tech: ['Python', 'Streamlit', 'AI / LLM', 'NLP'],
    live: 'https://npvi6wpouz6e4uqfhmuztt.streamlit.app/',
    github: 'https://github.com/vanshika-rana-8989/ssb_ai.git',
    accent: '#B8A9FF',
    bg: '#F0EDFF',
    Illustration: SSBIllustration,
  },
  {
    id: '02',
    category: 'Data / Analytics',
    title: 'Shipment Tracking & Predictive Analytics',
    description:
      'A shipment tracking and predictive analytics project exploring data-driven shipment estimates. Digs into real-world datasets to surface delivery predictions and logistics patterns.',
    tech: ['Python', 'Machine Learning', 'Flask', 'Data Science'],
    live: 'https://shipment-prediction.onrender.com/predict',
    github: 'https://github.com/vanshika-rana-8989/shipment_prediction.git',
    accent: '#95E1D3',
    bg: '#EDFAF7',
    Illustration: ShipmentIllustration,
  },
  {
    id: '03',
    category: 'Web Development',
    title: 'React Registration Portal',
    description:
      'A registration portal built to practise React components, user interface design, and form workflows. Covers controlled inputs, validation, and clean UI architecture.',
    tech: ['React', 'JavaScript', 'CSS', 'Forms'],
    live: null,
    github: 'https://github.com/vanshika-rana-8989/registration-portal.git',
    accent: '#FFD166',
    bg: '#FFF9ED',
    Illustration: PortalIllustration,
  },
  {
    id: '04',
    category: 'Hackathon Concept',
    title: 'Digital Credential Verification',
    description:
      'A hackathon concept for tamper-evident digital credential records. Explored cryptographic verification techniques and a lightweight PHP + MySQL backend to prototype the idea.',
    tech: ['PHP', 'MySQL', 'Cryptography (Concept)', 'HTML/CSS'],
    live: null,
    github: null,
    accent: '#FF6B6B',
    bg: '#FFF0F0',
    Illustration: CredentialIllustration,
  },
]

/* ─── Animation variants ─── */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── Project Card ─── */
function ProjectCard({ project, index }) {
  const { Illustration } = project
  return (
    <motion.article
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="project-card group flex flex-col"
    >
      {/* Illustration area */}
      <div
        className="h-52 relative overflow-hidden"
        style={{ background: project.bg }}
      >
        <Illustration />

        {/* Project number badge */}
        <span
          className="absolute top-4 left-4 text-xs font-mono font-bold px-2 py-1 rounded"
          style={{ background: project.accent + '33', color: project.accent }}
        >
          {project.id}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <p
          className="text-[11px] font-bold uppercase tracking-widest mb-2"
          style={{ color: project.accent === '#FFD166' ? '#7A6200' : project.accent }}
        >
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-lg font-extrabold text-ink leading-tight mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#4A4A4A] leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(tag => (
            <span
              key={tag}
              className="tech-tag"
              style={{
                background: project.accent + '1A',
                color: project.accent === '#FFD166' ? '#7A6200' : project.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-4 pt-4 border-t border-black/6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-[#B8A9FF] transition-colors"
              aria-label={`Open live demo of ${project.title}`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-[#B8A9FF] transition-colors ${project.live ? 'ml-auto' : ''}`}
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <Github size={14} />
              Source
            </a>
          )}
          {!project.live && !project.github && (
            <span className="text-xs text-[#7A7A7A] font-medium italic">Concept / Prototype — no public repo</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Selected projects">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Selected Work</p>
          <h2
            className="text-4xl sm:text-5xl font-black text-ink tracking-tight"
            style={{ letterSpacing: '-0.025em' }}
          >
            Things I've built.
          </h2>
          <p className="mt-4 text-lg text-[#4A4A4A] max-w-xl">
            A mix of personal projects, academic experiments, and hackathon concepts —
            each one something I learned from.
          </p>
        </motion.div>

        {/* Project grid — 2 columns on medium+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/vanshika-rana-8989"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary inline-flex"
          >
            <Github size={16} />
            See all on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
