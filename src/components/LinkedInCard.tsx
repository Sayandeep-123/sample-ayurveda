import { Link } from "react-router-dom";
import { getArticle } from "@/data/articles";
import type { LinkedInPost } from "@/data/social";
import { IllustrativeTag } from "./bits";
import { IconArrow } from "./Icons";

/**
 * A LinkedIn post card in the site's visual language.
 *
 * Two modes, per the integration brief:
 *  - Official embed: if post.embedUrl is set (LinkedIn's "Embed this post"
 *    iframe URL, supplied by the practitioner), it renders above the card
 *    in a responsive frame, with the designed card kept as fallback context.
 *  - Designed card (used here): original summary + accurate attribution +
 *    direct link to the author's public LinkedIn presence.
 */
export default function LinkedInCard({ post }: { post: LinkedInPost }) {
  const article = getArticle(post.relatedArticle);

  return (
    <article className="flex h-full flex-col rounded-xl border border-olive/25 bg-linen p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-moss/10 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-6 w-6 place-items-center rounded-[5px] bg-[#0A66C2] text-[13px] font-bold leading-none text-white"
          >
            in
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-olive">
            LinkedIn
          </span>
        </span>
        <IllustrativeTag>Sample post</IllustrativeTag>
      </div>

      {post.embedUrl && (
        <figure className="mt-5 overflow-hidden rounded-lg border border-olive/25 bg-parchment">
          <iframe
            src={post.embedUrl}
            title={`Embedded LinkedIn post by ${post.author}`}
            loading="lazy"
            className="h-72 w-full"
          />
          <figcaption className="px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-olive">
            Official LinkedIn embed ·{" "}
            <a
              href={post.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              open on LinkedIn
            </a>{" "}
            if it doesn't load
          </figcaption>
        </figure>
      )}

      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-olive">
        <span className="text-saffron">{post.theme}</span>
        <span aria-hidden> · </span>
        {post.date}
      </p>
      <h3 className="mt-2.5 font-display text-[1.35rem] font-medium leading-snug tracking-tight text-ink">
        {post.headline}
      </h3>
      <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{post.summary}</p>
      <p className="mt-4 border-t border-olive/20 pt-3.5 text-[12.5px] leading-relaxed text-olive">
        Originally posted by <strong className="font-semibold text-ink-soft">{post.author}</strong>
        {post.authorHeadline ? ` — ${post.authorHeadline}` : ""}. Shown as a layout sample; not
        this brand's content.
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-5">
        <a
          href={post.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Opens ${post.author}'s public LinkedIn presence in a new tab (sample link)`}
          className="link-line inline-flex items-center gap-1.5 text-[13.5px] font-semibold tracking-tight text-[#0A66C2]"
        >
          View on LinkedIn
          <span aria-hidden>↗</span>
        </a>
        {article && (
          <Link
            to={`/library/${article.slug}`}
            className="link-line inline-flex items-center gap-1.5 text-[13.5px] font-semibold tracking-tight text-moss"
          >
            Read the longer article
            <IconArrow className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
