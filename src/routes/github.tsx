import { createFileRoute } from "@tanstack/react-router";
import { GitHubSection } from "@/components/sections/Competitive";

export const Route = createFileRoute("/github")({
  head: () => ({
    meta: [
      { title: "GitHub — Manveer Kaur" },
      { name: "description", content: "GitHub contribution graph, stats, top languages and streak." },
      { property: "og:title", content: "GitHub — Manveer Kaur" },
      { property: "og:url", content: "/github" },
    ],
    links: [{ rel: "canonical", href: "/github" }],
  }),
  component: GitHubSection,
});
