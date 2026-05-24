import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    value: "yourmail@gmail.com",
    href: "mailto:yourmail@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourlinkedin",
    href: "https://linkedin.com/in/yourlinkedin",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/yourgithub",
    href: "https://github.com/yourgithub",
    icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-band section-spacing">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let's build something useful.</h2>
            <p className="mt-5 leading-8 text-muted">
              I am open to frontend roles, internships, and React projects.
              Reach out through any of the links here.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mini-card mt-10 rounded-3xl bg-[var(--accent-soft)]"
            >
              <p className="text-3xl font-black">Available for collaboration</p>
              <p className="mt-3 leading-7 text-muted">
                Best fit: React UI work, portfolio websites, dashboards, and
                responsive landing pages.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  initial={{ opacity: 0, x: 34 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ x: 8 }}
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="glass-line soft-card group flex items-center gap-6 rounded-3xl"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-xl text-white shadow-lg shadow-teal-900/20">
                    <Icon />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-black uppercase tracking-wide text-[var(--accent)]">
                      {contact.label}
                    </span>
                    <span className="mt-1 block truncate text-lg font-bold">
                      {contact.value}
                    </span>
                  </span>

                  <span className="ml-auto hidden h-10 w-10 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)] transition group-hover:translate-x-1 sm:grid">
                    <FaArrowRight />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
