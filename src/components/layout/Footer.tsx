import { profile } from "../../data/profile";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.mastCol}>
          <p className={styles.wordmark}>{profile.name}</p>
          <p className={styles.colophon}>
            Independently written, edited, and shipped to production. Every story on this page is drawn from real
            work — nothing here is invented.
          </p>
        </div>
        <div className={styles.linkCol}>
          <p className={styles.colHeading}>Desks</p>
          <ul>
            <li><a href="/#stories">Featured Stories</a></li>
            <li><a href="/#career">Career Desk</a></li>
            <li><a href="/#technology">Technology Desk</a></li>
            <li><a href="/#highlights">Highlights</a></li>
          </ul>
        </div>
        <div className={styles.linkCol}>
          <p className={styles.colHeading}>Elsewhere</p>
          <ul>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="rule rule--thick" />
      <div className={`container ${styles.bottom}`}>
        <span>© {year} {profile.name}. Published from {profile.location}.</span>
        <span>Vol. IX — the ninth year on the masthead.</span>
      </div>
    </footer>
  );
}
