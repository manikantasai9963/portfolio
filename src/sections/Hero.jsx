import { useScrollAnimate } from '../components/useScrollAnimate';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
  const ref = useScrollAnimate();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/5 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div ref={ref} className="section-animate grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">Available for internships</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              <span className="text-paper">Manikanta</span>
              <br />
              <span className="text-paper">Sai</span>
              <span className="text-gradient"> Medidi</span>
            </h1>

            <p className="font-mono text-accent/70 text-sm tracking-widest uppercase mb-4">
              Aspiring Data Scientist & Data Engineer
            </p>

            <p className="text-paper/60 font-body text-lg leading-relaxed mb-8 max-w-lg">
              I am a passionate Data Science and Data Engineering student with strong foundations in problem solving, analytics, and system design. I enjoy working with data, building pipelines, and creating insights that solve real-world problems.
            </p>

            {/* Education */}
            <div className="space-y-3 mb-10">
              <div className="border-gradient rounded-xl p-4 flex items-start gap-3">
                <span className="text-accent font-mono text-xs mt-0.5">🎓</span>
                <div>
                  <p className="font-display font-semibold text-paper text-sm">B.Tech CSE (Data Science & ML)</p>
                  <p className="text-paper/50 text-xs font-body mt-0.5">Lovely Professional University &bull; CGPA: 7.2</p>
                </div>
              </div>
              <div className="border-gradient rounded-xl p-4 flex items-start gap-3">
                <span className="text-accent font-mono text-xs mt-0.5">📘</span>
                <div>
                  <p className="font-display font-semibold text-paper text-sm">Intermediate (PCM)</p>
                  <p className="text-paper/50 text-xs font-body mt-0.5">89.2%</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-accent text-ink font-display font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 border border-border text-paper/70 font-display font-medium px-6 py-3 rounded-xl hover:border-accent/40 hover:text-paper transition-all duration-200"
              >
                Get in touch
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a href="https://github.com/manikantasai9963" target="_blank" rel="noreferrer" className="text-paper/40 hover:text-accent transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/mani-9963m" target="_blank" rel="noreferrer" className="text-paper/40 hover:text-accent transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:manikantasaimedidi@gmail.com" className="text-paper/40 hover:text-accent transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-accent/10 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full" />
              </div>
              <div className="absolute -inset-8 rounded-full border border-accent2/10 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent2 rounded-full" />
              </div>

              {/* Profile placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent/20">
                <img
                  src="/profile.jpg"
                  alt="Manikanta Sai Medidi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-accent/10 to-accent2/10 items-center justify-center">
                  <div className="text-center">
                    <div className="font-display font-bold text-6xl text-gradient">MS</div>
                    <p className="font-mono text-xs text-paper/30 mt-2">Add profile.jpg<br/>to /public folder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
