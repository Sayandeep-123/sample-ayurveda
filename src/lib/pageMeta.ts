/* ------------------------------------------------------------------ */
/*  Per-route page metadata — single source of truth.                   */
/*  Used by usePageMeta (client head updates) and by the build-time    */
/*  prerender script (static <title>/description/canonical per page).  */
/* ------------------------------------------------------------------ */

import { getArticle } from "@/data/articles";

export type PageMeta = {
  title: string;
  description: string;
};

const STATIC: Record<string, PageMeta> = {
  "/": {
    title: "Root & Reason — Integrative Ayurveda, Explained | Concept",
    description:
      "A fictional integrative health practice concept: Ayurvedic observation and modern evidence at the same consultation table. Longer consults, plain-language plans, honest education.",
  },
  "/approach": {
    title: "Our Approach — Root & Reason | Concept",
    description:
      "How the fictional Root & Reason practice approaches healthcare: longer consultations, pattern-based assessment, tradition examined against evidence, rhythm-first plans, and real continuity.",
  },
  "/care": {
    title: "Areas of Care — Root & Reason | Concept",
    description:
      "Six broad areas of supportive, integrative care — digestive health, stress and sleep, women's cycle rhythm, skin, metabolic health, joints — each with honest boundaries.",
  },
  "/practitioner": {
    title: "The Practitioner — sample profile layout | Root & Reason concept",
    description:
      "A sample practitioner profile layout for the fictional Root & Reason concept: photo, qualification, experience and interest slots shown as clearly labelled placeholders.",
  },
  "/library": {
    title: "Knowledge Hub — Root & Reason | Concept",
    description:
      "Original educational articles on Ayurveda, digestion, daily rhythm, sleep, herbs and evidence — organised, searchable and written in plain language. Educational only.",
  },
  "/enquiry": {
    title: "Begin an Enquiry — Root & Reason | Concept",
    description:
      "Enquire about a first consultation with the fictional Root & Reason practice. Fictional contact details, clearly labelled — a concept demonstration with a validated sample form.",
  },
  "/404": {
    title: "Page not found — Root & Reason",
    description: "The page you were looking for isn't here.",
  },
};

const FALLBACK: PageMeta = STATIC["/404"];

/** Resolve head metadata for a router path (e.g. "/", "/care", "/library/<slug>"). */
export function getPageMeta(path: string): PageMeta {
  if (STATIC[path]) return STATIC[path];

  const match = path.match(/^\/library\/([^/]+)$/);
  if (match) {
    const article = getArticle(match[1]);
    if (article) {
      return {
        title: `${article.title} — Root & Reason Knowledge Hub`,
        description: article.excerpt,
      };
    }
  }

  return FALLBACK;
}
