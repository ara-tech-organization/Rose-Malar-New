import Reveal from './Reveal'
import './Impact.css'

const AREAS = [
  'Financial Literacy',
  'Entrepreneurship',
  'Livelihood Development',
  'Agricultural Development',
  'Rural Development',
  'Housing',
  'Education',
  'Healthcare',
  'Community Development',
]

export default function Impact() {
  return (
    <section id="impact" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Beyond Savings &amp; Credit</span>
            <h2>More Than Financial Services</h2>
            <p>Our work extends beyond savings and credit. We support:</p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="impact-tag-list">
            {AREAS.map((area) => (
              <li key={area} className="impact-tag">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="impact-cta">
            <a href="#archive" className="btn btn-primary">
              Explore Our Impact
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
