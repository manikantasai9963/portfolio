import { useScrollAnimate } from '../components/useScrollAnimate';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: 'Design Thinking & Figma',
    issuer: 'LPU',
    link: 'https://drive.google.com/file/d/14hpsIm7uR47H83ZAc6Ujv3FyB9hSMJ2K/view?usp=drive_link',
    icon: '🎨',
  },
  {
    title: '100 Days Python Bootcamp',
    issuer: 'Udemy',
    link: 'https://drive.google.com/file/d/1kKBRmUUbwAeurm2lx9a8rjIy_46ipODr/view?usp=drive_link',
    icon: '🐍',
  },
  {
    title: 'FreeCodeCamp Certification',
    issuer: 'FreeCodeCamp',
    link: 'https://drive.google.com/file/d/1nk004_0spa5RVyna0ZYUkwZg4EFtMiD1/view?usp=drive_link',
    icon: '💻',
  },
];

export default function Certificates() {
  const ref = useScrollAnimate();

  return (
    <section id="certificates" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          <div className="mb-16">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">04 / Certificates</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-paper">
              Certifi<span className="text-gradient">cations</span>
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-accent to-accent2" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="group border-gradient rounded-2xl p-6 hover:bg-white/[0.03] transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{cert.icon}</span>
                  <FiExternalLink size={14} className="text-paper/20 group-hover:text-accent transition-colors mt-1" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-paper text-base leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-accent/60">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-paper/30 group-hover:text-accent/60 transition-colors mt-auto">
                  <FiAward size={12} />
                  <span>View Certificate</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
