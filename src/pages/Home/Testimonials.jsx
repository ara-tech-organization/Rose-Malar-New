import Reveal from '../../components/Reveal'
import './Testimonials.css'

// Placeholders: replace with real members, photos and written consent.
const SLOTS = [
  { name: 'Member name', place: 'Place', quote: 'Short quote about how Rosmaler helped.' },
  { name: 'Member name', place: 'Place', quote: 'Short quote about how Rosmaler helped.' },
  { name: 'Member name', place: 'Place', quote: 'Short quote about how Rosmaler helped.' },
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
            {SLOTS.map((t, i) => (
              <figure key={i} className="testimonial-card">
                <div className="testimonial-photo" aria-hidden="true" />
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
