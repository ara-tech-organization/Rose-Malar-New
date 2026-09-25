import Reveal from '../../components/Reveal'
import './Contact.css'

const INFO = [
  {
    label: 'Registered & Administrative Office',
    value: ['No. 454, BWDA Enclave,', 'East Pondy Road,', 'Villupuram – 605602, Tamil Nadu'],
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: ['+91-4146-240683', '+91-4146-243861', '+91-4146-227966'],
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 5 6.6 1.5 1.5 0 0 1 6 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: ['rmdcs2008@gmail.com', 'cooperativesociety@bwda.org.in'],
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 7 12 13l7.5-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Contact Us</span>
            <h2>We&rsquo;re Here to Help</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-banner">
            {INFO.map((item) => (
              <div key={item.label} className="contact-chip">
                <span className="contact-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <span className="contact-label">{item.label}</span>
                  {item.value.map((line) => (
                    <span key={line} className="contact-value">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
