import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PulseLine } from "@/components/bits";
import { IconArrow, IconCheck, IconClose } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

const SECTIONS = [
  { id: "you-first", label: "You, before the diagnosis" },
  { id: "pattern", label: "A pattern, not a snapshot" },
  { id: "tradition", label: "Tradition, examined" },
  { id: "rhythm", label: "Rhythm as first medicine" },
  { id: "continuity", label: "Continuity of care" },
  { id: "first-visit", label: "A first visit, step by step" },
];

/* Illustrative example flow — steps, order and timings to be confirmed. */
const FIRST_VISIT_STEPS = [
  {
    step: "Arrival",
    time: "Illustrative · TBC",
    body: "Tea, a breath, and the one question most clinics skip: what made you come in now, in your own words?",
  },
  {
    step: "History",
    time: "Illustrative · TBC",
    body: "The full arc — the complaint, its timeline, your sleep, food, work, stress, cycles, medical history and current medications. Unhurried and in order.",
  },
  {
    step: "Examination",
    time: "Illustrative · TBC",
    body: "Pulse, tongue, abdomen and general examination in the Ayurvedic mode — alongside a look at any reports you've brought.",
  },
  {
    step: "The plan",
    time: "Illustrative · TBC",
    body: "What we think is going on, what we'd change first, and why — written down line by line, with an agreed review rhythm before you leave.",
  },
];

