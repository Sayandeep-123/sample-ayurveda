/* ------------------------------------------------------------------ */
/*  Third-party booking integration — single source of truth            */
/*                                                                    */
/*  Reference platform: CareYogi (careyogis.com), verified at research */
/*  time to offer doctor discovery plus online / in-clinic / home-     */
/*  visit booking ("Discover → Book → Consult → Follow-up").           */
/*                                                                    */
/*  NO official embeddable widget, iframe integration or public        */
/*  booking API documentation for CareYogi was found — so this         */
/*  concept implements Option A (external booking link). Option B      */
/*  (embedded widget) is architected in BookingSection and activates   */
/*  automatically if a provider ever supplies an official embed URL.   */
/*                                                                    */
/*  The URL below is a DEMONSTRATION DESTINATION (the provider's own   */
/*  consultation page) — never a real practitioner's booking profile.  */
/* ------------------------------------------------------------------ */

export const BOOKING = {
  providerLabel: "CareYogi",
  providerPage: "https://www.careyogis.com/doctor-consultation",
  /** The single configurable destination used by every booking action. */
  url: "https://www.careyogis.com/doctor-consultation",
  profileNote: "[ Practitioner's booking profile URL — to be confirmed ]",
  /**
   * Official provider widget / iframe URL. Leave null unless the booking
   * partner documents an official embed — never invent an endpoint.
   */
  embedUrl: null as string | null,
  /** Partner's own booking flow, as described on their public page. */
  howItWorks: [
    "Find the practitioner on the partner platform and compare consultation modes.",
    "Pick an online, in-clinic or home-visit slot that suits you.",
    "Share records before or during the visit, then consult as booked.",
  ],
};
