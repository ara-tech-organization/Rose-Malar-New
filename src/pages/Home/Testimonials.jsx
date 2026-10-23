import Reveal from '../../components/Reveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    place: 'Thanjavur',
    quote: 'Rosmaler has made a real difference in my life. Their support and guidance helped me move forward with confidence.',
  },
  {
    name: 'Priya Raghul',
    place: 'Chennai',
    quote: 'Being part of Rosmaler has been a positive experience. I truly appreciate the care, encouragement, and valuable support I received.',
  },
  {
    name: 'Suresh Balakrishnan',
    place: 'Coimbatore',
    quote: 'Rosmaler creates a welcoming and supportive community. I am grateful for the positive impact it has made on my journey.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Testimonials</span>
            <h2>Real Members. Real Impact.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="testimonial-card">
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
