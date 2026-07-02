import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/sections/Experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Manveer Kaur" },
      { name: "description", content: "Positions of responsibility and leadership experience." },
      { property: "og:title", content: "Experience — Manveer Kaur" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});
