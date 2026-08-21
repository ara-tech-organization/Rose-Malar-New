import Reveal from './Reveal'
import './About.css'

const TIMELINE = [
  {
    year: '2008',
    label: 'Founded',
    text: 'RMDCS is established as a Multi-State Co-operative Society under the Multi-State Co-operative Societies Act, 2002.',
    area: 't1',
  },
  {
    year: '2018',
    label: 'New Chairmanship',
    text: 'RMDCS begins functioning under the Chairmanship of Mrs. Prabala Jabeegara Ross.',
    area: 't2',
  },
  {
    year: 'Today',
    label: 'One-Stop Financial Services',
    text: 'Serving members with savings, deposits, and loans rooted in self-help and mutual assistance.',
    area: 't3',
  },
]

export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <Reveal>
          <div className="about-mosaic">
            <div className="about-cell about-cell--intro">
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

            <div className="about-cell about-cell--quote">
              <span className="pullquote-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>
                <p>
                  Promotion of economic and social well-being of its members by way
                  of self-help and mutual assistance.
                </p>
              </blockquote>
              <cite>Our Vision</cite>
            </div>

            {TIMELINE.map((item) => (
              <div key={item.year} className={`about-cell about-cell--${item.area}`}>
                <span className="about-cell-year">{item.year}</span>
                <span className="about-cell-label">{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
