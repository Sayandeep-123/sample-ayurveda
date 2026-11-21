import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, BRAND } from "@/data/site";
import { BOOKING } from "@/data/booking";
import { BrandMark, IconClose, IconMenu } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close the drawer on navigation + lock body scroll while open */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `link-line text-[14px] font-medium tracking-tight transition-colors ${
      isActive ? "text-moss" : "text-ink-soft hover:text-ink"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-olive/20 bg-bone/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="group flex items-center gap-3" aria-label="Root & Reason — home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-moss text-cream transition-colors duration-300 group-hover:bg-moss-deep">
              <BrandMark className="h-6 w-6" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[19px] font-semibold tracking-tight text-ink">
                Root <span className="text-saffron">&amp;</span> Reason
              </span>
              <span className="mt-1 block font-mono text-[9.5px] uppercase tracking-[0.24em] text-olive">
                {BRAND.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls}>
                {l.label}
              </NavLink>
            ))}
            <a
              href={BOOKING.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Opens ${BOOKING.providerLabel}'s consultation page in a new tab (demonstration destination)`}
              className="link-line inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-tight text-saffron"
            >
              Book a Consultation
              <span aria-hidden>↗</span>
            </a>
            <Link
              to="/enquiry"
              className="rounded-full bg-moss px-5 py-2.5 text-[14px] font-semibold tracking-tight text-cream transition-all duration-300 hover:bg-moss-deep hover:shadow-lg hover:shadow-moss/20"
            >
              Begin an enquiry
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-olive/30 text-ink transition-colors hover:border-moss hover:text-moss lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-bone transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-moss text-cream">
              <BrandMark className="h-6 w-6" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Root <span className="text-saffron">&amp;</span> Reason
            </span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full border border-olive/30 text-ink hover:border-moss hover:text-moss"
            aria-label="Close menu"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
          {[{ to: "/", label: "Home" }, ...NAV_LINKS, { to: "/enquiry", label: "Begin an enquiry" }].map(
            (l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-display text-[11vw] font-medium leading-[1.15] tracking-tight transition-all duration-500 ${
                    isActive ? "text-moss italic" : "text-ink hover:translate-x-2 hover:text-moss"
                  } ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`
                }
                style={{ transitionDelay: `${80 + i * 60}ms` }}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="px-8 pb-10">
          <a
            href={BOOKING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 text-[14px] font-semibold tracking-tight text-cream"
          >
            Book a Consultation <span aria-hidden>↗</span>
          </a>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-olive">
            {BRAND.city} · concept demonstration
          </p>
        </div>
      </div>
    </>
  );
}
