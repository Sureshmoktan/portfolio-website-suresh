import { motion } from "framer-motion";
import MotionSection from "../components/MotionSection";
import profilePic from "../assets/profile.jpg"; // make sure your image is here

export default function About() {
  return (
    <MotionSection id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      
      {/* Profile Image with animation */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={profilePic}
          alt="Suresh Moktan"
          className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-blue-500 transform hover:scale-110 transition duration-500"
        />
      </motion.div>

      {/* Text Content with animation */}
      <motion.div
        className="md:w-1/2 text-center md:text-left md:pl-12"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="max-w-2xl text-gray-600 text-lg leading-relaxed mb-4">
          Hi 👋 I’m <span className="font-semibold text-blue-600">Suresh Moktan</span>, 
          a passionate web developer who loves creating clean, modern, and user-friendly 
          applications. My focus is on writing efficient code and building digital 
          experiences that are both functional and beautiful.
        </p>
        <p className="max-w-2xl text-gray-600 text-lg leading-relaxed mb-6">
          Outside of coding, I enjoy <span className="font-medium">exploring nature 🌿</span>, 
          <span className="font-medium"> photography 📸</span>, and always pushing myself to 
          grow through <span className="font-medium">continuous learning 📚</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </MotionSection>
  );
}
