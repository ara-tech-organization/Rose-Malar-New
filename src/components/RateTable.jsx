import './RateTable.css'

export default function RateTable({ columns, rows }) {
  const [periodLabel, ...valueLabels] = columns

  return (
    <div className="rate-table-wrap">
      <span className="rate-table-caption">{periodLabel} · Interest p.a.</span>
      <div className="rate-table">
        {rows.map((row) => {
          const [period, ...values] = row
          return (
            <div key={period} className="rate-row">
              <span className="rate-period">{period}</span>
              <div className="rate-values">
                {values.map((value, i) => (
                  <div key={valueLabels[i]} className="rate-value-item">
                    <span className="rate-value">{value}</span>
                    <span className="rate-value-label">{valueLabels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
