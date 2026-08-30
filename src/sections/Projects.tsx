import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="07"
          title="Selected Work"
          description="A few examples of how I approach automation, testing, and CI/CD integration."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs text-[var(--color-text-faint)]">
          more on the way — this grid grows as new projects ship
        </p>
      </div>
    </section>
  );
}