export default function Approach() {
  usePageMeta(
    "Our Approach — Root & Reason | Concept",
    "How the fictional Root & Reason practice approaches healthcare: longer consultations, pattern-based assessment, tradition examined against evidence, rhythm-first plans, and real continuity.",
    "/approach"
  );

  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* page hero */}
      <section className="border-b border-olive/20 bg-parchment/60 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
          <Reveal>
            <Eyebrow>Our approach</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,5.5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              An approach built on <em className="italic text-saffron">listening</em>, and honest
              about what it can do.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              This page is the unglamorous version of who we are — the method, the cadence, the
              boundaries. If it sounds like the kind of care you've been looking for, the enquiry
              page is two clicks away.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* sticky rail */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive">On this page</p>
              <nav className="mt-4 border-l border-olive/25" aria-label="Page sections">
                {SECTIONS.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#/approach`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`-ml-px block border-l-2 py-2.5 pl-5 text-[14px] tracking-tight transition-all duration-300 ${
                      active === s.id
                        ? "border-saffron font-semibold text-moss"
                        : "border-transparent text-ink-soft hover:border-olive/50 hover:text-ink"
                    }`}
                    aria-current={active === s.id ? "true" : undefined}
                  >
                    <span className="mr-2 font-mono text-[10px] text-olive/70">0{i + 1}</span>
                    {s.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-xl border border-olive/25 bg-linen p-5">
                <p className="font-display text-lg font-medium tracking-tight text-ink">Sound familiar?</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  Longer first consultations — illustrative format, to be confirmed.
                </p>
                <Link to="/enquiry" className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-semibold tracking-tight text-saffron">
                  Begin an enquiry <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* content */}
          <div className="space-y-20 lg:col-span-8 lg:col-start-5">
            <Reveal as="section" id="you-first" className="scroll-mt-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron">01 — The consultation</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                You, before the diagnosis.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink-soft">
                <p>
                  A first consultation here runs longer than usual <span className="text-olive">[illustrative — duration to be confirmed]</span>, and the first half of it contains
                  almost no medicine. We ask about the complaint, of course — but also about the
                  week around it. What time does your day start? What did you eat yesterday,
                  specifically? When did sleep last feel like sleep? What is work doing to you these
                  months?
                </p>
                <p>
                  None of this is courtesy. In a practice that takes constitution and context
                  seriously, these details <em className="text-ink">are</em> the clinical material.
                  Two patients who arrive with the same complaint routinely leave with different
                  plans — because their Tuesdays are different, and medicine that ignores Tuesdays
                  is guessing.
                </p>
              </div>
            </Reveal>

            <Reveal as="section" id="pattern" className="scroll-mt-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron">02 — The assessment</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                A pattern, not a snapshot.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink-soft">
                <p>
                  The assessment works in two registers. The classical one maps your constitution
                  (prakṛti) against your current state (vikṛti) — pulse, tongue, digestion, sleep,
                  and the direction things have been drifting. The modern one reads whatever reports
                  you bring: blood work, imaging, specialist letters. Neither register is treated as
                  decorative.
                </p>
                <p>
                  Where the two agree, the plan writes itself quickly. Where they disagree, that's
                  interesting too — a pattern of fatigue with unremarkable reports asks different
                  questions than the same pattern with a low ferritin. The full walk-through is in
                  the Knowledge Hub:{" "}
                  <Link to="/library/when-tradition-meets-a-blood-test" className="link-line font-semibold text-moss">
                    When Tradition Meets a Blood Test
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal as="section" id="tradition" className="scroll-mt-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron">03 — The stance</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Tradition, examined.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink-soft">
                <p>
                  Ayurveda contributes a remarkably complete observational grammar — how digestion
                  varies, how seasons shift capacity, how stress shows up in the body before it gets
                  a name. We use that grammar daily. We also hold it to the same standard we hold
                  everything else: if a claim has evidence, we say so; if the evidence is thin, we
                  say that too, in the same calm voice.
                </p>
                <p>
                  This stance is not scepticism for its own sake, and it isn't apology either. It is
                  simply what trust requires.
                </p>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-moss/30 bg-moss/5 p-6">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-moss">What we will do</p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Say plainly what the evidence does and doesn't support.",
                      "Explain every recommendation in everyday language.",
                      "Coordinate with your physician, in writing when it helps.",
                      "Give honest timelines — including 'this may take months'.",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-soft">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-clay/30 bg-clay/5 p-6">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-clay">What we won't do</p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Promise cures, detoxes or six-day transformations.",
                      "Ask you to stop or swap prescribed medication.",
                      "Build plans that depend on buying supplements from us.",
                      "Explain away abnormal reports as 'just stress'.",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-soft">
                        <IconClose className="mt-0.5 h-4 w-4 shrink-0 text-clay" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal as="section" id="rhythm" className="scroll-mt-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron">04 — The medicine of routine</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Rhythm as first medicine.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink-soft">
                <p>
                  Most of our plans begin with the least glamorous interventions available: when you
                  eat, what anchors the day, how the evening winds down, where sleep sits in the
                  hierarchy of priorities. It is unremarkable medicine — and it is where the largest,
                  most durable changes usually come from.
                </p>
                <p>
                  Herbs, when they earn a place, arrive second and stay briefly. A good plan should
                  keep working after the jar is empty. The Knowledge Hub goes deeper:{" "}
                  <Link to="/library/dinacharya-the-case-for-a-boring-morning" className="link-line font-semibold text-moss">
                    the case for a boring morning
                  </Link>{" "}
                  and{" "}
                  <Link to="/library/sleep-is-a-treatment-nidra" className="link-line font-semibold text-moss">
                    sleep as treatment
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal as="section" id="continuity" className="scroll-mt-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron">05 — The long part</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                Continuity of care.
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink-soft">
                <p>
                  Plans bend to reality, so reality gets scheduled in: a short check-in and a proper
                  review at agreed intervals <span className="text-olive">[illustrative example]</span>. Between visits you can write in with questions;
                  how follow-ups are arranged would be confirmed with the practitioner. The goal is a
                  relationship in which your health has one continuous narrator — not a series of
                  disconnected appointments.
                </p>
                <p>
                  When something needs a specialist, you go with a letter that summarises what we've
                  observed and tried, so you never have to retell the story from the beginning.
                </p>
              </div>
            </Reveal>

            <Reveal as="section" id="first-visit" className="scroll-mt-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron">06 — In the room</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                A first visit, step by step.
              </h2>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-olive">
                Illustrative example flow — to be confirmed
              </p>
              <div className="mt-8 space-y-0">
                {FIRST_VISIT_STEPS.map((s, i) => (
                  <Reveal key={s.step} delay={i * 90}>
                    <div className="group relative grid gap-2 border-l-2 border-olive/25 pb-10 pl-7 transition-colors duration-300 hover:border-saffron sm:grid-cols-12 sm:gap-4">
                      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-saffron bg-bone transition-transform duration-300 group-hover:scale-125" aria-hidden />
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-olive sm:col-span-3">
                        {s.time}
                      </p>
                      <div className="sm:col-span-9">
                        <h3 className="font-display text-xl font-medium tracking-tight text-ink">{s.step}</h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <PulseLine className="text-sage" />

            <Reveal className="rounded-2xl bg-moss p-8 text-cream sm:p-10">
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                If this sounds like the kind of care you've been missing —
              </h2>
              <p className="mt-3 max-w-lg text-[15.5px] leading-relaxed text-cream/75">
                The next step is a short note, not a commitment. In a live site the practice would
                reply within an agreed timeframe <span className="text-sage">[illustrative — to be confirmed]</span>;
                here the form is a front-end demonstration.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <ButtonLink to="/enquiry" variant="light">
                  Begin an enquiry
                </ButtonLink>
                <ButtonLink
                  to="/care"
                  variant="ghost"
                  className="border-cream/40! text-cream! hover:border-cream!"
                >
                  See areas of care
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
