import Reveal from './Reveal'
import './About.css'

const FACTS = [
  {
    tag: 'Registered Entity',
    title: 'Multi-State Co-operative Society',
    text: 'Registered with the Ministry of Agriculture and Farmers Welfare, Government of India.',
  },
  {
    tag: 'Est. 2008',
    title: 'Founded by Late Shri R. Bhakther Solomon',
    text: 'Established under the Multi-State Co-operative Societies Act, 2002.',
  },
  {
    tag: 'Since 2018',
    title: 'New Chairmanship',
    text: "Carrying forward the Society's mission under its current leadership.",
  },
  {
    tag: 'Our Mission',
    title: 'One-stop financial services',
    text: 'Promoting entrepreneurship, financial literacy, wealth creation and management, and livelihood development.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
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
            <div className="about-cta">
              <a href="#leadership" className="btn btn-outline btn-outline--dark">
                Learn More About Us
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-fact-grid">
            {FACTS.map((fact) => (
              <div key={fact.title} className="about-fact-card">
                <span className="about-fact-tag">{fact.tag}</span>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="about-vision">
            <span className="about-vision-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>
              Promotion of economic and social well-being of its members by
              way of self-help and mutual assistance.
            </p>
            <cite>Our Vision</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
