import Reveal from '../../components/Reveal'
import { MAP_CONTEXT, MAP_STATES } from './mapData'
import './Regions.css'

// Label placement per pin: 'start' writes to the right, 'end' to the left.
const LABEL_SIDE = {
  Kerala: 'end',
}

export default function Regions() {
  return (
    <section id="regions" className="section section--surface">
      <div className="container region-grid">
        <Reveal>
          <div className="region-intro">
            <span className="section-eyebrow">Our Reach</span>
            <h2>Where We Are Present</h2>
            <ul className="region-legend">
              {MAP_STATES.map((s) => (
                <li key={s.name}>{s.name}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="region-map-card">
            <svg
              viewBox="0 0 780 760"
              className="region-map"
              role="img"
              aria-label="Map of the regions where Rosmaler operates: Tamil Nadu, Puducherry, Kerala, Karnataka and Andhra Pradesh"
            >
              {MAP_CONTEXT.map((d, i) => (
                <path key={i} d={d} className="region-context" />
              ))}
              {MAP_STATES.map((s) => (
                <path key={s.name} d={s.d} className="region-state">
                  <title>{s.name}</title>
                </path>
              ))}
              {MAP_STATES.map((s) => {
                const left = LABEL_SIDE[s.name] === 'end'
                return (
                  <g key={s.name} transform={`translate(${s.x} ${s.y})`}>
                    <circle r="20" className="region-pin-pulse" />
                    <circle r="8" className="region-pin-dot" />
                    <text
                      x={left ? -16 : 16}
                      y="6"
                      textAnchor={left ? 'end' : 'start'}
                      className="region-pin-label"
                    >
                      {s.name}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
