import Reveal from '../../components/Reveal'
import './Growth.css'

const STATS = [
  {
    value: '₹5.68 Cr',
    label: 'Share Capital',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5v9M9.5 9.8c0-1.3 1.1-2.1 2.5-2.1s2.5.8 2.5 2c0 2.6-5 1.2-5 3.8 0 1.2 1.1 2 2.5 2s2.5-.8 2.5-2.1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: '₹49.21 Cr',
    label: 'Deposits',
    accent: 'magenta',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path d="M3.5 10 12 4.5 20.5 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 10v9h15v-9M9 19v-5h6v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '₹63.09 Cr',
    label: 'Loan Portfolio Outstanding',
    accent: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path d="M4 15.5 9.5 10l3.5 3.5 7-7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 6h5.5v5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '14,708',
    label: 'Borrowers',
    accent: 'coral',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <circle cx="9" cy="8.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 19c.8-3.2 3-5 5.5-5s4.7 1.8 5.5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16.5" cy="9.5" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15.5 14.2c2.1.3 3.6 1.9 4.2 4.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: '₹207.44 Cr',
    label: 'Loans Disbursed',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <rect x="3" y="6.5" width="18" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    value: '39,392',
    label: 'Members Supported Through Loan Disbursements',
    accent: 'magenta',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M12 20.5s-7-4.4-9-8.6C1.5 8.4 3.7 5 7.2 5c1.9 0 3.4 1 4.8 2.6C13.4 6 14.9 5 16.8 5c3.5 0 5.7 3.4 4.2 6.9-2 4.2-9 8.6-9 8.6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
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
            {STATS.map((stat) => (
              <div key={stat.label} className={`growth-card growth-card--${stat.accent}`}>
                <span className="growth-icon">{stat.icon}</span>
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
