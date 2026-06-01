// Generates public/sitemap.xml at build time. Reads project slugs without
// importing TS asset files — keeps slugs in sync via a small allowlist.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const BASE = "https://example.github.io/buckandsimple";

// Extract slugs from src/lib/projects.ts via a simple regex (no TS runtime).
const projectsSrc = readFileSync(resolve(root, "src/lib/projects.ts"), "utf8");
const slugs = Array.from(projectsSrc.matchAll(/slug:\s*["']([^"']+)["']/g)).map(
  (m) => m[1],
);

const staticPaths = ["/", "/studio", "/work", "/media", "/contact"];
const projectPaths = slugs.map((s) => `/work/${s}`);

const urls = [...staticPaths, ...projectPaths]
  .map(
    (p) =>
      `  <url><loc>${BASE}${p === "/" ? "/" : p}</loc><changefreq>monthly</changefreq></url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

mkdirSync(resolve(root, "public"), { recursive: true });
writeFileSync(resolve(root, "public/sitemap.xml"), xml);
console.log(`Wrote sitemap with ${staticPaths.length + projectPaths.length} URLs`);
