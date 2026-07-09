import Container from "../ui/Container";
import { about } from "@/app/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-20 items-center bg-slate-900 py-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {about.heading}
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          
        </div>
      </Container>
    </section>
  );
}