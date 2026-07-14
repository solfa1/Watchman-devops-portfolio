"use client";

import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Engineering Stack", href: "#engineering-stack" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-[0.15em] text-white">
              WO
            </span>

            <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-400">
              DEVOPS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          {/* CTA */}
<Button asChild size="sm">
  <a
    href="/Watchman-Okoro-Devops-Cv.pdf"
    download="Watchman-Okoro-Devops-Cv.pdf"
  >
    Download CV
  </a>
</Button>
        </nav>
      </Container>
    </header>
  );
}