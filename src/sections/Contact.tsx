import { useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-[var(--color-border-soft)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          number="11"
          title="Let's Connect"
          description="I'm always interested in discussing test automation, CI/CD integration, quality engineering, and new opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <Mail className="h-4 w-4 text-[var(--color-accent)]" />
              <span className="font-mono text-sm text-[var(--color-text-muted)]">{profile.email}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <LinkedinIcon className="h-4 w-4 text-[var(--color-accent)]" />
              <span className="font-mono text-sm text-[var(--color-text-muted)]">linkedin.com/in/karthik-raja-nichenametla</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <GithubIcon className="h-4 w-4 text-[var(--color-accent)]" />
              <span className="font-mono text-sm text-[var(--color-text-muted)]">github.com/karthikraja46</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-[var(--color-text-faint)]">
                  name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs text-[var(--color-text-faint)]">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="font-mono text-xs text-[var(--color-text-faint)]">
                subject
              </label>
              <input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs text-[var(--color-text-faint)]">
                message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full resize-none rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-2 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 font-mono text-sm font-medium text-[#06110c] transition-all hover:bg-[var(--color-accent-dim)]"
            >
              {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              {sent ? "Opening your mail app…" : "Send Message"}
            </button>
            <p className="text-center font-mono text-[11px] text-[var(--color-text-faint)]">
              opens your email client — no data is stored on this site
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
