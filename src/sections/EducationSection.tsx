import { GraduationCap } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { education } from "../data/education";

export function EducationSection() {
  return (
    <section id="education" className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="09" title="Education" />

        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-wrap items-start gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)]">
                <GraduationCap className="h-5 w-5 text-[var(--color-accent)]" />
              </span>
              <div className="flex-1">
                <h3 className="font-mono text-base font-semibold text-[var(--color-text)]">{edu.degree}</h3>
                <p className="mt-1 text-sm text-[var(--color-accent)]">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">
                  {edu.start} — {edu.end} · {edu.location}
                </p>
              </div>
              <span className="rounded border border-[var(--color-border)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-muted)]">
                {edu.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
