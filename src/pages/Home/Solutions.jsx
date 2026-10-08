import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './Solutions.css'

const SOLUTIONS = [
  { code: 'SAVINGS', title: 'Savings Accounts', text: 'Safe and convenient savings solutions.' },
  { code: 'RD', title: 'Recurring Deposit', text: 'Build your savings systematically.' },
  { code: 'FD', title: 'Fixed Deposit', text: 'Secure your money with attractive returns.' },
  { code: 'DEPOSITS', title: 'Deposit Schemes', text: 'Other deposit options for your goals.' },
]

export default function Solutions() {
  return (
    <section id="solutions" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Products</span>
            <h2>Simple Ways to Save and Grow</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="solutions-grid">
            {SOLUTIONS.map((item) => (
              <Link key={item.code} to="/products" className="solutions-card">
                <span className="solutions-card-code">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="solutions-card-more">Know More &rarr;</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
