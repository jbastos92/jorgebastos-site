import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Posts" };

export default function Posts() {
  const posts = getAllPosts();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Posts</h1>
        <p className="text-zinc-600 dark:text-zinc-400">Notes on what I am studying right now.</p>
      </div>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug} className="flex flex-col gap-1">
              <Link href={`/posts/${post.slug}/`} className="text-lg font-semibold underline underline-offset-4">
                {post.title}
              </Link>
              <span className="text-sm text-zinc-500">
                {post.date}
                {post.tags.length > 0 && ` · ${post.tags.join(", ")}`}
              </span>
              {post.summary && <p className="text-zinc-700 dark:text-zinc-300">{post.summary}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
