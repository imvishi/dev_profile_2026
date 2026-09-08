import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Stacks",
    items: ["Ruby on Rails", "React", "JavaScript", "Python", "Kotlin", "SQL"],
  },
  {
    category: "Architecture & System Design",
    items: [
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "High-Level Design (HLD)",
      "Low-Level Design (LLD)",
      "Multi-Tenant SaaS Architecture",
      "REST APIs",
      "gRPC",
    ],
  },
  {
    category: "Databases & Messaging",
    items: ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "RabbitMQ"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS (EC2, ECS, Lambda, S3)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux"],
  },
];
