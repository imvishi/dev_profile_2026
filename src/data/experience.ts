import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    company: "Accolite Digital",
    role: "Senior Software Engineer / Technical Lead",
    dateRange: "Sep 2023 – Present",
    context: "Enterprise Identity & Access Management (OneLogin) · High-Scale Data Platform (Bonterra)",
    bullets: [
      "Contributed to decomposing a legacy Ruby on Rails monolith into 8–9 independently deployable microservices, forming part of a complex enterprise ecosystem of 80+ Ruby and Node.js services.",
      "Designed and implemented a multi-tenant authentication platform supporting JWT, OIDC, and session-based authentication, integrated with Traefik middleware to secure requests across newly developed microservices.",
      "Architected pluggable Redis- and DynamoDB-based rate-limiting modules allowing deployment-specific configuration to safeguard platform stability during traffic spikes.",
      "Upgraded six production Ruby services from legacy versions to Ruby 3.x, successfully navigating dependency challenges to improve runtime performance and ensure seamless deployments.",
      "Collaborated with a 10-member platform team in a 100+ engineer organization — driving low-level design, conducting code reviews, interviewing candidates, and mentoring engineers to raise the team's engineering standards.",
      "Participated in the on-call rotation, diagnosing and resolving complex production incidents across distributed services while enhancing overall platform reliability.",
      "Used an internal AI development platform built on GitHub Copilot, MCP servers, reusable skills, and specialized subagents for architecture exploration, code generation, debugging, test creation, code review, and automating repetitive engineering tasks.",
      "Designed and optimized data ingestion pipelines using PostgreSQL bulk processing and asynchronous job queues to reliably process ~30 million records with zero data loss.",
      "Refactored complex database schemas, tuned query performance, and established proactive indexing strategies to resolve platform-wide data bottlenecks.",
    ],
  },
  {
    company: "Stadium",
    role: "Technical Lead / Senior Software Engineer",
    dateRange: "Mar 2020 – Sep 2023",
    context: "Stadium Brands (SnackMagic, SwagMagic)",
    bullets: [
      "Acted as a key technical consultant collaborating directly with Product, UX, and Executive leadership to translate ambiguous business strategies into clear technical roadmaps and scalable software architectures.",
      "Designed and developed a dynamic email content management platform that eliminated approximately 10–20 engineering deployment requests per week by empowering non-technical stakeholders to manage campaign content independently.",
      "Architected intelligent customer segmentation and custom recommendation engines using OpenAI APIs, React, Algolia, and dynamic ranking logic.",
      "Led an engineering team of 10 in an Agile startup environment; driven by Extreme Ownership, established high standards for pair programming, continuous integration, system design reviews (HLD/LLD), and technical onboarding.",
    ],
  },
  {
    company: "Raja Software Labs",
    role: "Software Engineer",
    dateRange: "Dec 2018 – Mar 2020",
    context: "Project: Google Nest",
    bullets: [
      "Developed core Android (Kotlin/Java) features for millions of active Google Nest connected devices, prioritizing code readability, modularity, and comprehensive test coverage.",
      "Integrated real-time gRPC backend services and event-driven architectures for camera subscriptions and live push notifications.",
      "Partnered with 20+ cross-functional engineers to transition legacy Nest systems into the unified Google Home ecosystem without regressing production quality.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Program Analyst",
    dateRange: "Nov 2017 – Dec 2018",
    bullets: [
      "Designed and implemented Robotic Process Automation (RPA) workflows for TRYG Insurance, eliminating operational friction and returning productivity equivalent to 14 FTEs.",
    ],
  },
];
