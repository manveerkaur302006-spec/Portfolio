import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "./About";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Experience & Leadership"
        title="Positions of responsibility."
      />
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute inset-y-2 left-2 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-4" />
        {experience.map((e, i) => (
          <motion.div
            key={e.role + e.organization}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative mb-10"
          >
            <div className="absolute -left-4 top-2 grid h-7 w-7 place-items-center rounded-full bg-background ring-1 ring-border sm:-left-6">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <p className="text-sm text-primary">{e.organization}</p>
                </div>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
