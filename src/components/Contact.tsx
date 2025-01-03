import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          
          <p className="text-lg text-gray-300 mb-12">
            Saya selalu terbuka untuk peluang baru, kolaborasi, atau sekadar ngobrol tentang teknologi.
            Jangan ragu untuk menghubungi saya melalui email atau media sosial!
          </p>

          <div className="flex justify-center gap-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:mhmmdmhthr@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/MuhammadMahathir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <MessageSquare size={20} />
              <span>Message on LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}