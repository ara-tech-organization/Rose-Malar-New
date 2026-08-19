import Reveal from './Reveal'
import './Members.css'

export default function Members() {
  return (
    <section id="members" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Membership</span>
            <h2>Who can be a member</h2>
            <p>
              Membership is open to any person who resides within the
              Society&rsquo;s area of operation, is genuinely in need of the
              services RMDCS provides, and whose profession or interest does
              not conflict with the Society or overlap an existing membership
              in a similar class of society.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="member-note-banner">
            <span className="member-note-label">Next step</span>
            <p>
              Membership application form — download, print, and submit to
              your Branch Office.
            </p>
            <span className="member-note-status">Form to be published here</span>
          </div>
        </Reveal>

        <Reveal>
          <ol className="member-criteria">
            <li>
              An individual competent to contract under the Indian Contract
              Act, 1872 (Section 11).
            </li>
            <li>Any Multi-State Co-operative Society or any Co-operative Society.</li>
            <li>
              Such class or classes of persons or Association of Persons as
              may be permitted by the Bye-Laws and Subsidiary Rules, having
              regard to the nature and activities of the Society.
            </li>
            <li>
              A person who has resigned or withdrawn from membership, once at
              least one year has lapsed since such resignation or withdrawal.
            </li>
            <li>
              A past member who has been expelled from the Society, once at
              least one year has lapsed since such expulsion.
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
