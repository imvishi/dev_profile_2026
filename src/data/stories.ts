import type { Story } from "./types";

export const stories: Story[] = [
  {
    slug: "enterprise-identity-access-platform",
    kicker: "OneLogin.com",
    website_link: "https://www.onelogin.com/",
    headline: "Building and Evolving an Enterprise Identity Platform",
    dek: "Working on a large-scale identity and access management platform, building backend services, authentication systems, and infrastructure that support secure and reliable access across a distributed ecosystem.",
    company: "Accolite Digital — OneLogin",
    dateline: "Gurugram · Sep 2023 – Present",
    tags: ["Ruby on Rails", "Microservices", "React", "Node.js", "Redis", "DynamoDB", "Kubernetes", "Distributed Systems"],
    featured: true,
    artSeed: 1,
    image: "onelogin.webp",
    body: [
      "Worked on OneLogin’s identity and access management platform as part of a large engineering ecosystem built with Ruby and Node.js, contributing to the evolution of the platform toward a more modular and scalable architecture.",
      "Built backend services and authentication capabilities supporting multi-tenant applications, working with technologies such as JWT, OIDC, sessions, Redis, and DynamoDB to deliver secure and reliable identity workflows.",
      "Contributed to breaking down legacy functionality into independently deployable services, designing APIs, improving service boundaries, and helping the platform evolve from a monolithic architecture toward distributed systems.",
      "Worked across Ruby on Rails, Node.js, and React, contributing to both backend services and user-facing features while collaborating with engineers across different areas of the platform.",
      "Also contributed to platform reliability through performance improvements, rate limiting, production troubleshooting, code reviews, mentoring, and participating in the on-call rotation."
    ],
  },
  {
    slug: "stadium",
    kicker: "Stadium",
    headline: "Building the Commerce Engine Behind Modern Gifting",
    dek: "Built and evolved full-stack SaaS products for Stadium, powering digital gifting, branded merchandise, and personalized commerce experiences with Ruby on Rails and React.",
    company: "Stadium",
    website_link: "https://www.bystadium.com/ ",
    dateline: "",
    tags: ["Ruby on Rails", "React", "PostgreSQL", "AWS"],
    artSeed: 8,
    image: "stadium.jpeg",
    body: [
      "Worked across Stadium’s suite of SaaS products, including SnackMagic, SwagMagic, and SuperiorDishes, building full-stack features with Ruby on Rails and React for businesses managing gifting, merchandise, and food experiences.",
      "Built a recommendation and tagging system to personalize product discovery and improve how customers found relevant gifts. The platform used order and product data to generate meaningful tags and recommendations, including integrations with OpenAI APIs for automated tagging.",
      "Designed and implemented a dynamic marketing email content management system that allowed the marketing team to update email content at runtime without requiring engineering changes or deployments, making campaign management significantly more flexible.",
      "Worked on product questionnaires and ordering workflows, building dynamic experiences that collected customer preferences and used them as part of the product selection and ordering journey.",
      "Contributed to backend APIs, business logic, and React interfaces across the platform, while working on performance, reliability, and maintainability as the products evolved.",
      "Took features from requirements to production, collaborating with product, design, and engineering teams to solve complex workflows and deliver experiences used by customers across Stadium’s growing suite of products." 
    ],
  },
  {
    slug: "bonterra",
    kicker: "Bonterra",
    headline: "Technology for Good: Building Software That Powers Fundraising",
    dek: "Built and scaled features for a SaaS fundraising platform used by nonprofit and social-impact organizations, working across Ruby on Rails, React, APIs, and distributed services.",
    company: "Bonterra",
    website_link: "https://www.bonterratech.com",
    dateline: "",
    tags: ["Ruby on Rails", "React", "PostgreSQL", "AWS"],
    artSeed: 7,
    image: "bonterra.webp",
    body: [
      "Worked on Bonterra’s fundraising platform, building software that helps nonprofit and social-impact organizations manage fundraising and donor-focused workflows.",
      "Contributed across the stack, primarily working with Ruby on Rails and React to build new product capabilities, improve existing workflows, and develop reliable APIs and backend services supporting the platform.",
      "Worked on systems where reliability, data integrity, and scalability were critical, solving complex engineering problems while collaborating across product and engineering teams to turn requirements into production-ready features.",
      "The work combined product thinking with backend engineering — understanding real-world fundraising workflows and translating them into software that organizations could depend on every day."
    ],
  },
  {
    slug: "dig-inn-android",
    kicker: "DigInn Restaurant",
    headline: "From Concept to Production: A Restaurant Ordering Android App in 3 Months",
    dek: "Took DigInn Restaurant’s food-ordering concept from initial requirements through UI design, Android development, testing, and production deployment — delivering the complete application in just three months.",
    company: "DigInn Restaurant",
    website_link: "https://www.diginn.com/",
    dateline: "2017 – 2018",
    tags: ["Android", "Kotlin", "Java"],
    artSeed: 6,
    image: "digin.webp",
    body: [
    "Worked closely with DigInn Restaurant to turn their food-ordering concept into a complete Android application, taking ownership of the project from the initial requirements and product design through development and deployment.",
    "Designed and implemented the core ordering experience, translating the restaurant’s requirements into intuitive mobile workflows while building the application with a focus on reliability, usability, and maintainable Android architecture.",
    "Managed the complete delivery cycle including development, testing, bug fixing, and production deployment, successfully taking the application from an initial concept to a working product in just three months."
    ],
  },
  {
    slug: "google-nest",
    kicker: "Google Nest",
    headline: "Live From the Living Room: Real-Time Camera Subscriptions at Nest Scale",
    dek: "Core Android features and event-driven gRPC integrations shipped to millions of active Nest devices, powering live camera subscriptions and push notifications through the move into Google Home.",
    company: "Raja Software Labs — Google Nest",
    website_link: "https://nest.com/",
    dateline: "Dec 2018 – Mar 2020",
    tags: ["Kotlin", "Android", "gRPC", "Java"],
    artSeed: 5,
    image: "nest.webp",
    body: [
      "Working on core Android features in Kotlin and Java for millions of active Google Nest connected devices meant optimizing for more than functionality — readability, modularity, and test coverage were treated as first-class requirements.",
      "Real-time gRPC backend services and event-driven architectures were integrated to power camera subscriptions and live push notifications, the kind of low-latency plumbing that a home security feature can't work without.",
      "The role sat inside a larger transition: legacy Nest systems moving into the unified Google Home ecosystem, coordinated with 20+ cross-functional engineers without regressing production quality along the way.",
    ],
  },
  {
    slug: "robotic-process-automation-tryg-insurance",
    kicker: "Tryg Insurance",
    headline: "Fourteen Full-Time Employees' Worth of Work, Automated",
    dek: "Robotic process automation workflows built for TRYG Insurance eliminated operational friction and returned productivity equivalent to fourteen full-time employees.",
    company: "Cognizant Technology Solutions",
    website_link: "https://www.cognizant.com/",
    dateline: "Nov 2017 – Dec 2018",
    image: 'tryg.webp',
    tags: ["RPA", "Process Automation"],
    artSeed: 6,
    body: [
      "For TRYG Insurance, manual operational workflows were a steady drain on time and attention. Robotic Process Automation workflows designed and implemented to replace them eliminated that friction outright — returning productivity equivalent to 14 full-time employees back to the business.",
    ],
  },
];

export const featuredStory = stories.find((story) => story.featured) ?? stories[0];
export const secondaryStories = stories.filter((story) => story.slug !== featuredStory.slug);
