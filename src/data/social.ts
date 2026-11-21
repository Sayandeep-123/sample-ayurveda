/* ------------------------------------------------------------------ */
/*  "From the Desk" — LinkedIn integration layer                        */
/*                                                                    */
/*  ANONYMITY & ATTRIBUTION                                            */
/*  These sample cards demonstrate the LAYOUT using real, public posts  */
/*  by other educators — they are NOT the fictional brand's content    */
/*  and must never be presented as such. Each card names its actual    */
/*  author and links out to the author's public LinkedIn presence.     */
/*  In a live deployment, this array would hold the practitioner's     */
/*  own public posts (official "Embed this post" URLs where the        */
/*  practitioner enables embedding, designed cards otherwise).         */
/*                                                                    */
/*  Summaries below are ORIGINAL précis written for this concept —     */
/*  never copied post text.                                            */
/* ------------------------------------------------------------------ */

export interface LinkedInPost {
  id: string;
  theme: string;
  headline: string;
  /** Original summary written for this concept — not the post's text. */
  summary: string;
  /** As shown on LinkedIn; approximate where only relative dates exist. */
  date: string;
  /** Real author name — required for accurate attribution. */
  author: string;
  authorHeadline: string;
  /** Author's public LinkedIn URL (verified at research time). */
  linkedInUrl: string;
  /** Related Knowledge Hub article for the "longer read" link. */
  relatedArticle: string;
  /**
   * Official LinkedIn "Embed this post" iframe URL, when the practitioner
   * provides one. Unset here — designed cards are used instead, which the
   * brief explicitly permits when embedding isn't available.
   */
  embedUrl?: string;
}

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "food-myths",
    theme: "Healthcare education",
    headline: "Five food myths, examined one by one",
    summary:
      "A carousel post walks through five everyday beliefs — acidity and spicy food, water around meals, dinner timing, curd at night and “detox” drinks — and replaces each rigid rule with a principle: agni, quantity, timing, season and individual suitability. Our summary; the original carries the full detail.",
    date: "Recent · 2026",
    author: "Dr. Namrata Gavali",
    authorHeadline: "BAMS, MD (Ayurveda) · Gut health · ManoGut Wellness",
    linkedInUrl: "https://www.linkedin.com/in/drnamratagavali/",
    relatedArticle: "agni-why-ayurveda-obsesses-over-digestion",
  },
  {
    id: "honest-limits",
    theme: "Patient trust",
    headline: "A limit is not where trust ends",
    summary:
      "A reflective post argues that naming what medicine cannot do is where real trust begins — Ayurveda included — followed by a long practitioner discussion in the comments about honest communication. Our summary; the original thread holds the full exchange.",
    date: "Recent · 2026",
    author: "Dr. Talavane Krishna",
    authorHeadline: "Integrative Ayurveda · Indus Valley Ayurvedic Centre",
    linkedInUrl: "https://www.linkedin.com/in/dr-talavane-krishna-a104595/",
    relatedArticle: "when-tradition-meets-a-blood-test",
  },
  {
    id: "normal-reports",
    theme: "Tradition & evidence",
    headline: "“My reports are normal, but I don't feel well”",
    summary:
      "A clinical observation: patients whose lab reports show nothing to worry about, yet whose pulse, digestion, sleep and emotions tell a clearer story when examined together. Our summary of the opening observation only — the post's later programme suggestions are its author's, not this concept's.",
    date: "Recent · 2026",
    author: "Dr. Ruchi Gulati",
    authorHeadline: "MD (Ayurveda) · SukhAyurveda",
    linkedInUrl: "https://www.linkedin.com/in/ayurvedaspecialist/",
    relatedArticle: "what-prakriti-actually-means",
  },
];

export const DESK_NOTE =
  "Sample posts by independent educators, shown to demonstrate the layout — not this brand's content. In a live site, this section would carry the practitioner's own public posts.";
