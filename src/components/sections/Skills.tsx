import { motion } from "motion/react";
import { skillGroups } from "@/data/skills";
import { SectionHeader } from "./About";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Skills"
        title="The tools I reach for."
        description="A pragmatic stack — from low-level C to production-grade web and AI systems."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {g.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-sm transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
