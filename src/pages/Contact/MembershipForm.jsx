import { useState } from 'react'
import Reveal from '../../components/Reveal'
import CustomSelect from '../../components/CustomSelect'
import './MembershipForm.css'

const INTERESTS = [
  'Membership',
  'Savings',
  'Recurring Deposit',
  'Fixed Deposit',
  'Loan',
  'Housing Finance',
  'General Enquiry',
]

const INITIAL_FORM = {
  name: '',
  mobile: '',
  email: '',
  state: '',
  district: '',
  location: '',
  interest: INTERESTS[0],
  message: '',
}

export default function MembershipForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="membership" className="section membership">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Let&rsquo;s Grow Together</span>
            <h2>Become a Member of Rose Malar</h2>
            <p>
              Join a cooperative community built around mutual assistance,
              financial inclusion and shared development.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <form className="membership-form-card" onSubmit={handleSubmit}>
            <h3>Membership Enquiry Form</h3>

            <div className="membership-form-grid">
              <label>
                Full Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Mobile Number
                <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
              </label>
              <label>
                Email Address
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                State
                <input type="text" name="state" value={form.state} onChange={handleChange} />
              </label>
              <label>
                District
                <input type="text" name="district" value={form.district} onChange={handleChange} />
              </label>
              <label>
                Preferred Location
                <input type="text" name="location" value={form.location} onChange={handleChange} />
              </label>
              <div className="membership-form-full">
                <CustomSelect
                  label="Interested In"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  options={INTERESTS}
                />
              </div>
            </div>

            <label>
              Message
              <textarea name="message" rows="3" value={form.message} onChange={handleChange} />
            </label>

            <div className="membership-form-footer">
              <button type="submit" className="btn btn-primary">
                Submit Enquiry
              </button>
              {submitted && (
                <p className="membership-form-success">
                  Thank you — a member of the Rose Malar team will get in touch
                  with you shortly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
