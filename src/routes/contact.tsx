import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Manveer Kaur" },
      { name: "description", content: "Get in touch — email, phone, GitHub, LinkedIn, Codeforces, CodeChef." },
      { property: "og:title", content: "Contact — Manveer Kaur" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});
