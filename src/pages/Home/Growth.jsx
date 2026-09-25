import Reveal from './Reveal'
import './Growth.css'

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral', 'teal', 'magenta']

const STATS = [
  { value: '₹5.68 Cr', label: 'Share Capital' },
  { value: '₹49.21 Cr', label: 'Deposits' },
  { value: '₹63.09 Cr', label: 'Loan Portfolio Outstanding' },
  { value: '14,708', label: 'Borrowers' },
  { value: '₹207.44 Cr', label: 'Loans Disbursed' },
  { value: '39,392', label: 'Members Supported Through Loan Disbursements' },
]

export default function Growth() {
  return (
    <section id="growth" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Annual Performance</span>
            <h2>Our Growth at a Glance</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="growth-grid">
            {STATS.map((stat, i) => (
              <div key={stat.label} className={`growth-card growth-card--${ACCENTS[i]}`}>
                <span className="growth-value">{stat.value}</span>
                <span className="growth-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="growth-note">
            These figures represent FY 2025&ndash;26 / 31 March 2026 as
            reported in the Annual Report.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
