import Reveal from './Reveal'
import './Solutions.css'

const SOLUTIONS = [
  {
    code: 'SB',
    title: 'Savings',
    text: 'Build financial security through accessible savings solutions.',
  },
  {
    code: 'RD',
    title: 'Recurring Deposit',
    text: 'Save regularly and develop disciplined financial habits.',
  },
  {
    code: 'FD',
    title: 'Fixed Deposit',
    text: 'Plan your savings with fixed-tenure deposit options.',
  },
  {
    code: 'LN',
    title: 'Loans',
    text: 'Access financial support for agriculture, business, education, housing and other eligible needs.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Offerings</span>
            <h2>Financial Solutions Designed Around Your Needs</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="solutions-grid">
            {SOLUTIONS.map((item) => (
              <div key={item.code} className="solutions-card">
                <span className="solutions-card-code">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="solutions-cta">
            <a href="#products" className="btn btn-primary">
              Explore Products &amp; Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
