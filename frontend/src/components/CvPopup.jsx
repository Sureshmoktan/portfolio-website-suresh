import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CVPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        CV
      </motion.button>

      {/* Popup Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Download My CV
              </h2>
              <p className="text-gray-600 mb-6">
                Grab a copy of my latest resume below 👇
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href="/cv.pdf"
                  download="Suresh_Moktan_CV.pdf"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Download
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition"
                >
                  View
                </a>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 text-gray-500 hover:text-gray-800 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
