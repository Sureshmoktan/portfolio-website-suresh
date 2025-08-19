import { motion } from "framer-motion";

export default function MotionSection({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}
