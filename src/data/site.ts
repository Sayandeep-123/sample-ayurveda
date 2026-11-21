/* ------------------------------------------------------------------ */
/*  Root & Reason — fictional brand data                                */
/*  Anonymous concept demonstration.                                    */
/*                                                                    */
/*  Nothing in this file describes a real person, practice or service. */
/*  Operational details (timings, languages, hours, fees, response     */
/*  times, contact details) are ILLUSTRATIVE PLACEHOLDERS that must be */
/*  confirmed with — or written by — the real practitioner before any  */
/*  live deployment.                                                   */
/* ------------------------------------------------------------------ */

export const BRAND = {
  name: "Root & Reason",
  tagline: "Listen first. Treat the person.",
  city: "[ Location — to be confirmed ]",
  email: "hello@rootandreason.example",
  emailNote: "Illustrative placeholder — not a monitored inbox",
  phone: "+91 00000 00000",
  phoneNote: "Illustrative placeholder — not a real number",
  hours: ["[ Opening hours — to be confirmed ]", "[ Consultation modes — to be confirmed ]"],
  address: "[ Practice address — to be confirmed ]",
};

export const NAV_LINKS = [
  { to: "/approach", label: "Our Approach" },
  { to: "/care", label: "Areas of Care" },
  { to: "/practitioner", label: "The Practitioner" },
  { to: "/library", label: "Knowledge Hub" },
];

/* Sanskrit terms ticker — educational, with plain translations */
export const TICKER_TERMS = [
  { term: "Nāḍī", meaning: "the pulse — read, not guessed" },
  { term: "Agni", meaning: "digestive capacity" },
  { term: "Prakṛti", meaning: "your natural constitution" },
  { term: "Vikṛti", meaning: "where you are right now" },
  { term: "Dinacharya", meaning: "the daily rhythm" },
  { term: "Ṛtucharya", meaning: "living with the seasons" },
  { term: "Nidrā", meaning: "sleep as medicine" },
  { term: "Ojas", meaning: "quiet, durable vitality" },
];

export type PrincipleIcon = "ear" | "pattern" | "mortar" | "book" | "cycle";

export const PRINCIPLES: {
  index: string;
  title: string;
  body: string;
  icon: PrincipleIcon;
}[] = [
  {
    index: "01",
    title: "Listen before labelling",
    body: "First consultations run long on purpose. Your history, habits, sleep, food, work and stress are not small talk — they are the consultation. Context before conclusion, always.",
    icon: "ear",
  },
  {
    index: "02",
    title: "The pattern, not just the symptom",
    body: "Two people with the same complaint may leave with different plans. Constitution, season, age and circumstance change the answer — so we map the pattern before we name it.",
    icon: "pattern",
  },
  {
    index: "03",
    title: "Tradition, examined",
    body: "Ayurveda offers a rich observational grammar — digestion, rhythm, constitution. We use it where it earns its place, and we say plainly where the evidence is still thin.",
    icon: "mortar",
  },
  {
    index: "04",
    title: "Teach, don't prescribe silence",
    body: "Every plan comes with its reasoning, in language you'd use at your own kitchen table. If you can't explain your care to someone else, we haven't finished explaining it.",
    icon: "book",
  },
  {
    index: "05",
    title: "Slow is steady",
    body: "Durable change is unglamorous: food, sleep, routine, repeated. We design plans for the long term — and we stay available to adjust them as life happens.",
    icon: "cycle",
  },
];

/* Illustrative workflow markers — NOT confirmed operations. */
export const STATS = [
  { value: "45′*", label: "illustrative first-consultation length — to be confirmed" },
  { value: "2 · 6*", label: "illustrative review rhythm, in weeks — example workflow" },
  { value: "1 plan*", label: "written plan, explained line by line — illustrative example" },
];

export const STATS_NOTE =
  "* Illustrative placeholders for demonstration only — timings, fees and formats would be confirmed with the practitioner before any live use.";

