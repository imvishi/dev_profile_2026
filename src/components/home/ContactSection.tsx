import { profile } from "../../data/profile";
import { SectionHeading } from "../layout/SectionHeading";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
        />

        <div className={styles.box}>
          <div>
            <p className={styles.boxKicker}>Say Hello</p>
            <p className={styles.boxCopy}>
              For roles, collaborations, or interesting ideas, I'm always open to a conversation.
            </p>
          </div>
          <dl className={styles.list}>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
            </div>
            <div>
              <dt>X</dt>
              <dd><a href={profile.x} target="_blank" rel="noreferrer">{profile.x}</a></dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd><a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace("https://", "")}</a></dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin.replace("https://", "")}</a></dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
