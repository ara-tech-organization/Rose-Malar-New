import Reveal from './Reveal'
import './Loans.css'

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral']

const LOANS = [
  {
    code: 'ME',
    name: 'Micro & Enterprise Loan',
    description: 'Working capital and business loans to support member-run micro enterprises.',
  },
  {
    code: 'JL',
    name: 'Jewel Loan',
    description: 'Short-term loans secured against gold jewellery, for members needing quick funds.',
  },
  {
    code: 'HL',
    name: 'Housing Loan',
    description: 'Loans to help members build, extend, or improve a home.',
  },
  {
    code: 'OL',
    name: 'Other Loan',
    description: 'Additional loan products for member needs not covered above.',
  },
]

export default function Loans() {
  return (
    <section id="loans" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Loans</span>
            <h2>Loan products</h2>
            <p>Loan facilities available to RMDCS members.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="loan-grid">
            {LOANS.map((loan, i) => (
              <div key={loan.name} className={`loan-tile loan-tile--${ACCENTS[i % ACCENTS.length]}`}>
                <span className="loan-tile-code">{loan.code}</span>
                <h3>{loan.name}</h3>
                <p>{loan.description}</p>
                <span className="loan-tile-note">Rates and eligibility — coming soon</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
