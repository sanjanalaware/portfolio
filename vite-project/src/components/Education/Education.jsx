import { motion } from "framer-motion";
import {
  FaAward,
  FaBookOpen,
  FaCertificate,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";

const educationItems = [
  {
    title: "Bachelor in Agriculture",
    place: "College of Agriculture, Loni, Pravara",
    period: "March 2017 - 2020",
    result: "Distinction • 8.1 CGPA",
    detail:
      "Completed graduation with distinction while building a strong foundation in analytical thinking, problem solving, and structured learning.",
    icon: FaGraduationCap,
  },
  {
    title: "Higher Secondary (12th)",
    place: "Sharada Junior College",
    period: "March 2015 - 2016",
    result: "82.15%",
    detail:
      "Completed higher secondary education with a strong academic score.",
    icon: FaSchool,
  },
  {
    title: "Secondary (10th)",
    place: "Sharada Kanya Vidya Mandir",
    period: "March 2014 - 2015",
    result: "93%",
    detail:
      "Completed secondary education with excellent academic performance.",
    icon: FaBookOpen,
  },
];

const certifications = [
  {
    title: "Diploma in Frontend Development",
    period: "After Graduation • 2022",
    detail:
      "Covered frontend fundamentals and modern UI development concepts including HTML, CSS, JavaScript, ES6, React, Redux, Material UI, Webpack, and deployment basics.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ES6",
      "React",
      "Redux",
      "Material UI",
      "Webpack",
    ],
    icon: FaCertificate,
  },
  {
    title: "Diploma in React.js Development",
    period: "After Graduation • 2022",
    detail:
      "Focused on React.js application development, reusable components, frontend state management, and practical project workflows.",
    skills: ["React", "React Native", "Redux", "Node", "Heroku", "Python", "C"],
    icon: FaAward,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-band section-spacing">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic foundation and certifications.</h2>
          <p className="mt-5 leading-8 text-muted">
            A foundation in academics followed by focused frontend and React.js
            training after graduation.
          </p>
        </motion.div>

        <div className="relative mt-14 grid gap-8 lg:grid-cols-3">
          {educationItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.58, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                key={item.title}
                className="glass-line soft-card rounded-3xl"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-xl text-white shadow-lg shadow-teal-900/20">
                    <Icon />
                  </span>

                  <div className="min-w-0">
                    <span className="pill-padding-sm inline-block w-fit rounded-full border border-[var(--border)] bg-[var(--accent-soft)] text-xs font-black uppercase tracking-wide text-[var(--accent)]">
                      {item.period}
                    </span>
                    <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 font-semibold text-muted">{item.place}</p>
                    <p className="mt-3 text-lg font-black text-[var(--accent)]">
                      {item.result}
                    </p>
                    <p className="mt-4 leading-7 text-muted">{item.detail}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="eyebrow">Courses</p>
          <h3 className="mt-3 text-3xl font-black">Post-graduation training.</h3>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {certifications.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.article
                key={course.title}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.58, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-line soft-card rounded-3xl"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-xl text-white shadow-lg shadow-teal-900/20">
                    <Icon />
                  </span>

                  <div>
                    <span className="pill-padding-sm inline-block w-fit rounded-full border border-[var(--border)] bg-[var(--accent-soft)] text-xs font-black uppercase tracking-wide text-[var(--accent)]">
                      {course.period}
                    </span>
                    <h4 className="mt-4 text-2xl font-black">{course.title}</h4>
                    <p className="mt-4 leading-7 text-muted">{course.detail}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="pill-padding-sm rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-xs font-bold text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
