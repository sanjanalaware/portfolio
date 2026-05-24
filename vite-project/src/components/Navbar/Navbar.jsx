import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import resume from "../../assets/resume.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialItems = [
  {
    label: "GitHub",
    href: "https://github.com/yourgithub",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourlinkedin",
    icon: FaLinkedin,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/78 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
    >
      <div className="section-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Go to home section"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--accent)] text-lg font-black text-white shadow-lg shadow-teal-900/20 transition group-hover:-rotate-6 group-hover:scale-105">
            S
          </span>
          <span className="leading-tight">
            <span className="block text-xl font-black tracking-tight">
              Sanjana<span className="text-[var(--accent)]">.</span>
            </span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-muted lg:block">
              React Developer
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <ul className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 text-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:flex">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <motion.a
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
                  href={item.href}
                  className="pill-padding relative block rounded-full text-muted transition hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>

          <a
            href={resume}
            download
            className="pill-padding hidden items-center gap-2 rounded-full bg-[var(--accent)] text-sm font-black text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] xl:inline-flex"
          >
            <FaFileDownload />
            Resume
          </a>

          <div className="hidden items-center gap-2 xl:flex">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-muted transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:bg-[var(--accent-soft)] lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={
          menuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]/95 lg:hidden"
      >
        <div className="section-shell py-4">
          <div className="grid gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-sm font-black text-muted transition hover:border-[var(--accent)] hover:text-[var(--text)]"
              >
                {item.label}
              </motion.a>
            ))}

            <a
              href={resume}
              download
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-black text-white transition hover:bg-[var(--accent-strong)]"
            >
              <FaFileDownload />
              Download Resume
            </a>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {socialItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm font-black text-muted transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <Icon />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
