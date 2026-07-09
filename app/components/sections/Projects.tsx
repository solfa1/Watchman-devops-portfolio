import Container from "../ui/Container";
import FeaturedProjectCard from "../projects/FeaturedProjectCard";
import DevelopmentProjectCard from "../projects/DevelopmentProjectCard";
import { activeProjects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen scroll-mt-20 items-center bg-slate-950 py-24"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white lg:text-5xl">
            Building reliable systems that solve real problems.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A collection of production-ready infrastructure projects and
            platforms currently in development, showcasing cloud engineering,
            automation, observability and scalable system design.
          </p>

          <div className="mt-16 space-y-10">
            <FeaturedProjectCard />

            {activeProjects.map((project) => (
  <DevelopmentProjectCard key={project.title} project={project} />
))}
          </div>
        </div>
      </Container>
    </section>
  );
}