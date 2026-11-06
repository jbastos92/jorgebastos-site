---
title: How to write a post (example)
date: 2026-11-06
summary: Example post. Shows the format for study notes; delete or replace it.
tags: meta
---

This is an **example post**. To publish a new one:

1. Create a file in `content/posts/`, for example `content/posts/learning-rust.md`. The file name becomes the URL: `/posts/learning-rust/`.
2. Start it with the front matter block: `title`, `date` (YYYY-MM-DD), `summary`, and `tags` (comma-separated).
3. Write the body in Markdown.
4. Push to `main`. Cloudflare Pages rebuilds the site in about a minute.

## What Markdown supports

- Headings, lists, and **bold** or *italic* text
- [Links](https://github.com/jbastos92)
- Code blocks:

```ts
const topic: string = "what I am studying";
```
