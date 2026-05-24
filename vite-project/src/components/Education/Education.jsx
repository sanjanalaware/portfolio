import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const educationItems = [
  {
    title: "Bachelor Degree",
    place: "Your College Name",
    period: "2020 - 2024",
    detail: "Built a foundation in programming, problem solving, and software development.",
    icon: FaGraduationCap,
  },
  {
    title: "Frontend Practice",
    place: "React, Redux, Tailwind CSS",
    period: "Ongoing",
    detail: "Focused on responsive UI, reusable components, and polished web experiences.",
    icon: FaLaptopCode,
  },
];

const Education = () => {
  return (
    <section className="section-band section-spacing">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Learning path and foundation.</h2>
        </motion.div>

        <div className="relative mt-14 grid gap-7 lg:grid-cols-2">
          {educationItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                key={item.title}
                className="glass-line soft-card rounded-3xl"
              >
                <div className="flex items-start gap-6">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-xl text-white shadow-lg shadow-teal-900/20">
                    <Icon />
                  </span>

                  <div>
                    <span className="pill-padding-sm inline-block w-fit rounded-full border border-[var(--border)] bg-[var(--accent-soft)] text-xs font-black uppercase tracking-wide text-[var(--accent)]">
                      {item.period}
                    </span>
                    <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 font-semibold text-muted">{item.place}</p>
                    <p className="mt-4 leading-7 text-muted">{item.detail}</p>
                  </div>
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
