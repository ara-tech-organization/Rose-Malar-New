import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-visual">
        <span className="hero-visual-value">12.50%</span>
        <span className="hero-visual-label">Highest Fixed Deposit rate p.a.</span>

        <div className="hero-visual-facts">
          <div>
            <strong>Savings · RD · FD</strong>
            <span>Deposit schemes</span>
          </div>
          <div>
            <strong>4 Loan types</strong>
            <span>Micro, Jewel, Housing &amp; more</span>
          </div>
        </div>
      </div>

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
    </section>
  )
}
