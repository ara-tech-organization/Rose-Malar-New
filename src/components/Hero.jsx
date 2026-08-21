import logo from '../assets/Logo.png'
import './Hero.css'

const STATS = [
  {
    value: 'Up to 12.50%',
    label: 'Highest Fixed Deposit rate p.a.',
    accent: 'blue',
  },
  {
    value: 'Savings · RD · FD',
    label: 'Deposit schemes on offer',
    accent: 'teal',
  },
  {
    value: '4 Loan types',
    label: 'Micro, Jewel, Housing & more',
    accent: 'coral',
  },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="hero-blob hero-blob--teal" aria-hidden="true" />
      <span className="hero-blob hero-blob--magenta" aria-hidden="true" />
      <span className="hero-blob hero-blob--coral" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-eyebrow">Est. 2008 · Multi-State Co-operative Society</span>
          <h1>
            <span className="hero-highlight">Rose Malar</span> Developmental
            Co&#8209;operative Society Limited
          </h1>
          <p className="hero-lead">
            A registered Multi-State Co-operative Society helping members build
            financial security through savings, deposits, and loans — rooted in
            self-help and mutual assistance.
          </p>
          <div className="hero-actions">
            <a href="#members" className="btn btn-primary">
              Become a Member
            </a>
            <a href="#products" className="btn btn-outline">
              Explore Deposit Schemes
            </a>
          </div>
        </div>

        <div className="hero-stat-stack">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`hero-stat-card hero-stat-card--${stat.accent} hero-stat-card--${i}`}>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
          <img src={logo} alt="RMDCS logo" className="hero-stat-logo" />
        </div>
      </div>
    </section>
  )
}
