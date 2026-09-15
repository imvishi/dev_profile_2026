import { Navigate, useParams } from "react-router-dom";
import { bulletins } from "../data/bulletins";
import { StoryVisual } from "../components/story/StoryVisual";
import { SITE_URL, useDocumentHead } from "../lib/useDocumentHead";
import storyStyles from "./StoryPage.module.css";
import styles from "./BulletinPage.module.css";

export function BulletinPage() {
  const { slug } = useParams();
  const bulletin = bulletins.find((b) => b.slug === slug);

  useDocumentHead({
    title: bulletin ? bulletin.headline : "Update not found",
    description: bulletin?.dek ?? "",
    path: bulletin ? `/update/${bulletin.slug}` : undefined,
    type: "article",
    noindex: !bulletin,
    structuredData: bulletin
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: bulletin.headline,
          description: bulletin.dek,
          url: `${SITE_URL}/update/${bulletin.slug}`,
        }
      : undefined,
  });

  if (!bulletin) {
    return <Navigate to="/" replace />;
  }

  const more = bulletins.filter((b) => b.slug !== bulletin.slug);

  return (
    <article className={`container ${storyStyles.wrap}`}>
      <a href="/" className={storyStyles.back}>
        ← Back to the Front Page
      </a>

      <p className="kicker">{bulletin.kicker}</p>
      <h1 className={storyStyles.headline}>{bulletin.headline}</h1>
      <p className={storyStyles.dek}>{bulletin.dek}</p>
      <p className={`byline ${storyStyles.byline}`}>{bulletin.dateline}</p>

      <div className={storyStyles.artFrame}>
        <StoryVisual
          story={{ image: bulletin.image, artSeed: bulletin.artSeed, company: bulletin.kicker }}
          priority
        />
      </div>

      <div className={storyStyles.layout}>
        <div className={storyStyles.body}>
          {bulletin.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {bulletin.href ? (
            <a href={bulletin.href} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
              {bulletin.hrefLabel ?? "View Link"} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>

        <aside className={storyStyles.sidebar}>
          <div>
            <p className={storyStyles.sidebarHeading}>More Updates</p>
            <ul className={storyStyles.relatedList}>
              {more.map((item) => (
                <li key={item.slug}>
                  <a href={`/update/${item.slug}`}>{item.headline}</a>
                  <span className="byline">{item.kicker}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
