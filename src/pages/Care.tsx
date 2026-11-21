import { Link } from "react-router-dom";
import { CARE_AREAS } from "@/data/site";
import { getArticle } from "@/data/articles";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, IllustrativeTag, PulseLine } from "@/components/bits";
import { BOOKING } from "@/data/booking";
import { CARE_ICONS, IconArrow } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Care() {
  usePageMeta(
    "Areas of Care — Root & Reason | Concept",
    "Six broad areas of supportive, integrative care — digestive health, stress and sleep, women's cycle rhythm, skin, metabolic health, joints — each with honest boundaries.",
    "/care"
  );

  return (
    <>
      <section className="border-b border-olive/20 bg-parchment/60 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
          <Reveal>
            <Eyebrow>Areas of care</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,5.5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              Six doors into the practice. <em className="italic text-saffron">All of them honest.</em>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              <p>
                These are broad areas where an integrative approach — food, rhythm, rest, classical
                observation and plain advice — genuinely helps. Each one lists what it's for, what
                it isn't, and an article in the Knowledge Hub to read before you decide anything.
              </p>
              <p className="mt-4 border-l-2 border-saffron pl-4 text-[15.5px] italic text-ink-soft">
                A note on language: we say <strong className="not-italic text-ink">supportive care</strong>{" "}
                deliberately. Nothing on this page is a treatment promise, and none of it replaces
                your doctor's diagnosis or medication.
              </p>
              <p className="mt-5 rounded-xl border border-dashed border-clay/50 bg-clay/5 px-5 py-4 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.16em] text-clay">
                Sample categories for demonstration — not a service catalogue, and not a description
                of any real professional's services
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <ul>
          {CARE_AREAS.map((c, i) => {
            const Icon = CARE_ICONS[c.icon];
            const article = getArticle(c.article);
            return (
              <Reveal as="li" key={c.index} delay={i % 2 === 0 ? 0 : 80}>
                <div className="group grid gap-6 border-t border-olive/25 py-12 transition-colors duration-500 hover:bg-parchment/50 lg:grid-cols-12 lg:gap-8 lg:px-4">
                  <div className="flex items-start gap-5 lg:col-span-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-moss/10 text-moss transition-all duration-500 group-hover:bg-moss group-hover:text-cream">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <p className="font-mono text-[10.5px] tracking-[0.2em] text-olive/70">Area {c.index}</p>
                        <IllustrativeTag>Sample category</IllustrativeTag>
                      </div>
                      <h2 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-[1.7rem]">
                        {c.title}
                      </h2>
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-[15.5px] leading-relaxed text-ink-soft">{c.blurb}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Commonly sought for">
                      {c.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border border-olive/35 bg-linen px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft transition-colors duration-300 group-hover:border-moss/40"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between gap-6 lg:col-span-3">
                    <p className="border-l-2 border-clay/50 pl-4 text-[13.5px] italic leading-relaxed text-ink-soft">
                      {c.honest}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {article && (
                        <Link
                          to={`/library/${article.slug}`}
                          className="link-line inline-flex items-center gap-1.5 text-[13.5px] font-semibold tracking-tight text-moss"
                        >
                          Read: {article.title.split(":")[0]} <IconArrow className="h-3.5 w-3.5" />
                        </Link>
                      )}
                      <Link
                        to="/enquiry"
                        className="link-line inline-flex items-center gap-1.5 text-[13.5px] font-semibold tracking-tight text-saffron"
                      >
                        Enquire <IconArrow className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal>
          <div className="mt-6 rounded-xl border border-clay/30 bg-clay/5 p-6 sm:p-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-clay">Before anything else</p>
            <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
              New, severe, or rapidly worsening symptoms — chest pain, breathlessness, bleeding,
              sudden weakness, high fever, thoughts of self-harm — are not integrative-medicine
              situations. Please contact emergency services or your doctor first. Supportive care
              works beautifully <em>around</em> proper medical treatment; it never stands in for it.
            </p>
          </div>
        </Reveal>

        <PulseLine className="mt-16 text-sage" />

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-moss p-8 text-cream sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Your door might not be on this list.
            </h2>
            <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-cream/75">
              These six areas describe where people usually begin — not where care ends. Write to us
              with what's actually going on and we'll tell you honestly whether we can help.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-3">
            <ButtonLink to="/enquiry" variant="light">
              Begin an enquiry
            </ButtonLink>
            <a
              href={BOOKING.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Opens ${BOOKING.providerLabel}'s consultation page in a new tab (demonstration destination)`}
              className="link-line inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-tight text-cream"
            >
              or book directly <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
