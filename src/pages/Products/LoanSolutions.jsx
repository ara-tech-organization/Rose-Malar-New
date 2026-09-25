import Reveal from '../../components/Reveal'
import './LoanSolutions.css'

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral', 'teal', 'magenta']

const LOANS = [
  {
    title: 'Agriculture & Allied Loans',
    text: 'For eligible farming and allied activities including agricultural inputs, machinery, livestock and related requirements.',
  },
  {
    title: 'Business Loans',
    text: 'For members looking to start or expand their businesses.',
  },
  {
    title: 'Housing Loans',
    text: 'For eligible requirements related to purchasing, constructing or renovating residential properties.',
  },
  {
    title: 'Personal Loans',
    text: 'For eligible personal requirements including education, medical and marriage-related expenses.',
  },
  {
    title: 'Gold Loans',
    text: 'Loans against eligible gold ornaments for financial requirements.',
  },
  {
    title: 'Consumer Loans',
    text: 'For eligible consumer requirements including electronics, appliances and furniture.',
  },
]

export default function LoanSolutions() {
  return (
    <section id="loans" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Loan Solutions</span>
            <h2>Finance for Your Needs. Support for Your Goals.</h2>
            <p>Rose Malar offers a need-based range of loan products.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="loan-solutions-grid">
            {LOANS.map((loan, i) => (
              <div key={loan.title} className="loan-solutions-card">
                <span
                  className={`loan-solutions-dot loan-solutions-dot--${ACCENTS[i % ACCENTS.length]}`}
                  aria-hidden="true"
                />
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
