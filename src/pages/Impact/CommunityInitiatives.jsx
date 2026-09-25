import Reveal from '../../components/Reveal'
import './CommunityInitiatives.css'

const ACCENTS = ['coral', 'indigo', 'magenta', 'teal']

const INITIATIVES = [
  {
    title: 'Medical Camps',
    text: 'Supporting healthcare awareness and community engagement.',
  },
  {
    title: 'Summer School Programmes',
    text: 'Supporting educational and developmental activities.',
  },
  {
    title: 'Senior Citizen Initiatives',
    text: 'Recognising and engaging with senior citizens through community partnerships.',
  },
  {
    title: 'Sports & Recreation',
    text: 'Supporting sports and recreational activities, including programmes with BWDA Arts & Science College.',
  },
]

export default function CommunityInitiatives() {
  return (
    <section id="community-initiatives" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Community Initiatives</span>
            <h2>Our Community-Oriented Activities</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="ci-grid">
            {INITIATIVES.map((item, i) => (
              <div key={item.title} className="ci-card">
                <span
                  className={`ci-dot ci-dot--${ACCENTS[i % ACCENTS.length]}`}
                  aria-hidden="true"
                />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
