import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { achievements } from "@/data/achievements";
import { SectionHeader } from "./About";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Achievements"
        title="Wins worth celebrating."
        description="Competitive programming rankings, hackathon wins, and global contests."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          const Wrapper: any = a.href ? "a" : "div";
          const wrapperProps = a.href ? { href: a.href, target: "_blank", rel: "noreferrer" } : {};
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
            >
              <Wrapper
                {...wrapperProps}
                className="glass group relative block h-full overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${a.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
                />
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${a.accent} text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{a.detail}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{a.sub}</p>
                {a.href && (
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
