import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeader } from "./About";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader eyebrow="Education" title="Where I'm learning the craft." />
      <div className="space-y-6">
        {education.map((e, i) => (
          <motion.div
            key={e.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass group relative overflow-hidden rounded-2xl p-8"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-aurora-1/30 to-aurora-3/30 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-foreground/5">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{e.institution}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.location} · {e.period}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-semibold tracking-tight text-gradient">
                  {e.score}
                </div>
              </div>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {e.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
