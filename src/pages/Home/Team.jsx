import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import { BOARD } from '../../data/people'
import './Team.css'

// Drop the title and keep initials glued to the surname so names wrap cleanly.
const shortName = (name) =>
  name.replace(/^(Mrs\.|Mr\.|Ms\.)\s*/, '').replace(/^((?:[A-Z]\.)+)\s/, '$1 ')

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Leadership</span>
            <h2>Guided by People You Can Trust</h2>
          </div>
        </Reveal>

        <Reveal>
          <ul className="team-row">
            {BOARD.map((m) => (
              <li key={m.name} className="team-person">
                <img src={m.photo} alt={m.name} width="640" height="800" loading="lazy" decoding="async" />
                <strong>{shortName(m.name)}</strong>
                <span>{m.role}</span>
              </li>
            ))}
          </ul>
          <div className="team-cta">
            <Link to="/leadership" className="btn btn-outline btn-outline--dark">
              Know More
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
