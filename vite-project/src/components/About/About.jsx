import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaMobileAlt } from "react-icons/fa";

const strengths = [
  {
    title: "Responsive",
    text: "Mobile-first layouts that stay clean on every screen.",
    icon: FaMobileAlt,
  },
  {
    title: "State",
    text: "Redux and Context flows that keep UI predictable.",
    icon: FaLayerGroup,
  },
  {
    title: "UI Systems",
    text: "Reusable components with practical styling patterns.",
    icon: FaCode,
  },
];

const About = () => {
  return (
    <section id="about" className="section-band section-spacing">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">I turn ideas into polished interfaces.</h2>
          <p className="mt-5 leading-8 text-muted">
            My focus is frontend development that looks refined, loads quickly,
            and keeps the user journey simple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-line soft-card rounded-3xl"
        >
          <p className="text-lg leading-8 text-muted">
            I am a React.js developer with experience building scalable and
            responsive web applications using React, Redux, Context API and
            Tailwind CSS. I care about clear structure, accessible UI, and pages
            that feel fast across screen sizes.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  key={item.title}
                  className="mini-card rounded-2xl transition hover:-translate-y-1 hover:border-[var(--accent)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon />
                  </span>
                  <h3 className="mt-4 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
