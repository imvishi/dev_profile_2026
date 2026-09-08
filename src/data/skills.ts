import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Ruby", "JavaScript", "Python", "Kotlin", "Java", "SQL"],
  },
  {
    category: "Frontend Stack",
    items: ["React", "JavaScript"],
  },
  {
    category: "Backend Stack",
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
  },
  {
    category: "Mobile Application Development",
    items: ["Android", "Kotlin", "Java"],
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
