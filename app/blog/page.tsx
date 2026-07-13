import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/app/components/ui/Container";
import BlogPostCard from "@/app/components/blog/BlogPostCard";
import { blogPosts } from "@/app/data/blogPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <Container>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Portfolio
        </Link>

        <div className="mt-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technical Writing
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Blog
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Notes, lessons, and engineering decisions from building,
            deploying, troubleshooting, and operating systems.
          </p>
        </div>

        <div className="mt-16 grid gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}