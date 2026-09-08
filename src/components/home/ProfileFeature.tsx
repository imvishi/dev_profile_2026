import { education, profile } from "../../data/profile";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./ProfileFeature.module.css";

export function ProfileFeature() {
  return (
    <section id="profile" className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeading eyebrow="Profile" title="The Long Read" />
          <blockquote className={styles.quote}>
            &ldquo;The Journey Behind the Code&rdquo;
          </blockquote>
          <div className={styles.copy}>
            <p>
            I've spent my career moving across different parts of software engineering—from Android applications to backend systems, SaaS products, React interfaces, and distributed architectures.
            That journey has taught me that great software isn't just about choosing the right technology. It's about understanding the problem, making thoughtful trade-offs, and building something that can evolve.
            I enjoy working on challenging problems: designing systems that scale, simplifying complex workflows, improving performance, and turning ideas into products that people actually use.
            I'm comfortable going deep into a backend service, jumping into the frontend when needed, or stepping back to think about the architecture as a whole.
            </p>
            <p>
            The stack may change. The problems may change. The learning never stops.
            </p>
          </div>
        </div>

        <aside className={styles.fact}>
          <p className={styles.factHeading}>At a Glance</p>
          <dl className={styles.factList}>
            <div>
              <dt>Role</dt>
              <dd>{profile.title}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{profile.yearsExperience} years</dd>
            </div>
            <div>
              <dt>Core stack</dt>
              <dd>Ruby on Rails, Node, React, Python, Kotlin, SQL, Android</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>
                {education.degree}
                <br />
                {education.institution}, {education.dateRange}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
