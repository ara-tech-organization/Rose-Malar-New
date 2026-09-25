import Reveal from '../../components/Reveal'
import './OurReach.css'

const ACCENTS = ['blue', 'teal', 'magenta', 'indigo', 'coral', 'blue']

const REGIONS = [
  { state: 'Tamil Nadu', members: 72687 },
  { state: 'Kerala', members: 5258 },
  { state: 'Puducherry', members: 4382 },
  { state: 'Andaman & Nicobar', members: 2032 },
  { state: 'Karnataka', members: 1182 },
  { state: 'Andhra Pradesh', members: 3 },
]

const MAX_MEMBERS = Math.max(...REGIONS.map((r) => r.members))
const TOTAL_MEMBERS = REGIONS.reduce((sum, r) => sum + r.members, 0)

export default function OurReach() {
  return (
    <section id="our-reach" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Reach</span>
            <h2>Growing Across Regions</h2>
            <p>{TOTAL_MEMBERS.toLocaleString('en-IN')} members across six states and union territories.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="reach-bars">
            {REGIONS.map((region, i) => (
              <div key={region.state} className="reach-bar-row">
                <span className="reach-bar-label">{region.state}</span>
                <div className="reach-bar-track">
                  <div
                    className={`reach-bar-fill reach-bar-fill--${ACCENTS[i % ACCENTS.length]}`}
                    style={{ width: `${Math.max((region.members / MAX_MEMBERS) * 100, 3)}%` }}
                  />
                </div>
                <span className="reach-bar-value">{region.members.toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="placeholder-note">
            An interactive map view of member reach by region can be added
            here once map data / a mapping library is approved for the
            project.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
