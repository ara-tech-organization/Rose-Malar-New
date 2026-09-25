import Reveal from './Reveal'
import './JoinCta.css'

export default function JoinCta() {
  return (
    <section id="join" className="join-cta">
      <div className="container">
        <Reveal>
          <div className="join-cta-inner">
            <h2>Your Goals. Our Support. Our Shared Future.</h2>
            <p>
              Whether you are planning your savings, developing your
              livelihood, financing your education, starting a business or
              building your home, Rose Malar is committed to supporting its
              members.
            </p>
            <a href="#members" className="btn btn-primary">
              Become a Member
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
