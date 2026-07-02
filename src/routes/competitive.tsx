import { createFileRoute } from "@tanstack/react-router";
import { CompetitiveProgramming } from "@/components/sections/Competitive";

export const Route = createFileRoute("/competitive")({
  head: () => ({
    meta: [
      { title: "Competitive Programming — Manveer Kaur" },
      { name: "description", content: "Codeforces Specialist · CodeChef 3★ · Meta Hacker Cup." },
      { property: "og:title", content: "Competitive Programming — Manveer Kaur" },
      { property: "og:url", content: "/competitive" },
    ],
    links: [{ rel: "canonical", href: "/competitive" }],
  }),
  component: CompetitiveProgramming,
});
