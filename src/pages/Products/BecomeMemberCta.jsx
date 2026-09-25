import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './BecomeMemberCta.css'

export default function BecomeMemberCta() {
  return (
    <section className="member-cta">
      <div className="container">
        <Reveal>
          <div className="member-cta-inner">
            <span className="section-eyebrow">Become a Member</span>
            <h2>Ready to Take the Next Step?</h2>
            <p>
              Become part of a cooperative community focused on savings,
              financial access, livelihood development and shared growth.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Become a Member
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
