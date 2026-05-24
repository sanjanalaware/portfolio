import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-muted">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        © 2026 Sanjana. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
