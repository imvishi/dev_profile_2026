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
            &ldquo;Passionate about software craftsmanship, clean code, TDD, and AI-assisted development.&rdquo;
          </blockquote>
          <div className={styles.copy}>
            <p>
              Across four organizations and nine years, the throughline has stayed the same: take ambiguous problems,
              give them clear architecture, and leave the codebase — and the team around it — better than it was
              found. That has meant decomposing monoliths, building authentication platforms from scratch, leading
              engineers through code review and design discussions, and staying close enough to production to be the
              one paged when something breaks.
            </p>
            <p>
              It has also meant treating AI-assisted development as a craft in its own right — using internal
              platforms built on GitHub Copilot, MCP servers, and specialized subagents for architecture exploration,
              debugging, and test creation, rather than as a shortcut around understanding the system.
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
              <dd>Ruby on Rails, React, Python, Kotlin, SQL</dd>
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
