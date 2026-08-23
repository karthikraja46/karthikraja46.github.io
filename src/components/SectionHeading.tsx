import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <p className="font-mono text-sm text-[var(--color-accent)] mb-3">
        <span className="text-[var(--color-text-faint)]">// </span>
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] tracking-tight">{title}</h2>
      {description && (
        <p className={`mt-4 text-[var(--color-text-muted)] font-sans text-base leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
