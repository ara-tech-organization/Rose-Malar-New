import Reveal from './Reveal'
import './About.css'

const TIMELINE = [
  { year: '2008', label: 'Founded' },
  { year: '2018', label: 'New Chairmanship' },
  { year: 'Today', label: 'One-Stop Financial Services' },
]

export default function About() {
  return (
    <section className="section about">
      <div className="container about-grid">
        <Reveal className="about-main">
          <span className="section-eyebrow">About Us</span>
          <h2>Who We Are</h2>
          <p>
            Rose Malar Developmental Co-operative Society Limited (RMDCS) is a
            registered Multi-State Co-operative Society with the Ministry of
            Agriculture and Farmers Welfare, Government of India. It was
            founded by Late Shri R. Bhakther Solomon under the Multi-State
            Co-operative Societies Act, 2002, and established in 2008.
          </p>
          <p>
            RMDCS aims to be a one-stop financial services provider for its
            members, while promoting entrepreneurship, financial literacy,
            wealth creation and management, and livelihood development.
          </p>
          <blockquote className="about-vision">
            <p>
              &ldquo;Promotion of economic and social well-being of its members
              by way of self-help and mutual assistance.&rdquo;
            </p>
            <cite>Our Vision</cite>
          </blockquote>
        </Reveal>

        <Reveal className="about-aside">
          <div className="about-panel">
            <span className="about-panel-title">At a Glance</span>
            <ul className="about-timeline">
              {TIMELINE.map((item) => (
                <li key={item.year}>
                  <span className="about-timeline-year">{item.year}</span>
                  <span className="about-timeline-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
