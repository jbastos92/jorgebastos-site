import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getPostSlugs } from "@/lib/posts";

// Static export: every post page is generated at build time; unknown slugs return 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/posts/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  return { title: post.title, description: post.summary };
}

export default async function PostPage(props: PageProps<"/posts/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  return (
    <article className="flex flex-col gap-6">
      <Link href="/posts/" className="text-sm text-zinc-500 hover:underline">
        ← All posts
      </Link>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <span className="text-sm text-zinc-500">
          {post.date}
          {post.tags.length > 0 && ` · ${post.tags.join(", ")}`}
        </span>
      </header>
      {/* Content comes from Markdown files in this repo, written by the site owner. */}
      <div className="prose-post" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
