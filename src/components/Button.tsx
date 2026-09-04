import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  download?: boolean;
  target?: string;
};

export function Button({ href, onClick, children, variant = "primary", icon, download, target }: ButtonProps) {
  const base =
    "group inline-flex min-h-11 items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-[#06110c] hover:bg-[var(--color-accent-dim)] hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(62,213,152,0.4)] hover:shadow-[0_4px_20px_-4px_rgba(62,213,152,0.5)]"
      : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5";

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} download={download} target={target} rel={target ? "noopener noreferrer" : undefined} className={`${base} ${styles}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {content}
    </button>
  );
}
