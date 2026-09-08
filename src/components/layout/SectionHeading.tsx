import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.top}>
        <p className="kicker">{eyebrow}</p>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      <hr className="rule rule--thick" />
    </div>
  );
}
