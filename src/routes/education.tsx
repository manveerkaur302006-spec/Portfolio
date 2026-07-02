import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/sections/Education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Manveer Kaur" },
      { name: "description", content: "B.E. CSE at UIETH, Panjab University · CGPA 8.97." },
      { property: "og:title", content: "Education — Manveer Kaur" },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: Education,
});
