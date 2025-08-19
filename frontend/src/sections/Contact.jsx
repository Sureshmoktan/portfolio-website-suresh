import MotionSection from "../components/MotionSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <MotionSection
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-white text-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Feel free to reach out to me through any of the following platforms.  
        I’m always open to connecting and collaborating!
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <a
            href="mailto:sureshmoktan43@gmail.com"
            className="text-blue-600 hover:underline"
          >
            moktansuresh@gmail.com
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <a
            href="tel:+9779812345678"
            className="text-blue-600 hover:underline"
          >
            +977 9812345678
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
          <p className="text-gray-600">Kathmandu, Nepal</p>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-12">
        <motion.a
          href="https://github.com/sureshmoktan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-gray-700 hover:text-black"
        >
          <Github className="w-8 h-8" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/sureshmoktan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-blue-700 hover:text-blue-800"
        >
          <Linkedin className="w-8 h-8" />
        </motion.a>
      </div>
    </MotionSection>
  );
}
