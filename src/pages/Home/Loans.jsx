import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './Loans.css'

// Category split is provisional until the client confirms it.
const GROUPS = [
  {
    title: 'Secured Loans',
    accent: 'magenta',
    items: ['Jewel Loans', 'Housing Loans', 'Other Secured Loans'],
  },
  {
    title: 'Unsecured / Micro Loans',
    accent: 'teal',
    items: ['Micro Loans', 'Other applicable loan products'],
  },
]

export default function Loans() {
  return (
    <section id="loans" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Loans</span>
            <h2>Financial Support for Personal and Community Needs</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="loans-grid">
            {GROUPS.map((g) => (
              <div key={g.title} className={`loans-card loans-card--${g.accent}`}>
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="loans-cta">
            <Link to="/contact" className="btn btn-primary">
              Apply for a Loan
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
