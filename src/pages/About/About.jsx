import Reveal from '../../components/Reveal'
import './About.css'

const JOURNEY = [
  {
    year: '2008',
    title: 'Foundation',
    text: 'Rose Malar Developmental Co-operative Society Limited was founded by the late Shri R. Bhakther Solomon, Founder of the Development Promotion Group.',
  },
  {
    year: '2018',
    title: 'A New Chapter',
    text: 'On 10 May 2018, a new governing committee was elected at the Annual General Body Meeting, with Mrs. Prabala Jabeegara Ross assuming leadership as Chairperson.',
  },
  {
    year: 'Today',
    title: 'Continuing the Mission',
    text: 'Rose Malar continues to strengthen its financial services, governance, member outreach and development initiatives across multiple regions.',
  },
]

const VISION_MISSION = [
  {
    label: 'Our Vision',
    title: 'Promoting Economic and Social Well-Being',
    text: 'To promote the economic and social well-being of our members by way of self-help and mutual assistance.',
  },
  {
    label: 'Our Mission',
    title: 'Strengthening Self-Help Through Collective Action',
    text: 'To institutionalise the efforts of members in the promotion and development of self-help and mutual aid through collective action and seek simple and effective solutions to social and economic problems.',
  },
]

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral']

const ACTIVITIES = [
  {
    title: 'Entrepreneurship & Investment',
    text: 'Promoting and supporting entrepreneurial and investment activities among members.',
  },
  {
    title: 'Financial Education',
    text: 'Providing cooperative and financial management education and training.',
  },
  {
    title: 'Financial Independence',
    text: 'Supporting money management, financial independence and asset creation.',
  },
  {
    title: 'Livelihood Development',
    text: 'Supporting development, production, manufacturing, marketing and livelihood-related activities.',
  },
  {
    title: 'Agriculture & Rural Development',
    text: 'Supporting farm and non-farm activities and rural communities.',
  },
  {
    title: 'Sustainable Development',
    text: 'Encouraging environmental care and sustainability.',
  },
]

const VALUES = [
  'Trust',
  'Transparency',
  'Governance',
  'Customer Satisfaction',
  'Sustainability',
  'Innovation',
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Who We Are</span>
            <h2>Building Economic Opportunity Through Cooperation</h2>
            <p>
              Rose Malar Developmental Co-operative Society Limited is a
              Multi-State Co-operative Society registered under the
              Multi-State Co-operative Societies Act, 2002, with India&rsquo;s
              Ministry of Co-operation.
            </p>
            <p>
              Founded in 2008, the Society was established to promote the
              economic and social well-being of its members through self-help
              and mutual assistance.
            </p>
            <p>
              The Society&rsquo;s approach combines financial services with
              entrepreneurship support, financial literacy, livelihood
              development and community-oriented initiatives.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-journey">
            <h3 className="about-block-title">Our Journey</h3>
            <div className="about-journey-grid">
              {JOURNEY.map((step) => (
                <div key={step.year} className="about-journey-item">
                  <span className="about-journey-year">{step.year}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-vm-grid">
            {VISION_MISSION.map((item) => (
              <div key={item.label} className="about-vm-card">
                <span className="about-vm-label">{item.label}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="about-activities">
            <h3 className="about-block-title">What We Do</h3>
            <p className="about-activities-intro">
              Rose Malar&rsquo;s activities include:
            </p>
            <div className="about-activities-grid">
              {ACTIVITIES.map((activity, i) => (
                <div key={activity.title} className="about-activity-card">
                  <span
                    className={`about-activity-dot about-activity-dot--${ACCENTS[i % ACCENTS.length]}`}
                    aria-hidden="true"
                  />
                  <h4>{activity.title}</h4>
                  <p>{activity.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-values">
            <h3 className="about-block-title">Our Values</h3>
            <ul className="about-values-list">
              {VALUES.map((value) => (
                <li key={value} className="about-values-tag">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
