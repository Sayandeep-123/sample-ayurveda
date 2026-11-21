import type { JSX, SVGProps } from "react";
import type { CareIcon, PrincipleIcon } from "@/data/site";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

/* Brand mark — a leaf crossed by a pulse line */
export const BrandMark = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 3C7.5 6.5 5 10 5 13.5A7 7 0 0 0 12 21a7 7 0 0 0 7-7.5C19 10 16.5 6.5 12 3Z" />
    <path d="M12 21V9.5" strokeWidth={1.2} opacity={0.55} />
    <path d="M3 13.5h4.5l1.5-3.5 2.5 6 2-4.5 1.2 2H21" strokeWidth={1.7} />
  </svg>
);

export const IconArrow = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconSearch = (props: P) => (
  <svg {...base(props)}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5 21 21" />
  </svg>
);

export const IconClock = (props: P) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconCheck = (props: P) => (
  <svg {...base(props)}>
    <path d="M4.5 12.5 10 18 19.5 6.5" />
  </svg>
);

export const IconChevron = (props: P) => (
  <svg {...base(props)}>
    <path d="M6 9.5l6 6 6-6" />
  </svg>
);

export const IconMenu = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h10" />
  </svg>
);

export const IconClose = (props: P) => (
  <svg {...base(props)}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </svg>
);

export const IconMail = (props: P) => (
  <svg {...base(props)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="M4.5 7.5 12 13l7.5-5.5" />
  </svg>
);

export const IconPin = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 21s-6.5-5.6-6.5-10.4A6.4 6.4 0 0 1 12 4a6.4 6.4 0 0 1 6.5 6.6C18.5 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.2" />
  </svg>
);

export const IconPhone = (props: P) => (
  <svg {...base(props)}>
    <path d="M5 4h4l1.5 4-2.2 1.7a12 12 0 0 0 6 6L16 13.5l4 1.5v4a1.8 1.8 0 0 1-2 1.8C10.6 20 4 13.4 3.2 6A1.8 1.8 0 0 1 5 4Z" />
  </svg>
);

/* ---------- principle icons ---------- */

const IconEar = (props: P) => (
  <svg {...base(props)}>
    <path d="M8 8.5a4.5 4.5 0 0 1 9 0c0 2.6-1.6 3.4-2.3 5.2-.6 1.6-.4 3.8-2.4 3.8-1.7 0-2-1.3-2.2-2.4" />
    <path d="M11 8.7a2.6 2.6 0 0 1 5.1-.2c0 1.5-1 2-1.6 3.2" />
    <path d="M3 6.5v2M3 11.5v2" opacity={0.55} />
  </svg>
);

const IconPattern = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 5.5a6.5 6.5 0 0 0-6.5 6.5c0 2 .4 3.9 1.2 5.5" />
    <path d="M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 2-.4 3.9-1.2 5.5" />
    <path d="M12 9a3 3 0 0 0-3 3c0 1.7.3 3.3.9 4.8" />
    <path d="M12 9a3 3 0 0 1 3 3c0 1.7-.3 3.3-.9 4.8" />
    <circle cx="12" cy="12.5" r="0.4" fill="currentColor" stroke="none" />
    <path d="M12 12.5v5" />
  </svg>
);

const IconMortar = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 11h16a8 8 0 0 1-4.8 6.9L15 20.5H9l-.2-2.6A8 8 0 0 1 4 11Z" />
    <path d="M14.5 11 19.6 4.6a1.6 1.6 0 0 0-2.4-2.1L11 8.4" />
    <path d="M7.5 14h4" opacity={0.55} />
  </svg>
);

const IconBook = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 6.5C10 5 7.5 4.6 4 4.8v13.7c3.5-.2 6 .2 8 1.7 2-1.5 4.5-1.9 8-1.7V4.8c-3.5-.2-6 .2-8 1.7Z" />
    <path d="M12 6.5v13.7" />
    <path d="M6.8 8.5c1.5 0 2.6.2 3.4.6M6.8 11.5c1.5 0 2.6.2 3.4.6" opacity={0.55} />
  </svg>
);

const IconCycle = (props: P) => (
  <svg {...base(props)}>
    <path d="M4.5 12a7.5 7.5 0 0 1 13-5.2L20 9" />
    <path d="M20 4.5V9h-4.5" />
    <path d="M19.5 12a7.5 7.5 0 0 1-13 5.2L4 15" />
    <path d="M4 19.5V15h4.5" />
  </svg>
);

/* ---------- care icons ---------- */

const IconBowl = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 12h16a8 8 0 0 1-5 7.3V21H9v-1.7A8 8 0 0 1 4 12Z" />
    <path d="M9.5 8.5c-1-1.2 1-2 0-3.5M13.5 8.5c-1-1.2 1-2 0-3.5" opacity={0.7} />
  </svg>
);

const IconMoon = (props: P) => (
  <svg {...base(props)}>
    <path d="M18.5 11.5A7 7 0 1 1 10 3.6a5.6 5.6 0 0 0 8.5 7.9Z" />
    <path d="M3.5 19.5c2-1.4 4-1.4 6 0s4 1.4 6 0 4-1.4 5.5-.2" opacity={0.7} />
  </svg>
);

const IconCycleDots = (props: P) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="4.5" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="19.5" cy="12" r="1.1" fill="currentColor" stroke="none" opacity={0.7} />
    <circle cx="12" cy="19.5" r="0.9" fill="currentColor" stroke="none" opacity={0.5} />
    <circle cx="4.5" cy="12" r="1.2" fill="currentColor" stroke="none" opacity={0.85} />
    <path d="M12 8.5v7" opacity={0.4} />
  </svg>
);

const IconLayers = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 7.5c3-2 5-2 8 0s5 2 8 0" />
    <path d="M4 12c3-2 5-2 8 0s5 2 8 0" opacity={0.75} />
    <path d="M4 16.5c3-2 5-2 8 0s5 2 8 0" opacity={0.5} />
    <path d="M12 16.5V20" />
    <path d="M12 20c-1.8 0-2.6-1-2.6-2.2 1.7-.2 2.6.6 2.6 2.2Z" fill="currentColor" stroke="none" opacity={0.7} />
  </svg>
);

const IconGauge = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 3.5s6 6.3 6 10.5a6 6 0 0 1-12 0C6 9.8 12 3.5 12 3.5Z" />
    <path d="M12 17.5v-4l2.6-1.5" />
    <circle cx="12" cy="14" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const IconJoint = (props: P) => (
  <svg {...base(props)}>
    <path d="M8 3.5 10.8 9M16 20.5 13.2 15" />
    <circle cx="12" cy="12" r="3" />
    <path d="M7.2 8.2A7.5 7.5 0 0 0 7 15M16.8 15.8a7.5 7.5 0 0 0 .2-7" opacity={0.6} />
    <circle cx="12" cy="12" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const PRINCIPLE_ICONS: Record<PrincipleIcon, (p: P) => JSX.Element> = {
  ear: IconEar,
  pattern: IconPattern,
  mortar: IconMortar,
  book: IconBook,
  cycle: IconCycle,
};

export const CARE_ICONS: Record<CareIcon, (p: P) => JSX.Element> = {
  bowl: IconBowl,
  moon: IconMoon,
  "cycle-dots": IconCycleDots,
  layers: IconLayers,
  gauge: IconGauge,
  joint: IconJoint,
};
