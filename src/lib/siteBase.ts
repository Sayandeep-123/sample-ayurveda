/* Deployment base path — single source of truth shared by the client bundle
   and the SSR/prerender build. Set via Vite `define` in vite.config.ts;
   deliberately NOT import.meta.env.BASE_URL, which vite-plugin-singlefile
   rewrites to "./". Always leading + trailing slash ("/" for a root deploy,
   "/sample-ayurveda/" for the GitHub Pages project site). */
export const SITE_BASE: string = __SITE_BASE__;

/** SITE_BASE without the trailing slash, for Router basename ("/sample-ayurveda"). */
export const SITE_BASENAME: string = SITE_BASE.replace(/\/$/, "");

/** Absolute URL prefix used in canonical/OG tags. */
export const SITE_ORIGIN: string = "https://sayandeep-123.github.io";

/** Absolute asset URL for a file in public/ (e.g. "images/hero-pulse.jpg"). */
export function assetUrl(rel: string): string {
  return `${SITE_BASE}${rel.replace(/^\//, "")}`;
}
