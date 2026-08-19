import { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Reveal from './Reveal'
import './Contact.css'

const INFO = [
  {
    label: 'Address',
    value: 'Branch address to be confirmed',
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
    value: 'To be confirmed',
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
    value: 'To be confirmed',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 7 12 13l7.5-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Contact Us</span>
            <h2>Get in touch</h2>
            <p>Reach out to your nearest RMDCS branch for enquiries about membership, deposits, or loans.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-panel">
            <div className="contact-info">
              {INFO.map((item) => (
                <div key={item.label} className="contact-info-row">
                  <span className="contact-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              ))}

              <div className="contact-lottie">
                <DotLottieReact
                  src="https://lottie.host/838351a6-a9cb-44fc-817e-0ea2082919c9/Kn7tA8Jxpt.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" value={form.name} onChange={handleChange} />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} />
              </label>
              <label>
                Message
                <textarea name="message" rows="3" value={form.message} onChange={handleChange} />
              </label>
              <button type="submit" className="btn btn-primary" disabled>
                Send Enquiry
              </button>
              <p className="contact-form-note">
                This form will be connected once branch contact details are confirmed.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
