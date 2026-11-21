/* Build-time SSR entry — used by scripts/prerender.mjs to render each route
   to static HTML so crawlers and no-JS fetchers see full page content. */

import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { getPageMeta, type PageMeta } from "./lib/pageMeta";
import { ARTICLES } from "./data/articles";

const BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

/** Every route prerendered to its own index.html at build time. */
export const PRERENDER_ROUTES: string[] = [
  "/",
  "/approach",
  "/care",
  "/practitioner",
  "/library",
  ...ARTICLES.map((a) => `/library/${a.slug}`),
  "/enquiry",
];

/** Render one route to HTML. `path` is the router path without the base
    (e.g. "/care"); MemoryRouter gets the full path + basename so Link hrefs
    match the hydrated client exactly. */
export function render(path: string): string {
  const fullPath = path === "/" ? `${BASE}/` : `${BASE}${path}`;
  return renderToString(
    <MemoryRouter basename={BASE} initialEntries={[fullPath]}>
      <App />
    </MemoryRouter>
  );
}

export function meta(path: string): PageMeta {
  return getPageMeta(path);
}

export { getPageMeta };
