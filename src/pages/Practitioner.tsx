import { PRACTITIONER } from "@/data/site";
import BookingSection from "@/components/BookingSection";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, IllustrativeTag, PhotoPlaceholder, PulseLine } from "@/components/bits";
import { IconCheck } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

const APPROVAL_CHECKLIST = [
  "Portrait photograph, supplied with the practitioner's consent",
  "Name, title and qualifications exactly as registered",
  "Professional registration body and registration number",
  "Consultation formats, durations, fees and languages",
  "Opening hours, location and response-time commitments",
  "Areas of clinical interest, in the practitioner's own words",
];

export default function Practitioner() {
  usePageMeta(
    "The Practitioner — sample profile layout | Root & Reason concept",
    "A sample practitioner profile layout for the fictional Root & Reason concept: photo, qualification, experience and interest slots shown as clearly labelled placeholders.",
    "/practitioner"
  );

  return (
    <>
      {/* page hero */}
      <section className="border-b border-olive/20 bg-parchment/60 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 sm:pb-16">
          <Reveal>
            <Eyebrow>The practitioner · sample layout</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              A profile layout, <em className="italic text-saffron">ready for its practitioner.</em>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <div className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink-soft">
              <p>
                This page demonstrates <strong className="text-ink">where</strong> a practitioner's
                photograph, qualifications, experience and approach would appear in a live website —
                not <strong className="text-ink">who</strong> would appear here. Every personal
                detail below is an obvious placeholder describing no real person.
              </p>
              <p className="mt-4 flex flex-wrap gap-2">
                <IllustrativeTag>No real name used</IllustrativeTag>
                <IllustrativeTag>No real qualifications shown</IllustrativeTag>
                <IllustrativeTag>No real photograph displayed</IllustrativeTag>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pt-14 sm:pt-16">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
          {/* photo + at-a-glance */}
          <div className="lg:col-span-4">
            <Reveal className="relative mx-auto w-full max-w-sm" delay={100}>
              <div className="arch relative overflow-hidden shadow-2xl shadow-moss/15">
                <PhotoPlaceholder
                  label="Practitioner photograph"
                  sub="To be supplied with consent"
                  className="h-[440px] sm:h-[500px]"
                />
              </div>
              <span className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full bg-saffron px-4 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-cream shadow-lg">
                Photo slot — TBC
              </span>
            </Reveal>

            <Reveal delay={180} className="mx-auto mt-10 w-full max-w-sm rounded-2xl border border-olive/25 bg-linen p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive">
                Profile at a glance — slots
              </p>
              <dl className="mt-4 space-y-3.5 text-[14px]">
                {[
                  ["Title", PRACTITIONER.role],
                  ["Registration", "[ Registering body & number — TBC ]"],
                  ["Consultations", "[ Formats & durations — TBC ]"],
                  ["Languages", "[ Languages — TBC ]"],
                  ["Location", "[ Location — TBC ]"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-olive/20 pt-3 first:border-t-0 first:pt-0">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-olive">{k}</dt>
                    <dd className="mt-1 leading-snug text-ink-soft">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* name / intro / approach slots */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <IllustrativeTag>Name &amp; title slot</IllustrativeTag>
              <p className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink-soft">
                [ Practitioner name ]
              </p>
              <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.2em] text-olive">
                {PRACTITIONER.role}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 rounded-2xl border border-dashed border-olive/40 bg-parchment/60 p-6 sm:p-7">
                <IllustrativeTag>Introduction slot</IllustrativeTag>
                <p className="mt-3 text-[15.5px] leading-[1.8] text-ink-soft">{PRACTITIONER.intro}</p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <blockquote className="mt-6 border-l-2 border-saffron pl-5 font-display text-[1.3rem] italic leading-relaxed text-ink-soft">
                {PRACTITIONER.quote}
              </blockquote>
            </Reveal>

            <Reveal delay={220} className="mt-10">
              <IllustrativeTag>Consultation approach — layout example</IllustrativeTag>
              <h2 className="mt-4 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-[1.12] tracking-tight text-ink">
                How the "how I work" section would read.
              </h2>
              <ul className="mt-6">
                {PRACTITIONER.methods.map((m, i) => (
                  <li
                    key={m}
                    className="group flex items-start gap-4 border-t border-olive/25 py-5 transition-colors duration-300 hover:bg-parchment/50 sm:px-3"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-moss/10 font-mono text-[11px] text-moss transition-colors duration-300 group-hover:bg-moss group-hover:text-cream">
                      {i + 1}
                    </span>
                    <p className="text-[15px] leading-relaxed text-ink-soft">{m}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* qualifications + interests */}
      <section className="mt-16 border-y border-olive/20 bg-parchment/60 sm:mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <IllustrativeTag>Qualifications slot</IllustrativeTag>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-[1.1] tracking-tight text-ink">
                Credibility, shown — not claimed.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
                In a live deployment this section would carry verified degrees, registration numbers
                and institutional history — each item approved by the practitioner. The layout shows
                exactly how that information would be presented: plainly, completely, without
                mystique.
              </p>
            </Reveal>
            <ul className="mt-7 space-y-3.5">
              {PRACTITIONER.credentials.map((cr, i) => (
                <Reveal as="li" key={cr.text} delay={200 + i * 70}>
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-olive/40 bg-linen px-5 py-4">
                    <span className="text-[15px] tracking-tight text-ink-soft">{cr.text}</span>
                    <span className="shrink-0 rounded-full bg-clay/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-clay">
                      {cr.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:pt-24">
            <Reveal>
              <IllustrativeTag>Areas of interest slot</IllustrativeTag>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-[1.1] tracking-tight text-ink">
                Focus areas, in the practitioner's own framing.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
                Broad themes the practitioner is glad to discuss — shown here as labelled slots. A
                live site would use the practitioner's own wording, kept general rather than
                promising outcomes.
              </p>
            </Reveal>
            <ul className="mt-7 space-y-4">
              {PRACTITIONER.beyond.map((b, i) => (
                <Reveal as="li" key={b} delay={200 + i * 70} className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-saffron" aria-hidden />
                  <p className="font-display text-[1.15rem] italic leading-relaxed text-ink-soft">{b}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-2">
                {PRACTITIONER.languages.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-dashed border-olive/40 bg-linen px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* approval checklist + cta */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>For the prospective client</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-medium leading-[1.12] tracking-tight text-ink">
                What you'd need to approve before launch.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Nothing on this page goes live as written. Each item below is a sign-off step —
                that's deliberate: a healthcare profile should be built from verified facts, not
                design copy.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-0">
              {APPROVAL_CHECKLIST.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 70}>
                  <div className="flex items-start gap-3.5 border-t border-olive/25 py-4">
                    <IconCheck className="mt-1 h-4.5 w-4.5 shrink-0 text-moss" />
                    <p className="text-[15px] leading-relaxed text-ink-soft">{item}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <BookingSection className="mt-14" />

        <PulseLine className="mx-auto mt-14 max-w-md text-sage" />
        <Reveal className="mt-10 flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-tight text-ink">
            Imagine this page with <em className="italic text-saffron">your</em> photograph,{" "}
            <em className="italic text-saffron">your</em> words.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink to="/enquiry">Try the enquiry journey</ButtonLink>
            <ButtonLink to="/library" variant="ghost">
              See the Knowledge Hub
            </ButtonLink>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-olive/80">
            Demonstration only — no backend; nothing is sent or stored
          </p>
        </Reveal>
      </section>
    </>
  );
}
