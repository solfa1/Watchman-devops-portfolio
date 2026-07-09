import { featuredProject } from "@/app/data/projects";
import StatusBadge from "./StatusBadge";
import TechnologyBadge from "./TechnologyBadge";
import Button from "../ui/Button";

export default function FeaturedProjectCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all duration-300 hover:border-cyan-400/40">
      <div className="mb-6 flex items-center justify-between">
        <StatusBadge status={featuredProject.status} />

        <span className="text-sm text-slate-500">
          Featured Project
        </span>
      </div>

      <h3 className="text-3xl font-bold text-white">
        {featuredProject.title}
      </h3>

      <p className="mt-3 text-lg text-cyan-300">
        {featuredProject.tagline}
      </p>

      <p className="mt-6 leading-8 text-slate-300">
        {featuredProject.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {featuredProject.technologies.map((tech) => (
          <TechnologyBadge
            key={tech}
            name={tech}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button>Architecture</Button>

        <Button variant="outline">
          GitHub
        </Button>

        <Button variant="secondary">
          Case Study
        </Button>
      </div>
    </div>
  );
}