import { useState } from 'react'
import Reveal from '../../components/Reveal'
import './FAQ.css'

const QUESTIONS = [
  {
    question: 'What is Rose Malar Developmental Co-operative Society?',
    answer:
      'Rose Malar Developmental Co-operative Society Limited is a Multi-State Co-operative Society focused on the economic and social well-being of its members.',
  },
  {
    question: 'When was Rose Malar founded?',
    answer: 'The Society was founded in 2008.',
  },
  {
    question: 'What savings products are available?',
    answer: 'Savings Account, Recurring Deposit and Fixed Deposit.',
  },
  {
    question: 'What loan products are available?',
    answer:
      'Rose Malar provides various loan solutions including agriculture, personal, housing, business, gold, education, emergency and other eligible credit facilities.',
  },
  {
    question: 'How can I become a member?',
    answer:
      'Submit the membership enquiry form and the Rose Malar team can guide you through the applicable process.',
  },
  {
    question: 'How can I contact Rose Malar?',
    answer: 'Use the contact details below or submit an online enquiry.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="faq-list">
            {QUESTIONS.map((item, i) => {
              const isOpen = i === openIndex
              return (
                <div key={item.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item-header"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.question}</span>
                    <svg className="faq-item-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="faq-item-body">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
