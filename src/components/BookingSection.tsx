import { Link } from "react-router-dom";
import { BOOKING } from "@/data/booking";
import Reveal from "./Reveal";
import { Eyebrow, IllustrativeTag } from "./bits";
import { IconArrow } from "./Icons";

/**
 * The consultation booking panel — native to the site's visual identity,
 * with scheduling itself delegated to the external booking partner.
 *
 * Option A (live here): external booking link via the single configurable
 * BOOKING.url. Option B (future): if the partner ever documents an
 * official widget/iframe, set BOOKING.embedUrl and this component renders
 * the official embed instead — no invented endpoints, no scraping.
 */
export default function BookingSection({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  /* ---------- Option B: official provider embed (dormant) ---------- */
  if (BOOKING.embedUrl) {
    return (
      <Reveal className={className}>
        <div className="overflow-hidden rounded-2xl border border-olive/25 bg-linen p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 px-2">
            <Eyebrow>Book a consultation</Eyebrow>
            <IllustrativeTag>Official partner widget</IllustrativeTag>
          </div>
          <iframe
            src={BOOKING.embedUrl}
            title={`Book a consultation via ${BOOKING.providerLabel}`}
            loading="lazy"
            className="h-[640px] w-full rounded-xl border border-olive/25 bg-bone"
          />
          <p className="px-2 pb-2 pt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-olive">
            Widget not loading?{" "}
            <a
              href={BOOKING.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Continue on {BOOKING.providerLabel} ↗
            </a>
          </p>
        </div>
      </Reveal>
    );
  }

  /* ---------- Option A: external booking link ---------- */
  return (
    <Reveal className={`overflow-hidden rounded-2xl bg-moss text-cream ${className}`}>
      <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow tone="light">Consultations · via {BOOKING.providerLabel}</Eyebrow>
            <IllustrativeTag>Demo destination</IllustrativeTag>
          </div>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.1] tracking-tight">
            Begin a Conversation
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-cream/80">
            Choose a time that suits you on the booking partner's own platform — online, in-clinic
            or home visit. Scheduling, confirmations and reminders all happen there; this website
            simply shows you the way.
          </p>
          {!compact && (
            <ol className="mt-6 space-y-3">
              {BOOKING.howItWorks.map((step, i) => (
                <li key={step} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cream/30 font-mono text-[11px] text-sage"
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-[14px] leading-relaxed text-cream/80">{step}</p>
                </li>
              ))}
            </ol>
          )}
          <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-sage/70">
            Illustrative setup — partner &amp; profile URL to be confirmed. Demo opens the partner's
            consultation page, not a real profile. No medical details are collected on this site.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 lg:col-span-4 lg:col-start-9">
          <a
            href={BOOKING.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Opens ${BOOKING.providerLabel}'s consultation page in a new tab (demonstration destination)`}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-saffron px-6 py-4 text-[15px] font-semibold tracking-tight text-cream transition-all duration-300 hover:bg-clay hover:shadow-lg hover:shadow-black/20"
          >
            Book a Consultation
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
          <Link
            to="/enquiry"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-[14.5px] font-semibold tracking-tight text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/10"
          >
            Prefer to write first? Send an enquiry
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/approach"
            className="link-line self-center text-[13px] font-medium tracking-tight text-sage"
          >
            How a first visit works
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
