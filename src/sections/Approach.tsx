import { SectionHeading } from "../components/SectionHeading";

export function Approach() {
  const approaches = [
    {
      number: "01",
      title: "Understand",
      description: "Map out critical user journeys, API contracts, and system boundaries.",
    },
    {
      number: "02",
      title: "Design",
      description: "Build scalable, maintainable test frameworks with clear patterns and practices.",
    },
    {
      number: "03",
      title: "Automate",
      description: "Implement automation where it adds real value—not just coverage.",
    },
    {
      number: "04",
      title: "Integrate",
      description: "Embed tests into CI/CD pipelines for fast, reliable feedback.",
    },
    {
      number: "05",
      title: "Improve",
      description: "Monitor, analyze, and continuously refine tests and processes.",
    },
  ];

  return (
    <section id="approach" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="10" title="My Automation Approach" description="Test automation is a process. I don't just write tests. I build strategies." />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {approaches.map((approach) => (
            <div key={approach.number} className="group">
              <div className="mb-4 text-3xl font-bold text-[var(--color-accent)] sm:text-4xl">
                {approach.number}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[var(--color-text)]">
                {approach.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
