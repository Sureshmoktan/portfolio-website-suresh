import MotionSection from "../components/MotionSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MotionSection
      id="home"
      className="bg-gradient-to-b from-blue-50 via-white to-blue-50 text-center flex flex-col items-center justify-center min-h-screen"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Suresh Moktan
        </span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        A passionate Web Developer crafting modern, user-friendly
        applications with React, Tailwind, and the MERN stack.
      </motion.p>

      {/* Buttons with stagger animation */}
      <motion.div
        className="flex gap-6 justify-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.a
          href="#projects"
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          View My Work
        </motion.a>

        <motion.a
          href="#contact"
          className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </MotionSection>
  );
}
