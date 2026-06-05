"use client";

import { useState } from "react";
import {
  Activity,
  Boxes,
  ChevronDown,
  Cloud,
  GitBranch,
  Layers3,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";

import type {
  EngineeringCategory,
  EngineeringIcon,
} from "@/app/data/engineeringStack";

type EngineeringCategoryCardProps = {
  category: EngineeringCategory;
};

const iconMap: Record<EngineeringIcon, LucideIcon> = {
  cloud: Cloud,
  layers: Layers3,
  boxes: Boxes,
  "git-branch": GitBranch,
  activity: Activity,
  shield: ShieldCheck,
  terminal: Terminal,
};

const accentStyles: Record<
  string,
  {
    card: string;
    icon: string;
    button: string;
    bullet: string;
  }
> = {
  blue: {
    card: "border-blue-500/30 hover:border-blue-400/70 hover:shadow-blue-500/10",
    icon: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    button: "border-blue-500/30 text-blue-300 hover:bg-blue-500/10",
    bullet: "bg-blue-400",
  },
  purple: {
    card: "border-purple-500/30 hover:border-purple-400/70 hover:shadow-purple-500/10",
    icon: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    button: "border-purple-500/30 text-purple-300 hover:bg-purple-500/10",
    bullet: "bg-purple-400",
  },
  cyan: {
    card: "border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-cyan-500/10",
    icon: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    button: "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10",
    bullet: "bg-cyan-400",
  },
  green: {
    card: "border-green-500/30 hover:border-green-400/70 hover:shadow-green-500/10",
    icon: "border-green-500/30 bg-green-500/10 text-green-400",
    button: "border-green-500/30 text-green-300 hover:bg-green-500/10",
    bullet: "bg-green-400",
  },
  orange: {
    card: "border-orange-500/30 hover:border-orange-400/70 hover:shadow-orange-500/10",
    icon: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    button: "border-orange-500/30 text-orange-300 hover:bg-orange-500/10",
    bullet: "bg-orange-400",
  },
  red: {
    card: "border-red-500/30 hover:border-red-400/70 hover:shadow-red-500/10",
    icon: "border-red-500/30 bg-red-500/10 text-red-400",
    button: "border-red-500/30 text-red-300 hover:bg-red-500/10",
    bullet: "bg-red-400",
  },
  slate: {
    card: "border-slate-500/30 hover:border-slate-300/70 hover:shadow-slate-500/10",
    icon: "border-slate-500/30 bg-slate-500/10 text-slate-300",
    button: "border-slate-500/30 text-slate-300 hover:bg-slate-500/10",
    bullet: "bg-slate-300",
  },
};

export default function EngineeringCategoryCard({
  category,
}: EngineeringCategoryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = iconMap[category.icon];
  const accent = accentStyles[category.accent] ?? accentStyles.cyan;
  const detailsId = `${category.id}-details`;

  return (
    <article
      className={`rounded-2xl border bg-slate-950/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accent.card}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${accent.icon}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${accent.button}`}
          aria-expanded={isOpen}
          aria-controls={detailsId}
        >
          {isOpen ? "Hide Skills" : "View Skills"}

          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          {category.id}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {category.title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
          {category.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.technologies.map((technology) => (
          <span
            key={technology.name}
            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
          >
            {technology.name}
          </span>
        ))}
      </div>

      {isOpen && (
        <div
          id={detailsId}
          className="mt-6 grid gap-6 border-t border-slate-800 pt-6 md:grid-cols-2"
        >
          {category.technologies.map((technology) => (
            <div key={technology.name}>
              <h4 className="font-semibold text-white">
                {technology.name}
              </h4>

              <ul className="mt-3 space-y-2">
                {technology.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bullet}`}
                    />

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}