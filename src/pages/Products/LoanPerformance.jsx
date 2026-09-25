import Reveal from '../../components/Reveal'
import './LoanPerformance.css'

const STATS = [
  {
    value: '₹63.09 Cr',
    label: 'Loan Outstanding',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M4 18.5 9.5 13l4 4 6.5-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 9h4v4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '14,708',
    label: 'Borrowers',
    accent: 'magenta',
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
    value: '18%',
    label: 'Portfolio Growth in FY 2025–26',
    accent: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M4 15.5 9.5 10l3.5 3.5 7-7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14.5 6h5.5v5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '₹207.44 Cr',
    label: 'Cumulative Loans Disbursed',
    accent: 'coral',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <rect x="3" y="6.5" width="18" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    value: '39,392',
    label: 'Members Supported',
    accent: 'teal',
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

export default function LoanPerformance() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Loan Performance</span>
            <h2>Growing with our members</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="loan-performance-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className={`loan-performance-card loan-performance-card--${stat.accent}`}>
                <span className="loan-performance-icon">{stat.icon}</span>
                <span className="loan-performance-value">{stat.value}</span>
                <span className="loan-performance-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
