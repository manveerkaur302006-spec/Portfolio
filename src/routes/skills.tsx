import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/sections/Skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Manveer Kaur" },
      { name: "description", content: "Programming languages, frontend, backend, AI/ML, databases and core CS." },
      { property: "og:title", content: "Skills — Manveer Kaur" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});