export type CareIcon = "bowl" | "moon" | "cycle-dots" | "layers" | "gauge" | "joint";

/*
 * Sample care categories for layout demonstration.
 * Broad, everyday themes only — not a service catalogue, and not a
 * description of any real professional's services.
 */
export const CARE_AREAS: {
  index: string;
  title: string;
  icon: CareIcon;
  blurb: string;
  chips: string[];
  honest: string;
  article: string;
}[] = [
  {
    index: "01",
    title: "Digestive & gut health",
    icon: "bowl",
    blurb:
      "Appetite, bloating, irregularity, that uncomfortable heaviness after meals. Ayurveda's oldest strength — agni, digestive capacity — read alongside your medical history and reports.",
    chips: ["Irregular appetite", "Bloating & heaviness", "Meal rhythm repair"],
    honest:
      "Supportive care for everyday digestive discomfort — not a substitute for investigation of persistent or alarming symptoms.",
    article: "agni-why-ayurveda-obsesses-over-digestion",
  },
  {
    index: "02",
    title: "Stress, sleep & burnout",
    icon: "moon",
    blurb:
      "Racing evenings, shallow sleep, mornings that feel like debt. We work on the rhythm underneath: meal timing, wind-down, light, and the nervous system's need for predictability.",
    chips: ["Sleep routine", "Wind-down rituals", "Overwork recovery"],
    honest:
      "Lifestyle-first support. Chronic insomnia, snoring or daytime sleepiness deserve proper medical evaluation — we'll say so and help you get it.",
    article: "sleep-is-a-treatment-nidra",
  },
  {
    index: "03",
    title: "Women's health & cycle rhythm",
    icon: "cycle-dots",
    blurb:
      "Cycle irregularity, PMS, and the long tail of hormonal transitions — approached through food, rest and routine that work with your cycle rather than against it.",
    chips: ["Cycle-aware routines", "PMS support", "Perimenopause years"],
    honest:
      "Complementary support alongside your gynaecologist's care — never a replacement for it, and never a reason to delay investigation.",
    article: "what-prakriti-actually-means",
  },
  {
    index: "04",
    title: "Skin & inflammatory tendencies",
    icon: "layers",
    blurb:
      "Skin that flares with stress, season and food. We look at the visible pattern and the invisible one — digestion, sleep, heat, friction — and adjust the inputs you control.",
    chips: ["Flare triggers", "Gut–skin links", "Seasonal routines"],
    honest:
      "Supportive care for mild, recurrent complaints. Anything new, spreading or severe is seen by a dermatologist first.",
    article: "ritucharya-living-with-the-seasons",
  },
  {
    index: "05",
    title: "Metabolic health & weight",
    icon: "gauge",
    blurb:
      "Sugar, lipids, waistline, energy crashes — the slow numbers. No crash protocols, no miracle powders: meal structure, movement and patience, coordinated with your physician.",
    chips: ["Meal structure", "Walking programmes", "Report reviews"],
    honest:
      "We work with your physician's treatment plan, not around it. Medication decisions stay with your doctor.",
    article: "when-tradition-meets-a-blood-test",
  },
  {
    index: "06",
    title: "Joints, mobility & recovery",
    icon: "joint",
    blurb:
      "Stiffness that greets you in the morning, knees that negotiate stairs. Gentle daily self-care, warmth, sensible movement and strength — built around the life you actually live.",
    chips: ["Daily self-massage", "Warmth & movement", "Strength, gently"],
    honest:
      "Comfort and function, not reversal. Acute injury, swelling or night pain are evaluated medically before anything else.",
    article: "dinacharya-the-case-for-a-boring-morning",
  },
];

/*
 * Sample practitioner profile LAYOUT — every field is an obvious
 * placeholder so a prospective client can picture their own profile here.
 * No name, qualification, history or quotation describes a real person.
 */
