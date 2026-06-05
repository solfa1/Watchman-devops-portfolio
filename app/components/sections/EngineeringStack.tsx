import Container from "@/app/components/ui/Container";
import SectionTitle from "@/app/components/ui/SectionTitle";
import EngineeringCategoryCard from "@/app/components/engineering/EngineeringCategoryCard";
import { engineeringCategories } from "@/app/data/engineeringStack";

export default function EngineeringStack() {
  return (
    <section
      id="engineering-stack"
      className="min-h-screen scroll-mt-20 bg-slate-950 py-24"
    >
      <Container>
        <SectionTitle
  eyebrow="Capabilities"
  title="Engineering Stack"
  description="The technologies and engineering practices I use to design, deploy and operate production-ready systems."

        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {engineeringCategories.map((category) => (
            <EngineeringCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}