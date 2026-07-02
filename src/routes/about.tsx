import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Manveer Kaur" },
      { name: "description", content: "About Manveer Kaur — CSE undergraduate, builder, competitive programmer." },
      { property: "og:title", content: "About — Manveer Kaur" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});