export const PRACTITIONER = {
  name: "Sample Practitioner",
  role: "[ Professional title & qualifications — to be confirmed ]",
  illustrative: true,
  intro:
    "This panel shows where the practitioner's own introduction would sit in a live website — typically a short paragraph on training, clinical focus and consultation style, written or approved by the practitioner. The text here is placeholder copy and describes no real person.",
  quote:
    "[ A short statement in the practitioner's own words would appear here, once approved. ]",
  methods: [
    "[Example] Longer first appointments covering history, examination and questions — format and duration to be confirmed.",
    "[Example] Written plans explained line by line, so care can be understood and followed at home.",
    "[Example] A review rhythm agreed at the first visit — timing to be confirmed with the practitioner.",
    "[Example] Coordination with the patient's existing doctors where relevant — process to be confirmed.",
  ],
  credentials: [
    { text: "[ Degree / qualification — to be confirmed ]", note: "placeholder" },
    { text: "[ Postgraduate training — to be confirmed ]", note: "placeholder" },
    { text: "[ Professional registration — to be confirmed ]", note: "placeholder" },
    { text: "[ Clinical experience — to be confirmed ]", note: "placeholder" },
  ],
  languages: ["[ Language — to be confirmed ]", "[ Language — to be confirmed ]"],
  beyond: [
    "[ Area of clinical interest — to be confirmed ]",
    "[ Area of clinical interest — to be confirmed ]",
    "[ Teaching, writing or community work — to be confirmed ]",
    "[ Personal note — optional, only with the practitioner's approval ]",
  ],
};

/* Illustrative enquiry flow — steps and timings to be confirmed. */
export const ENQUIRY_STEPS = [
  {
    step: "01",
    title: "You write",
    body: "Use the form, or write in your own words. A few sentences about what's going on is plenty — the practitioner would ask the rest. [Illustrative example flow.]",
  },
  {
    step: "02",
    title: "The practice replies",
    body: "A real reply: whether this is the right fit, what to prepare, and options for a first consultation. [Illustrative example — response times and next steps to be confirmed.]",
  },
  {
    step: "03",
    title: "The first consultation",
    body: "A longer first appointment: history, careful examination, a review of any reports — and a plan you understand before you leave. [Illustrative example — format, duration and fees to be confirmed.]",
  },
];

export const FAQS = [
  {
    q: "Is this a replacement for my regular doctor?",
    a: "No — and we'd be wary of anyone who said yes. Integrative care means alongside. Your physician keeps responsibility for diagnosis and medication; this concept focuses on the daily architecture of health: food, rhythm, rest, and the traditional frameworks that organise them.",
  },
  {
    q: "Do I need to believe in Ayurveda to benefit?",
    a: "Not at all. You'd get the reasoning behind every recommendation. Some of it is classical Ayurveda; some is unremarkable modern lifestyle medicine wearing comfortable clothes. Take what's useful — that's how this concept practises too.",
  },
  {
    q: "Will I be put on a long list of herbs and supplements?",
    a: "In this concept, probably not. Most sample plans begin with food, timing and routine. When a herb seems worth discussing, you'd hear what the evidence does and doesn't support, what to watch for, and how you'd judge whether it's working — see also our sample article on what is actually known about popular herbs.",
  },
  {
    q: "What should I bring to a first consultation?",
    a: "As an illustrative checklist: any recent blood reports or discharge summaries, a list of current medications and supplements, and — if you have it — a rough sketch of a normal day: meals, sleep, work, movement. The exact preparation list would be confirmed by the practice.",
  },
  {
    q: "How long until something changes?",
    a: "That depends on the person and the pattern, and any honest practice would discuss timeframes individually rather than promise them on a website. Rhythm-level changes (sleep, appetite, energy) are often the first thing reviewed; deeper patterns take longer. [Timeframes here are illustrative — no outcome is promised.]",
  },
];
