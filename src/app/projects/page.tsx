import type { Metadata } from "next";
import { projects } from "@/content/site";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.name}
            className="flex flex-col gap-3 rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <h2 className="text-lg font-semibold">
              {p.href ? (
                <a href={p.href} className="underline underline-offset-4">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </h2>
            <p className="leading-7 text-zinc-700 dark:text-zinc-300">{p.description}</p>
            <ul className="flex flex-wrap gap-2 text-xs">
              {p.stack.map((s) => (
                <li key={s} className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
