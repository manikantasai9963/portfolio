import { useScrollAnimate } from '../components/useScrollAnimate';
import { FiStar, FiExternalLink } from 'react-icons/fi';

const achievements = [
  {
    title: 'Bootcamp of Miracles Python Certification',
    description: 'Completed intensive Python bootcamp with distinction.',
    icon: '🏆',
    link: 'https://drive.google.com/file/d/1ybKNw-X3_fUHWwJZjnVnEP0goWBQgkUJ/view?usp=drive_link',
  },
  {
    title: 'NGO Contribution – Tribal Agricultural Development',
    description: 'Contributed to NGO efforts supporting tribal agricultural communities.',
    icon: '🌱',
    link: 'https://drive.google.com/file/d/1JgCCVIOCA1mJ2wgzu6N_J04H8HaJ8mo0/view?usp=drive_link',
  },
];

export default function Achievements() {
  const ref = useScrollAnimate();

  return (
    <section id="achievements" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-accent2/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          <div className="mb-16">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">05 / Achievements</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-paper">
              Achieve<span className="text-gradient">ments</span>
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-accent to-accent2" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((ach) => (
              <a
                key={ach.title}
                href={ach.link}
                target="_blank"
                rel="noreferrer"
                className="group border-gradient rounded-2xl p-8 hover:bg-white/[0.03] transition-all duration-300 flex gap-5 items-start"
              >
                <span className="text-4xl flex-shrink-0 mt-1">{ach.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-paper text-lg leading-tight">
                      {ach.title}
                    </h3>
                    <FiExternalLink size={14} className="text-paper/20 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-paper/50 font-body text-sm mt-2">{ach.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs font-mono text-paper/30 group-hover:text-accent/60 transition-colors">
                    <FiStar size={11} />
                    <span>View Document</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
