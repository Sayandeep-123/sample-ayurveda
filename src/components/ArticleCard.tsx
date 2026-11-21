import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";
import { IconArrow, IconClock } from "./Icons";

export function Meta({ article, tone = "dark" }: { article: Article; tone?: "dark" | "light" }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.18em] ${
        tone === "light" ? "text-sage/80" : "text-olive"
      }`}
    >
      <span className="text-saffron">{article.category}</span>
      <span aria-hidden>·</span>
      <span className="inline-flex items-center gap-1.5">
        <IconClock className="h-3.5 w-3.5" />
        {article.readMins} min read
      </span>
      <span aria-hidden>·</span>
      <span>{article.date}</span>
    </p>
  );
}

/* ---------- standard grid card ---------- */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/library/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-olive/25 bg-linen transition-all duration-500 hover:-translate-y-1.5 hover:border-moss/40 hover:shadow-xl hover:shadow-moss/10"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={article.cover}
          alt={article.coverAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-bone/90 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-moss backdrop-blur-sm">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Meta article={article} />
        <h3 className="mt-3 font-display text-[1.35rem] font-medium leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-moss">
          {article.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[14.5px] leading-relaxed text-ink-soft">
          {article.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold tracking-tight text-saffron">
          Read the article
          <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

/* ---------- large horizontal feature card ---------- */
export function ArticleFeature({ article }: { article: Article }) {
  return (
    <Link
      to={`/library/${article.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-olive/25 bg-linen transition-all duration-500 hover:border-moss/40 hover:shadow-2xl hover:shadow-moss/10 lg:grid-cols-2"
    >
      <div className="relative min-h-64 overflow-hidden lg:min-h-full">
        <img
          src={article.cover}
          alt={article.coverAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-saffron px-3.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-cream">
          Featured
        </span>
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10">
        <Meta article={article} />
        <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-moss sm:text-[2rem]">
          {article.title}
        </h3>
        <p className="mt-3.5 text-[15px] leading-relaxed text-ink-soft">{article.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold tracking-tight text-saffron">
          Read the featured article
          <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

/* ---------- compact row card ---------- */
export function ArticleRow({ article }: { article: Article }) {
  return (
    <Link
      to={`/library/${article.slug}`}
      className="group flex items-center gap-5 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-olive/25 hover:bg-linen"
    >
      <div className="h-20 w-28 shrink-0 overflow-hidden rounded-lg">
        <img
          src={article.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-olive">
          <span className="text-saffron">{article.category}</span> · {article.readMins} min
        </p>
        <h3 className="mt-1.5 line-clamp-2 font-display text-[1.05rem] font-medium leading-snug tracking-tight text-ink transition-colors group-hover:text-moss">
          {article.title}
        </h3>
      </div>
      <IconArrow className="ml-auto h-4 w-4 shrink-0 text-saffron transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
