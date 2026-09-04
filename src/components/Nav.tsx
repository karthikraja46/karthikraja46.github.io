import { useEffect, useRef, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { profile } from "../data/profile";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "expertise" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "work" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    firstMenuLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-[var(--color-border)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex min-h-11 items-center gap-2 font-mono text-sm font-semibold text-[var(--color-text)]">
          <Terminal className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
          karthik<span className="text-[var(--color-accent)]">@</span>qa
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex min-h-11 items-center font-mono text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 items-center rounded-md border border-[var(--color-border)] px-4 py-1.5 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:inline-flex"
        >
          connect
        </a>

        <button
          ref={menuButtonRef}
          className="flex min-h-11 min-w-11 items-center justify-center text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="glass border-t border-[var(--color-border)] px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded px-2 py-3 font-mono text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
