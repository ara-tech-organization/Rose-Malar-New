import { useMemo, useState } from 'react'
import Reveal from '../../components/Reveal'
import CustomSelect from '../../components/CustomSelect'
import './DepositCalculator.css'

const PAYOUT_OPTIONS = [
  { label: 'At Maturity', value: 'maturity' },
  { label: 'Periodic Payout', value: 'payout' },
]

const INR = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function calculateFD(amount, years, rate, payout) {
  const principal = Number(amount) || 0
  const t = Number(years) || 0
  const r = Number(rate) || 0

  if (payout === 'payout') {
    const interest = (principal * r * t) / 100
    return { interest, maturity: principal + interest }
  }

  const maturity = principal * (1 + r / 400) ** (4 * t)
  return { interest: maturity - principal, maturity }
}

function calculateRD(monthly, months, rate) {
  const installment = Number(monthly) || 0
  const n = Number(months) || 0
  const r = Number(rate) || 0

  const totalDeposited = installment * n
  const interest = (installment * n * (n + 1) * r) / (2 * 12 * 100)
  return { interest, maturity: totalDeposited + interest }
}

export default function DepositCalculator() {
  const [scheme, setScheme] = useState('fd')

  const [fd, setFd] = useState({ amount: 100000, years: 3, rate: 11, payout: 'maturity' })
  const [rd, setRd] = useState({ monthly: 2000, months: 36, rate: 9.5 })

  const fdResult = useMemo(
    () => calculateFD(fd.amount, fd.years, fd.rate, fd.payout),
    [fd],
  )
  const rdResult = useMemo(() => calculateRD(rd.monthly, rd.months, rd.rate), [rd])

  function handleFdChange(event) {
    const { name, value } = event.target
    setFd((prev) => ({ ...prev, [name]: value }))
  }

  function handleRdChange(event) {
    const { name, value } = event.target
    setRd((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="calculator" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Deposit Calculator</span>
            <h2>Plan Your Savings</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="calculator-card">
            <div className="calculator-tabs">
              <button
                type="button"
                className={`calculator-tab ${scheme === 'fd' ? 'calculator-tab--active' : ''}`}
                onClick={() => setScheme('fd')}
              >
                Fixed Deposit
              </button>
              <button
                type="button"
                className={`calculator-tab ${scheme === 'rd' ? 'calculator-tab--active' : ''}`}
                onClick={() => setScheme('rd')}
              >
                Recurring Deposit
              </button>
            </div>

            {scheme === 'fd' ? (
              <div className="calculator-body">
                <div className="calculator-inputs">
                  <label>
                    Deposit Amount
                    <input type="number" name="amount" min="0" value={fd.amount} onChange={handleFdChange} />
                  </label>
                  <label>
                    Tenure (Years)
                    <input type="number" name="years" min="1" max="10" value={fd.years} onChange={handleFdChange} />
                  </label>
                  <label>
                    Interest Rate (% p.a.)
                    <input type="number" name="rate" min="0" step="0.1" value={fd.rate} onChange={handleFdChange} />
                  </label>
                  <CustomSelect
                    label="Interest Payout"
                    name="payout"
                    value={fd.payout}
                    onChange={handleFdChange}
                    options={PAYOUT_OPTIONS}
                  />
                </div>

                <div className="calculator-results">
                  <div className="calculator-result">
                    <span className="calculator-result-label">Estimated Interest</span>
                    <span className="calculator-result-value">{INR.format(fdResult.interest)}</span>
                  </div>
                  <div className="calculator-result calculator-result--primary">
                    <span className="calculator-result-label">Estimated Maturity Amount</span>
                    <span className="calculator-result-value">{INR.format(fdResult.maturity)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="calculator-body">
                <div className="calculator-inputs">
                  <label>
                    Monthly Deposit
                    <input type="number" name="monthly" min="0" value={rd.monthly} onChange={handleRdChange} />
                  </label>
                  <label>
                    Tenure (Months)
                    <input type="number" name="months" min="12" max="60" value={rd.months} onChange={handleRdChange} />
                  </label>
                  <label>
                    Interest Rate (% p.a.)
                    <input type="number" name="rate" min="0" step="0.1" value={rd.rate} onChange={handleRdChange} />
                  </label>
                </div>

                <div className="calculator-results">
                  <div className="calculator-result">
                    <span className="calculator-result-label">Estimated Interest</span>
                    <span className="calculator-result-value">{INR.format(rdResult.interest)}</span>
                  </div>
                  <div className="calculator-result calculator-result--primary">
                    <span className="calculator-result-label">Estimated Maturity Amount</span>
                    <span className="calculator-result-value">{INR.format(rdResult.maturity)}</span>
                  </div>
                </div>
              </div>
            )}

            <p className="calculator-disclaimer">
              The calculator provides an indicative estimate only. Actual
              returns are subject to applicable product terms, rates and
              Society policies.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
