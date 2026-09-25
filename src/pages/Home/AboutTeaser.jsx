import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './AboutTeaser.css'

export default function AboutTeaser() {
  return (
    <section id="who-we-are" className="section about-teaser">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Who We Are</span>
            <h2>A Cooperative Built Around People</h2>
            <p>
              Founded in 2008, Rose Malar Developmental Co-operative Society
              Limited was established with a vision of promoting self-help,
              mutual assistance and the economic and social well-being of its
              members.
            </p>
            <p>
              Over the years, Rose Malar has expanded its financial services,
              member outreach and development initiatives while continuing to
              strengthen its governance and community-focused approach.
            </p>
            <div className="about-teaser-cta">
              <Link to="/about" className="btn btn-outline btn-outline--dark">
                Learn More About Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
