import { Button } from "@/app/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 gap-6">
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>
    </main>
  );
}