import Link from "next/link";
import { profile } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

export default function About() {
  const latest = getAllPosts().slice(0, 3);
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {profile.role} · {profile.location}
        </p>
        {profile.about.map((p) => (
          <p key={p} className="leading-7">
            {p}
          </p>
        ))}
        <ul className="flex gap-4">
          {profile.links.map((l) => (
            <li key={l.href}>
              <a className="font-medium underline underline-offset-4" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {latest.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Currently studying</h2>
          <ul className="flex flex-col gap-2">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}/`} className="underline underline-offset-4">
                  {post.title}
                </Link>{" "}
                <span className="text-sm text-zinc-500">{post.date}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
