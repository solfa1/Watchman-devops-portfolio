import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg hover:shadow-cyan-500/30",

    secondary:
      "bg-slate-800 text-white hover:bg-slate-700",

    outline:
      "border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3",

    lg: "px-8 py-4 text-lg",
  };

  const styles = clsx(
    base,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}