import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './AboutTeaser.css'

const POINTS = [
  { title: 'Purpose', text: 'Self-help and mutual assistance for members.' },
  { title: 'Values', text: 'Trust, transparency and good governance.' },
  { title: 'Credibility', text: 'A Multi-State Co-operative Society, est. 2008.' },
  { title: 'Community', text: 'Growing with families across six regions.' },
]

export default function AboutTeaser() {
  return (
    <section id="who-we-are" className="section about-teaser">
      <div className="container about-teaser-grid">
        <Reveal>
          {/* Founder photo slot: swap the placeholder for an <img> */}
          <div className="founder-photo" role="img" aria-label="Founder photo to be added">
            <span>Founder photo</span>
          </div>
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
