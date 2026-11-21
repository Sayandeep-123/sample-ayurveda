import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { BRAND, CARE_AREAS, ENQUIRY_STEPS, FAQS } from "@/data/site";
import BookingSection from "@/components/BookingSection";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PulseLine } from "@/components/bits";
import { IconCheck, IconChevron, IconMail, IconPhone, IconPin } from "@/components/Icons";
import { usePageMeta } from "@/lib/usePageMeta";

interface FormState {
  name: string;
  email: string;
  phone: string;
  mode: string;
  topic: string;
  message: string;
  consent: boolean;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  mode: "No preference",
  topic: "General enquiry",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): Errors {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = "Please tell us your name.";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim());
  const phoneOk = f.phone.replace(/[^\d]/g, "").length >= 7;
  if (!emailOk && !phoneOk)
    errors.email = "Please give us a working email — or a phone number we can reply to.";
  if (f.message.trim().length < 15)
    errors.message = "A sentence or two helps us reply usefully (at least 15 characters).";
  if (!f.consent) errors.consent = "Please tick to confirm you understand this is a demonstration.";
  return errors;
}

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="border-t border-olive/25">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg font-medium tracking-tight text-ink transition-colors hover:text-moss">
          {q}
        </span>
        <IconChevron
          className={`h-5 w-5 shrink-0 text-saffron transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Enquiry() {
  usePageMeta("/enquiry");

  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [touchedSubmit, setTouchedSubmit] = useState(false);
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (touchedSubmit) setErrors(validate(next));
      return next;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouchedSubmit(true);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(form);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const err = (k: keyof FormState) =>
    errors[k] ? (
      <p id={`err-${k}`} role="alert" className="mt-1.5 text-[12.5px] font-medium text-clay">
        {errors[k]}
      </p>
    ) : null;

  return (
    <>
      <section className="border-b border-olive/20 bg-parchment/60 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
          <Reveal>
            <Eyebrow>Begin an enquiry</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              Tell us what's going on. <em className="italic text-saffron">We'll take it from there.</em>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              A few honest sentences are worth more than a perfect summary. In a live site the
              practice would reply within an agreed timeframe — including when the honest answer is
              that it's not the right next step.{" "}
              <span className="text-olive">
                [Illustrative — response times to be confirmed. This demo form has no backend.]
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <BookingSection compact className="mt-12" />
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* left column */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink">What happens next</h2>
            </Reveal>
            <div className="mt-6">
              {ENQUIRY_STEPS.map((s, i) => (
                <Reveal key={s.step} delay={i * 90}>
                  <div className="group relative border-l-2 border-olive/25 pb-9 pl-7 transition-colors duration-300 hover:border-saffron">
                    <span className="absolute -left-[11px] top-0 grid h-5 w-5 place-items-center rounded-full border-2 border-saffron bg-bone font-mono text-[8px] text-saffron transition-transform duration-300 group-hover:scale-125" aria-hidden>
                      {i + 1}
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-olive">{s.step}</p>
                    <h3 className="mt-1.5 font-display text-xl font-medium tracking-tight text-ink">{s.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-olive/25 bg-linen p-7">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-olive">Or write directly</p>
                <ul className="mt-4 space-y-3.5 text-[15px] text-ink-soft">
                  <li className="flex items-start gap-3">
                    <IconMail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-saffron" />
                    <span>
                      {BRAND.email}
                      <span className="block text-xs text-olive">{BRAND.emailNote}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconPhone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-saffron" />
                    <span>
                      {BRAND.phone}
                      <span className="block text-xs text-olive">{BRAND.phoneNote}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-saffron" />
                    <span>
                      {BRAND.address} · {BRAND.city}
                    </span>
                  </li>
                </ul>
                <p className="mt-5 rounded-lg bg-clay/10 px-4 py-3 text-[12.5px] leading-relaxed text-clay">
                  All contact details on this page are <strong>fictional placeholders</strong> — this
                  is an anonymous concept demonstration, not a live clinic. Nothing you type here is
                  sent anywhere or stored anywhere.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 rounded-2xl border border-clay/30 bg-clay/5 p-7">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-clay">If it's urgent</p>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">
                  Severe or rapidly worsening symptoms are not an enquiry-form situation. Please
                  contact emergency services or your doctor immediately — this form is reviewed
                  during working hours only.
                </p>
              </div>
            </Reveal>
          </div>

          {/* form column */}
          <div className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <Reveal className="rounded-2xl border border-moss/30 bg-linen p-8 sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-moss text-cream">
                  <IconCheck className="h-7 w-7" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink">
                  Thank you, {submitted.name.split(" ")[0]}.
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">
                  This is what a successful submission would look like — but in this demonstration{" "}
                  <strong className="text-ink">nothing was sent or stored</strong>; your words never
                  left this browser tab. You asked about{" "}
                  <strong className="text-ink">{submitted.topic.toLowerCase()}</strong>, preferring{" "}
                  <strong className="text-ink">{submitted.mode.toLowerCase()}</strong> — in a live
                  site the practice would reply within an agreed timeframe [illustrative] with fit,
                  preparation notes and first-visit options.
                </p>
                <div className="mt-7 rounded-xl bg-parchment/80 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-olive">Your message</p>
                  <p className="mt-2 text-[14px] italic leading-relaxed text-ink-soft">“{submitted.message}”</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setForm(INITIAL);
                      setErrors({});
                      setTouchedSubmit(false);
                      setSubmitted(null);
                    }}
                    className="rounded-full bg-moss px-6 py-3 text-[14px] font-semibold tracking-tight text-cream transition-colors hover:bg-moss-deep"
                  >
                    Send another enquiry
                  </button>
                  <ButtonLink to="/library" variant="ghost">
                    Read while you wait
                  </ButtonLink>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-olive/25 bg-linen p-7 shadow-xl shadow-moss/5 sm:p-9">
                  <h2 className="font-display text-2xl font-medium tracking-tight text-ink">The enquiry form</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                    Nothing here is binding — it simply helps us reply usefully.
                  </p>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="f-name" className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-olive">
                        Your name *
                      </label>
                      <input
                        id="f-name"
                        type="text"
                        autoComplete="name"
                        className="field"
                        placeholder="How should we address you?"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "err-name" : undefined}
                      />
                      {err("name")}
                    </div>

                    <div>
                      <label htmlFor="f-email" className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-olive">
                        Email *
                      </label>
                      <input
                        id="f-email"
                        type="email"
                        autoComplete="email"
                        className="field"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "err-email" : undefined}
                      />
                      {err("email")}
                    </div>

                    <div>
                      <label htmlFor="f-phone" className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-olive">
                        Phone <span className="normal-case tracking-normal">(optional)</span>
                      </label>
                      <input
                        id="f-phone"
                        type="tel"
                        autoComplete="tel"
                        className="field"
                        placeholder="+91 …"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="f-mode" className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-olive">
                        Preferred consultation
                      </label>
                      <select id="f-mode" className="field" value={form.mode} onChange={(e) => set("mode", e.target.value)}>
                        <option>No preference</option>
                        <option>In person</option>
                        <option>Video consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="f-topic" className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-olive">
                        What's this about?
                      </label>
                      <select id="f-topic" className="field" value={form.topic} onChange={(e) => set("topic", e.target.value)}>
                        <option>General enquiry</option>
                        {CARE_AREAS.map((c) => (
                          <option key={c.title}>{c.title}</option>
                        ))}
                        <option>Something else</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="f-message" className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-olive">
                        In your own words *
                      </label>
                      <textarea
                        id="f-message"
                        rows={5}
                        className="field resize-y"
                        placeholder="What's been going on, for how long, and what would make the next few months better? Please don't share highly sensitive details in a first note — there's time later."
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "err-message" : undefined}
                      />
                      {err("message")}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="flex cursor-pointer items-start gap-3.5">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => set("consent", e.target.checked)}
                          className="mt-1 h-4.5 w-4.5 shrink-0 accent-[#3c4e2c]"
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? "err-consent" : undefined}
                        />
                        <span className="text-[13.5px] leading-relaxed text-ink-soft">
                          I understand this demonstration form has no backend: pressing send delivers
                          nothing to anyone and stores nothing anywhere. Please don't enter sensitive
                          personal or medical details.
                        </span>
                      </label>
                      {err("consent")}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-moss px-7 py-4 text-[15px] font-semibold tracking-tight text-cream transition-all duration-300 hover:bg-moss-deep hover:shadow-lg hover:shadow-moss/25 sm:w-auto"
                  >
                    Send the enquiry
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M4 12h15" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </button>
                  <p className="mt-4 text-[12.5px] leading-relaxed text-olive">
                    * required. Demonstration form — nothing is sent or stored; please avoid
                    sensitive personal or medical details.
                  </p>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-olive/20 bg-parchment/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Before you write</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-[1.1] tracking-tight text-ink">
                  Fair questions, straight answers.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                  The things people most often want to know before a first enquiry. If yours isn't
                  here, it belongs in the form — that's exactly what it's for.
                </p>
                <PulseLine className="mt-8 max-w-xs text-sage" />
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 70}>
                  <FaqItem q={f.q} a={f.a} i={i} />
                </Reveal>
              ))}
              <div className="border-t border-olive/25" />
              <Reveal className="mt-8 flex flex-wrap items-center gap-4">
                <p className="font-display text-xl font-medium italic tracking-tight text-moss">
                  Still unsure? That's a perfectly good reason to write.
                </p>
                <Link to="/approach" className="link-line text-[14px] font-semibold tracking-tight text-moss">
                  Or read the approach first
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
