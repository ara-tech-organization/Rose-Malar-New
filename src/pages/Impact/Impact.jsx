import Reveal from '../../components/Reveal'
import './Impact.css'

const ACCENTS = ['teal', 'magenta', 'indigo', 'coral']

const FOCUS_AREAS = [
  {
    title: 'Financial Literacy',
    text: 'We provide cooperative and financial management education to help members understand money management, financial independence, asset creation and entrepreneurship.',
    icon: (
      <path
        d="M4 6.5c3-1.5 6.5-1.5 9 0v14c-2.5-1.5-6-1.5-9 0v-14ZM22 6.5c-3-1.5-6.5-1.5-9 0v14c2.5-1.5 6-1.5 9 0v-14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Livelihood Development',
    text: 'We support training, skill development and employment opportunities, particularly in rural and underserved areas.',
    icon: (
      <>
        <rect x="3.5" y="9" width="19" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 9V6.5A2.5 2.5 0 0 1 11.5 4h3A2.5 2.5 0 0 1 17 6.5V9" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 14.5h19" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: 'Agricultural Development',
    text: 'We support farmers through access to credit, training and agriculture-related initiatives.',
    icon: (
      <>
        <path
          d="M12 21c-5-3-7-6.5-7-10a7 7 0 0 1 14 0c0 3.5-2 7-7 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 21V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Community Development',
    text: 'We participate in awareness creation and development initiatives in underserved communities.',
    icon: (
      <>
        <circle cx="8.5" cy="8" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="8" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M2.8 19.5c.6-3 2.7-5 5.7-5s5.1 2 5.7 5M12.6 14.7c.7-1 2.2-1.7 3.4-1.7 3 0 5.1 2 5.7 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
]

export default function Impact() {
  return (
    <section id="impact" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Impact</span>
            <h2>Beyond Finance. Building Stronger Communities.</h2>
            <p>
              Rose Malar&rsquo;s work goes beyond financial services. Through
              financial literacy, livelihood development, rural initiatives,
              housing support and community programmes, the Society works
              toward broader socio-economic development.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="impact-focus-grid">
            {FOCUS_AREAS.map((area, i) => (
              <div key={area.title} className={`impact-focus-card impact-focus-card--${ACCENTS[i % ACCENTS.length]}`}>
                <span className="impact-focus-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{area.icon}</svg>
                </span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
