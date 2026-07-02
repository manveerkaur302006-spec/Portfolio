import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const githubRepositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase =
  githubRepositoryName && !githubRepositoryName.endsWith(".github.io")
    ? `/${githubRepositoryName}/`
    : "/";

const base = process.env.BASE_PATH ?? githubPagesBase;
const routerBasepath = base === "/" ? "/" : base.replace(/\/$/, "");

export default defineConfig({
  base,
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      router: {
        basepath: routerBasepath,
      },
      client: {
        base,
      },
      server: {
        entry: "server",
      },
      spa: {
        enabled: true,
        maskPath: routerBasepath,
        prerender: {
          outputPath: "/index",
        },
      },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    react(),
  ],
});
