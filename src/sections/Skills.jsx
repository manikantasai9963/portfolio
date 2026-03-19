import { useScrollAnimate } from '../components/useScrollAnimate';

const skillCategories = [
  {
    label: 'Programming',
    emoji: '⌨️',
    color: 'accent',
    skills: ['Python', 'C', 'Java', 'SQL'],
  },
  {
    label: 'Core CS',
    emoji: '🧠',
    color: 'accent2',
    skills: ['DSA', 'OOPS', 'OS', 'DBMS', 'CN'],
  },
  {
    label: 'Technologies',
    emoji: '🛠️',
    color: 'accent',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Linux', 'Tableau', 'Power BI', 'Excel'],
  },
  {
    label: 'Cloud',
    emoji: '☁️',
    color: 'accent2',
    skills: ['AWS S3'],
  },
  {
    label: 'Tools',
    emoji: '🔧',
    color: 'accent',
    skills: ['SQLAlchemy', 'Git', 'Jupyter Notebook'],
  },
  {
    label: 'Soft Skills',
    emoji: '💡',
    color: 'accent2',
    skills: ['Problem Solving', 'Leadership', 'Teamwork', 'Analytical Thinking', 'Time Management'],
  },
];

export default function Skills() {
  const ref = useScrollAnimate();

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent2/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          {/* Section Header */}
          <div className="mb-16">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">02 / Skills</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-paper">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-accent to-accent2" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.label}
                className="group border-gradient rounded-2xl p-6 hover:bg-white/[0.02] transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="font-display font-bold text-paper text-sm tracking-wide uppercase">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                        cat.color === 'accent'
                          ? 'border-accent/20 text-accent/80 bg-accent/5 group-hover:border-accent/40 group-hover:text-accent'
                          : 'border-accent2/20 text-accent2/80 bg-accent2/5 group-hover:border-accent2/40 group-hover:text-accent2'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
