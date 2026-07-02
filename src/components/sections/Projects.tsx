import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "./About";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Things I've shipped."
        description="A selection of full-stack, AI, and systems work — each with a live demo and source."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className="glass group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1"
          >
            {/* Decorative gradient banner */}
            <div className={`relative mb-6 h-32 overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-[0.2em] opacity-80">{p.stack[0]}</div>
                <div className="mt-1 text-lg font-semibold drop-shadow">{p.title}</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="rounded-md bg-foreground/[0.05] px-2 py-0.5 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-105"
                >
                  Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {p.sourceUrl && (
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-transform hover:scale-105"
                >
                  <Github className="h-3.5 w-3.5" /> Source
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
