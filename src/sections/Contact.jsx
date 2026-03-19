import { useScrollAnimate } from '../components/useScrollAnimate';
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';

const contacts = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'manikantasaimedidi@gmail.com',
    href: 'mailto:manikantasaimedidi@gmail.com',
    color: 'accent',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'manikantasai9963',
    href: 'https://github.com/manikantasai9963',
    color: 'accent',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'mani-9963m',
    href: 'https://linkedin.com/in/mani-9963m',
    color: 'accent2',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9059334859',
    href: 'tel:+919059334859',
    color: 'accent2',
  },
];

export default function Contact() {
  const ref = useScrollAnimate();

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent2/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          <div className="mb-16">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">06 / Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-paper">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-accent to-accent2" />
            <p className="text-paper/50 font-body mt-6 max-w-lg">
              Open to internship opportunities in Data Science and Data Engineering. Let's build something great together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="group border-gradient rounded-2xl p-6 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-accent2/10 text-accent2'
                } group-hover:scale-110 transition-transform`}>
                  <Icon size={18} />
                </div>
                <p className="font-mono text-xs text-paper/40 uppercase tracking-widest mb-1">{label}</p>
                <p className="font-body text-paper/80 text-sm group-hover:text-paper transition-colors break-all leading-tight">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-paper/20">
            © 2024 Manikanta Sai Medidi
          </p>
          <p className="font-mono text-xs text-paper/20">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
