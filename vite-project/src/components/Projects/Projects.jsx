import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBaby,
  FaChartLine,
  FaFileInvoice,
  FaShoppingCart,
} from "react-icons/fa";

const projects = [
  {
    title: "Baby Sleep Tracker",
    description:
      "A responsive tracker for logging baby sleep sessions and reviewing sleep patterns with a clean, parent-friendly interface.",
    tags: ["React", "Responsive UI", "Tracker"],
    liveUrl: "https://baby-sleeptracker.vercel.app/",
    accent: "from-pink-400 to-rose-500",
    icon: FaBaby,
  },

  {
    title: "ExtraEdge Task",
    description:
      "A frontend task implementation focused on structured layouts, reusable UI sections, and polished responsive behavior.",
    tags: ["React", "Task UI", "Responsive"],
    liveUrl: "https://extraedge-task-deuq.vercel.app/",
    accent: "from-violet-400 to-indigo-500",
    icon: FaChartLine,
  },

  {
    title: "Trendora Full Stack E-Commerce Platform",
    description:
      "Trendora is a modern full-stack e-commerce web application built to deliver a seamless online shopping experience. The platform allows users to browse products, explore detailed product pages, manage shopping carts, and securely authenticate users. It focuses on responsive UI design, smooth user experience, scalable MERN stack backend architecture, RESTful API integration, dynamic product management, and cloud-based production deployment.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
      "Render",
      "GitHub",
    ],
    liveUrl: "https://trendora-ecommerce-teal.vercel.app/",
    accent: "from-emerald-400 to-sky-500",
    icon: FaShoppingCart,
  },

  {
    title: "Government Billing Tracker",
    description:
      "A billing tracker interface for managing government-related payment records with dashboard-style organization.",
    tags: ["React", "Dashboard", "Billing"],
    liveUrl: "https://government-billing-tracker.vercel.app/",
    accent: "from-teal-400 to-cyan-500",
    icon: FaFileInvoice,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-spacing relative overflow-hidden bg-[var(--bg-soft)]"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">
            Projects shaped around real interface problems.
          </h2>
          <p className="mt-5 leading-8 text-muted">
            These examples highlight dashboard thinking, reusable UI, state
            handling, and responsive layouts.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                key={project.title}
                className="glass-line soft-card group relative overflow-hidden rounded-3xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accent}`}
                />

                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-strong)] text-2xl text-[var(--accent)] shadow-inner">
                    <Icon />
                  </div>

                  <span className="text-5xl font-black text-[var(--border)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black">{project.title}</h3>

                <p className="mt-3 leading-7 text-muted">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill-padding-sm rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-xs font-bold text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[var(--accent)] transition group-hover:gap-3"
                >
                  View Project <FaArrowRight />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
