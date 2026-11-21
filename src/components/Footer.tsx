import { Link } from "react-router-dom";
import { BRAND, NAV_LINKS } from "@/data/site";
import { CATEGORIES } from "@/data/articles";
import { BrandMark, IconMail, IconPhone, IconPin } from "./Icons";
import { PulseLine } from "./bits";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-moss-deep text-cream">
      {/* watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-16 select-none font-display text-[26vw] font-semibold italic leading-none text-cream/[0.045] lg:text-[19rem]"
      >
        āyur
      </span>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-cream/10 text-saffron">
                <BrandMark className="h-7 w-7" />
              </span>
              <span className="font-display text-3xl font-semibold tracking-tight">
                Root <span className="text-saffron">&amp;</span> Reason
              </span>
            </span>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream/65">
              An integrative health practice where Ayurvedic observation and modern evidence sit at
              the same consultation table.
            </p>
          </div>
          <p className="font-display text-xl italic text-cream/75 sm:text-2xl">“{BRAND.tagline}”</p>
        </div>

        <PulseLine className="my-12 text-cream/25" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-sage/80">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {[{ to: "/", label: "Home" }, ...NAV_LINKS, { to: "/enquiry", label: "Begin an enquiry" }].map(
                (l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="link-line text-[15px] text-cream/80 hover:text-cream">
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-sage/80">Knowledge Hub</h3>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <Link
                    to={`/library?cat=${encodeURIComponent(c)}`}
                    className="link-line text-[15px] text-cream/80 hover:text-cream"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-sage/80">Consultations</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-cream/80">
              <li className="flex items-start gap-2.5">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                <span>
                  {BRAND.address}
                  <span className="block text-xs text-cream/45">clearly fictional placeholder</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                <span>
                  {BRAND.email}
                  <span className="block text-xs text-cream/45">{BRAND.emailNote}</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                <span>
                  {BRAND.phone}
                  <span className="block text-xs text-cream/45">{BRAND.phoneNote}</span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-sage/80">Hours · illustrative</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-cream/80">
              {BRAND.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
              <li className="text-xs text-cream/45">[ Hours &amp; response times — to be confirmed. ]</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-cream/12 bg-cream/[0.045] p-5 sm:p-6">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-saffron">
            About this website
          </p>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-cream/60">
            Root &amp; Reason is a <strong className="text-cream/80">fictional brand</strong>, created
            as an anonymous design-concept demonstration for a healthcare professional. All names,
            credentials, contact details and clinical content on this site are illustrative — as are
            any timings, fees, languages, hours or response times shown anywhere on these pages. Nothing here is medical advice, and no real clinic, brand or individual is
            represented or implied. If you are unwell, please consult a qualified doctor.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-[12.5px] text-cream/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Root &amp; Reason — concept demonstration.</p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.2em]">
            Editorial imagery · Pexels &amp; concept photography
          </p>
        </div>
      </div>
    </footer>
  );
}
