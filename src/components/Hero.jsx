import './Hero.css'

const STATS = [
  { value: 'Up to 12.50%', label: 'Highest FD rate p.a.' },
  { value: 'Savings · RD · FD', label: 'Deposit schemes' },
  { value: '4 Loan types', label: 'Micro, Jewel, Housing & more' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <span className="hero-blob hero-blob--teal" aria-hidden="true" />
      <span className="hero-blob hero-blob--magenta" aria-hidden="true" />
      <span className="hero-blob hero-blob--coral" aria-hidden="true" />

      <div className="container hero-center">
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

        <div className="hero-pill-row">
          {STATS.map((stat) => (
            <div key={stat.label} className="hero-pill">
              <span className="hero-pill-value">{stat.value}</span>
              <span className="hero-pill-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
