import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import MyPhoto from "../../assets/avatar.jpg";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
          >
            <img
              src={MyPhoto}
              alt="Muhammad Mahathir"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Muhammad Mahathir
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
              Computer Science Student
            </h2>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/Mahathirrr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/MuhammadMahathir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/emhaa._"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:mhmmdmhthr@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

