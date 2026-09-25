import Reveal from '../../components/Reveal'
import './OurGroups.css'

const ACCENTS = ['blue', 'teal', 'magenta', 'indigo', 'coral', 'blue', 'teal']

const GROUPS = [
  { name: 'Rosemalar' },
  { name: 'BHSR – Courtallam' },
  { name: 'Royal Court – Marriage Hall' },
  { name: 'Nursing College' },
  { name: 'BWDA Arts & Science College' },
  { name: 'BWDA Mercantile' },
  { name: 'BWDA Finance' },
]

export default function OurGroups() {
  return (
    <section id="our-groups" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Groups</span>
            <h2>A Wider Ecosystem of Institutions</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="group-grid">
            {GROUPS.map((group, i) => (
              <div key={group.name} className="group-card">
                <span
                  className={`group-logo group-logo--${ACCENTS[i % ACCENTS.length]}`}
                  aria-hidden="true"
                >
                  {group.name.charAt(0)}
                </span>
                <h3>{group.name}</h3>
                <p className="group-card-desc">Description to be provided by the client.</p>
                <span className="group-card-link" aria-disabled="true">
                  Visit / Explore →
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="placeholder-note">
            Group logos, approved descriptions and links will be added once
            provided by the client.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
