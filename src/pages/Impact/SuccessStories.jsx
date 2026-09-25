import Reveal from '../../components/Reveal'
import './SuccessStories.css'

const CATEGORIES = ['Savings', 'Business', 'Agriculture', 'Housing', 'Education', 'Livelihood']

const STORY_SLOTS = [
  { category: 'Savings', accent: 'teal' },
  { category: 'Business', accent: 'magenta' },
  { category: 'Housing', accent: 'coral' },
]

const STEPS = [
  { label: 'The Challenge', text: 'Actual member story to be added.' },
  { label: 'The Journey', text: 'How Rose Malar supported the member.' },
  { label: 'The Outcome', text: 'The actual result.' },
]

export default function SuccessStories() {
  return (
    <section id="success-stories" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Success Stories</span>
            <h2>Real People. Real Progress.</h2>
            <p>Every member has a journey.</p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="story-category-list">
            {CATEGORIES.map((category) => (
              <li key={category} className="story-category-tag">
                {category}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="story-grid">
            {STORY_SLOTS.map((slot) => (
              <div key={slot.category} className={`story-card story-card--${slot.accent}`}>
                <div className="story-card-head">
                  <span className="story-card-avatar" aria-hidden="true">?</span>
                  <div>
                    <span className="story-card-name">Member name to be added</span>
                    <span className="story-card-meta">Location &middot; Product / Initiative</span>
                  </div>
                  <span className="story-card-tag">{slot.category}</span>
                </div>

                <ol className="story-timeline">
                  {STEPS.map((step) => (
                    <li key={step.label} className="story-timeline-step">
                      <span className="story-timeline-dot" aria-hidden="true" />
                      <div>
                        <h4>{step.label}</h4>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <span className="story-card-link" aria-disabled="true">
                  Read Story <span aria-hidden="true">→</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="placeholder-note">
            This section will feature real member stories once provided by
            the client, covering savings, business, agriculture, housing,
            education and livelihood journeys.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
