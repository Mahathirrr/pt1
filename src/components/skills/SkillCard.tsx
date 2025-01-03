import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export default function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50"
          >
            <span className="text-blue-600">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}