import type { SkillGroup, TechItem } from "./types";

/** Logos for skill items, keyed by the exact item string used in skillGroups.
 *  Items without an entry (concepts like "Microservices") render as plain text. */
export const techIcons: Record<string, Omit<TechItem, "name">> = {
  Ruby: { icon: "ruby/ruby-original" },
  "Ruby on Rails": { icon: "rails/rails-plain" },
  JavaScript: { icon: "javascript/javascript-original" },
  Python: { icon: "python/python-original" },
  Kotlin: { icon: "kotlin/kotlin-original" },
  Java: { icon: "java/java-original" },
  React: { icon: "react/react-original" },
  "Node.js": { icon: "nodejs/nodejs-original" },
  Android: { icon: "android/android-original" },
  PostgreSQL: { icon: "postgresql/postgresql-original" },
  MySQL: { icon: "mysql/mysql-original" },
  Redis: { icon: "redis/redis-original" },
  DynamoDB: { icon: "dynamodb/dynamodb-original" },
  RabbitMQ: { icon: "rabbitmq/rabbitmq-original" },
  "AWS (EC2, ECS, Lambda, S3)": {
    icon: "amazonwebservices/amazonwebservices-original-wordmark",
    invertOnDark: true,
  },
  Docker: { icon: "docker/docker-original" },
  Kubernetes: { icon: "kubernetes/kubernetes-original" },
  "GitHub Actions": { icon: "githubactions/githubactions-original" },
  Linux: { icon: "linux/linux-original" },
};

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
