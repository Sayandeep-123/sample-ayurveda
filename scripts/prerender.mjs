/* Post-build prerender: writes a static index.html per route (plus 404.html)
 * from the SSR bundle in dist-ssr/, so every page ships full server-rendered
 * content to crawlers and fetchers that never run JavaScript.
 *
 * Run via `npm run build` (after `vite build` and the SSR build). Requires the
 * production base path — keep in sync with vite.config.ts.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = path.resolve("dist");
const SSR = path.resolve("dist-ssr/entry-server.js");
const SITE = "https://sayandeep-123.github.io/sample-ayurveda";
const BASE = "/sample-ayurveda/";

const { render, PRERENDER_ROUTES, meta } = await import(pathToFileURL(SSR).href);

const template = readFileSync(path.join(DIST, "index.html"), "utf8");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function buildPage(body, pageMeta, canonicalPath) {
  const canonicalUrl = `${SITE}${canonicalPath}`;
  let out = template;

  // body content into #root
  out = out.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${body}</div>`
  );

  // base-rewrite any relative public/ asset refs for nested route folders
  out = out.replace(/src="images\//g, `src="${BASE}images/`);

  // per-route head
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(pageMeta.title)}</title>`);
  out = out.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${esc(pageMeta.description)}$2`
  );
  out = out.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${esc(pageMeta.title)}$2`
  );
  out = out.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${esc(pageMeta.description)}$2`
  );
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`);
  out = out.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${esc(pageMeta.title)}$2`
  );
  out = out.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${esc(pageMeta.description)}$2`
  );
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`);

  return out;
}

let count = 0;
for (const route of PRERENDER_ROUTES) {
  const body = render(route);
  const canonicalPath = route === "/" ? "/" : `${route}/`;
  const html = buildPage(body, meta(route), canonicalPath);
  const outDir = route === "/" ? DIST : path.join(DIST, route.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "index.html"), html);
  count += 1;
}

// Unknown paths: GitHub Pages serves 404.html — prerender the NotFound page.
{
  const body = render("/__not-found__");
  const html = buildPage(body, meta("/404"), "/404/");
  writeFileSync(path.join(DIST, "404.html"), html);
  count += 1;
}

console.log(`prerendered ${count} pages into dist/`);
