import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import prabala from '../../assets/people/prabala.jpg'
import './AboutTeaser.css'

const POINTS = [
  { title: 'Purpose', text: 'Self-help and mutual assistance for members.' },
  { title: 'Values', text: 'Trust, transparency and good governance.' },
  { title: 'Credibility', text: 'A Multi-State Co-operative Society, est. 2008.' },
  { title: 'Community', text: 'Growing with families across four states and two union territories.' },
]

export default function AboutTeaser() {
  return (
    <section id="who-we-are" className="section about-teaser">
      <div className="container about-teaser-grid">
        <Reveal>
          <figure className="founder-photo">
            <img
              src={prabala}
              alt="Mrs. Prabala Jabeegara Ross, Chairperson & CEO"
              width="640"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>Mrs. Prabala Jabeegara Ross</strong>
              <span>Chairperson &amp; CEO</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div>
            <span className="section-eyebrow">Who Are We?</span>
            <h2>A Cooperative Built Around People</h2>
            <ul className="about-points">
              {POINTS.map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-outline btn-outline--dark">
              Know More
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
