import type { Story } from "./types";

export const stories: Story[] = [
  {
    slug: "enterprise-identity-access-platform",
    kicker: "Platform Engineering",
    headline: "Breaking Apart the Monolith: A New Identity Platform Takes Shape",
    dek: "A legacy Rails monolith is being decomposed into 8–9 independently deployable services inside an 80-plus service ecosystem, with a new multi-tenant authentication platform at its core.",
    company: "Accolite Digital — OneLogin",
    dateline: "Gurugram · Sep 2023 – Present",
    tags: ["Ruby on Rails", "Microservices", "JWT / OIDC", "Traefik", "Redis", "DynamoDB", "Ruby 3.x"],
    featured: true,
    artSeed: 1,
    body: [
      "Inside a complex enterprise ecosystem of more than 80 Ruby and Node.js services, work is under way to decompose a legacy Ruby on Rails monolith into 8–9 independently deployable microservices — a shift in how the platform is built, deployed, and scaled.",
      "At the center of the new architecture sits a multi-tenant authentication platform supporting JWT, OIDC, and session-based authentication, integrated with Traefik middleware to secure requests across every newly developed service.",
      "To keep the platform stable under load, pluggable rate-limiting modules backed by Redis and DynamoDB were architected to allow deployment-specific configuration, guarding against traffic spikes without a one-size-fits-all limit.",
      "Alongside the new architecture, six production Ruby services were upgraded from legacy versions to Ruby 3.x — navigating dependency conflicts to land seamless deployments and measurable runtime gains.",
      "The work is a team effort: a 10-member platform team inside a 100+ engineer organization, with low-level design, code review, candidate interviews, and mentoring all part of raising the team's engineering bar. An on-call rotation keeps the same engineers close to production, diagnosing and resolving incidents across the distributed system.",
      "The team also builds with an internal AI development platform — GitHub Copilot, MCP servers, reusable skills, and specialized subagents — used for architecture exploration, code generation, debugging, test creation, code review, and automating the repetitive edges of engineering work.",
    ],
  },
  {
    slug: "high-volume-data-ingestion-engine",
    kicker: "Data Engineering",
    headline: "Thirty Million Records, Zero Data Loss: Inside the Ingestion Overhaul",
    dek: "A high-scale ingestion engine built on PostgreSQL bulk processing and asynchronous job queues now reliably moves tens of millions of records through Bonterra's data platform.",
    company: "Accolite Digital — Bonterra",
    dateline: "Gurugram · Sep 2023 – Present",
    tags: ["PostgreSQL", "Bulk Processing", "Async Job Queues", "Query Tuning", "Indexing"],
    artSeed: 2,
    body: [
      "Bonterra's data platform depends on ingestion pipelines that can absorb volume without losing a record. The engine behind them was designed and optimized around PostgreSQL bulk processing and asynchronous job queues, reliably processing roughly 30 million records with zero data loss.",
      "Getting there meant going after the database itself: refactoring complex schemas, tuning slow queries, and establishing proactive indexing strategies to clear platform-wide data bottlenecks that had been throttling throughput.",
    ],
  },
  {
    slug: "self-serve-campaign-content-platform",
    kicker: "Product Engineering",
    headline: "Cutting the Queue: How a Self-Serve Platform Ended the Weekly Deploy Backlog",
    dek: "A dynamic email content management platform let non-technical stakeholders manage campaigns directly — eliminating an estimated 10–20 engineering deployment requests every week.",
    company: "Stadium — SnackMagic / SwagMagic",
    dateline: "Mar 2020 – Sep 2023",
    tags: ["React", "Content Management", "Workflow Automation"],
    artSeed: 3,
    body: [
      "As a technical consultant working directly with Product, UX, and Executive leadership, the mandate was to turn ambiguous business strategy into a concrete technical roadmap — one that a fast-moving startup could actually ship against.",
      "One recurring bottleneck stood out: every campaign content change meant an engineering deployment. The fix was a dynamic email content management platform that put that control directly in the hands of non-technical stakeholders, eliminating an estimated 10–20 deployment requests a week and freeing engineering time for harder problems.",
    ],
  },
  {
    slug: "ai-recommendation-and-search-engine",
    kicker: "Search & Discovery",
    headline: "Teaching the Storefront to Read the Room",
    dek: "Customer segmentation and recommendation logic, powered by OpenAI APIs and Algolia, brought dynamic ranking to product discovery across Stadium's brands.",
    company: "Stadium — SnackMagic / SwagMagic",
    dateline: "Mar 2020 – Sep 2023",
    tags: ["OpenAI API", "React", "Algolia", "Recommendation Systems"],
    artSeed: 4,
    body: [
      "To make product discovery feel less like a static catalog and more like a conversation, intelligent customer segmentation and custom recommendation engines were architected using OpenAI APIs, React, Algolia, and dynamic ranking logic — surfacing the right products to the right customer segments in real time.",
    ],
  },
  {
    slug: "real-time-camera-subscriptions-google-nest",
    kicker: "Mobile & Connected Systems",
    headline: "Live From the Living Room: Real-Time Camera Subscriptions at Nest Scale",
    dek: "Core Android features and event-driven gRPC integrations shipped to millions of active Nest devices, powering live camera subscriptions and push notifications through the move into Google Home.",
    company: "Raja Software Labs — Google Nest",
    dateline: "Dec 2018 – Mar 2020",
    tags: ["Kotlin", "Android", "gRPC", "Event-Driven Architecture"],
    artSeed: 5,
    body: [
      "Working on core Android features in Kotlin and Java for millions of active Google Nest connected devices meant optimizing for more than functionality — readability, modularity, and test coverage were treated as first-class requirements.",
      "Real-time gRPC backend services and event-driven architectures were integrated to power camera subscriptions and live push notifications, the kind of low-latency plumbing that a home security feature can't work without.",
      "The role sat inside a larger transition: legacy Nest systems moving into the unified Google Home ecosystem, coordinated with 20+ cross-functional engineers without regressing production quality along the way.",
    ],
  },
  {
    slug: "robotic-process-automation-tryg-insurance",
    kicker: "Process Automation",
    headline: "Fourteen Full-Time Employees' Worth of Work, Automated",
    dek: "Robotic process automation workflows built for TRYG Insurance eliminated operational friction and returned productivity equivalent to fourteen full-time employees.",
    company: "Cognizant Technology Solutions",
    dateline: "Nov 2017 – Dec 2018",
    tags: ["RPA", "Process Automation"],
    artSeed: 6,
    body: [
      "For TRYG Insurance, manual operational workflows were a steady drain on time and attention. Robotic Process Automation workflows designed and implemented to replace them eliminated that friction outright — returning productivity equivalent to 14 full-time employees back to the business.",
    ],
  },
];

export const featuredStory = stories.find((story) => story.featured) ?? stories[0];
export const secondaryStories = stories.filter((story) => story.slug !== featuredStory.slug);
