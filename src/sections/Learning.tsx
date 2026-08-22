import { SectionHeading } from "../components/SectionHeading";
import { roadmap } from "../data/education";

const STATUS_STYLE = {
  done: "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  current: "border-[var(--color-amber)] bg-[var(--color-amber-soft)] text-[var(--color-amber)]",
  next: "border-[var(--color-border)] text-[var(--color-text-faint)]",
} as const;

const STATUS_ICON = { done: "✓", current: "●", next: "○" } as const;

export function Learning() {
  return (
    <section id="learning" className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="in-progress"
          title="Currently Learning & Building"
          description="The path from manual QA into automation engineering, tracked the way I'd track a pipeline: what's done, what's running, what's next."
        />

        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-y-4">
            {roadmap.map((stage, i) => (
              <div key={stage.label} className="flex items-center">
                <div
                  className={`flex items-center gap-2 rounded-md border px-3.5 py-2 font-mono text-xs sm:text-sm ${STATUS_STYLE[stage.status]}`}
                >
                  <span>{STATUS_ICON[stage.status]}</span>
                  {stage.label}
                </div>
                {i < roadmap.length - 1 && (
                  <span
                    className={`mx-1.5 h-px w-4 sm:w-8 ${
                      stage.status === "done" ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-t border-[var(--color-border-soft)] pt-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs text-[var(--color-accent)]">✓ solid ground</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Manual testing, STLC/SDLC, Python and SQL fundamentals.</p>
            </div>
            <div>
              <p className="font-mono text-xs text-[var(--color-accent)]">✓ solid ground</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Playwright + TypeScript, CI/CD pipeline design, and containerized test environments.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-[var(--color-accent)]">✓ solid ground</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Advanced framework architecture and broader API/automation ownership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
