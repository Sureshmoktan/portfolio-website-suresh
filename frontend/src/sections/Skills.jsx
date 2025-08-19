import MotionSection from "../components/MotionSection";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git & GitHub", level: 85 },
];

const nonTechnicalSkills = [
  { name: "Quick Learner", level: 95 },
  { name: "Communication", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Leadership", level: 80 },
];

// Different directions for animation
const directions = [
  { x: -50, y: 0 }, // left
  { x: 50, y: 0 },  // right
  { x: 0, y: 50 },  // bottom
  { x: 0, y: -50 }, // top
];

export default function Skills() {
  return (
    <MotionSection id="skills" className="bg-gray-50 text-center py-20">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-16">
        My Skills
      </h2>

      {/* Technical Skills */}
      <h3 className="text-3xl font-semibold text-blue-600 mb-10">
        💻 Technical Skills
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
        {technicalSkills.map((skill, idx) => {
          const direction = directions[idx % directions.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: direction.x, y: direction.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-blue-600 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-gray-600 mt-3 text-lg">{skill.level}%</p>
            </motion.div>
          );
        })}
      </div>

      {/* Non-Technical Skills */}
      <h3 className="text-3xl font-semibold text-green-600 mb-10">
        🌟 Non-Technical Skills
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {nonTechnicalSkills.map((skill, idx) => {
          const direction = directions[idx % directions.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: direction.x, y: direction.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-green-600 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-gray-600 mt-3 text-lg">{skill.level}%</p>
            </motion.div>
          );
        })}
      </div>
    </MotionSection>
  );
}
