import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPencilRuler,
  FaPython,
  FaReact,
  FaServer,
  FaCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiNetlify,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "React", group: "Frontend", level: 88, icon: FaReact },
  { name: "Redux Toolkit", group: "State", level: 78, icon: SiRedux },
  { name: "JavaScript", group: "Language", level: 84, icon: FaJs },
  { name: "Tailwind CSS", group: "Styling", level: 86, icon: SiTailwindcss },
  { name: "Bootstrap", group: "Styling", level: 80, icon: FaBootstrap },
  { name: "HTML5", group: "Markup", level: 90, icon: FaHtml5 },
  { name: "CSS3", group: "Styling", level: 82, icon: FaCss3Alt },
  { name: "Node.js", group: "Backend", level: 70, icon: FaNodeJs },
  { name: "Express.js", group: "Backend", level: 68, icon: SiExpress },
  { name: "Python", group: "Language", level: 65, icon: FaPython },
  { name: "Vercel", group: "Deployment", level: 82, icon: SiVercel },
  { name: "Netlify", group: "Deployment", level: 78, icon: SiNetlify },
  { name: "Figma", group: "Design", level: 74, icon: SiFigma },
  { name: "Adobe XD", group: "Design", level: 68, icon: FaPencilRuler },
  { name: "Postman", group: "API Tools", level: 76, icon: SiPostman },
  { name: "VS Code", group: "Editor", level: 88, icon: FaCode },
  { name: "Git", group: "Workflow", level: 74, icon: FaGitAlt },
  { name: "REST APIs", group: "Integration", level: 75, icon: FaServer },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-spacing relative overflow-hidden bg-[var(--bg-soft)]"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">A focused frontend toolkit.</h2>
          <p className="mt-5 leading-8 text-muted">
            The stack is centered on React, strong component structure, clean
            styling, and state that stays easy to reason about.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={skill.name}
              className="soft-card group rounded-3xl transition duration-300 hover:-translate-y-2 hover:border-[var(--accent)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--accent-soft)] text-2xl text-[var(--accent)] transition group-hover:scale-110">
                  <Icon />
                </span>
                <span className="text-sm font-black text-[var(--gold)]">
                  {skill.level}%
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
                {skill.group}
              </p>
              <h3 className="mt-1 text-xl font-black">{skill.name}</h3>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--border)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 + index * 0.04 }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--gold)] to-[var(--violet)]"
                />
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
