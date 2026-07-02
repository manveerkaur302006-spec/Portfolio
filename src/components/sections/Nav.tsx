import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme";
import { personal } from "@/data/personal";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/experience", label: "Experience" },
  { to: "/competitive", label: "CP" },
  { to: "/github", label: "GitHub" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-aurora-1 to-aurora-3 text-background">
            MK
          </span>
          <span className="hidden sm:block">{personal.name}</span>
        </Link>

        <nav className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 text-sm lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-foreground/10 text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-1.5 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-label="Menu"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-6 mt-3 grid grid-cols-2 gap-1 rounded-2xl p-2 text-sm lg:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-foreground/10 text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-xl px-4 py-2 hover:bg-foreground/5"
            >
              {l.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
