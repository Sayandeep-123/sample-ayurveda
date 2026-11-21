import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ARTICLES, CATEGORIES, FEATURED_SLUG, type Category } from "@/data/articles";
import { ArticleCard, ArticleFeature } from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import { Eyebrow, PulseLine } from "@/components/bits";
import { IconClose, IconSearch } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

type Filter = "All" | Category;

export default function Library() {
  usePageMeta("/library");

  const [params, setParams] = useSearchParams();
  const initialCat = (params.get("cat") as Filter | null) ?? "All";
  const [filter, setFilter] = useState<Filter>(
    initialCat === "All" || CATEGORIES.includes(initialCat as Category) ? initialCat : "All"
  );
  const [query, setQuery] = useState("");

  const applyFilter = (f: Filter) => {
    setFilter(f);
    if (f === "All") setParams({}, { replace: true });
    else setParams({ cat: f }, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const inCat = filter === "All" || a.category === filter;
      const inQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [filter, query]);

  const showFeatured = filter === "All" && !query.trim();
  const featured = ARTICLES.find((a) => a.slug === FEATURED_SLUG)!;
  const rest = filtered.filter((a) => a.slug !== FEATURED_SLUG || !showFeatured);

  return (
    <>
      <section className="border-b border-olive/20 bg-parchment/60 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16">
          <Reveal>
            <Eyebrow>The Knowledge Hub</Eyebrow>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
            <Reveal delay={90}>
              <h1 className="max-w-2xl font-display text-[clamp(2.4rem,5.2vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
                What we'd explain <em className="italic text-saffron">anyway</em>, written down.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="max-w-sm text-[15.5px] leading-relaxed text-ink-soft">
                Educational writing from the practice — plain language, honest about evidence, and
                organised to outlive a social feed. {ARTICLES.length} articles and growing.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-10 rounded-2xl border border-olive/25 bg-linen p-6 sm:p-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-moss">
              How this library handles evidence
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-2.5 text-[14px] leading-relaxed text-ink-soft sm:grid-cols-2">
              <li className="flex items-start gap-2.5">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                Original sample articles written for this concept — not copied from anyone's posts.
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                No fabricated studies or statistics; where evidence is thin, the article says so.
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                Ayurvedic concepts are presented as traditional frameworks, never as diagnoses.
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                Every article lists reputable sources and signposts to qualified medical care.
              </li>
            </ul>
          </Reveal>

          {/* search + filters */}
          <Reveal delay={220} className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-md">
              <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-olive" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles — try “sleep” or “herbs”…"
                aria-label="Search articles"
                className="field rounded-full! py-3! pl-11! pr-11!"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3.5 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-olive hover:bg-parchment hover:text-ink"
                  aria-label="Clear search"
                >
                  <IconClose className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">
              {(["All", ...CATEGORIES] as Filter[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => applyFilter(f)}
                  aria-pressed={filter === f}
                  className={`shrink-0 rounded-full border px-4.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300 ${
                    filter === f
                      ? "border-moss bg-moss text-cream shadow-md shadow-moss/20"
                      : "border-olive/35 bg-linen text-ink-soft hover:border-moss hover:text-moss"
                  }`}
                >
                  {f}
                  {f === "All" ? ` (${ARTICLES.length})` : ""}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-olive" aria-live="polite">
          Showing {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          {filter !== "All" && <> in <span className="text-saffron">{filter}</span></>}
          {query.trim() && <> for “{query.trim()}”</>}
        </p>

        {filtered.length === 0 ? (
          <Reveal className="mt-10 rounded-2xl border border-dashed border-olive/40 bg-linen p-12 text-center">
            <p className="font-display text-2xl font-medium italic text-ink">Nothing here — yet.</p>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
              No articles match that search in this category. Try a broader word, or clear the
              filters below.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                applyFilter("All");
              }}
              className="mt-6 rounded-full bg-moss px-6 py-3 text-[14px] font-semibold tracking-tight text-cream transition-colors hover:bg-moss-deep"
            >
              Clear search &amp; filters
            </button>
          </Reveal>
        ) : (
          <>
            {showFeatured && filtered.some((a) => a.slug === FEATURED_SLUG) && (
              <Reveal className="mt-8">
                <ArticleFeature article={featured} />
              </Reveal>
            )}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 3) * 80}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
          </>
        )}

        <PulseLine className="mt-20 text-sage" />
        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">
            These articles are educational companions, not prescriptions. For anything personal,
            specific or worrying — that's what a consultation is for.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-olive">
            Original sample content · concept demonstration
          </p>
        </Reveal>
      </section>
    </>
  );
}
