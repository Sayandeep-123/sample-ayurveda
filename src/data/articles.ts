/* ------------------------------------------------------------------ */
/*  Knowledge Hub — original sample articles                            */
/*  Written for the fictional Root & Reason concept. Educational only:  */
/*  no treatment claims, no fabricated citations, no medical advice.    */
/* ------------------------------------------------------------------ */

export type Category =
  | "Foundations"
  | "Food & Digestion"
  | "Everyday Habits"
  | "Mind & Rest"
  | "Myth & Evidence";

export const CATEGORIES: Category[] = [
  "Foundations",
  "Food & Digestion",
  "Everyday Habits",
  "Mind & Rest",
  "Myth & Evidence",
];

export type Block =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "list"; items: string[] }
  | { t: "quote"; x: string }
  | { t: "note"; x: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  readMins: number;
  date: string;
  cover: string;
  coverAlt: string;
  takeaways: string[];
  related: string[];
  body: Block[];
}

export const FEATURED_SLUG = "when-tradition-meets-a-blood-test";

export const ARTICLES: Article[] = [
  {
    slug: "when-tradition-meets-a-blood-test",
    title: "When Tradition Meets a Blood Test",
    excerpt:
      "Ayurveda asks how you live; the lab report asks what's happening inside. Neither is complete alone. What an integrative consultation actually looks like, walked through end to end.",
    category: "Foundations",
    readMins: 7,
    date: "12 Feb 2026",
    cover:
      "https://images.pexels.com/photos/7578816/pexels-photo-7578816.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "A clinician reviewing a medical test result with a patient during a consultation.",
    takeaways: [
      "Symptoms like fatigue have many causes — reports narrow them, your history explains them.",
      "A good integrative plan works with your physician's treatment, never around it.",
      "Bring recent reports to any consultation; if you don't have them, ask for a sensible baseline.",
      "Integration is a way of thinking, not a stack of pills and herbs.",
    ],
    related: [
      "agni-why-ayurveda-obsesses-over-digestion",
      "herbs-what-we-actually-know",
      "what-prakriti-actually-means",
    ],
    body: [
      {
        t: "p",
        x: "Two languages describe the same person. Ayurveda asks how you eat, how you sleep, what your days are shaped like, and how you cope when they aren't. A laboratory report asks quieter questions — what your iron stores look like, whether your thyroid is keeping pace, how your sugar behaves between meals. Neither language is complete on its own. The person in the middle of them is.",
      },
      {
        t: "p",
        x: "This is the idea at the centre of integrative practice: not tradition versus evidence, but two descriptions of you, laid on the same table. It sounds obvious. In practice it is rare — which is precisely why it needs a name.",
      },
      { t: "h2", x: "Why an Ayurvedic consultation should ask for your reports" },
      {
        t: "p",
        x: "Consider a complaint as common as persistent fatigue. Its causes range across low iron stores, thyroid under-activity, vitamin B12 or D deficiency, poor sleep, chronic stress, under-eating, overtraining, and ordinary illness. A practitioner who never looks at reports is guessing in one language. A practitioner who reads only reports misses the texture of your days — the 1 a.m. screen time, the skipped breakfasts, the month of night shifts.",
      },
      {
        t: "p",
        x: "The reports narrow the field. Your history explains the pattern. Used together, they stop being rivals and start being colleagues.",
      },
      { t: "h2", x: "A consultation in both languages" },
      {
        t: "p",
        x: "Here is a composite sketch — assembled from many ordinary visits, details changed — of what this looks like. A 34-year-old designer arrives with six months of fatigue: heavy afternoons, brittle concentration, workouts abandoned. Her history reveals dinner near midnight, six hours of broken sleep, bloating after most meals, and a job that runs on adrenaline.",
      },
      {
        t: "p",
        x: "Her reports show low-normal ferritin and a low vitamin D level. The plan writes itself in two columns. With her physician: appropriate supplementation and a re-check timeline. At home: lunch becomes the day's anchor meal, dinner moves before 9:30, a twenty-minute morning walk buys daylight, and the sleep window is fixed at the wake-up end first. At six weeks we review — the numbers, the energy, and whether the routine is one she can actually keep.",
      },
      {
        t: "quote",
        x: "A lab value tells you where someone is. Their routine tells you how they got there — and what will hold.",
      },
      { t: "h2", x: "What integration is not" },
      {
        t: "list",
        items: [
          "It is not stacking herbs on top of prescriptions while habits stay unchanged.",
          "It is not a reason to stop or adjust medication — those decisions belong to your physician.",
          "It is not the claim that 'natural' means safer, or that traditional means proven.",
          "It is not explaining away abnormal results as 'just stress'.",
        ],
      },
      { t: "h2", x: "Bringing your own reports" },
      {
        t: "p",
        x: "If you're considering an integrative consultation anywhere — this practice or another — bring what you have: blood work from the past year, discharge summaries, a current medication and supplement list. If you have nothing recent, don't manufacture a panel; a sensible baseline ordered through your own physician is enough to begin.",
      },
      {
        t: "note",
        x: "This article is educational. The consultation sketch is a fictional composite, not a case report, and nothing here is medical advice. Abnormal results and new symptoms belong with a qualified doctor.",
      },
    ],
  },
  {
    slug: "what-prakriti-actually-means",
    title: "What Prakṛti Actually Means (and What It Doesn't)",
    excerpt:
      "Constitution is a baseline, not a horoscope. How to use vāta–pitta–kapha as a tool for self-notice — and where the popular version of the idea quietly breaks down.",
    category: "Foundations",
    readMins: 6,
    date: "28 Jan 2026",
    cover:
      "https://images.pexels.com/photos/12809571/pexels-photo-12809571.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "Glass jars and bowls of assorted dried herbs and spices on a wooden surface.",
    takeaways: [
      "Prakṛti describes tendencies — appetite, sleep, reactivity — not fixed destiny.",
      "Care is shaped around vikṛti: where you currently sit relative to your baseline.",
      "Treat online quizzes as conversation starters, never as diagnoses.",
      "Two weeks of simple self-notice beats any one-off typing exercise.",
    ],
    related: [
      "reading-your-tongue-self-observation",
      "when-tradition-meets-a-blood-test",
      "ritucharya-living-with-the-seasons",
    ],
    body: [
      {
        t: "p",
        x: "Walk into any introductory Ayurveda talk and you will meet prakṛti within five minutes: your constitution, your born grain, the mix of vāta, pitta and kapha you arrived with. Used well, it is one of the tradition's most practical ideas — a personal baseline. Used badly, it becomes a personality quiz that tells you what to eat for the rest of your life.",
      },
      { t: "h2", x: "A baseline, not a horoscope" },
      {
        t: "p",
        x: "Stripped of mystique, prakṛti is a description of tendencies. Does your appetite arrive like a train — punctual and insistent — or wander? Do you sleep deeply or lightly? Do you flush and overthink, or go quiet and cold, under stress? Does your skin run dry or warm? Is your build naturally light, medium or solid? None of this is destiny. It is the shape of your defaults — useful the way knowing your car's normal idle note is useful, because then you notice when something changes.",
      },
      { t: "h2", x: "Where the popular version goes wrong" },
      {
        t: "list",
        items: [
          "Quizzes as identity: answering 'pitta' and rearranging your life around it.",
          "Determinism: 'kapha types can never…' — people are mixtures, and mixtures shift.",
          "Ignoring vikṛti: your current state matters more, clinically, than your birth type.",
          "Alibi-making: 'I can't help it, I'm vāta' is not a physiology, it's an excuse.",
        ],
      },
      { t: "h2", x: "Vikṛti — the more useful question" },
      {
        t: "p",
        x: "Classical texts pair prakṛti with vikṛti: the present deviation from baseline. A naturally fiery pitta person running cool, dull and heavy in winter is not 'being pitta' — they are somewhere else, temporarily, and that somewhere is what care addresses. This is why two people with the same label can receive opposite advice, and both be right.",
      },
      { t: "h2", x: "A gentle self-study" },
      {
        t: "p",
        x: "Rather than typing yourself in ten questions, spend two weeks noticing. The observations that matter are boring, which is why they're reliable:",
      },
      {
        t: "list",
        items: [
          "Appetite: regular and strong, wandering, or absent?",
          "Sleep: deep, light, broken — and at what hours?",
          "Energy curve: morning person, afternoon crash, or late bloomer?",
          "Stress signature: heat and irritation, or withdrawal and cold?",
          "Weather response: what does heat, cold, or a damp monsoon do to you?",
        ],
      },
      {
        t: "quote",
        x: "Constitution is not the answer to who you are. It is the starting point for noticing how you change.",
      },
      {
        t: "note",
        x: "Prakṛti is a traditional framework, not a laboratory diagnosis. It organises observation; it does not replace it. Bring your notes to any practitioner — Ayurvedic or otherwise — and they'll thank you.",
      },
    ],
  },
  {
    slug: "agni-why-ayurveda-obsesses-over-digestion",
    title: "Agni: Why Ayurveda Obsesses Over Digestion",
    excerpt:
      "You are not what you eat — you are what you digest. The concept of agni, digestive capacity, translated into habits you can actually keep.",
    category: "Food & Digestion",
    readMins: 5,
    date: "19 Jan 2026",
    cover:
      "https://images.pexels.com/photos/40557111/pexels-photo-40557111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "Dried herbs in a rustic wooden mortar with a pestle on a wooden surface.",
    takeaways: [
      "Agni means digestive capacity — appetite, comfort, assimilation, energy after food.",
      "Steady agni looks like: regular appetite, comfortable meals, good energy after eating.",
      "Irregular timing, overeating and stress are the usual culprits behind a wobble.",
      "Persistent pain, weight change or bleeding needs medical evaluation — not herbs.",
    ],
    related: [
      "dinacharya-the-case-for-a-boring-morning",
      "ritucharya-living-with-the-seasons",
      "reading-your-tongue-self-observation",
    ],
    body: [
      {
        t: "p",
        x: "If Ayurveda has a single obsession, it is digestion. The classical word is agni — literally fire — and the idea is deceptively simple: health depends less on what you eat than on what you can properly digest. A perfect diet, poorly processed, is just expensive raw material.",
      },
      {
        t: "p",
        x: "Modern gastroenterology would not phrase it that way, but it arrives somewhere nearby: regular meal timing, adequate chewing, unhurried eating and a calm nervous system all measurably change how well a meal is handled. The old word and the new evidence are pointing at the same machinery from different centuries.",
      },
      { t: "h2", x: "Signs your agni is steady" },
      {
        t: "list",
        items: [
          "Appetite arrives on time and with some enthusiasm.",
          "Meals sit comfortably — no heaviness, bloating or burning.",
          "Bowels are regular and unremarkable (which is the highest compliment they can receive).",
          "Energy after eating rises rather than collapses.",
          "The morning tongue is relatively clean; the morning mind is reasonably clear.",
        ],
      },
      { t: "h2", x: "When it wobbles" },
      {
        t: "p",
        x: "The wobble is familiar to most people: heaviness after lunch, bloating by evening, an appetite that can't decide whether it exists, food 'sitting there for hours'. The usual drivers are unremarkable — eating at erratic hours, grazing continuously, portions sized for ambition rather than appetite, and meals taken in a state of working stress. Notice that none of these are about which foods you chose. Timing and state do more than menus.",
      },
      { t: "h2", x: "Small acts that steady it" },
      {
        t: "list",
        items: [
          "Keep meal windows consistent — even ±30 minutes helps the body prepare.",
          "Make lunch the anchor: the day's largest meal when appetite is naturally strongest.",
          "Prefer warm, freshly cooked food when digestion feels weak; save raw and cold for when it doesn't.",
          "Stop at about three-quarters full. The last quarter is where heaviness is manufactured.",
          "Take a short, easy walk after meals — ten minutes is genuinely enough.",
          "Drink most of your water between meals rather than flooding food down with it.",
        ],
      },
      { t: "h2", x: "The honest caveat" },
      {
        t: "p",
        x: "Agni-talk is for the ordinary creaks of digestion. Pain that persists, unintended weight change, blood anywhere, vomiting, or trouble swallowing are not agni problems — they are see-a-doctor-promptly problems, and no amount of ginger fixes that category.",
      },
      {
        t: "quote",
        x: "Feed the fire you have, not the diet someone else has.",
      },
      {
        t: "note",
        x: "Educational content only. If digestive symptoms are persistent, severe, or new, see a qualified doctor before changing anything.",
      },
    ],
  },
  {
    slug: "dinacharya-the-case-for-a-boring-morning",
    title: "Dinacharya: The Case for a Boring Morning Routine",
    excerpt:
      "The classical daily routine isn't a 14-step Instagram ritual. Stripped to its working parts, dinacharya is about one thing: predictability. Here's the honest, minimal version.",
    category: "Everyday Habits",
    readMins: 7,
    date: "9 Jan 2026",
    cover:
      "https://images.pexels.com/photos/6653897/pexels-photo-6653897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "Hands holding a cup of tea beside a notebook in warm morning sunlight.",
    takeaways: [
      "Dinacharya's real content is rhythm, not ritual — the body runs on prediction.",
      "Three anchors matter: a consistent wake window, light and movement early, a real breakfast.",
      "Extras like tongue cleaning are fine; oil pulling's evidence is thin.",
      "Adopt one anchor for two weeks before adding another.",
    ],
    related: [
      "sleep-is-a-treatment-nidra",
      "agni-why-ayurveda-obsesses-over-digestion",
      "reading-your-tongue-self-observation",
    ],
    body: [
      {
        t: "p",
        x: "Search for dinacharya online and you'll find a fourteen-step sunrise liturgy: scrape, gargle, oil, massage, chant, sweat, repeat. It makes beautiful content. It also makes most people quit by Wednesday. The classical daily routine, stripped to what actually works, is far less cinematic and far more useful. It is about one thing: predictability.",
      },
      { t: "h2", x: "Why rhythm matters biologically" },
      {
        t: "p",
        x: "Your body is a prediction machine. Circadian systems prepare digestion, hormones and alertness around expected events — which is why meals at odd hours feel like jet lag, and why shift work is so metabolically expensive. A routine is not rigidity; it is information you give your physiology in advance. Ayurveda insisted on this for centuries before the word 'circadian' existed. That doesn't make it right by seniority — but the mechanism it stumbled onto is real.",
      },
      { t: "h2", x: "The only three anchors" },
      {
        t: "list",
        items: [
          "A consistent wake window — the same time ±30 minutes, weekends included. Fix the morning; the evening follows.",
          "Light and movement in the first hour — daylight on the eyes and ten minutes of anything that raises your pulse slightly.",
          "A real breakfast at a regular time — warm, unhurried, seated. This is where agni gets its daily opening statement.",
        ],
      },
      {
        t: "p",
        x: "That's the whole spine. Everything else in the dinacharya literature is ornamentation — pleasant, optional, and worth being honest about.",
      },
      { t: "h2", x: "The extras, honestly assessed" },
      {
        t: "p",
        x: "Tongue cleaning is reasonable oral hygiene — do it because it feels good and freshens the mouth, not because it 'detoxifies'. Oil pulling is harmless if done correctly (never swallowed), but the evidence for anything beyond basic hygiene is thin. Warm water on waking is just… hydration. Abhyanga, self-massage with warm oil, is genuinely calming and a fine weekend practice; call it self-care rather than medicine and nobody is misled.",
      },
      { t: "h2", x: "Start with one anchor" },
      {
        t: "p",
        x: "Pick the wake window. For two weeks, change nothing else except noting your energy each evening in one line. When the wake time holds, add the morning walk. When that holds, regularise breakfast. Routines built one layer at a time survive contact with real life; routines installed overnight do not.",
      },
      {
        t: "quote",
        x: "A boring morning is not a small ambition. For a dysregulated body, it is the whole treatment.",
      },
      {
        t: "note",
        x: "General educational content. Sleep disorders and significant fatigue deserve medical evaluation, not just better routines.",
      },
    ],
  },
  {
    slug: "ritucharya-living-with-the-seasons",
    title: "Ṛtucharya: Eating and Living With the Seasons",
    excerpt:
      "Seasonal living without the dogma: attention, not rules. What changes in your body across a year, what ṛtucharya suggests about each turn, and where modern research quietly agrees.",
    category: "Everyday Habits",
    readMins: 6,
    date: "22 Dec 2025",
    cover:
      "https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "A colourful display of fresh seasonal vegetables at a local market.",
    takeaways: [
      "Digestive capacity, mood and sleep genuinely shift with season and light.",
      "Warmer months: lighter meals, more fluids, earlier dinners. Cooler months: warming cooked food, morning sun.",
      "Seasonal produce is also a gut-diversity strategy — variety feeds the microbiome.",
      "One seasonal adjustment, tracked for a few weeks, beats a full overhaul.",
    ],
    related: [
      "agni-why-ayurveda-obsesses-over-digestion",
      "what-prakriti-actually-means",
      "sleep-is-a-treatment-nidra",
    ],
    body: [
      {
        t: "p",
        x: "Ṛtucharya — seasonal routine — is Ayurveda's calendar: six seasons, each with advice about food, movement and rest. Read literally as commandments, it becomes another list of rules to fail at. Read as attention, it is one of the most immediately sensible ideas in the tradition: your body is not the same instrument in May as it is in January, and pretending otherwise costs you something.",
      },
      { t: "h2", x: "The simple logic" },
      {
        t: "p",
        x: "You already know this in your body. A heavy meal in peak summer heat feels like a mistake; a cold salad in deep winter feels like a punishment. Appetite typically runs stronger in cooler months and lighter in hot ones; skin dries as humidity falls; sleep deepens when nights lengthen. None of this is doctrine — it's physiology responding to temperature, daylight and humidity. Ṛtucharya simply says: notice, and adjust with the weather rather than against it.",
      },
      { t: "h2", x: "A practical seasonal sketch" },
      {
        t: "list",
        items: [
          "Warmer months — lighter meals, more fluids (sipped, not flooded), earlier and smaller dinners, exercise in the cooler hours.",
          "Cooler months — warm cooked foods, soups and stews, a little more healthy fat, morning sunlight deliberately sought.",
          "Transitions — spring and autumn are when routines wobble first; watch sleep and appetite as your early-warning instruments.",
          "Monsoon — the traditional caution season for digestion and food hygiene; freshly cooked food earns its keep here.",
        ],
      },
      { t: "h2", x: "What modern research adds" },
      {
        t: "p",
        x: "A few findings sit comfortably beside the old advice. Mood and alertness track daylight exposure for many people — winter light is a legitimate therapeutic tool, not a mood. Vitamin D status commonly dips in low-sun months, which your doctor can check rather than guess. And there is a quiet bonus to eating seasonally that neither tradition nor headlines emphasise: rotating seasonal produce is one practical way to vary your fibre intake across the year — and dietary variety is generally considered supportive of gut health.",
      },
      { t: "h2", x: "One seasonal experiment" },
      {
        t: "p",
        x: "Don't overhaul the calendar. As the season turns, choose one adjustment — perhaps dinner an hour earlier through the hot months, or a fifteen-minute morning sun walk through the cold ones — and note energy and digestion for three weeks. That is ṛtucharya as it was meant to be practised: small, seasonal, observed.",
      },
      {
        t: "quote",
        x: "The seasons don't ask for perfection. They ask for notice.",
      },
      {
        t: "note",
        x: "Educational content only. Seasonal mood changes that affect daily life deserve a conversation with a doctor — light, routine and professional care are not competitors.",
      },
    ],
  },
  {
    slug: "herbs-what-we-actually-know",
    title: "Ashwagandha, Triphala & Friends: What We Actually Know",
    excerpt:
      "Herbs are pharmacology with better public relations. A clear-eyed scorecard of the famous ones — what the evidence suggests, where it's thin, and why interactions matter more than origins.",
    category: "Myth & Evidence",
    readMins: 8,
    date: "5 Dec 2025",
    cover:
      "https://images.pexels.com/photos/12809521/pexels-photo-12809521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "Traditional dried herbs being weighed on a balance scale.",
    takeaways: [
      "Some herbs show genuine signals in small trials; 'signal' is not the same as settled.",
      "Quality varies enormously — contamination and poor standardisation are real problems.",
      "Interactions with thyroid, diabetes, blood-pressure, anticoagulant and sedative medicines matter.",
      "A herb earns its place by answering: what for, how long, how will we know it's working?",
    ],
    related: [
      "panchakarma-honestly",
      "when-tradition-meets-a-blood-test",
      "agni-why-ayurveda-obsesses-over-digestion",
    ],
    body: [
      {
        t: "p",
        x: "Somewhere between 'ancient miracle' and 'expensive placebos' there is a less exciting, more useful truth: herbs are mixtures of bioactive compounds. They can do things. They can also interact, contaminate, and disappoint. They deserve exactly the same scrutiny we give any other substance that enters a body — which is to say, more than a testimonial and less than a conspiracy theory.",
      },
      { t: "h2", x: "A quick, honest scorecard" },
      {
        t: "p",
        x: "A few of the most-asked-about herbs, stated as plainly as the current evidence allows. 'Small trials suggest' means exactly that — promising, not settled:",
      },
      {
        t: "list",
        items: [
          "Ashwagandha — small human trials suggest benefit for perceived stress and sleep quality. Cautions: thyroid activity, rare liver-injury reports, pregnancy, and additive sedation. Not a casual daily default.",
          "Turmeric / curcumin — a modest anti-inflammatory signal, but famously poor absorption; meaningful effects tend to need formulated extracts. Caution with anticoagulants and before surgery.",
          "Triphala — gentle bowel regularity and some digestive comfort; few rigorous trials. Take it away from other medicines, because anything that moves the gut can move absorption timing too.",
          "Brahmi / shankhpushpi — interesting cognitive research, mostly preliminary; human evidence still thin enough to stay humble about.",
        ],
      },
      { t: "h2", x: "Natural ≠ safe" },
      {
        t: "p",
        x: "The origin of a compound tells you nothing about its safety — arsenic is entirely natural. With herbal products the practical risks are quality ones: inconsistent potency, undeclared additives, and in poorly manufactured traditional preparations, heavy-metal contamination. If a product can't tell you what's in it, per serving, from a tested batch, it is not healthcare; it is faith with a label.",
      },
      { t: "h2", x: "Interactions are the real story" },
      {
        t: "p",
        x: "Most herb problems are not herb problems — they are herb-plus-medicine problems. A thyroid tablet and an ashwagandha capsule are both nudging the same dial. Diabetes and blood-pressure medications have herbal counterparts that nudge alongside them, sometimes too far. Anticoagulants and curcumin share a direction of effect. The rule that prevents almost all of this is unglamorous: every doctor you see — Ayurvedic or allopathic — gets the complete list of what you take, and timing gaps are respected.",
      },
      { t: "h2", x: "Our rule of thumb" },
      {
        t: "quote",
        x: "If we can't say what a herb is for, for how long, and how we'll know it's working — we don't start it.",
      },
      {
        t: "p",
        x: "That discipline, not the herb cabinet, is what separates a considered practice from a supplement shop. Most good plans contain fewer herbs than you'd expect — and each one present can explain why.",
      },
      {
        t: "note",
        x: "Educational overview, not prescribing advice. Evidence summaries here are qualitative and deliberately cautious; specific decisions belong in a consultation with your own doctors.",
      },
    ],
  },
  {
    slug: "sleep-is-a-treatment-nidra",
    title: "Sleep Is a Treatment: Nidrā for the Always-On",
    excerpt:
      "Ayurveda counts sleep among the pillars of health. Modern science agrees emphatically. The practical, un-mystical guide to rebuilding the night.",
    category: "Mind & Rest",
    readMins: 5,
    date: "18 Nov 2025",
    cover:
      "https://images.pexels.com/photos/3847560/pexels-photo-3847560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "Soft morning sunlight falling across a bed with warm blankets in a calm bedroom.",
    takeaways: [
      "Poor sleep reshapes appetite, mood, pain and next-day digestion — it is a treatment you're either getting or missing.",
      "Fix the wake time first; the sleep time follows.",
      "Last meal 2.5–3 hours before bed; dim, screen-light evenings; one job for the bedroom.",
      "Trouble sleeping for months, snoring or daytime sleepiness: see a doctor — the NHS notes a GP may refer you for CBT.",
    ],
    related: [
      "dinacharya-the-case-for-a-boring-morning",
      "ritucharya-living-with-the-seasons",
      "herbs-what-we-actually-know",
    ],
    body: [
      {
        t: "p",
        x: "The classical texts place nidrā — sleep — among the three pillars that hold a life up, beside food and measured energy. It is one of the places where old Ayurveda and new sleep science shake hands without needing an interpreter: sleep is not the absence of treatment. It is treatment. Every system you care about — mood, appetite, immunity, memory, pain sensitivity, next-day digestion — is recalibrated overnight, or not.",
      },
      { t: "h2", x: "What a bad night is actually doing" },
      {
        t: "p",
        x: "Even a single short night can leave appetite, mood, concentration and next-day food choices noticeably worse — and when short nights stack up for weeks, the cost spreads across every system a consultation cares about. This is why sleep is never a footnote in a consultation: the person sleeping five fractured hours is not the same organism as the one we'd be meeting at seven and a half.",
      },
      { t: "h2", x: "The evening, in plain language" },
      {
        t: "p",
        x: "Ayurveda describes the evening as the time to settle vāta — the mobile, restless principle. Translated out of the tradition's dialect, the advice is strikingly modern:",
      },
      {
        t: "list",
        items: [
          "Finish the last meal 2.5–3 hours before bed — digestion and deep sleep compete for the same shift.",
          "Dim the lights and downgrade the screens for the final hour; the nervous system reads light as instruction.",
          "Fix the wake-up time first, every day — sleep time stabilises around a reliable morning, not the other way round.",
          "Warm shower or foot-wash before bed: the small drop in body temperature afterwards nudges sleepiness.",
          "A two-minute brain-dump on paper — tomorrow's list out of the head and onto the page.",
          "Keep the bedroom cool, dark, and single-purpose: beds are for sleep, not scrolling.",
        ],
      },
      { t: "h2", x: "Caffeine, naps, and other negotiations" },
      {
        t: "list",
        items: [
          "Caffeine's half-life is long enough that a 5 p.m. cup is still working at midnight — set your own cutoff around 8–10 hours before bed.",
          "Naps: under 25 minutes and before mid-afternoon, or skip them until nights recover.",
          "Alcohol makes sleep arrive faster and then dismantles it — the nightcap is a loan at bad interest.",
        ],
      },
      { t: "h2", x: "When it's more than a habit problem" },
      {
        t: "p",
        x: "Trouble sleeping for months, loud snoring or gasping at night, restless legs, or sleepiness that intrudes on the daytime are not routine problems — they are medical ones. The NHS notes that a GP may refer persistent insomnia for cognitive behavioural therapy (CBT) or assess for other sleep disorders — which is why a medical appointment, not a product, is the right next step. A good integrative practitioner will tell you this gladly, because the goal was never the herb; it was the night.",
      },
      {
        t: "quote",
        x: "Protect the night and half the day's symptoms quietly resign.",
      },
      {
        t: "note",
        x: "Educational content. Suspected sleep apnoea or persistent insomnia should be evaluated by a qualified doctor.",
      },
    ],
  },
  {
    slug: "panchakarma-honestly",
    title: "Panchakarma, Honestly: What It Is and Isn't",
    excerpt:
      "The classical five actions have become spa marketing's favourite word. What panchakarma actually involves, what evidence can support, and the safety lines no one should cross.",
    category: "Myth & Evidence",
    readMins: 6,
    date: "30 Oct 2025",
    cover:
      "https://images.pexels.com/photos/6187423/pexels-photo-6187423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "A practitioner's hands gently massaging a person's hand during an oil therapy.",
    takeaways: [
      "Classical panchakarma is a supervised medical programme, not a spa menu.",
      "Documented benefits are real but mostly the benefits of structured rest, routine and care.",
      "'Detox' marketing overshoots: your liver and kidneys are the detox system.",
      "Safety lines: qualified supervision, screening, and no extreme fasting-style programmes.",
    ],
    related: [
      "herbs-what-we-actually-know",
      "what-prakriti-actually-means",
      "dinacharya-the-case-for-a-boring-morning",
    ],
    body: [
      {
        t: "p",
        x: "Panchakarma — literally, five actions — is Ayurveda's classical programme of preparatory and eliminative therapies. In the last decade it has also become a marketing word, stretched over everything from a pleasant oil massage to a week of juice fasting. The distance between those two things is exactly where honesty is needed.",
      },
      { t: "h2", x: "What it actually involves" },
      {
        t: "p",
        x: "Classically, the programme has a shape: days of preparation — internal oleation and gentle heat therapies such as abhyanga (oil massage) and swedana (warmth/sudation) — followed by one or more of the five principal actions, chosen to the individual. In the texts this is medicine: assessed, indicated, supervised, and followed by a careful recovery diet. It was never a weekend package, and it was never something to do from a video.",
      },
      { t: "h2", x: "What evidence does — and doesn't — support" },
      {
        t: "p",
        x: "People routinely report feeling substantially better after well-run panchakarma programmes, and that report deserves respect — but also translation. A week of enforced rest, regular warm meals, daily massage, early nights and no work is, by any modern measure, a powerful intervention. Sleep, stress and perceived wellbeing often shift on that alone. What the evidence does not support is the stronger marketing claim: that the procedures extract accumulated 'toxins'. Your liver and kidneys are the detoxification system, and they do not need a brochure.",
      },
      { t: "h2", x: "Safety, plainly" },
      {
        t: "list",
        items: [
          "Only under a qualified Ayurvedic physician's supervision, with prior assessment — not a spa counter decision.",
          "Not appropriate in pregnancy, significant frailty, or several chronic conditions — screening is not optional.",
          "Avoid extreme, fast-heavy programmes sold online; dehydration and electrolyte disturbance are not purification.",
          "Hydration, monitoring and a proper recovery phase are what separate medicine from theatre.",
        ],
      },
      { t: "h2", x: "The gentler cousins, at home" },
      {
        t: "p",
        x: "The durable, evidence-friendly parts of the tradition travel well into ordinary life: warm-oil self-massage before a shower, sensible seasonal eating, protected sleep, and an occasional planned week of simpler food and earlier nights. None of it needs a five-star resort. Most of it needs a calendar.",
      },
      {
        t: "quote",
        x: "Keep the rest, keep the oil, keep the routine — and let the word 'detox' go.",
      },
      {
        t: "note",
        x: "Educational overview. Any classical panchakarma programme should be undertaken only after assessment by a qualified Ayurvedic physician, in coordination with your existing medical care.",
      },
    ],
  },
  {
    slug: "reading-your-tongue-self-observation",
    title: "Reading Your Tongue: A Gentle Start to Self-Observation",
    excerpt:
      "Ayurveda examines the tongue; you don't need to diagnose from it. A 20-second morning habit that turns you into a better reporter of your own body.",
    category: "Foundations",
    readMins: 4,
    date: "12 Oct 2025",
    cover:
      "https://images.pexels.com/photos/6653908/pexels-photo-6653908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    coverAlt: "A person writing notes in a journal beside a warm cup of tea in soft light.",
    takeaways: [
      "Check once a day, before brushing, in natural light — 20 seconds.",
      "Note coating, colour and dryness; photograph monthly under the same light.",
      "Patterns over days matter; single snapshots mean little.",
      "This is self-notice, not diagnosis — bring patterns to your clinician.",
    ],
    related: [
      "what-prakriti-actually-means",
      "agni-why-ayurveda-obsesses-over-digestion",
      "dinacharya-the-case-for-a-boring-morning",
    ],
    body: [
      {
        t: "p",
        x: "In a classical Ayurvedic examination, the tongue is inspected early — jihvā pariksha. Coating, colour, moisture and shape are read as signals about digestion and the body's current state. You don't need to learn that art to borrow its best habit: twenty seconds of morning self-notice that turns you into a much better reporter of your own body.",
      },
      { t: "h2", x: "The 20-second habit" },
      {
        t: "list",
        items: [
          "Before brushing, in natural light, at the same time each morning.",
          "Coating: a thin, light film is ordinary; a thick or heavily coloured coat is worth noting.",
          "Colour: markedly pale, red or patchy deserves attention if it persists.",
          "Moisture and edges: unusual dryness, or teeth-marks along the sides.",
          "Once a month, photograph it in the same light — memory edits; photos don't.",
        ],
      },
      { t: "h2", x: "What it might reflect" },
      {
        t: "p",
        x: "A changing coating often tracks things you already half-know: last night's late dinner, a dehydrating week, a spell of mouth-breathing sleep, or simply strong coffee not yet brushed away. The value is never in one morning — it's in the trend across a fortnight. When appetite, sleep and the morning tongue move together, you've found a pattern worth mentioning at your next consultation, with any practitioner in any system.",
      },
      { t: "h2", x: "What it is not" },
      {
        t: "p",
        x: "Let's be firm about the boundary: there is no map by which a tongue names your disease, and anyone selling that is selling certainty they cannot have. Persistent changes — colour shifts, soreness, patches that don't clear in two weeks — are for a doctor or dentist to examine, not an internet graphic to interpret.",
      },
      {
        t: "quote",
        x: "You are not diagnosing yourself. You are learning to notice — which is where every diagnosis begins anyway.",
      },
      {
        t: "note",
        x: "Educational content. Persistent oral changes should be examined by a doctor or dentist.",
      },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

export const relatedArticles = (article: Article) =>
  article.related
    .map((slug) => getArticle(slug))
    .filter((a): a is Article => Boolean(a));

/* ------------------------------------------------------------------ */
/*  Verified authoritative overviews for the "Sources & further        */
/*  reading" box on each article. These are real, stable reference     */
/*  pages (regulator / public-health overviews) — not study citations  */
/*  for specific sentences. In a live deployment, sentence-level       */
/*  clinical claims would each carry their own guideline reference.    */
/* ------------------------------------------------------------------ */

const NCCIH_AYURVEDA = {
  label: "NCCIH — Ayurvedic Medicine: In Depth (evidence & safety overview)",
  url: "https://www.nccih.nih.gov/health/ayurvedic-medicine-in-depth",
};
const NCCIH_ASHWAGANDHA = {
  label: "NCCIH — Ashwagandha: Usefulness and Safety",
  url: "https://www.nccih.nih.gov/health/ashwagandha",
};
const WHO_TCIM = {
  label: "WHO — Traditional medicine (Q&A overview)",
  url: "https://www.who.int/news-room/questions-and-answers/item/traditional-medicine",
};
const NHS_INSOMNIA = {
  label: "NHS — Insomnia (symptoms, self-help & when to see a GP)",
  url: "https://www.nhs.uk/conditions/insomnia/",
};

export const ARTICLE_SOURCES: Record<string, { label: string; url: string }[]> = {
  "when-tradition-meets-a-blood-test": [NCCIH_AYURVEDA, WHO_TCIM],
  "what-prakriti-actually-means": [NCCIH_AYURVEDA, WHO_TCIM],
  "agni-why-ayurveda-obsesses-over-digestion": [NCCIH_AYURVEDA, WHO_TCIM],
  "dinacharya-the-case-for-a-boring-morning": [NCCIH_AYURVEDA, NHS_INSOMNIA],
  "ritucharya-living-with-the-seasons": [WHO_TCIM, NCCIH_AYURVEDA],
  "herbs-what-we-actually-know": [NCCIH_ASHWAGANDHA, NCCIH_AYURVEDA],
  "sleep-is-a-treatment-nidra": [NHS_INSOMNIA, NCCIH_AYURVEDA],
  "panchakarma-honestly": [NCCIH_AYURVEDA, WHO_TCIM],
  "reading-your-tongue-self-observation": [NCCIH_AYURVEDA, WHO_TCIM],
};
