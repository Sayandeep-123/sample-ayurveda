import { Link } from "react-router-dom";
import { PulseLine } from "@/components/bits";
import { IconArrow } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

export default function NotFound() {
  usePageMeta("/404");

  return (
    <section className="mx-auto flex min-h-[78vh] max-w-3xl flex-col items-center justify-center px-5 pt-28 text-center">
      <PulseLine className="max-w-xs text-saffron" />
      <p className="mt-10 font-display text-7xl font-medium italic text-saffron sm:text-8xl">404</p>
      <h1 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        This page has gone off rhythm.
      </h1>
      <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
        Nothing lives at this address. The pulse above is looking for it too — let's get you back
        somewhere that beats.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-moss px-6 py-3.5 text-[14.5px] font-semibold tracking-tight text-cream transition-colors hover:bg-moss-deep"
        >
          Back to the homepage
        </Link>
        <Link
          to="/library"
          className="inline-flex items-center gap-2.5 rounded-full border border-olive/50 px-6 py-3.5 text-[14.5px] font-semibold tracking-tight text-ink transition-colors hover:border-moss hover:text-moss"
        >
          Browse the Knowledge Hub <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
