import Button from "../ui/Button";
import StatusBadge from "./StatusBadge";
import TechnologyBadge from "./TechnologyBadge";

type DevelopmentProject = {
  title: string;
  type: string;
  status: string;
  tagline: string;
  description: string;
  currentFocus: string[];
  plannedStack: string[];
  links: {
    github: string;
    architecture: string;
    caseStudy: string;
  };
};

type DevelopmentProjectCardProps = {
  project: DevelopmentProject;
};

export default function DevelopmentProjectCard({
  project,
}: DevelopmentProjectCardProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/50 p-8 transition-all duration-300 hover:border-cyan-400/40">
      <div className="mb-6 flex items-center justify-between">
        <StatusBadge status={project.status} />

        <span className="text-sm text-slate-500">{project.type}</span>
      </div>

      <h3 className="text-3xl font-bold text-white">{project.title}</h3>

      <p className="mt-3 text-lg text-cyan-300">{project.tagline}</p>

      <p className="mt-6 leading-8 text-slate-300">{project.description}</p>

      <div className="mt-8">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Current Focus
        </h4>

        <ul className="space-y-2 text-slate-300">
          {project.currentFocus.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.plannedStack.map((tech) => (
          <TechnologyBadge key={tech} name={tech} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button>Architecture</Button>

        <Button variant="outline">GitHub</Button>

        <Button variant="secondary">Case Study</Button>
      </div>
    </div>
  );
}