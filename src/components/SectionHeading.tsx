import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  number?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, number, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {number && (
        <p className="mb-3 text-4xl font-bold text-[var(--color-accent)] sm:text-5xl">
          {number}
        </p>
      )}
      {eyebrow && (
        <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">
          <span className="text-[var(--color-text-faint)]">// </span>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-4 text-base font-sans leading-relaxed text-[var(--color-text-muted)] ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
