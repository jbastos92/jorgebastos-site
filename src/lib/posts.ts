import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Posts are Markdown files in content/posts/. The file name is the URL slug.
// Each file starts with a front matter block:
//
// ---
// title: My post
// date: 2026-11-06
// summary: One line shown in the list.
// tags: typescript, nextjs
// ---

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type Post = PostMeta & { html: string };

function parseFrontMatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { data, body: match[2] };
}

function readPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, body } = parseFrontMatter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    summary: data.summary ?? "",
    tags: data.tags ? data.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
    html: marked.parse(body, { async: false }),
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { html, ...meta } = readPost(slug);
      return meta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post {
  return readPost(slug);
}
