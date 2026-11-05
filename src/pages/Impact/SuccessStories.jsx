import Reveal from '../../components/Reveal'
import './SuccessStories.css'

const CATEGORIES = ['Savings', 'Business', 'Agriculture', 'Housing', 'Education', 'Livelihood']

const STORIES = [
  {
    name: 'Lakshmi',
    headline: 'Building Financial Security',
    meta: 'Thanjavur · Savings & Financial Planning',
    category: 'Savings',
    accent: 'teal',
    challenge: "Managing household expenses while saving money for her children's education was a constant challenge.",
    journey: "With Rose Malar's guidance, Lakshmi developed a regular savings habit and learned to plan her monthly budget more effectively.",
    outcome: "She built a consistent savings routine and gained greater confidence in managing her family's financial future.",
  },
  {
    name: 'Meena',
    headline: 'Growing a Small Business',
    meta: 'Kumbakonam · Business Development',
    category: 'Business',
    accent: 'magenta',
    challenge: 'Meena wanted to expand her home-based tailoring business but struggled to manage working capital and attract new customers.',
    journey: "Through Rose Malar's support, she explored better financial planning, business management practices, and opportunities to reach more customers.",
    outcome: 'Meena took steps toward expanding her business, improving her customer relationships, and building a more sustainable source of income.',
  },
  {
    name: 'Revathi',
    headline: 'Working Towards a Better Home',
    meta: 'Thanjavur District · Housing & Family Well-being',
    category: 'Housing',
    accent: 'coral',
    challenge: "Revathi's family wanted to improve their living conditions but needed guidance on planning expenses and exploring suitable housing support.",
    journey: 'Rose Malar helped her understand the importance of financial planning and explore relevant housing assistance options.',
    outcome: "Revathi gained a clearer plan for improving her family's living conditions and taking practical steps towards a safer, more comfortable home.",
  },
]

const STEPS = [
  { label: 'The Challenge', key: 'challenge' },
  { label: 'The Journey', key: 'journey' },
  { label: 'The Outcome', key: 'outcome' },
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
            {STORIES.map((story) => (
              <div key={story.name} className={`story-card story-card--${story.accent}`}>
                <div className="story-card-head">
                  <span className="story-card-avatar" aria-hidden="true">{story.name[0]}</span>
                  <div>
                    <span className="story-card-name">{story.name} &mdash; {story.headline}</span>
                    <span className="story-card-meta">{story.meta}</span>
                  </div>
                  <span className="story-card-tag">{story.category}</span>
                </div>

                <ol className="story-timeline">
                  {STEPS.map((step) => (
                    <li key={step.key} className="story-timeline-step">
                      <span className="story-timeline-dot" aria-hidden="true" />
                      <div>
                        <h4>{step.label}</h4>
                        <p>{story[step.key]}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
