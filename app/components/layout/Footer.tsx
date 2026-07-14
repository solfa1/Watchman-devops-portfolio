import Container from "@/app/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950">
      <Container>
        <div className="py-10">
          <p className="text-lg font-bold text-white">
            Watchman Okoro
          </p>

          <p className="mt-1 text-sm text-slate-400">
            DevOps & Reliability Engineer
          </p>

          <p className="mt-6 border-t border-slate-800/70 pt-6 text-sm text-slate-500">
            © 2026 Watchman Okoro. Built with Next.js and TypeScript.
          </p>
        </div>
      </Container>
    </footer>
  );
}