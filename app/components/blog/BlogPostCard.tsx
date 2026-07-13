import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import type { BlogPost } from "@/app/data/blogPosts";

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({
  post,
}: BlogPostCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5 sm:p-8">
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="mt-6 text-2xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-400 sm:text-3xl">
        {post.title}
      </h2>

      <p className="mt-4 max-w-3xl leading-7 text-slate-400">
        {post.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
        <span>{post.date}</span>

        <span
          className="h-1 w-1 rounded-full bg-slate-600"
          aria-hidden="true"
        />

        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4" aria-hidden="true" />
          {post.readingTime}
        </span>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
      >
        Read Article

        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}