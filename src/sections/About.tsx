import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

const HIGHLIGHTED_KEYWORDS = new Set(["Playwright", "TypeScript", "Python", "Docker", "Kubernetes"]);

const TRAITS = [
  { k: "manual → automation", v: "Grounded in manual QA fundamentals, now building automated coverage on top of that base." },
  { k: "playwright + typescript", v: "Writing and maintaining Playwright suites in TypeScript for UI and cross-browser regression." },
  { k: "ci/cd native", v: "Comfortable wiring test suites directly into GitHub Actions rather than running them by hand." },
  { k: "sql & data", v: "Working knowledge of SQL and relational databases for test data setup and validation." },
];

export function About() {
  const summaryParts = profile.summary.split(/(Playwright|TypeScript|Python|Docker|Kubernetes)/g);

  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          title="A Little About Me"
          description={summaryParts.map((part, index) =>
            HIGHLIGHTED_KEYWORDS.has(part) ? (
              <span
                key={`${part}-${index}`}
                className="mx-0.5 inline-flex rounded border border-[var(--color-accent)]/40 bg-[var(--color-accent-soft)] px-1.5 py-0.5 font-mono text-[0.8em] text-[var(--color-accent)]"
              >
                {part}
              </span>
            ) : (
              part
            ),
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {TRAITS.map((trait) => (
            <div
              key={trait.k}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <p className="font-mono text-sm text-[var(--color-accent)]">{trait.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{trait.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
