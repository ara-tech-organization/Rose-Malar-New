import { Link } from 'react-router-dom'
import './Hero.css'

const HIGHLIGHTS = [
  { value: 'Savings · RD · FD', label: 'Deposit schemes', accent: 'teal' },
  { value: '4 Loan types', label: 'Micro, Jewel, Housing & more', accent: 'coral' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-eyebrow">Est. 2008 · Multi-State Co-operative Society</span>
          <h1>
            <span className="hero-highlight">Together We Grow.</span> Together
            We Prosper.
          </h1>
          <p className="hero-lead">
            <strong>
              Empowering Communities. Enriching Lives. Enhancing Growth.
            </strong>
          </p>
          <p className="hero-lead">
            Rose Malar Developmental Co-operative Society Limited is a
            Multi-State Co-operative Society committed to promoting the
            economic and social well-being of its members through self-help
            and mutual assistance.
          </p>
          <p className="hero-lead">
            Through savings, deposits, credit facilities, financial education,
            livelihood development and community initiatives, we work to
            create opportunities that help individuals, families and
            communities move towards a more secure and sustainable future.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Become a Member
            </Link>
            <Link to="/products" className="btn btn-outline btn-outline--dark">
              Explore Our Products
            </Link>
          </div>
        </div>

        <aside className="hero-card">
          <div className="hero-card-top">
            <span className="hero-card-label">Highest Fixed Deposit Rate</span>
            <span className="hero-card-value">
              12.50<small>% p.a.</small>
            </span>
          </div>

          <ul className="hero-card-list">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label}>
                <span className={`hero-card-dot hero-card-dot--${item.accent}`} aria-hidden="true" />
                <span>
                  <span className="hero-card-list-value">{item.value}</span>
                  <span className="hero-card-list-label">{item.label}</span>
                </span>
              </li>
            ))}
          </ul>

          <Link to="/products" className="hero-card-link">
            View all rates
          </Link>

          <p className="hero-card-note">
            The Annual Report describes RMDCS as a Multi-State Co-operative
            Society focused on economic and social well-being, financial
            services, entrepreneurship, financial literacy and sustainable
            livelihood development.
          </p>
        </aside>
      </div>
    </section>
  )
}
