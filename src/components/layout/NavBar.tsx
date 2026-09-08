import styles from "./NavBar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/#top" },
  { label: "Projects", href: "/#projects" },
  { label: "Career", href: "/#career" },
  { label: "Technology", href: "/#technology" },
  { label: "Profile", href: "/#profile" },
  { label: "Highlights", href: "/#highlights" },
  { label: "Contact", href: "/#contact" },
];

export function NavBar() {
  return (
    <div className={styles.wrap}>
      <nav className={`container ${styles.inner}`} aria-label="Primary">
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
