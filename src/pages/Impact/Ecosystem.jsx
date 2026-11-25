import Reveal from '../../components/Reveal'
import './Ecosystem.css'

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral']

const PARTNERS = [
  { label: 'Financial Support', items: ['BWDA', 'SBI', 'Indian Bank', 'IDBI', 'IOB'] },
  { label: 'Grading', items: ['Infomerics'] },
  { label: 'Statutory Auditor', items: ['A. John Moris & Co, Chartered Accountants'] },
  { label: 'Software Service Provider', items: ['Jayam Solutions Private Limited'] },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Partners</span>
            <h2>A Wider Ecosystem</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="ecosystem-grid">
            {PARTNERS.map((group, i) => (
              <div key={group.label} className={`ecosystem-card ecosystem-card--${ACCENTS[i % ACCENTS.length]}`}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
