import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="bg-ink text-paper min-h-screen noise-bg">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
