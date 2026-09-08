import { profile } from "../../data/profile";
import styles from "./Masthead.module.css";

export function Masthead() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Est. 2017 · Independent Engineering Journal</p>
        <a href="/" className={styles.wordmarkLink}>
          <h1 className={styles.wordmark}>Vishal Verma</h1>
        </a>
        <p className={styles.tagline}>
          Field reporting on distributed systems, product engineering &amp; the career of {profile.name}, {profile.title}
        </p>
      </div>
    </div>
  );
}
