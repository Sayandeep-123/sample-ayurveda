import { Link } from "react-router-dom";
import { ARTICLES, FEATURED_SLUG, getArticle } from "@/data/articles";
import { CARE_AREAS, PRACTITIONER, PRINCIPLES, STATS, STATS_NOTE, TICKER_TERMS } from "@/data/site";
import { BOOKING } from "@/data/booking";
import { DESK_NOTE, LINKEDIN_POSTS } from "@/data/social";
import LinkedInCard from "@/components/LinkedInCard";
import { ArticleFeature, ArticleRow } from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, Marquee, PhotoPlaceholder, PulseLine, RotatingBadge } from "@/components/bits";
import { CARE_ICONS, PRINCIPLE_ICONS, IconArrow } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Home() {
  usePageMeta(
    "Root & Reason — Integrative Ayurveda, Explained | Concept",
    "A fictional integrative health practice concept: Ayurvedic observation and modern evidence at the same consultation table. Longer consults, plain-language plans, honest education.",
    "/"
  );

  const featured = getArticle(FEATURED_SLUG)!;
  const recent = ARTICLES.filter((a) => a.slug !== FEATURED_SLUG).slice(0, 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        {/* faint Devanagari watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -left-8 top-24 hidden select-none font-display text-[15rem] font-semibold italic leading-none text-moss/[0.06] xl:block"
        >
          स्वस्थ
        </span>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>An integrative Ayurveda practice · concept demonstration</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6.2vw,4.9rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
                Healthcare that reads the{" "}
                <em className="font-display italic text-saffron">whole</em> person — not just the
                symptom.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                Root &amp; Reason pairs the observational depth of Ayurveda — pulse, digestion,
                rhythm, constitution — with modern evidence and honest communication. It begins with
                a consultation that actually has time for your story.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink to="/enquiry">Begin an enquiry</ButtonLink>
              <ButtonLink to="/approach" variant="ghost">
                See how we work
              </ButtonLink>
            </Reveal>
            <Reveal delay={340}>
              <dl className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-olive/25 pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-olive">
                <div className="flex items-center gap-2">
                  <dt className="text-saffron">—</dt>
                  <dd>Longer first consultations*</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-saffron">—</dt>
                  <dd>Consultation modes TBC*</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="text-saffron">—</dt>
                  <dd>Languages TBC*</dd>
                </div>
              </dl>
              <p className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-olive/70">
                * Illustrative placeholders — timings, modes and languages to be confirmed
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={200} className="relative mx-auto max-w-md lg:ml-auto">
              <div className="arch relative overflow-hidden border border-olive/25 shadow-2xl shadow-moss/15">
                <img
                  src="/images/hero-pulse.jpg"
                  alt="A practitioner gently reading a patient's pulse across a wooden table in warm window light."
                  className="h-[420px] w-full animate-kenburns object-cover sm:h-[520px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <RotatingBadge className="absolute -bottom-8 -left-6 h-28 w-28 drop-shadow-lg sm:-left-10 sm:h-32 sm:w-32" />
              <div className="absolute -right-3 top-16 animate-float rounded-xl border border-olive/25 bg-linen/95 px-4 py-3 shadow-lg shadow-moss/10 backdrop-blur-sm sm:-right-6">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-olive">Now reading</p>
                <p className="mt-1 font-display text-lg font-medium italic text-moss">nāḍī — the pulse</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= TICKER ================= */}
      <Marquee>
        {TICKER_TERMS.map((t) => (
          <span key={t.term} className="flex items-center gap-10">
            <span className="flex items-baseline gap-3">
              <span className="font-display text-xl font-medium italic text-moss">{t.term}</span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-soft/80">
                {t.meaning}
              </span>
            </span>
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-saffron/70" />
          </span>
        ))}
      </Marquee>

      {/* ================= STATEMENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>The practice</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <p className="dropcap mt-6 font-display text-[clamp(1.55rem,3vw,2.35rem)] font-medium leading-[1.32] tracking-tight text-ink">
                Most of what decides your health happens <em className="italic text-moss">between</em>{" "}
                appointments — what you eat, how you sleep, what your days are shaped like. So that is
                exactly where our medicine starts: with your ordinary week, examined carefully and
                adjusted honestly.
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end gap-0 lg:col-span-4 lg:col-start-9">
            <Reveal delay={150}>
              <p className="text-[15.5px] leading-relaxed text-ink-soft">
                We are a small, deliberately slow practice. No ten-minute slots, no supplement
                pyramids, no miracle language — just longer conversations, written plans you can
                actually follow, and reviews scheduled before you leave the room.
              </p>
            </Reveal>
            {STATS.map((s, i) => (
              <Reveal
                key={s.value}
                delay={220 + i * 90}
                className="flex items-baseline gap-5 border-t border-olive/25 py-4 first-of-type:mt-8"
              >
                <span className="w-24 shrink-0 font-display text-4xl font-semibold tracking-tight text-saffron">
                  {s.value}
                </span>
                <span className="text-[14.5px] leading-snug text-ink-soft">{s.label}</span>
              </Reveal>
            ))}
            <p className="mt-3 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.16em] text-olive/70">
              {STATS_NOTE}
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="border-y border-olive/20 bg-parchment/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>What we hold to</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-5 max-w-lg font-display text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.08] tracking-tight text-ink">
                  Five working principles, not a manifesto.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link to="/approach" className="link-line inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-moss">
                Read the full approach <IconArrow className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <ul className="mt-14">
            {PRINCIPLES.map((p, i) => {
              const Icon = PRINCIPLE_ICONS[p.icon];
              return (
                <Reveal as="li" key={p.index} delay={i * 70}>
                  <div className="group grid items-start gap-4 border-t border-olive/25 py-8 transition-all duration-500 hover:bg-bone/70 sm:grid-cols-12 sm:gap-6 sm:px-4">
                    <span className="font-display text-4xl font-light italic text-olive/60 transition-colors duration-300 group-hover:text-saffron sm:col-span-2 sm:text-5xl">
                      {p.index}
                    </span>
                    <div className="sm:col-span-4">
                      <h3 className="font-display text-[1.45rem] font-medium tracking-tight text-ink">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-[15px] leading-relaxed text-ink-soft sm:col-span-5">
                      {p.body}
                    </p>
                    <span className="hidden justify-end sm:col-span-1 sm:flex">
                      <Icon className="h-8 w-8 text-olive transition-all duration-500 group-hover:-translate-y-1 group-hover:text-moss" />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= CARE AREAS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>Areas of care</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.08] tracking-tight text-ink">
                Where people usually begin.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Six broad doors into the practice — each one supportive, each one honest about its
              limits, each with a route to learn more.{" "}
              <span className="text-olive">(Sample categories — illustrative, not a service catalogue.)</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARE_AREAS.map((c, i) => {
            const Icon = CARE_ICONS[c.icon];
            return (
              <Reveal key={c.index} delay={(i % 3) * 90}>
                <Link
                  to="/care"
                  className="group flex h-full flex-col rounded-xl border border-olive/25 bg-linen p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-moss/40 hover:shadow-xl hover:shadow-moss/10"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-moss/10 text-moss transition-all duration-500 group-hover:bg-moss group-hover:text-cream">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-[10.5px] tracking-[0.2em] text-olive/70">{c.index}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.35rem] font-medium leading-snug tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{c.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold tracking-tight text-saffron">
                    Explore this area
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-xl bg-moss p-7 text-cream sm:flex-row sm:items-center sm:p-8">
            <p className="font-display text-xl font-medium tracking-tight sm:text-2xl">
              Not sure which door is yours? <span className="italic text-sage">Most people aren't.</span>
            </p>
            <ButtonLink to="/enquiry" variant="light" className="shrink-0">
              Tell us what's going on
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* ================= PRACTITIONER TEASER ================= */}
      <section className="relative overflow-hidden bg-moss-deep text-cream">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-24 right-0 select-none font-display text-[20rem] font-semibold italic leading-none text-cream/[0.04]"
        >
          vaidya
        </span>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
          <Reveal className="relative mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-sm" delay={100}>
            <div className="arch-sm relative overflow-hidden shadow-2xl shadow-black/30">
              <PhotoPlaceholder
                label="Practitioner photograph"
                sub="To be supplied with approval"
                className="h-[440px] sm:h-[500px]"
              />
            </div>
            <span className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full border border-cream/20 bg-moss px-4 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-sage">
              Sample layout — photo TBC
            </span>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Eyebrow tone="light">The practitioner</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight">
                {PRACTITIONER.name}
              </h2>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.2em] text-sage">
                {PRACTITIONER.role}
              </p>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-cream/75">
                {PRACTITIONER.intro}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <blockquote className="mt-7 border-l-2 border-saffron pl-5 font-display text-xl italic leading-relaxed text-cream/90">
                “{PRACTITIONER.quote}”
              </blockquote>
            </Reveal>
            <Reveal delay={300} className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink to="/practitioner" variant="light">
                Read the full profile
              </ButtonLink>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-sage/70">
                Languages — {PRACTITIONER.languages.join(" · ")}
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= QUOTE BAND ================= */}
      <section className="border-b border-olive/20">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
          <PulseLine className="mx-auto max-w-md text-sage" />
          <Reveal delay={120}>
            <p className="mt-10 text-center font-display text-[clamp(1.8rem,4.4vw,3.2rem)] font-medium italic leading-[1.2] tracking-tight text-moss">
              “Slow medicine is not a delay.
              <span className="not-italic text-ink"> It is the method.”</span>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-center font-mono text-[10.5px] uppercase tracking-[0.24em] text-olive">
              The practice's working principle, pinned above the consultation desk
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FROM THE DESK (LINKEDIN) ================= */}
      <section id="desk" aria-labelledby="desk-heading" className="border-b border-olive/20 bg-parchment/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>From the Desk · LinkedIn</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 id="desk-heading" className="mt-5 max-w-xl font-display text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.08] tracking-tight text-ink">
                  Short notes there. <em className="italic text-moss">Longer reading here.</em>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
                  LinkedIn is where thinking happens out loud — a food myth dismantled, an honest
                  limit named, a clinical observation shared. The Knowledge Hub is where the same
                  themes get the full treatment: structured, searchable, sourced. The two formats do
                  different jobs, and this section shows how they connect.{" "}
                  <span className="text-olive">(Demonstration content — sample posts.)</span>
                </p>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-olive">
                Posts open the question · articles do the explaining
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {LINKEDIN_POSTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 90} className="h-full">
                <LinkedInCard post={p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-dashed border-olive/40 bg-linen px-5 py-4 text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-olive">
              {DESK_NOTE} Official LinkedIn embeds can replace these cards when the practitioner
              provides them.
            </p>
          </Reveal>

          {/* the connected journey */}
          <Reveal delay={140} className="mt-12 overflow-hidden rounded-2xl bg-moss text-cream">
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  How the pieces connect
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage">
                  Social → website → consultation
                </p>
              </div>
              <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  {
                    n: "01",
                    t: "A note from the desk",
                    d: "A short post poses the question. You are here.",
                    link: null as null | { to: string; label: string },
                  },
                  {
                    n: "02",
                    t: "The longer read",
                    d: "The linked article explains the theme in depth.",
                    link: { to: "/library", label: "Knowledge Hub" },
                  },
                  {
                    n: "03",
                    t: "The care context",
                    d: "See how the theme maps to areas of care.",
                    link: { to: "/care", label: "Areas of Care" },
                  },
                  {
                    n: "04",
                    t: "The people & method",
                    d: "Meet the approach behind the words.",
                    link: { to: "/approach", label: "Our Approach" },
                  },
                  {
                    n: "05",
                    t: "Your next step",
                    d: "Write to the practice — or book directly.",
                    link: { to: "/enquiry", label: "Enquire" },
                  },
                ].map((s) => (
                  <li key={s.n} className="relative border-t border-cream/20 pt-4">
                    <p className="font-display text-3xl font-light italic text-saffron">{s.n}</p>
                    <p className="mt-2 text-[15px] font-semibold tracking-tight text-cream">{s.t}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-cream/65">{s.d}</p>
                    {s.link && (
                      <Link
                        to={s.link.to}
                        className="link-line mt-2.5 inline-block text-[13px] font-semibold tracking-tight text-sage"
                      >
                        {s.link.label} →
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= KNOWLEDGE HUB PREVIEW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>From the Knowledge Hub</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.08] tracking-tight text-ink">
                Education you keep, not content you scroll past.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                The concept's answer to the social feed: short-form education, rewritten as
                permanent, searchable, sourced articles.{" "}
                <span className="text-olive">(Demonstration content — sample articles.)</span>
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link to="/library" className="link-line inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-moss">
              Browse all {ARTICLES.length} articles <IconArrow className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={100}>
            <ArticleFeature article={featured} />
          </Reveal>
          <Reveal className="flex flex-col justify-center gap-2 lg:col-span-4 lg:col-start-9" delay={180}>
            {recent.map((a) => (
              <ArticleRow key={a.slug} article={a} />
            ))}
            <Link
              to="/library"
              className="mt-3 inline-flex items-center gap-2 self-start rounded-full border border-olive/40 px-5 py-2.5 text-[13.5px] font-semibold tracking-tight text-moss transition-colors hover:border-moss hover:bg-moss hover:text-cream"
            >
              Visit the Knowledge Hub <IconArrow className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="border-t border-olive/20 bg-parchment/70">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>An open door</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[1.08] tracking-tight text-ink">
                Not sure where to start? <em className="italic text-moss">Start by telling us.</em>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
                A few sentences about what's been going on is plenty. We reply within two working
                days — including when the honest answer is that we're not the right next step.
              </p>
            </Reveal>
          </div>
          <Reveal delay={240} className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9 lg:items-end">
            <ButtonLink to="/enquiry">Write to the practice</ButtonLink>
            <a
              href={BOOKING.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Opens ${BOOKING.providerLabel}'s consultation page in a new tab (demonstration destination)`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-saffron px-6 py-3.5 text-[15px] font-semibold tracking-tight text-cream transition-all duration-300 hover:bg-clay"
            >
              Book a Consultation
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
            <ButtonLink to="/library" variant="ghost">
              Or keep reading first
            </ButtonLink>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-olive/80">
              Two ways forward — write or book · demo only: the form has no backend; booking opens
              the partner's page, not a real profile
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
