import { motion } from "motion/react";
import { ArrowUpRight, CalendarDays, Code2, Flame, GitFork, Github, Star } from "lucide-react";
import { competitive } from "@/data/competitive";
import { socialLinks } from "@/data/socialLinks";
import { SectionHeader } from "./About";

export function CompetitiveProgramming() {
  return (
    <section id="cp" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="Competitive Programming"
        title="Sharpening the algorithmic edge."
        description="Active on Codeforces and CodeChef — solving daily, contesting weekly."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {competitive.map((c, i) => (
          <motion.a
            key={c.platform}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-10 transition-opacity group-hover:opacity-20`} />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.platform}</div>
                  <div className="mt-1 font-mono text-xl">@{c.handle}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="mt-10 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Max rating</div>
                  <div className={`mt-1 text-5xl font-semibold tracking-tight ${c.ratingColor}`}>
                    {c.maxRating}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{c.rank}</div>
                  <div className="text-xs text-muted-foreground">{c.percentile}</div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export function GitHubSection() {
  const stats = [
    { label: "Public repos", value: "24+", icon: Github },
    { label: "Total stars", value: "10+", icon: Star },
    { label: "Contributions", value: "54", icon: CalendarDays },
    { label: "Longest streak", value: "3 days", icon: Flame },
  ];

  const languages = [
    { name: "TypeScript", value: 38, color: "bg-sky-500" },
    { name: "Python", value: 28, color: "bg-emerald-500" },
    { name: "JavaScript", value: 18, color: "bg-yellow-400" },
    { name: "C++", value: 10, color: "bg-violet-500" },
    { name: "CSS", value: 6, color: "bg-pink-500" },
  ];

  const activity = [
    0, 1, 2, 0, 3, 1, 0, 2, 4, 1, 0, 0, 3, 2, 1, 4, 0, 2, 3, 1, 0, 1, 2, 4, 3, 0, 1, 2,
    0, 3, 4, 1, 2, 0, 1, 3, 2, 4, 0, 1, 2, 3,
  ];

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeader
        eyebrow="GitHub"
        title="Open-source activity."
        description="A fast, theme-aware snapshot of my public profile and project work."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <motion.a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass group rounded-2xl p-6 transition-transform hover:-translate-y-1"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Profile stats
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                @{socialLinks.githubUsername}
              </h2>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-background/50 p-4">
                <stat.icon className="h-4 w-4 text-primary" />
                <div className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.a>
        <motion.a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass group rounded-2xl p-6 transition-transform hover:-translate-y-1"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Top languages
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                Daily drivers
              </h2>
            </div>
            <Code2 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="mt-8 space-y-4">
            {languages.map((language) => (
              <div key={language.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{language.name}</span>
                  <span className="text-muted-foreground">{language.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${language.color}`}
                    style={{ width: `${language.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.a>
        <motion.a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass group rounded-2xl p-6 transition-transform hover:-translate-y-1 lg:col-span-2"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Contribution rhythm
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                Building in focused bursts.
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <GitFork className="h-4 w-4" />
              Public work
            </div>
          </div>
          <div className="mt-8 grid grid-cols-7 gap-1.5 sm:[grid-template-columns:repeat(14,minmax(0,1fr))]">
            {activity.map((level, index) => (
              <span
                key={`${level}-${index}`}
                className={`aspect-square rounded-sm ${
                  level === 0
                    ? "bg-muted"
                    : level === 1
                      ? "bg-primary/30"
                      : level === 2
                        ? "bg-primary/50"
                        : level === 3
                          ? "bg-primary/70"
                          : "bg-primary"
                }`}
              />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span>Current streak: 0 days</span>
            <span>Longest streak: 3 days</span>
            <span>Recent contributions: 54</span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

