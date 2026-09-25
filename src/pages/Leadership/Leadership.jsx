import Reveal from '../../components/Reveal'
import './Leadership.css'

const BOARD = [
  { name: 'Mrs. Prabala Jabeegara Ross', role: 'Chairperson & CEO', chair: true },
  { name: 'Mr. S. Chithambarathanu Pillai', role: 'Director' },
  { name: 'Mr. Ramachandhra Rajulu', role: 'Director' },
  { name: 'Mr. K. Sivaraj', role: 'Director' },
  { name: 'Mr. N. Vidyadharan', role: 'Director' },
  { name: 'Ms. C. Allipuspham', role: 'Director' },
  { name: 'Ms. A.O. Fathimabee', role: 'Director' },
]

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral']

const COMMITTEES = [
  {
    title: 'Audit Committee',
    text: 'Supporting financial oversight and accountability.',
    accent: 'teal',
    icon: (
      <>
        <path d="M6 3.5h9l4.5 4.5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12.5l2 2 4-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Admission & Share Committee',
    text: 'Supporting member admission and share-related matters.',
    accent: 'magenta',
    icon: (
      <>
        <circle cx="9" cy="8.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 20c.6-3.4 2.8-5.5 5.5-5.5s4.9 2.1 5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 4.5l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Legal & Compliance Committee',
    text: 'Supporting legal and compliance matters.',
    accent: 'indigo',
    icon: (
      <>
        <path d="M12 3.5v17M7 6.5h10M4 9.5l3-3 3 3M17 9.5l3-3 3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 9.5c0 2-1.2 3.5-3 3.5s0 0 0 0M20 9.5c0 2 1.2 3.5 3 3.5s0 0 0 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Customer & Grievance Committee',
    text: 'Supporting member/customer concerns and grievance management.',
    accent: 'coral',
    icon: (
      <>
        <path
          d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8.5 9.5h7M8.5 12.5h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Credit Committee',
    text: 'Supporting credit-related oversight.',
    accent: 'teal',
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 14.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
]

const PRIORITIES = [
  {
    title: 'Member Development',
    text: 'Promoting the overall development of members, particularly in Kerala, Karnataka and Andhra Pradesh.',
  },
  {
    title: 'Beyond Financial Services',
    text: 'Expanding activities that improve the social and economic conditions of members and communities.',
  },
  {
    title: 'Environmental Responsibility',
    text: 'Maintaining environmental and ecological consciousness across operations.',
  },
  {
    title: 'Housing & Community Infrastructure',
    text: 'Addressing water, sanitation, micro and farm housing requirements.',
  },
  {
    title: 'Collective Economic Activities',
    text: 'Promoting value addition, production, procurement, processing, storage, packaging, branding and marketing.',
  },
  {
    title: 'Asset Creation',
    text: 'Supporting livestock, warehousing, markets, shopping, recreation and housing.',
  },
  {
    title: 'Product Diversification',
    text: 'Introducing and expanding initiatives such as Jewel Loan and Green Finance.',
  },
  {
    title: 'Expansion',
    text: 'The Annual Report states a target of opening 10 new Jewel Loan branches at selected centres during FY 2026–27.',
  },
]

function initials(name) {
  return name
    .replace(/^(Mrs\.|Mr\.|Ms\.)\s*/, '')
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}

export default function Leadership() {
  return (
    <>
      <section id="leadership" className="section section--surface gov-hero">
        <div className="container">
          <Reveal>
            <div className="section-header section-header--center">
              <span className="section-eyebrow">Governance &amp; Leadership</span>
              <h2>Responsible Governance. Transparent Practices.</h2>
              <p>
                Corporate governance is central to Rose Malar&rsquo;s
                commitment to transparency, accountability and ethical
                business practices.
              </p>
              <p>
                The Society&rsquo;s governance framework supports strategic
                oversight, risk management, regulatory compliance,
                performance evaluation and stakeholder communication.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">Board of Directors</span>
              <h2>Leadership Guiding Sustainable Growth</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="board-grid">
              {BOARD.map((member) => (
                <div key={member.name} className={`board-card ${member.chair ? 'board-card--chair' : ''}`}>
                  <div className="board-card-avatar">{initials(member.name)}</div>
                  <h3>{member.name}</h3>
                  <span className="board-card-role">{member.role}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="advisory-split">
            <Reveal>
              <div className="advisory-copy">
                <span className="section-eyebrow">Advisory Group</span>
                <h2>Experience Supporting Better Decisions</h2>
                <p>
                  The Advisory Group provides expert guidance, strategic
                  input and specialised knowledge across key functional
                  areas.
                </p>
                <p>
                  Its role includes supporting management in evaluating
                  opportunities, addressing challenges, improving
                  operational effectiveness and strengthening
                  decision-making.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="advisory-visual" aria-hidden="true">
                <span className="advisory-visual-avatar" />
                <span className="advisory-visual-avatar" />
                <span className="advisory-visual-avatar" />
                <span className="advisory-visual-note">Advisor photographs &amp; names</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-eyebrow">Committees</span>
              <h2>Focused Oversight Across Key Functions</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="committee-list">
              {COMMITTEES.map((committee) => (
                <div key={committee.title} className="committee-row">
                  <span className={`committee-icon committee-icon--${committee.accent}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24">{committee.icon}</svg>
                  </span>
                  <div className="committee-body">
                    <h3>{committee.title}</h3>
                    <p>{committee.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="committee-note">These committees are documented in the Annual Report.</p>
          </Reveal>
        </div>
      </section>

      <section className="people-band">
        <div className="container">
          <Reveal>
            <div className="people-band-inner">
              <span className="section-eyebrow">Our People</span>
              <h2>Our Human Capital</h2>
              <p>
                Our experienced staff team combines financial-sector
                knowledge with strong customer engagement and grassroots-level
                understanding.
              </p>
              <p>
                Senior management brings together experienced professionals
                and young talent working toward the growth of the Society
                and the well-being of its beneficiaries.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Reveal>
            <div className="section-header section-header--center">
              <span className="section-eyebrow">Looking Ahead</span>
              <h2>Building the Next Chapter of Cooperative Growth</h2>
              <p>
                Rose Malar will continue to focus on membership
                development, reaching underserved areas and advancing
                socio-economic community development.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="priority-grid">
              {PRIORITIES.map((priority, i) => (
                <div key={priority.title} className="priority-card">
                  <span
                    className={`priority-dot priority-dot--${ACCENTS[i % ACCENTS.length]}`}
                    aria-hidden="true"
                  />
                  <h4>{priority.title}</h4>
                  <p>{priority.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
