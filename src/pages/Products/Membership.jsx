import Reveal from '../../components/Reveal'
import './Membership.css'

const ELIGIBILITY = [
  'Indian citizens.',
  'A firm, body corporate, trust, AOP, SHG / JLG or other person competent to enter into a contract under Section 11 of the Indian Contract Act.',
]

const DOCUMENTS = [
  'Recent passport-size photographs — 3 nos.',
  'Self-attested copy of Aadhaar Card / Passport / PAN Card / Voter ID / Ration Card.',
  'Any one address proof (compulsory).',
]

const FEES = [
  ['Individual, SHG / JLG and Primary Facilitators', '₹200'],
  ['Firm, body corporate, trust, AOP', '₹1,000'],
]

const SHARES = [
  ['Individual', '1 share', '₹100 + ₹100 premium = ₹200'],
  ['SHG / JLG', '5 shares', '₹500 + ₹500 premium = ₹1,000'],
  ['Primary Facilitators, firm, body corporate, trust & AOP', '10 shares', '₹1,000 + ₹1,000 premium = ₹2,000'],
]

function FeeTable({ caption, heads, rows }) {
  return (
    <div className="membership-table-wrap">
      <span className="membership-table-caption">{caption}</span>
      <div className="membership-table-scroll">
        <table className="membership-table">
          <thead>
            <tr>
              {heads.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={cell} className={i === row.length - 1 ? 'membership-table-value' : ''}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Membership() {
  return (
    <Reveal>
      <div id="membership-info" className="membership-info">
        <h3 className="products-block-title">Membership</h3>

        <div className="membership-info-grid">
          <div className="membership-info-card">
            <h4>Eligibility to become a member</h4>
            <ol>
              {ELIGIBILITY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="membership-info-card">
            <h4>Documents to submit</h4>
            <p>
              Apply at any one of our offices with the documents below as ID and
              address proof.
            </p>
            <ol type="i">
              {DOCUMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="membership-info-card">
            <h4>Application for membership</h4>
            <ol>
              <li>
                Submit a proper application with the required KYC documents to
                the Board of the Society.
              </li>
              <li>Remit the admission fee and share amount along with the application.</li>
            </ol>
            <p className="membership-info-note">
              An applicant has to be properly introduced by an existing member.
            </p>
          </div>
        </div>

        <div className="membership-tables">
          <FeeTable caption="Admission fee" heads={['Applicant', 'Fee']} rows={FEES} />
          <FeeTable
            caption="Subscription to shares · ₹100 per share + ₹100 premium"
            heads={['Applicant', 'Minimum', 'Amount']}
            rows={SHARES}
          />
        </div>

        <p className="membership-info-note">
          A member can purchase more than 10 units of shares with the approval of
          the Board.
        </p>
      </div>
    </Reveal>
  )
}
