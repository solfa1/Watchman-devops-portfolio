import { notFound } from "next/navigation";

import TaskFlowArticle from "@/app/components/blog/TaskFlowArticle";
import { getBlogPostBySlug } from "@/app/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  if (slug === "building-taskflow") {
    return <TaskFlowArticle post={post} />;
  }

  notFound();
}