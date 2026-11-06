# jorgebastos-site

Personal website: about, career, and side projects.

Built with Next.js (App Router, TypeScript, Tailwind CSS) as a static export, hosted on Cloudflare Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # writes the static site to out/
```

## Deploy

Cloudflare Pages builds every push to `main` (production) and every pull request (preview).

- Build command: `npm run build`
- Output directory: `out`
