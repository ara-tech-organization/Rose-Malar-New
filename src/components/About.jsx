import Reveal from './Reveal'
import './About.css'

const TIMELINE = [
  {
    year: '2008',
    label: 'Founded',
    text: 'RMDCS is established as a Multi-State Co-operative Society under the Multi-State Co-operative Societies Act, 2002.',
  },
  {
    year: '2018',
    label: 'New Chairmanship',
    text: 'RMDCS begins functioning under the Chairmanship of Mrs. Prabala Jabeegara Ross.',
  },
  {
    year: 'Today',
    label: 'One-Stop Financial Services',
    text: 'Serving members with savings, deposits, and loans rooted in self-help and mutual assistance.',
  },
]

export default function About() {
  return (
    <section className="section about">
      <Reveal>
        <div className="container about-intro">
          <span className="section-eyebrow">About Us</span>
          <h2>Who we are</h2>
          <p>
            Rose Malar Developmental Co-operative Society Limited (RMDCS) is a
            registered Multi-State Co-operative Society with the Ministry of
            Agriculture and Farmers Welfare, Government of India. It was founded
            by Late Shri R. Bhakther Solomon under the Multi-State Co-operative
            Societies Act, 2002, and established in 2008.
          </p>
          <p>
            RMDCS aims to be a one-stop financial services provider for its
            members, while promoting entrepreneurship, financial literacy,
            wealth creation and management, and livelihood development.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="about-quote-stripe">
          <div className="container">
            <span className="pullquote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              <p>
                Promotion of economic and social well-being of its members by
                way of self-help and mutual assistance.
              </p>
            </blockquote>
            <cite>Our Vision</cite>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="container">
          <div className="about-roadmap">
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="about-step">
                <div className="about-step-node">
                  <span className="about-step-dot">{i + 1}</span>
                </div>
                <span className="about-step-year">{item.year}</span>
                <span className="about-step-label">{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
