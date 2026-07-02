import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { personal } from "@/data/personal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${personal.name} — ${personal.title}` },
      { name: "description", content: personal.shortBio },
      { property: "og:title", content: `${personal.name} — ${personal.title}` },
      { property: "og:description", content: personal.shortBio },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const explore = [
  { to: "/about", label: "About me", desc: "Who I am, what I care about." },
  { to: "/projects", label: "Projects", desc: "Things I've designed, built and shipped." },
  { to: "/skills", label: "Skills", desc: "The stack I reach for." },
  { to: "/achievements", label: "Achievements", desc: "Contests, ranks, and wins." },
  { to: "/competitive", label: "Competitive Programming", desc: "Codeforces & CodeChef." },
  { to: "/contact", label: "Contact", desc: "Let's build something." },
] as const;

function Index() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Explore
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((e) => (
            <Link
              key={e.to}
              to={e.to}
              className="glass group flex items-start justify-between gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="text-lg font-semibold">{e.label}</div>
                <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
