import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ARTICLES, ARTICLE_SOURCES, getArticle, relatedArticles, type Block } from "@/data/articles";
import { ArticleCard, Meta } from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import { Eyebrow, PulseLine } from "@/components/bits";
import { IconArrow, IconCheck, IconClock } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

function BodyBlock({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p>{block.x}</p>;
    case "h2":
      return <h2>{block.x}</h2>;
    case "list":
      return (
        <ul className="mb-7 mt-2 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3.5 text-[15.5px] leading-relaxed text-ink-soft">
              <svg viewBox="0 0 28 12" className="mt-2 h-3 w-6 shrink-0 text-saffron" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M1 6h7l2.5-4 3.5 8 2.5-5 1.5 1h9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-9 border-l-2 border-saffron pl-6 font-display text-[1.5rem] font-medium italic leading-snug tracking-tight text-moss">
          “{block.x}”
        </blockquote>
      );
    case "note":
      return (
        <aside className="my-9 rounded-xl border border-olive/30 bg-parchment/70 p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay">A note on evidence</p>
          <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{block.x}</p>
        </aside>
      );
  }
}

export default function Article() {
  const { slug = "" } = useParams();
  const article = getArticle(slug);

  usePageMeta(
    article ? `${article.title} — Root & Reason Knowledge Hub` : "Article not found — Root & Reason",
    article ? article.excerpt : "The article you were looking for isn't here.",
    `/library/${slug}`
  );

  /* reading progress */
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  if (!article) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 pt-32 text-center">
        <p className="font-display text-6xl font-medium italic text-saffron">404</p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink">
          This article has gone off rhythm.
        </h1>
        <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
          The page you're looking for doesn't exist — perhaps a link was mistyped.
        </p>
        <Link to="/library" className="mt-7 inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-[14px] font-semibold tracking-tight text-cream transition-colors hover:bg-moss-deep">
          Back to the Knowledge Hub <IconArrow className="h-4 w-4" />
        </Link>
      </section>
    );
  }

  const related = relatedArticles(article);
  const toc = article.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2");
  const next = ARTICLES[(ARTICLES.findIndex((a) => a.slug === article.slug) + 1) % ARTICLES.length];

  return (
    <>
      {/* progress bar */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden>
        <div className="h-full bg-saffron transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <article>
        {/* header */}
        <header className="border-b border-olive/20 bg-parchment/60 pt-32 sm:pt-36">
          <div className="mx-auto max-w-4xl px-5 pb-14 sm:px-8">
            <Reveal>
              <Link to="/library" className="link-line inline-flex items-center gap-2 text-[13.5px] font-semibold tracking-tight text-moss">
                <IconArrow className="h-4 w-4 rotate-180" /> All articles
              </Link>
            </Reveal>
            <Reveal delay={80} className="mt-7">
              <Meta article={article} />
            </Reveal>
            <Reveal delay={140}>
              <h1 className="mt-5 font-display text-[clamp(2.1rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.015em] text-ink">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{article.excerpt}</p>
            </Reveal>
            <Reveal delay={260} className="mt-7 flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full border border-olive/30 bg-moss font-mono text-[11px] tracking-widest text-cream"
                >
                  R&amp;R
                </span>
                <span className="leading-tight">
                  <span className="block text-[14px] font-semibold tracking-tight text-ink">
                    Practice editorial team
                  </span>
                  <span className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-olive">
                    Sample byline — author TBC
                  </span>
                </span>
              </span>
              <span className="hidden h-6 w-px bg-olive/30 sm:block" aria-hidden />
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-olive">
                <IconClock className="h-4 w-4" /> {article.readMins} minute read
              </span>
            </Reveal>
          </div>
        </header>

        {/* body */}
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12">
          {/* toc */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive">In this article</p>
              <nav className="mt-4 border-l border-olive/25" aria-label="Table of contents">
                {toc.map((h, i) => (
                  <a
                    key={h.x}
                    href={`#/library/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(`sec-${i}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="-ml-px block border-l-2 border-transparent py-2 pl-4 text-[13.5px] leading-snug text-ink-soft transition-all duration-300 hover:border-saffron hover:text-moss"
                  >
                    {h.x}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-xl border border-olive/25 bg-linen p-5">
                <p className="font-display text-[1.05rem] font-medium tracking-tight text-ink">
                  Questions of your own?
                </p>
                <Link to="/enquiry" className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-tight text-saffron">
                  Begin an enquiry <IconArrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal>
              <figure className="overflow-hidden rounded-2xl border border-olive/25 shadow-lg shadow-moss/10">
                <img src={article.cover} alt={article.coverAlt} className="aspect-[16/9] w-full object-cover" fetchPriority="high" decoding="async" />
              </figure>
            </Reveal>

            {/* takeaways */}
            <Reveal delay={100} className="mt-10 rounded-xl bg-moss p-6 text-cream sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-sage">In short</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {article.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-cream/85">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-saffron" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="article-body mt-10">
              {article.body.map((b, i) =>
                b.t === "h2" ? (
                  <div key={i} id={`sec-${toc.indexOf(b)}`} className="scroll-mt-28">
                    <BodyBlock block={b} />
                  </div>
                ) : (
                  <BodyBlock key={i} block={b} />
                )
              )}
            </div>

            <aside className="mt-10 rounded-xl border border-olive/30 bg-parchment/70 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-moss">
                Sources &amp; further reading
              </p>
              <ul className="mt-3 space-y-2.5">
                {(ARTICLE_SOURCES[article.slug] ?? []).map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line text-[14px] font-medium tracking-tight text-moss"
                    >
                      {s.label}
                      <span aria-hidden> ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3.5 text-[12.5px] leading-relaxed text-ink-soft">
                Reputable overviews for further reading — not citations for specific sentences. In a
                live deployment, sentence-level clinical claims would each carry their own guideline
                reference.
              </p>
            </aside>

            <aside className="mt-6 rounded-xl border border-clay/30 bg-clay/5 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay">Educational disclaimer</p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                This article is original sample content written for a fictional practice concept. It
                is educational information, not medical advice, diagnosis or treatment — and it does
                not replace a consultation with your own qualified doctors.
              </p>
            </aside>

            {/* author */}
            <Reveal className="mt-12 rounded-2xl border border-dashed border-olive/40 bg-linen p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-olive">Written by — slot</p>
              <p className="mt-2 font-display text-xl font-medium tracking-tight text-ink-soft">
                [ Author name &amp; credentials — to be confirmed ]
              </p>
              <p className="mt-1.5 max-w-lg text-[13.5px] leading-relaxed text-ink-soft">
                In a live site this card would name the author and link their verified profile —{" "}
                <Link to="/practitioner" className="link-line font-semibold text-moss">
                  see the sample profile layout
                </Link>
                .
              </p>
            </Reveal>

            {/* next */}
            <Reveal className="mt-10">
              <Link
                to={`/library/${next.slug}`}
                className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-olive/25 bg-parchment/60 p-6 transition-all duration-300 hover:border-moss/40 hover:shadow-lg hover:shadow-moss/10 sm:p-7"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-olive">Up next</p>
                  <p className="mt-2 font-display text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-moss sm:text-2xl">
                    {next.title}
                  </p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-moss text-cream transition-transform duration-300 group-hover:translate-x-1">
                  <IconArrow className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </article>

      {/* related */}
      {related.length > 0 && (
        <section className="border-t border-olive/20 bg-parchment/50">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <Eyebrow>Keep reading</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Related in the Knowledge Hub
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 90}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
            <PulseLine className="mt-16 text-sage" />
          </div>
        </section>
      )}
    </>
  );
}
