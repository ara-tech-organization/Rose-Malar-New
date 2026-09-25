import './RateTable.css'

const SHORT_LABELS = {
  'General (Individual)': 'General',
  'Senior Citizens / Widows / Differently Abled / Primary Facilitators': 'Senior Citizens',
  'SHG / JLG / Others': 'SHG / JLG',
}

export default function RateTable({ columns, rows }) {
  const [periodLabel, ...valueLabels] = columns

  return (
    <div className="rate-table-wrap">
      <span className="rate-table-caption">{periodLabel} · Interest p.a.</span>
      <div className="rate-table-scroll">
        <table className="rate-table">
          <thead>
            <tr>
              <th>{periodLabel}</th>
              {valueLabels.map((label) => (
                <th key={label}>{SHORT_LABELS[label] || label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const [period, ...values] = row
              return (
                <tr key={period}>
                  <td className="rate-period">{period}</td>
                  {values.map((value, i) => (
                    <td key={valueLabels[i]} className="rate-value">
                      {value}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
