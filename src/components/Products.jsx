import { useState } from 'react'
import Reveal from './Reveal'
import RateTable from './RateTable'
import './Products.css'

const RATE_COLUMNS = [
  'Period',
  'General (Individual)',
  'Senior Citizens / Widows / Differently Abled / Primary Facilitators',
  'SHG / JLG / Others',
]

const RD_RATES = [
  ['1 Year', '8.50%', '9.00%', '8.50%'],
  ['2 Years', '9.00%', '9.50%', '9.00%'],
  ['3 Years', '9.50%', '10.00%', '9.50%'],
  ['4 Years', '10.00%', '10.50%', '10.00%'],
  ['5 Years', '10.50%', '11.00%', '10.50%'],
]

const FD_RATES = [
  ['1 Year', '9.50%', '10.00%', '9.50%'],
  ['2 Years', '10.00%', '10.50%', '10.00%'],
  ['3 Years', '11.00%', '11.50%', '10.50%'],
  ['4 Years & Above', '12.00%', '12.50%', '11.00%'],
]

const SCHEMES = [
  {
    id: 'rd',
    code: 'RD',
    tabLabel: 'Recurring Deposit',
    title: 'Recurring Deposit (RD)',
    intro:
      'Recurring Deposit accounts may be opened by members of the Society. The minimum period is 12 months and the maximum is 60 months. Accounts can be opened with a minimum monthly installment of ₹200, in multiples of ₹100 thereafter, up to a maximum of ₹20,000 per month.',
    terms: [
      'Additional interest of 0.50% is payable for Senior Citizens, Widows, Physically Challenged members, and Primary Facilitators.',
      'SHG / JLG / Others receive 0.5% less than the General rate.',
      'Interest is calculated quarterly and paid at the time of maturity. Nomination facility is available.',
      'Premature closure: no interest before 6 months; the Savings Deposit rate applies between 6 and 12 months; after 1 year, interest is 1% below the applicable rate for the period the deposit has run.',
      'Applicable TDS will be deducted as per Income Tax rules. A delayed payment charge of ₹1.20 per ₹100 per month applies to late installments (part of a month counts as a full month).',
      'KYC required: Aadhaar Card, PAN Card, Ration Card, Voter ID, and photographs.',
    ],
    rates: RD_RATES,
  },
  {
    id: 'sb',
    code: 'SB',
    tabLabel: 'Savings Deposit',
    title: 'Savings Deposit',
    intro:
      'A Savings Deposit account can be opened by submitting the application form together with the required KYC documents — Aadhaar Card, Passport, PAN Card, or Voter ID, along with a Ration Card (any two of these are compulsory).',
    terms: [
      'Minimum initial deposit and minimum balance: ₹500 for Individuals / Senior Citizens / Widows / Physically Challenged; ₹1,000 for SHGs, JLGs and Primary Facilitators; ₹2,000 for Firms, AOPs, Co-operative Societies, Trusts, Companies, and HUFs.',
      'Interest: 7.00% for Individuals (General) / SHG / JLG / Others under 60 years of age; 7.50% for Senior Citizens, Widows, Physically Challenged members, and Primary Facilitators. Credited quarterly (June, September, December, March).',
      'Withdrawals require the passbook; third-party withdrawals need an authorization letter.',
      'An account becomes Dormant after 12 months of inactivity, and Inoperative after a further 12 months — reactivation requires fresh KYC documents.',
      'A Savings Deposit can be opened for a minor of any age through a guardian; minors above 10 years may operate an account independently.',
      'Charges: ₹100 for a duplicate passbook, ₹100 annual service charge, ₹200 account closing charge. Overdrawing is not permitted.',
    ],
    rates: null,
  },
  {
    id: 'fd',
    code: 'FD',
    tabLabel: 'Fixed Deposit',
    title: 'Fixed Deposit (FD)',
    intro:
      'Fixed Deposits are accepted from members of the Society. The minimum period of deposit is 1 year and the maximum is 10 years. Minimum deposit amount is ₹25,000, in multiples of ₹1,000 thereafter, up to a maximum of ₹50,00,000.',
    terms: [
      'Additional interest of 0.50% is payable for Senior Citizens, Widows, Physically Challenged members, and Primary Facilitators. SHG / JLG / Others receive 0.5% less than the General rate.',
      'A loan against the deposit is available up to 80% of the deposit amount, at 2% per annum above the interest payable on the deposit.',
      'Premature closure: 5.5% p.a. if closed before 6 months; 6.5% p.a. if closed between 6 and 12 months; after 12 months, 1% below the applicable rate for the period the deposit has run.',
      'Special rate: deposits of ₹20,00,000 and above, with a tenure of 3 years or more, earn 0.25% above the normal rate.',
      'TDS applies where annual interest exceeds ₹20,000 for general members or ₹50,000 for Senior Citizens.',
    ],
    rates: FD_RATES,
  },
]

export default function Products() {
  const [activeId, setActiveId] = useState(SCHEMES[0].id)
  const active = SCHEMES.find((scheme) => scheme.id === activeId)

  return (
    <section id="products" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-eyebrow">Products</span>
            <h2>Deposit schemes</h2>
            <p>
              RMDCS offers deposit schemes for members across every stage of saving —
              from a fixed monthly commitment to a lump-sum term deposit.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="product-tabs" role="tablist" aria-label="Deposit schemes">
            {SCHEMES.map((scheme) => (
              <button
                key={scheme.id}
                type="button"
                role="tab"
                aria-selected={scheme.id === activeId}
                className={`product-tab ${scheme.id === activeId ? 'product-tab--active' : ''}`}
                onClick={() => setActiveId(scheme.id)}
              >
                <span className="product-tab-code">{scheme.code}</span>
                {scheme.tabLabel}
              </button>
            ))}
          </div>

          <article className={`product-panel ${active.rates ? 'product-panel--split' : ''}`}>
            <div className="product-copy">
              <h3>{active.title}</h3>
              <p>{active.intro}</p>
              <ul className="product-terms">
                {active.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
            </div>
            {active.rates && <RateTable columns={RATE_COLUMNS} rows={active.rates} />}
          </article>
        </Reveal>

        <Reveal>
          <div className="placeholder-note cumulative-note">
            Cumulative Deposit — full scheme terms will be published here once
            confirmed.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
