import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/* ---------- eyebrow label ---------- */
export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] ${
        tone === "light" ? "text-sage" : "text-olive"
      }`}
    >
      <svg viewBox="0 0 28 12" className="h-3 w-7" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M1 6h7l2.5-4 3.5 8 2.5-5 1.5 1h9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </p>
  );
}

/* ---------- animated pulse divider ---------- */
export function PulseLine({ className = "text-sage" }: { className?: string }) {
  return (
    <div className={`reveal ${className}`} aria-hidden>
      <svg viewBox="0 0 600 40" preserveAspectRatio="none" className="h-8 w-full" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path
          className="pulse-path"
          pathLength={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M0 20H180l14-9 16 18 14-22 13 13 9-4 6 4h150l12-7 12 14 10-9 8 2h156"
        />
      </svg>
    </div>
  );
}

/* ---------- rotating circular badge ---------- */
export function RotatingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M60 60 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="var(--color-saffron)" />
        <circle cx="60" cy="60" r="44" fill="none" stroke="var(--color-cream)" strokeOpacity="0.35" strokeWidth="0.8" />
        <text fontSize="10.2" letterSpacing="2.6" fill="var(--color-cream)" fontFamily="IBM Plex Mono, monospace">
          <textPath href="#badge-circle">LISTEN · UNDERSTAND · PERSONALISE · SUSTAIN ·</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-7 w-7" fill="none" stroke="var(--color-cream)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3C7.5 6.5 5 10 5 13.5A7 7 0 0 0 12 21a7 7 0 0 0 7-7.5C19 10 16.5 6.5 12 3Z" />
        <path d="M3 13.5h4.5l1.5-3.5 2.5 6 2-4.5 1.2 2H21" />
      </svg>
    </div>
  );
}

/* ---------- marquee ticker ---------- */
export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="marquee overflow-hidden border-y border-olive/25 bg-parchment py-4" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap pr-10">
        {children}
        {children}
      </div>
    </div>
  );
}

/* ---------- illustrative placeholder tag ---------- */
export function IllustrativeTag({ children = "Illustrative example" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-clay/50 bg-clay/5 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-clay">
      {children}
    </span>
  );
}

/* ---------- photograph placeholder frame ---------- */
export function PhotoPlaceholder({
  label = "Practitioner photograph",
  sub = "To be supplied with approval",
  className = "h-[440px]",
}: {
  label?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — ${sub}`}
      className={`flex w-full flex-col items-center justify-center gap-3 border border-dashed border-olive/50 bg-parchment/70 px-6 text-center ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-olive/60"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
        <circle cx="9" cy="10" r="1.8" />
        <path d="M4.5 17.5 10 12l3.5 3.5L17 12l2.5 2.5" />
      </svg>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-soft">[ {label} ]</p>
      <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-olive/80">{sub}</p>
    </div>
  );
}

/* ---------- buttons ---------- */
export function ButtonLink({
  to,
  children,
  variant = "solid",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light";
  className?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-moss text-cream hover:bg-moss-deep"
      : variant === "light"
        ? "bg-cream text-moss-deep hover:bg-bone"
        : "border border-olive/50 text-ink hover:border-moss hover:text-moss";
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-300 ${styles} ${className}`}
    >
      {children}
      <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 12h15" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}
