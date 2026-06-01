## Goal

Ship a static build of the Buck & Simple site that GitHub Pages can serve from `https://<user>.github.io/buckandsimple/`, with all routes, assets, and SEO working.

## Heads-up: this is a one-way door for SSR

The current project runs on TanStack Start (SSR on Cloudflare Workers) and the Lovable preview/published site depends on that. To target GitHub Pages we must remove the server runtime entirely. After this conversion:

- No `createServerFn`, no server routes (`src/routes/api/*`, `sitemap[.]xml.ts`).
- No SSR — pages render client-side only. SEO `<title>`/meta still work via a small head manager, but crawlers see an empty shell until JS runs (acceptable for GitHub Pages, slightly worse for SEO than SSR).
- The Lovable preview will switch to serving the SPA build. The current `buckandsimple.lovable.app` deployment will also become SPA-only.

If you'd rather keep SSR on Lovable AND have a GitHub mirror, stop here and tell me — Cloudflare Pages or Vercel keeps SSR for free.

## What I'll change

### 1. Swap the build stack

- Replace `@lovable.dev/vite-tanstack-config` + `@tanstack/react-start` + `nitro` with a plain Vite SPA setup:
  - `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`
  - `@tanstack/router-plugin` in `code-splitter`/file-based mode (keeps the existing `src/routes/` file-based routing and `routeTree.gen.ts`)
- New `vite.config.ts`:
  ```ts
  base: "/buckandsimple/"
  plugins: [TanStackRouterVite({ target: "react" }), react(), tailwindcss(), tsconfigPaths()]
  ```
- Remove `src/server.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts` (SSR-only).

### 2. Add an SPA entry

- New `index.html` at project root with `<div id="root">` and `<script type="module" src="/src/main.tsx">`.
- New `src/main.tsx` that creates the router and mounts `<RouterProvider />`.
- Convert `src/routes/__root.tsx` from `createRootRoute` with `shellComponent` to a regular root layout (no `<html>/<head>/<body>` — those live in `index.html` now).
- Add a tiny head manager (set `document.title` + meta tags in a `useEffect` per route, or use `react-helmet-async`) so each route still updates `<title>` and OG tags.

### 3. Router basename

- `createRouter({ basepath: "/buckandsimple" })` so `<Link to="/work">` resolves to `/buckandsimple/work`.

### 4. Delete server-only routes

- Remove `src/routes/sitemap[.]xml.ts` (server route). Replace with a static `public/sitemap.xml` generated at build time by a small Node script in `scripts/generate-sitemap.mjs` that imports `src/lib/projects.ts` and writes the file before `vite build`.
- Add `public/robots.txt` pointing to the new sitemap URL (`https://<user>.github.io/buckandsimple/sitemap.xml`).

### 5. GitHub Pages SPA fallback

- Add `public/404.html` that's a copy of `index.html` (GitHub Pages serves it for unknown paths, letting the SPA router take over and render the right route).
- Add `.nojekyll` in `public/` so Pages doesn't strip `_`-prefixed files.

### 6. GitHub Actions workflow

- `.github/workflows/deploy.yml`:
  - Trigger on push to `main`
  - `bun install`, `bun run build`
  - Upload `dist/` as Pages artifact, deploy via `actions/deploy-pages@v4`

### 7. Asset paths

- All current asset usage goes through ES imports (`import hero from "@/assets/hero-home.jpg"`), which Vite rewrites to include the base path automatically — no manual changes needed.
- Audit for any hardcoded `/assets/...` or `/images/...` strings and switch to imports.

## Deliverables

After approval I'll:
1. Make the file changes above.
2. Run `bun run build` and verify `dist/` contains `index.html`, `404.html`, hashed assets under `dist/assets/`, and `sitemap.xml`.
3. Give you the exact commands:
   ```bash
   git init && git remote add origin git@github.com:<user>/buckandsimple.git
   git add . && git commit -m "Initial SPA build"
   git push -u origin main
   ```
   Then in the GitHub repo: **Settings → Pages → Source: GitHub Actions**. The workflow handles the rest on every push.

## Confirm before I proceed

Reply "go" and I'll execute. If you want to keep SSR somewhere (Cloudflare Pages / Vercel) in parallel, say so and I'll structure the conversion differently.