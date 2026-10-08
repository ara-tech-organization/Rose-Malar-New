import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './JoinCta.css'

export default function JoinCta() {
  return (
    <section id="join" className="join-cta">
      <div className="container">
        <Reveal>
          <div className="join-cta-inner">
            <h2>Your Goals. Our Support. Our Shared Future.</h2>
            <Link to="/contact" className="btn btn-primary">
              Become a Member
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
