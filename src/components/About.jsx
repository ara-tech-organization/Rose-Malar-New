import Reveal from './Reveal'
import './About.css'

const TIMELINE = [
  {
    year: '2008',
    label: 'Founded',
  },
  {
    year: '2018',
    label: 'New Chairmanship',
  },
  {
    year: 'Today',
    label: 'One-Stop Financial Services',
  },
]

export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <Reveal>
          <div className="about-quote-lead">
            <span className="section-eyebrow">About Us</span>
            <blockquote>
              <p>
                &ldquo;Promotion of economic and social well-being of its
                members by way of self-help and mutual assistance.&rdquo;
              </p>
            </blockquote>
            <cite>Our Vision</cite>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-columns">
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
          </div>
        </Reveal>

        <Reveal>
          <div className="about-chip-row">
            {TIMELINE.map((item) => (
              <div key={item.year} className="about-chip">
                <span className="about-chip-year">{item.year}</span>
                <span className="about-chip-label">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
