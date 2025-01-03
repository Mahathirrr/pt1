import { motion } from 'framer-motion';
import { Code2, Database, Tool, Cloud, Brain } from 'lucide-react';
import { skillsData } from '../../constants/skillsData';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard
              title="Languages & Frameworks"
              icon={Code2}
              skills={skillsData.languages}
            />
            <SkillCard
              title="Databases"
              icon={Database}
              skills={skillsData.databases}
            />
            <SkillCard
              title="Development Tools"
              icon={Tool}
              skills={skillsData.tools}
            />
            <SkillCard
              title="Deployment"
              icon={Cloud}
              skills={skillsData.deployment}
            />
            <SkillCard
              title="Currently Learning"
              icon={Brain}
              skills={skillsData.learning}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}