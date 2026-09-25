import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './Regions.css'

const STATES = [
  'Tamil Nadu',
  'Puducherry',
  'Kerala',
  'Karnataka',
  'Andhra Pradesh',
  'Andaman & Nicobar Islands',
]

export default function Regions() {
  return (
    <section id="regions" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Reach</span>
            <h2>Growing Across Communities</h2>
            <p>Rose Malar continues to expand its presence across:</p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="region-list">
            {STATES.map((state) => (
              <li key={state} className="region-chip">
                {state}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="region-note">
            The Society&rsquo;s Annual Report records member presence across
            these regions and notes continued efforts to expand outreach.
          </p>
        </Reveal>

        <Reveal>
          <div className="region-cta">
            <Link to="/contact" className="btn btn-primary">
              Find Us / Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
