import Reveal from '../../components/Reveal'
import './WhyUs.css'

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral']

const VALUES = [
  {
    title: 'Trust',
    text: 'Building lasting relationships with members and communities.',
  },
  {
    title: 'Transparency',
    text: 'Promoting responsible and clear communication.',
  },
  {
    title: 'Governance',
    text: 'Maintaining accountability and structured decision-making.',
  },
  {
    title: 'Customer Satisfaction',
    text: 'Keeping member needs at the centre of our services.',
  },
  {
    title: 'Sustainability',
    text: 'Supporting long-term social, economic and environmental development.',
  },
  {
    title: 'Innovation',
    text: 'Responding to changing member needs through better solutions.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Why Rose Malar?</span>
            <h2>Values Stated in Our Annual Report</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="why-us-grid">
            {VALUES.map((item, i) => (
              <div key={item.title} className="why-us-card">
                <span
                  className={`why-us-dot why-us-dot--${ACCENTS[i % ACCENTS.length]}`}
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
