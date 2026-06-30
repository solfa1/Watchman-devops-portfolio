import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names and intelligently merges Tailwind CSS classes.
 *
 * Example:
 * cn("px-4", isActive && "bg-cyan-400", "px-6")
 * => "bg-cyan-400 px-6"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
