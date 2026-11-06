<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commits, branches, and pull requests

Follow the shared rules in `/Users/jbastos/OpenBot/Shared/AGENTS.md`. In short:

- Commits use Conventional Commits: `<type>(<optional scope>): <short imperative summary>`, for example `feat(posts): add tag filter`. Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Branches use `<type>/<short-kebab-description>`, for example `fix/static-export-build`.
- PR titles use the same Conventional Commit form as the main change.
- Never commit directly to `main`, and never merge: open a pull request and let the user merge it.
- No AI attribution lines in commits or pull requests.
- Never commit secrets, tokens, `.env` files, or private personal data.
