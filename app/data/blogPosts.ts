export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-taskflow",
    title:
      "Building TaskFlow: What I Learned Building a Production-Style DevOps System From Scratch",
    description:
      "A practical look at building, securing, monitoring, automating, and troubleshooting a distributed DevOps system with Docker, Kubernetes, PostgreSQL, Redis, Prometheus, Grafana, Terraform, and GitHub Actions.",
    date: "2026",
    readingTime: "12 min read",
    tags: [
      "DevOps",
      "Kubernetes",
      "Docker",
      "Observability",
      "CI/CD",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}