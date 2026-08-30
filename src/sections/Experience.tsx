import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";
import { experience } from "../data/experience";
import { MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="05"
          title="Experience"
          description="Each role built deeper expertise — from writing test cases, to owning automation, to building CI/CD infrastructure."
        />

        <div className="relative">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-[var(--color-border)] sm:left-[11px]" />

          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company} className="relative pl-8 sm:pl-10">
                <span
                  className={`absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-[var(--color-bg)] ${
                    job.current ? "bg-[var(--color-accent)]" : "bg-[var(--color-text-faint)]"
                  }`}
                />
                {job.current && (
                  <span className="absolute left-0 top-1.5 h-5 w-5 animate-ping rounded-full bg-[var(--color-accent)]/40" />
                )}

                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-mono text-lg font-semibold text-[var(--color-text)]">{job.title}</h3>
                      <p className="mt-1 text-sm text-[var(--color-accent)]">{job.company}</p>
                    </div>
                    <div className="text-right font-mono text-xs text-[var(--color-text-faint)]">
                      <p>
                        {job.start} — {job.current ? <span className="text-[var(--color-accent)]">{job.end}</span> : job.end}
                      </p>
                      <p className="mt-1 flex items-center justify-end gap-1">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <SkillBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
