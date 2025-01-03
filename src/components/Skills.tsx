import { motion } from "framer-motion";
import {
  SiGo,
  SiJavascript,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiVim,
  SiVercel,
  SiRailway,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiPytorch,
  SiGithub,
} from "react-icons/si";
import { FaServer, FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

interface Project {
  title: string;
  tech: string;
  description: string;
  github?: string;
  website?: string;
  links?: {
    backend: string;
    frontend: string;
  };
}

export default function Skills() {
  const skills = {
    languages: [
      { name: "Golang", icon: <SiGo /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
    ],
    databases: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
    tools: [
      { name: "Vim", icon: <SiVim /> },
      { name: "VSCode", icon: <VscCode /> },
    ],
    deployment: [
      { name: "VPS", icon: <FaServer /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Railway", icon: <SiRailway /> },
    ],
    learning: [
      {
        name: "MERN Stack",
        icon: (
          <div className="flex gap-1">
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
          </div>
        ),
      },
      { name: "Machine Learning", icon: <SiTensorflow /> },
      { name: "Artificial Intelligence", icon: <SiPytorch /> },
    ],
  };

  const projects: Project[] = [
    {
      title: "Search Engine dengan Metode Cosine dan Jaccard Similarity",
      tech: "Golang",
      description:
        "Implementasi metode pencarian dokumen menggunakan algoritma Cosine dan Jaccard Similarity.",
      github: "https://github.com/Mahathirrr/Info-Retrieval",
    },
    {
      title: "Website Perlombaan Speed Typing INFEST 2024",
      tech: "React",
      description:
        "Website untuk perlombaan speed typing dalam event INFEST 2024.",
      github: "https://github.com/Mahathirrr/SpeedTyping",
    },
    {
      title: "API Ecommerce dengan Migration, RESTful API + gRPC",
      tech: "Golang",
      description:
        "Pembuatan API ecommerce dengan migrasi database dan implementasi gRPC.",
      github: "https://github.com/Mahathirrr/ecom_v2",
    },
    {
      title: "QuizMaster",
      tech: "Laravel",
      description:
        "Platform user-friendly untuk membuat, berpartisipasi, dan melacak kuis.",
      github: "https://github.com/Mahathirrr/QuizMaster",
    },
    {
      title: "Skillopa - Platform Kursus Online",
      tech: "MERN Stack",
      description:
        "Platform kursus online untuk tutor sejawat (dalam pengembangan).",
      links: {
        backend: "https://github.com/Mahathirrr/Skillopa-be",
        frontend: "https://github.com/Mahathirrr/Skillopa-fe",
      },
    },
    {
      title: "Showcase-project.xyz",
      tech: "Next.js",
      description:
        "Proyek yang sudah dideploy dan masih dalam tahap pengembangan.",
      website: "https://showcase-project.xyz",
    },
  ];

  const renderSkillSection = (
    title: string,
    icon: JSX.Element,
    skillList: Array<{ name: string; icon: JSX.Element }>,
  ) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {skillList.map((skill, index) => (
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

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tech Stack & Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {renderSkillSection(
              "Languages & Frameworks",
              <SiJavascript className="w-8 h-8 text-blue-600" />,
              skills.languages,
            )}
            {renderSkillSection(
              "Databases",
              <SiMysql className="w-8 h-8 text-blue-600" />,
              skills.databases,
            )}
            {renderSkillSection(
              "Tools",
              <VscCode className="w-8 h-8 text-blue-600" />,
              skills.tools,
            )}
            {renderSkillSection(
              "Deployment",
              <SiVercel className="w-8 h-8 text-blue-600" />,
              skills.deployment,
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-white shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {project.tech}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <SiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Visit Website
                      </a>
                    )}
                    {project.links && (
                      <div className="flex gap-4">
                        <a
                          href={project.links.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Backend
                        </a>
                        <a
                          href={project.links.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Frontend
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

