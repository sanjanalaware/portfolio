import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.42 }}
      className="mt-8 flex justify-center gap-4 text-2xl lg:justify-start"
    >
      <motion.a
        whileHover={{ y: -6, rotate: -4 }}
        whileTap={{ scale: 0.94 }}
        href="https://github.com/yourgithub"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-muted transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <FaGithub />
      </motion.a>

      <motion.a
        whileHover={{ y: -6, rotate: 4 }}
        whileTap={{ scale: 0.94 }}
        href="https://linkedin.com/in/yourlinkedin"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-muted transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <FaLinkedin />
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
