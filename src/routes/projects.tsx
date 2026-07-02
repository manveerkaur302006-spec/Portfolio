import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Manveer Kaur" },
      { name: "description", content: "Featured projects with live demos and source code." },
      { property: "og:title", content: "Projects — Manveer Kaur" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});
