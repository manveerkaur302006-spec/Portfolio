import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { socialIconList, socialLinks } from "@/data/socialLinks";
import { personal } from "@/data/personal";
import { SectionHeader } from "./About";

export function Contact() {
  const items = [
    { label: "Email", value: socialLinks.email, href: `mailto:${socialLinks.email}` },
    { label: "Phone", value: personal.phoneDisplay, href: `tel:${socialLinks.phone}` },
    { label: "GitHub", value: `@${socialLinks.githubUsername}`, href: socialLinks.github },
    { label: "LinkedIn", value: socialLinks.linkedinUsername, href: socialLinks.linkedin },
    { label: "Codeforces", value: socialLinks.codeforcesHandle, href: socialLinks.codeforces },
    { label: "CodeChef", value: socialLinks.codechefHandle, href: socialLinks.codechef },
  ];

  return (
    <section id="contact" className="aurora-bg relative mx-auto max-w-6xl px-6 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-blob absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--aurora-1), transparent 60%)" }} />
      </div>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something."
        description="Open to internships, collaborations, and interesting problems."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 lg:col-span-3"
        >
          <h3 className="text-2xl font-semibold tracking-tight">Reach out directly</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The fastest way is email — I usually reply within a day.
          </p>
          <a
            href={`mailto:${socialLinks.email}`}
            className="group mt-8 inline-flex items-center gap-2 text-2xl font-medium text-gradient sm:text-4xl"
          >
            {socialLinks.email}
            <ArrowUpRight className="h-6 w-6 text-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-10 flex flex-wrap gap-2">
            {socialIconList.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8 lg:col-span-2"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Channels
          </h3>
          <div className="mt-4 divide-y divide-border/60">
            {items.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-3 transition-colors hover:text-primary"
              >
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</span>
                <span className="flex items-center gap-1 text-sm font-medium">
                  {c.value}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} {personal.name}. Crafted with care.</div>
        <div className="flex gap-4">
          {socialIconList.slice(0, 4).map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
