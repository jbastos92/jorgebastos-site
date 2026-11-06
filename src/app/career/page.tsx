import type { Metadata } from "next";
import { career } from "@/content/site";

export const metadata: Metadata = { title: "Career" };

export default function Career() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight">Career</h1>
      <ol className="flex flex-col gap-8">
        {career.map((job) => (
          <li key={`${job.company}-${job.period}`} className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">
                {job.role} · {job.company}
              </h2>
              <span className="text-sm text-zinc-500">{job.period}</span>
            </div>
            <ul className="list-disc pl-5 leading-7 text-zinc-700 dark:text-zinc-300">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
