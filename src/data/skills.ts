import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    description: "The core languages I read, write, and think in — day to day, across every layer of a system.",
    items: ["Ruby", "JavaScript", "Python", "Kotlin", "Java", "SQL"],
    artSeed: 201,
  },
  {
    category: "Frontend Stack",
    description: "Building interfaces that feel considered — fast, accessible, and easy to reason about.",
    items: ["React", "JavaScript"],
    artSeed: 202,
  },
  {
    category: "Backend Stack",
    description:
      "Where most of the real engineering happens: services, contracts, and the architecture that holds them together.",
    items: [
      "Ruby on Rails",
      "Node.js",
      "REST APIs",
      "gRPC",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Multi-Tenant SaaS Architecture",
      "High-Level Design (HLD)",
      "Low-Level Design (LLD)",
    ],
    artSeed: 203,
    featured: true,
    image: 'tech.jpeg'
  },
  {
    category: "Mobile Application Development",
    description: "Native Android work — from UI to the real-time systems underneath it.",
    items: ["Android", "Kotlin", "Java"],
    artSeed: 204,
  },
  {
    category: "Databases & Messaging",
    description: "The data layer — schemas, queries, and the messaging that keeps services in sync.",
    items: ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "RabbitMQ"],
    artSeed: 205,
  },
  {
    category: "DevOps & Cloud",
    description: "Shipping software reliably — infrastructure, pipelines, and the tooling that keeps it running.",
    items: ["AWS (EC2, ECS, Lambda, S3)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux"],
    artSeed: 206,
  },
];
