import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './Solutions.css'

const SOLUTIONS = [
  {
    code: 'SAVINGS',
    title: 'Savings Accounts',
    text: 'Safe and convenient savings solutions.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path d="M4 8.5h14.5a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18V8.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8.5 15.5 4.5l1 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="14" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'RD',
    title: 'Recurring Deposit',
    text: 'Build your savings systematically.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 10h17M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15.5a3 3 0 0 1 5.2-2M15 14.5a3 3 0 0 1-5.2 2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'FD',
    title: 'Fixed Deposit',
    text: 'Secure your money with attractive returns.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <rect x="5" y="10.5" width="14" height="9.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14v2.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'DEPOSITS',
    title: 'Deposit Schemes',
    text: 'Other deposit options for your goals.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 6.5v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 11.5v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
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
                <span className="solutions-card-icon">{item.icon}</span>
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
