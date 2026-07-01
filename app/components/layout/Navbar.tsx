"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Engineering Stack" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50  transition-all duration-500 ease-out${
        scrolled
          ? "border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          <Link
  href="/"
  className="flex flex-col leading-none"
>
  <span className="text-xl font-extrabold tracking-[0.15em] text-white">
    WO
  </span>

  <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-cyan-400">
    DEVOPS
  </span>
</Link>

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
text-sm
font-medium
text-slate-300
transition-all
duration-200
hover:-translate-y-0.5
hover:text-cyan-400
"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button>
  <Download className="mr-2 h-4 w-4" />

  Download CV
</Button>
        </nav>
      </Container>
    </header>
  );
}