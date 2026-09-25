import Reveal from '../../components/Reveal'
import './SpecialisedLoans.css'

const SPECIALISED_LOANS = [
  {
    title: 'Jewel Pledge Loan',
    text: 'Secured lending against eligible gold ornaments for urgent financial requirements.',
    accent: 'magenta',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M7 4h10l3.5 5L12 21 3.5 9 7 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 9h17M9 4l-2 5 5 12 5-12-2-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Education Loan',
    text: 'Supporting higher education and eligible education-related expenses.',
    accent: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 11v4.5c0 1.4 2.46 2.5 5.5 2.5s5.5-1.1 5.5-2.5V11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M21.5 9v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Emergency Loan',
    text: 'Designed for urgent financial requirements arising from emergencies.',
    accent: 'coral',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M12 3.5 3 20.5h18L12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 9.5v4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Loan Against Property',
    text: 'Finance against eligible property collateral for larger financial requirements.',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Green Finance — E-Auto Vehicle',
    text: 'An initiative for electric three-wheeler financing in Tamil Nadu and Puducherry.',
    accent: 'magenta',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M12 3c3 3 5 6.2 5 9a5 5 0 1 1-10 0c0-2.8 2-6 5-9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 21v-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function SpecialisedLoans() {
  return (
    <section className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Specialised Loan Solutions</span>
            <h2>Tailored credit for specific needs</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="specialised-loans-grid">
            {SPECIALISED_LOANS.map((loan) => (
              <div key={loan.title} className="specialised-loan-card">
                <span className={`specialised-loan-icon specialised-loan-icon--${loan.accent}`}>
                  {loan.icon}
                </span>
                <h4>{loan.title}</h4>
                <p>{loan.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
