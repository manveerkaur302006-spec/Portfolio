import { motion } from "motion/react";
import { personal } from "@/data/personal";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader eyebrow="About" title="A builder, a problem solver, an explorer." />
      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">{personal.longBio}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I obsess over crisp interfaces, fast feedback loops, and clean abstractions.
            Whether it's parsing an AST with Tree-sitter, modelling code as a Neo4j
            graph, or squeezing every millisecond out of a WebSocket pipeline — I love
            building things that feel inevitable.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass space-y-4 rounded-2xl p-6 md:col-span-2"
        >
          {[
            ["Currently", "B.E. CSE @ UIETH, Panjab University"],
            ["Focus", "Full-stack · AI Infra · Systems"],
            ["Compete on", "Codeforces · CodeChef · Meta Hacker Cup"],
            ["Based in", personal.location],
          ].map(([k, v]) => (
            <div key={k} className="flex items-start justify-between gap-6 border-b border-border/60 pb-3 last:border-none last:pb-0">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{k}</span>
              <span className="text-right text-sm font-medium">{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
