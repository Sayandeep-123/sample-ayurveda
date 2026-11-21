import { useEffect } from "react";
import { getPageMeta } from "./pageMeta";
import { SITE_BASE, SITE_ORIGIN } from "./siteBase";

/**
 * Per-route head management on the client: title, description, canonical.
 * The build-time prerender script bakes the same values (from getPageMeta)
 * into each static page's HTML, so crawlers that never run JavaScript still
 * see the right head for every route.
 */
export function usePageMeta(path: string) {
  const { title, description } = getPageMeta(path);

  useEffect(() => {
    document.title = title;

    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = description;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const rel = path === "/" ? "" : `${path.replace(/^\//, "")}/`;
    canonical.href = `${SITE_ORIGIN}${SITE_BASE}${rel}`;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [title, description, path]);
}
