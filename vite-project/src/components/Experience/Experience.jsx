import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaFileAlt,
} from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer Engineer",
    company: "Sorted Agency",
    location: "Wakad, Pune",
    period: "Jan 2025- Aug 2025",
    summary:
      "Worked on production-ready React applications with authentication, routing, state management, GraphQL integration, and CI quality workflows.",
    projects: [
      {
        name: "Outlier-Stats",
        icon: FaChartLine,
        description:
          "Developed a rugby-focused web app with modules for Match Center, Clubs, Fixtures, and Player Profiles. Completed Phase 1 and deployed it to production.",
        highlights: [
          "Implemented secure Auth0 authentication.",
          "Integrated GraphQL APIs using Apollo Client.",
          "Built routed modules with React Router and Redux Toolkit.",
        ],
        stack: [
          "React.js",
          "React Router",
          "Redux Toolkit",
          "Auth0",
          "Apollo Client",
          "GraphQL",
          "AWS",
          "SonarQube",
          "Jenkins",
        ],
      },
    ],
    icon: FaBriefcase,
  },
  {
    role: "Software Developer",
    company: "Rabbit and Tortoise Technology Solutions",
    location: "Kharadi Pune",
    period: "Jan 2023 - July 2024",
    summary:
      "Built government and document-processing applications with React.js, Redux Toolkit, authentication flows, API integration, and backend coordination.",
    projects: [
      {
        name: "Assam Seed Corporation Ltd.",
        icon: FaBuilding,
        description:
          "Developed a government web application for seed buying and selling workflows with secure login and financial data flows.",
        highlights: [
          "Integrated Aadhar-based login and mobile OTP authentication.",
          "Connected bank APIs and improved secure data handling.",
          "Worked on encryption techniques and Redux-based data flow.",
        ],
        stack: [
          "React.js",
          "Redux Toolkit",
          "AWS",
          "Bank APIs",
          "Authentication",
          "SonarQube",
          "Jenkins",
        ],
      },
      {
        name: "OCR Application",
        icon: FaFileAlt,
        description:
          "Built an Optical Character Recognition system for document scanning, PDF rendering, and text extraction workflows.",
        highlights: [
          "Worked with Canvas for PDF rendering.",
          "Integrated Python and Java APIs for backend operations.",
          "Handled data synchronization between frontend and backend services.",
        ],
        stack: [
          "React.js",
          "Redux Toolkit",
          "Canvas",
          "Python",
          "Java",
          "Jenkins",
        ],
      },
    ],
    icon: FaBriefcase,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-band section-spacing">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Practical frontend experience.</h2>
          <p className="mt-5 leading-8 text-muted">
            Professional work across React applications, authentication,
            dashboards, government workflows, GraphQL integrations, and
            production delivery.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={`${experience.role}-${experience.company}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.58, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-line soft-card rounded-3xl"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-6">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-xl text-white shadow-lg shadow-teal-900/20">
                      <Icon />
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-2xl font-black">{experience.role}</h3>
                      <p className="mt-2 text-lg font-bold">
                        {experience.company}
                      </p>
                      <p className="mt-1 font-semibold text-muted">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <span className="pill-padding-sm inline-block w-fit rounded-full border border-[var(--border)] bg-[var(--accent-soft)] text-xs font-black uppercase tracking-wide text-[var(--accent)]">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-6 leading-7 text-muted">
                  {experience.summary}
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  {experience.projects.map((project) => {
                    const ProjectIcon = project.icon;

                    return (
                      <div
                        key={project.name}
                        className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-8 sm:p-10"
                        style={{ padding: "10px" }}
                      >
                        <div className="flex items-start gap-5">
                          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                            <ProjectIcon />
                          </span>
                          <div>
                            <h4 className="text-xl font-black">
                              {project.name}
                            </h4>
                            <p className="mt-3 leading-7 text-muted">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        <ul
                          className="mt-6 grid gap-3"
                          style={{ marginBottom: "5px" }}
                        >
                          {project.highlights.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm font-semibold leading-6 text-muted"
                              style={{ padding: "4px" }}
                            >
                              <span
                                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                                style={{ marginTop: "8px" }}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="pill-padding-sm rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-bold text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
