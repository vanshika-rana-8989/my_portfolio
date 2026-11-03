import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Toolbox from './components/Toolbox'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Toolbox />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
