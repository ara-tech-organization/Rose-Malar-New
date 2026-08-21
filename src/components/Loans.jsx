import { useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const active = LOANS[activeIndex]
  const activeAccent = ACCENTS[activeIndex % ACCENTS.length]

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
          <div className="loan-showcase">
            <div className="loan-select-list">
              {LOANS.map((loan, i) => (
                <button
                  key={loan.name}
                  type="button"
                  className={`loan-select-item ${i === activeIndex ? 'loan-select-item--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className={`loan-select-code loan-select-code--${ACCENTS[i % ACCENTS.length]}`}>
                    {loan.code}
                  </span>
                  {loan.name}
                </button>
              ))}
            </div>

            <div className={`loan-detail loan-detail--${activeAccent}`}>
              <span className="loan-detail-code">{active.code}</span>
              <h3>{active.name}</h3>
              <p>{active.description}</p>
              <span className="loan-detail-note">Rates and eligibility — coming soon</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
