export interface Technology {
  name: string;
  details: string[];
}

export type EngineeringIcon =
  | "cloud"
  | "layers"
  | "boxes"
  | "git-branch"
  | "activity"
  | "shield"
  | "terminal";

export interface EngineeringCategory {
  id: string;
  title: string;
  description: string;
  accent: string;
  icon: EngineeringIcon;
  technologies: Technology[];
}

export const engineeringCategories: EngineeringCategory[] = [
  {
    id: "cloud",
    title: "Cloud & Compute",
    description:
      "Building scalable cloud infrastructure and application platforms on AWS.",
    accent: "blue",
    icon: "cloud",
    technologies: [
      {
        name: "AWS",
        details: [
          "EC2",
          "ECS",
          "Fargate",
          "Lambda",
          "S3",
          "CloudFront",
          "IAM",
          "VPC",
          "Route 53",
          "API Gateway",
          "RDS",
          "CloudWatch",
        ],
      },
    ],
  },
  {
    id: "terraform",
    title: "Infrastructure as Code",
    description:
      "Provisioning repeatable infrastructure through version-controlled automation.",
    accent: "purple",
    icon: "layers",
    technologies: [
      {
        name: "Terraform",
        details: [
          "Modules",
          "Variables",
          "Outputs",
          "Providers",
          "Remote State",
          "State Locking",
          "Reusable Infrastructure",
        ],
      },
    ],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    description:
      "Packaging, deploying and managing containerized applications.",
    accent: "cyan",
    icon: "boxes",
    technologies: [
      {
        name: "Docker",
        details: [
          "Dockerfiles",
          "Docker Compose",
          "Multi-stage Builds",
          "Image Optimisation",
        ],
      },
      {
        name: "Kubernetes",
        details: [
          "Deployments",
          "Services",
          "Ingress",
          "Secrets",
          "Rolling Updates",
          "Autoscaling",
        ],
      },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD Automation",
    description:
      "Automating builds, testing and deployments through modern delivery pipelines.",
    accent: "green",
    icon: "git-branch",
    technologies: [
      {
        name: "GitHub Actions",
        details: [
          "Reusable Workflows",
          "Secrets",
          "Caching",
          "Build Validation",
          "Deployment Pipelines",
        ],
      },
      {
        name: "Git",
        details: [
          "Feature Branches",
          "Pull Requests",
          "Merge Strategies",
          "Conventional Commits",
        ],
      },
    ],
  },
  {
    id: "observability",
    title: "Observability",
    description:
      "Monitoring system health, performance and reliability through metrics and logs.",
    accent: "orange",
    icon: "activity",
    technologies: [
      {
        name: "Prometheus",
        details: [
          "Metrics Collection",
          "Service Scraping",
          "Exporters",
          "Alerting Rules",
        ],
      },
      {
        name: "Grafana",
        details: [
          "Dashboards",
          "Visualisation",
          "Alerting",
          "Performance Analysis",
        ],
      },
      {
        name: "CloudWatch",
        details: [
          "Logs",
          "Metrics",
          "Alarms",
          "Application Monitoring",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    description:
      "Building secure systems using least privilege and defence-in-depth practices.",
    accent: "red",
    icon: "shield",
    technologies: [
      {
        name: "Security Practices",
        details: [
          "IAM",
          "Least Privilege",
          "JWT",
          "Secrets Management",
          "Security Groups",
          "Input Validation",
        ],
      },
    ],
  },
  {
    id: "linux",
    title: "Linux & Networking",
    description:
      "Operating Linux servers and troubleshooting production networking.",
    accent: "slate",
    icon: "terminal",
    technologies: [
      {
        name: "Linux & Networking",
        details: [
          "Ubuntu",
          "Bash",
          "SSH",
          "Systemd",
          "DNS",
          "TCP/IP",
          "Nginx",
        ],
      },
    ],
  },
];