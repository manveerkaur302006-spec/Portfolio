import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";

export function Hero() {
  return (
    <section id="home" className="aurora-bg relative flex min-h-screen items-center pt-24">
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-blob absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--aurora-1), transparent 60%)" }} />
        <div className="aurora-blob-2 absolute -bottom-48 -right-32 h-[42rem] w-[42rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--aurora-2), transparent 60%)" }} />
        <div className="aurora-blob absolute top-1/3 left-1/3 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--aurora-3), transparent 60%)" }} />
        <div className="absolute inset-0 noise opacity-40" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Available for SDE internships · Summer 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="block text-foreground/90">Hi, I'm</span>
          <span className="text-gradient block">{personal.name}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
          >
            Get in touch
          </Link>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { k: "8.97", v: "CGPA" },
            { k: "1459", v: "Codeforces" },
            { k: "1650", v: "CodeChef" },
            { k: "4+", v: "Shipped projects" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-3xl font-semibold tracking-tight">{s.k}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
