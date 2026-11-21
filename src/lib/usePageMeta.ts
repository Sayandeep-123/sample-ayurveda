import { useEffect } from "react";

/**
 * Per-route SEO metadata: title, description, canonical (hash-based URLs).
 * A real deployment would server-render these; for the concept SPA this keeps
 * the document head correct for each view.
 */
export function usePageMeta(title: string, description: string, path: string) {
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
    canonical.href = `${window.location.origin}${window.location.pathname}#${path}`;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [title, description, path]);
}
