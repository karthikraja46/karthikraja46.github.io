import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          title="Expertise"
          description="Automation from different perspectives — from E2E and API testing to CI/CD integration and infrastructure."
        />

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={group.id} className="group">
              <div className="mb-3 flex items-start gap-3">
                <span className="text-2xl font-bold text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {group.label}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">
                    {group.comment}
                  </p>
                </div>
              </div>
              <div className="ml-12 mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
