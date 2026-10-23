import Reveal from '../../components/Reveal'
import './OurGroups.css'

const ACCENTS = ['blue', 'teal', 'magenta', 'indigo', 'coral', 'blue', 'teal']

const GROUPS = [
  {
    name: 'Rosemalar',
    text: 'Empowering communities through initiatives that support financial well-being, social development, and sustainable growth.',
  },
  {
    name: 'BHSR – Courtallam',
    text: 'A dedicated initiative focused on community engagement, development, and creating meaningful opportunities for people.',
  },
  {
    name: 'Royal Court – Marriage Hall',
    text: "A welcoming venue for weddings and special occasions, offering a comfortable space to celebrate life's memorable moments.",
  },
  {
    name: 'Nursing College',
    text: 'Nurturing the next generation of healthcare professionals through nursing education, practical learning, and professional development.',
  },
  {
    name: 'BWDA Arts & Science College',
    text: 'Providing quality higher education that fosters academic excellence, practical skills, and holistic student development.',
  },
  {
    name: 'BWDA Mercantile',
    text: 'Supporting commercial activities and business development through reliable services and sustainable growth opportunities.',
  },
  {
    name: 'BWDA Finance',
    text: 'Promoting financial inclusion by helping individuals and communities access financial services and opportunities for economic progress.',
  },
]

export default function OurGroups() {
  return (
    <section id="our-groups" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Groups</span>
            <h2>A Wider Ecosystem of Institutions</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="group-grid">
            {GROUPS.map((group, i) => (
              <div key={group.name} className="group-card">
                <span
                  className={`group-logo group-logo--${ACCENTS[i % ACCENTS.length]}`}
                  aria-hidden="true"
                >
                  {group.name.charAt(0)}
                </span>
                <h3>{group.name}</h3>
                <p className="group-card-desc">{group.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
