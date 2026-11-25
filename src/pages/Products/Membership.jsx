import Reveal from '../../components/Reveal'
import './Membership.css'

const STEPS = [
  {
    title: 'Check eligibility',
    accent: 'teal',
    items: [
      'Indian citizens.',
      'A firm, body corporate, trust, AOP, SHG / JLG or other person competent to contract under Section 11 of the Indian Contract Act.',
    ],
  },
  {
    title: 'Keep your documents ready',
    accent: 'magenta',
    items: [
      '3 recent passport-size photographs.',
      'Self-attested copy of Aadhaar Card / Passport / PAN Card / Voter ID / Ration Card.',
      'Any one address proof (compulsory).',
    ],
  },
  {
    title: 'Apply and pay',
    accent: 'indigo',
    items: [
      'Submit your application with KYC documents to the Board, at any one of our offices.',
      'Remit the admission fee and share amount with the application.',
      'Be introduced by an existing member.',
    ],
  },
]

const APPLICANTS = [
  { name: 'Individual', fee: '₹200', shares: '1 share', amount: '₹200', detail: '₹100 + ₹100 premium' },
  { name: 'SHG / JLG', fee: '₹200', shares: '5 shares', amount: '₹1,000', detail: '₹500 + ₹500 premium' },
  { name: 'Primary Facilitators', fee: '₹200', shares: '10 shares', amount: '₹2,000', detail: '₹1,000 + ₹1,000 premium' },
  { name: 'Firm, body corporate, trust & AOP', fee: '₹1,000', shares: '10 shares', amount: '₹2,000', detail: '₹1,000 + ₹1,000 premium' },
]

export default function Membership() {
  return (
    <Reveal>
      <div id="membership-info" className="membership-info">
        <h3 className="products-block-title">How to Become a Member</h3>

        <ol className="membership-steps">
          {STEPS.map((step, i) => (
            <li key={step.title} className={`membership-step membership-step--${step.accent}`}>
              <span className="membership-step-number" aria-hidden="true">
                {i + 1}
              </span>
              <h4>{step.title}</h4>
              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h3 className="products-block-title membership-fees-title">Admission Fee &amp; Shares</h3>
        <p className="membership-fees-intro">
          Each share is ₹100 with a ₹100 premium. A member can buy more than 10
          units with the approval of the Board.
        </p>

        <div className="membership-fees">
          {APPLICANTS.map((a) => (
            <div key={a.name} className="membership-fee-card">
              <h4>{a.name}</h4>
              <dl>
                <div>
                  <dt>Admission fee</dt>
                  <dd>{a.fee}</dd>
                </div>
                <div>
                  <dt>Minimum shares</dt>
                  <dd>{a.shares}</dd>
                </div>
              </dl>
              <div className="membership-fee-total">
                <span>Share amount</span>
                <strong>{a.amount}</strong>
                <small>{a.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
