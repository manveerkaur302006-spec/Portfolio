import { createFileRoute } from "@tanstack/react-router";
import { Achievements } from "@/components/sections/Achievements";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Manveer Kaur" },
      { name: "description", content: "Competitive programming ranks, hackathon wins, and global contests." },
      { property: "og:title", content: "Achievements — Manveer Kaur" },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: Achievements,
});
