import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Saya Muhammad Mahathir, seorang mahasiswa semester 6 di Universitas Syiah Kuala dengan GPA 3.84. 
              Saya memiliki minat yang kuat dalam pengembangan web, khususnya di bidang backend, dan telah menguasai 
              berbagai teknologi seperti Golang, JavaScript, PHP, dan lainnya. Saya juga tertarik dalam pengembangan 
              machine learning dan artificial intelligence. Saya dikenal sebagai orang yang cepat belajar, adaptif, 
              dan mudah berkolaborasi dalam tim.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-50 shadow-sm"
              >
                <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Pendidikan</h3>
                <p className="text-gray-600">
                  Universitas Syiah Kuala<br />
                  Mahasiswa Semester 6 (2022 - Sekarang)<br />
                  GPA: 3.84<br />
                  Jurusan: Informatika
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-50 shadow-sm"
              >
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Organisasi</h3>
                <p className="text-gray-600">
                  HMIF (Himpunan Mahasiswa Informatika)<br />
                  Staff Departemen Pengembangan dan Penelitian Mahasiswa
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-50 shadow-sm"
              >
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Prestasi</h3>
                <p className="text-gray-600">
                  Finalis Lomba Inovasi Digital Mahasiswa (LIDM) 2024<br />
                  Bidang: Inovasi Pembelajaran Digital Pendidikan
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-50 shadow-sm"
              >
                <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Pengalaman</h3>
                <p className="text-gray-600">
                  Ketua Acara Ngobrol Bidang Minat<br />
                  Ketua Perlombaan INFEST 2024
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}