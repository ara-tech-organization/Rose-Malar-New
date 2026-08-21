import './Hero.css'

const HIGHLIGHTS = [
  { value: 'Savings · RD · FD', label: 'Deposit schemes' },
  { value: '4 Loan types', label: 'Micro, Jewel, Housing & more' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
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
            <a href="#products" className="btn btn-outline btn-outline--dark">
              Explore Deposit Schemes
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <span className="hero-card-label">Highest Fixed Deposit Rate</span>
          <span className="hero-card-value">
            12.50<small>% p.a.</small>
          </span>

          <ul className="hero-card-list">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label}>
                <span className="hero-card-list-value">{item.value}</span>
                <span className="hero-card-list-label">{item.label}</span>
              </li>
            ))}
          </ul>

          <a href="#products" className="hero-card-link">
            View all rates
          </a>
        </aside>
      </div>
    </section>
  )
}
