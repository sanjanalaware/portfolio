import { motion } from "framer-motion";

import resume from "../../assets/resume.pdf";
import profile from "../../assets/images/profile.jpeg";

const stats = [
  ["7+", "Core skills"],
  ["2", "Featured projects"],
  ["100%", "Responsive focus"],
];

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-grid relative isolate min-h-[calc(100vh-72px)] overflow-hidden py-20 sm:py-28"
    >
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(20,184,166,0.16),transparent_28%,rgba(245,158,11,0.12)_48%,transparent_62%,rgba(139,92,246,0.14))]"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />

      <div className="section-shell grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="eyebrow"
          >
            React.js Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="animated-shine mt-4 text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl"
          >
            Building interfaces that feel sharp, fast, and alive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted lg:mx-0"
          >
            Hi, I'm Sanjana. I create modern React interfaces with thoughtful
            layouts, smooth interactions, and reliable state management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="my-12 flex flex-col justify-center gap-5 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="pill-padding-lg rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-1 hover:bg-[var(--accent-strong)]"
            >
              View Projects
            </a>

            <a
              href={resume}
              download
              className="pill-padding-lg rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm font-bold transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Download Resume
            </a>
          </motion.div>
          <div style={{ height: "12px" }}></div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-12 grid gap-5 sm:grid-cols-3"
          >
            {stats.map(([value, label]) => (
              <div key={label} className="mini-card rounded-2xl backdrop-blur">
                <p className="text-2xl font-black text-[var(--accent)]">
                  {value}
                </p>
                <p className="mt-1 text-sm font-semibold text-muted">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
          className="mx-auto w-full max-w-[21rem] sm:max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="profile-card glass-line soft-card relative mx-auto overflow-hidden rounded-[2rem]"
          >
            <div className="profile-frame mini-card mx-auto overflow-hidden rounded-[1.4rem]">
              <img
                src={profile}
                alt="Sanjana"
                className="mx-auto aspect-[3/4] w-full max-w-[13.75rem] rounded-[1rem] object-cover object-top sm:max-w-[14.5rem]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65 }}
              className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-6 text-center text-white backdrop-blur-md"
            >
              <p className="text-sm font-semibold text-teal-200">
                Frontend focus
              </p>
              <p className="mt-1 text-lg font-bold">React, Redux, Tailwind</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "86%" }}
                  transition={{ duration: 1, delay: 0.85 }}
                  className="h-full rounded-full bg-gradient-to-r from-teal-300 via-amber-300 to-violet-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
