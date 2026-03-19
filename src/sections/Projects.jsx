import { useScrollAnimate } from '../components/useScrollAnimate';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    num: '01',
    title: 'IPL Data Engineering ETL Pipeline',
    description: 'Designed an end-to-end ETL pipeline with data cleaning, transformation, and dashboard visualization. Built robust data flows from raw IPL data to actionable insights.',
    tech: ['Python', 'Pandas', 'PostgreSQL', 'SQLAlchemy', 'Power BI'],
    github: 'https://github.com/manikantasai9963/IPL-data-engineering-pipeline',
  },
  {
    num: '02',
    title: 'IPL Analytics Dashboard',
    description: 'Interactive dashboard showcasing IPL stats, team performance, and player insights. Transforms raw cricket data into compelling visual narratives.',
    tech: ['Python', 'Power BI'],
    github: 'https://github.com/manikantasai9963/IPL-analytics-dashboard',
  },
];

export default function Projects() {
  const ref = useScrollAnimate();

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          {/* Section Header */}
          <div className="mb-16">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">03 / Projects</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-paper">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-accent to-accent2" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.num}
                className="group relative border-gradient rounded-2xl p-8 hover:bg-white/[0.02] transition-all duration-300 flex flex-col"
              >
                {/* Number watermark */}
                <span className="absolute top-6 right-8 font-display font-bold text-6xl text-paper/[0.03] select-none">
                  {project.num}
                </span>

                {/* Top line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-accent2 mb-6 group-hover:w-16 transition-all duration-300" />

                <h3 className="font-display font-bold text-xl text-paper mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-paper/50 font-body text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="font-mono text-xs text-paper/40 border border-border rounded px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-display font-medium text-sm hover:gap-3 transition-all duration-200 group/btn"
                >
                  <FiGithub size={15} />
                  View Project
                  <FiExternalLink size={13} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
