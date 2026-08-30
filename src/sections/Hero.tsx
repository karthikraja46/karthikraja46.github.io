import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { Button } from "../components/Button";
import { PipelineConsole } from "../components/PipelineConsole";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div className="animate-rise flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1 font-mono text-xs text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
            SDET • Test Automation Engineer
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold leading-snug text-[var(--color-text-muted)] sm:text-3xl">
            {profile.tagline}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            {profile.mission}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" icon={<ArrowRight className="h-4 w-4" />}>
              View Projects
            </Button>
            <Button href={profile.resumeFile} variant="ghost" download icon={<Download className="h-4 w-4" />}>
              Download Resume
            </Button>
            <Button href={profile.linkedin} variant="ghost" target="_blank" icon={<LinkedinIcon className="h-4 w-4" />}>
              LinkedIn
            </Button>
            <Button href="#contact" variant="ghost">
              Contact Me
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5 font-mono text-xs text-[var(--color-text-faint)]">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--color-accent)]">
              <GithubIcon className="h-3.5 w-3.5" /> github.com/karthikraja46
            </a>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{profile.location}</span>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <PipelineConsole />
        </div>
      </div>
    </section>
  );
}
