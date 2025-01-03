import {
 SiGo,
 SiJavascript,
 SiPhp,
 SiCss3,
 SiHtml5,
 SiTailwindcss,
 SiJava,
 SiPython,
 SiMysql,
 SiPostgresql,
 SiSqlite,
 SiVim,
 SiVisualstudiocode,
 SiVercel,
 SiRailway,
 SiMongodb,
 SiExpress,
 SiReact,
 SiNodedotjs,
 SiTensorflow,
 SiPytorch
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

export const skillsData = {
 languages: [
   { name: "Golang", icon: <SiGo /> },
   { name: "JavaScript", icon: <SiJavascript /> },
   { name: "PHP", icon: <SiPhp /> },
   { name: "CSS", icon: <SiCss3 /> },
   { name: "HTML", icon: <SiHtml5 /> },
   { name: "Tailwind", icon: <SiTailwindcss /> },
   { name: "Java", icon: <SiJava /> },
   { name: "Python", icon: <SiPython /> }
 ],
 databases: [
   { name: "MySQL", icon: <SiMysql /> },
   { name: "PostgreSQL", icon: <SiPostgresql /> },
   { name: "SQLite", icon: <SiSqlite /> }
 ],
 tools: [
   { name: "Vim", icon: <SiVim /> },
   { name: "VSCode", icon: <SiVisualstudiocode /> }
 ],
 deployment: [
   { name: "VPS", icon: <FaServer /> },
   { name: "Vercel", icon: <SiVercel /> },
   { name: "Railway", icon: <SiRailway /> }
 ],
 learning: [
   { name: "MERN Stack", icon: <div className="flex gap-1"><SiMongodb /><SiExpress /><SiReact /><SiNodedotjs /></div> },
   { name: "Machine Learning", icon: <SiTensorflow /> },
   { name: "Artificial Intelligence", icon: <SiPytorch /> }
 ]
};
