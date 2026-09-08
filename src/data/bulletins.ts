import certificatePdf from "../assets/certificate.pdf";

export interface Bulletin {
  slug: string;
  kicker: string;
  headline: string;
  dek: string;
  dateline: string;
  body: string[];
  artSeed: number;
  /** Filename of a real image in src/assets. Falls back to generated art when omitted. */
  image?: string;
  /** External link shown on the detail page (e.g. a certificate PDF or blog URL). */
  href?: string;
  hrefLabel?: string;
}

export const bulletins: Bulletin[] = [
{
slug: "ccaf-certification",
kicker: "Certification",
headline: "CCAF Certification Joins the Shelf",
dek: "CCAF certification completed, marking another milestone in the ongoing pursuit of better engineering.",
dateline: "Sep 2026",
body: [
"The latest addition to the engineering shelf: CCAF certification, now complete. A useful opportunity to revisit the fundamentals, sharpen the edges, and bring that knowledge back to the production systems I work on every day.",
],
image: 'certification.png',
artSeed: 101,
href: certificatePdf,
hrefLabel: "View Certificate",
},
{
slug: "tech-blog",
kicker: "Coming Soon",
headline: "Starting My Tech Blog — Coming Soon",
image: 'coming_soon.jpeg',
dek: "A place to document the systems, decisions, experiments, and lessons that don't fit neatly into a commit.",
dateline: "Sep 2026",
body: [
"A tech blog is currently in the works. The plan is simple: write about things worth remembering — systems I've built, engineering trade-offs, problems that took longer than expected, and lessons learned along the way. The presses aren't rolling just yet, but the first stories are coming.",
],
artSeed: 102,
},
{
slug: "learning-go",
kicker: "Learning",
headline: "A New Language Enters the Toolbox",
image: 'go.jpg',
dek: "Go is the latest subject of investigation, with concurrency, performance, and simplicity on the reading list.",
dateline: "Sep 2026",
body: [
"The latest learning project is Go. I'm exploring its approach to concurrency, performance, and simplicity, while getting a better sense of where it fits alongside the technologies I already use. Consider this one an ongoing story rather than a finished headline.",
],
artSeed: 103,
},
];
