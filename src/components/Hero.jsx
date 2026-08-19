import './Hero.css'

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
            <a href="#products" className="btn btn-outline">
              Explore Deposit Schemes
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <span>Image to be added</span>
          </div>
        </div>
      </div>

      <div className="container hero-strip">
        <div className="hero-stat">
          <span className="hero-stat-value">Up to 12.50%</span>
          <span className="hero-stat-label">Highest FD rate p.a.</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-value">Savings · RD · FD</span>
          <span className="hero-stat-label">Deposit schemes on offer</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-value">4 Loan types</span>
          <span className="hero-stat-label">Micro, Jewel, Housing &amp; more</span>
        </div>
      </div>
    </section>
  )
}
