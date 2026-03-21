import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaJenkins, FaDocker } from 'react-icons/fa';
import { SiC, SiCplusplus, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiApachemaven } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const TechStack = () => {
  const { isDark } = useTheme();
  // Icons that are white by design — swap to dark slate in light mode
  const whiteIconColor = isDark ? '#FFFFFF' : '#1e293b';

  const technologies = [
    { name: 'ReactJS', icon: <FaReact size={48} color="#61DAFB" /> },
    { name: 'ExpressJS', icon: <SiExpress size={48} color={whiteIconColor} /> },
    { name: 'NodeJS', icon: <FaNodeJs size={48} color="#339933" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={48} color="#06B6D4" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={48} color="#7952B3" /> },
    { name: 'HTML5', icon: <FaHtml5 size={48} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={48} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs size={48} color="#F7DF1E" /> },
    { name: 'Python', icon: <FaPython size={48} color="#3776AB" /> },
    { name: 'C', icon: <SiC size={48} color="#A8B9CC" /> },
    { name: 'C++', icon: <SiCplusplus size={48} color="#00599C" /> },
    { name: 'Java', icon: <FaJava size={48} color="#007396" /> },
    { name: 'PHP', icon: <FaPhp size={48} color="#777BB4" /> },
    { name: 'MongoDB', icon: <SiMongodb size={48} color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql size={48} color="#4479A1" /> },
    { name: 'Git', icon: <FaGitAlt size={48} color="#F05032" /> },
    { name: 'GitHub', icon: <FaGithub size={48} color={whiteIconColor} /> },
    { name: 'Maven', icon: <SiApachemaven size={48} color="#C71A22" /> },
    { name: 'Jenkins', icon: <FaJenkins size={48} color="#D24939" /> },
    { name: 'Docker', icon: <FaDocker size={48} color="#2496ED" /> },
  ];

  return (
    <section id="tech" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase tracking-wider relative inline-block text-right w-full">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-faint-yellow">Tech</span> Arsenal
          <div className="absolute -bottom-2 right-0 w-full h-[1px] bg-gradient-to-l from-neon-cyan to-transparent"></div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            className={`backdrop-blur-md border rounded-2xl p-6 flex flex-col items-center justify-center gap-5 shadow-lg group cursor-pointer transition-colors ${isDark ? 'bg-space-black/80 border-white/5 hover:border-neon-cyan/40 hover:bg-white/5' : 'bg-white/90 border-slate-200 hover:border-red-400 hover:bg-red-50'}`}
            whileHover={{ y: -8, scale: 1.05, boxShadow: isDark ? "0px 15px 30px rgba(34,211,238,0.15)" : "0px 15px 30px rgba(220,38,38,0.2)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              default: { delay: (idx % 5) * 0.1, duration: 0.4 },
              scale: { duration: 0.15, ease: "easeOut", delay: 0 },
              y: { duration: 0.15, ease: "easeOut", delay: 0 },
              boxShadow: { duration: 0.15, delay: 0 },
            }}
          >
            <div className={`filter transition-all duration-300 transform group-hover:-translate-y-2 ${isDark ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'drop-shadow-sm group-hover:drop-shadow-md'}`}>
              {tech.icon}
            </div>
            <span className={`font-mono font-medium transition-colors text-sm tracking-wide text-center ${isDark ? 'text-white/80 group-hover:text-white' : 'text-slate-700 group-hover:text-red-700'}`}>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
