import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaJenkins, FaDocker } from 'react-icons/fa';
import { SiC, SiCplusplus, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiApachemaven, SiKubernetes } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const TechStack = () => {
  const { isDark } = useTheme();
  // Icons that are white by design — swap to dark slate in light mode
  const whiteIconColor = isDark ? '#FFFFFF' : '#1e293b';

  const [activeCategory, setActiveCategory] = useState('All Skills');
  const categories = ['All Skills', 'Programming Languages', 'Frontend', 'Backend', 'Databases', 'Tools'];

  const technologies = [
    { name: 'C', icon: <SiC size={32} color="#A8B9CC" />, proficiency: 70, category: 'Programming Languages' },
    { name: 'C++', icon: <SiCplusplus size={32} color="#00599C" />, proficiency: 75, category: 'Programming Languages' },
    { name: 'Java', icon: <FaJava size={32} color="#007396" />, proficiency: 85, category: 'Programming Languages' },
    {
      name: 'Python',
      icon: (
        <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64.75 3.1c-30.5 0-28.75 13.2-28.75 13.2l-.05 13.6h29.5v4.2H35.65S16.1 32.4 16.1 63c0 30.6 17 29.3 17 29.3h9.35v-13.6s-.3-13.3 13.25-13.3h14.4s12.8.2 12.8-12.8v-20c0-13-13.4-13.1-13.4-13.1H64.75V3.1zM51 13.1c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z" fill="#3776AB" />
          <path d="M65.45 125.1c30.5 0 28.75-13.2 28.75-13.2l.05-13.6h-29.5v-4.2h29.8s19.55 1.7 19.55-28.9c0-30.6-17-29.3-17-29.3h-9.35v13.6s.3 13.3-13.25 13.3h-14.4s-12.8-.2-12.8 12.8v20c0 13 13.4 13.1 13.4 13.1h4.75v16.4zM79.2 115.1c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z" fill="#FFD43B" />
        </svg>
      ),
      proficiency: 75, category: 'Programming Languages'
    },

    { name: 'ReactJS', icon: <FaReact size={32} color="#61DAFB" />, proficiency: 90, category: 'Frontend' },
    { name: 'HTML5', icon: <FaHtml5 size={32} color="#E34F26" />, proficiency: 95, category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt size={32} color="#1572B6" />, proficiency: 85, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs size={32} color="#F7DF1E" />, proficiency: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} color="#06B6D4" />, proficiency: 80, category: 'Frontend' },
    { name: 'Bootstrap', icon: <FaBootstrap size={32} color="#7952B3" />, proficiency: 75, category: 'Frontend' },

    { name: 'Node.js', icon: <FaNodeJs size={32} color="#339933" />, proficiency: 85, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress size={32} color={whiteIconColor} />, proficiency: 80, category: 'Backend' },
    { name: 'PHP', icon: <FaPhp size={32} color="#777BB4" />, proficiency: 70, category: 'Backend' },

    { name: 'MongoDB', icon: <SiMongodb size={32} color="#47A248" />, proficiency: 80, category: 'Databases' },
    { name: 'MySQL', icon: <SiMysql size={32} color="#4479A1" />, proficiency: 75, category: 'Databases' },

    { name: 'Git', icon: <FaGitAlt size={32} color="#F05032" />, proficiency: 85, category: 'Tools' },
    { name: 'GitHub', icon: <FaGithub size={32} color={whiteIconColor} />, proficiency: 90, category: 'Tools' },
    { name: 'Docker', icon: <FaDocker size={32} color="#2496ED" />, proficiency: 70, category: 'Tools' },
    { name: 'Maven', icon: <SiApachemaven size={32} color="#C71A22" />, proficiency: 65, category: 'Tools' },
    { name: 'Jenkins', icon: <FaJenkins size={32} color="#D24939" />, proficiency: 60, category: 'Tools' },
  ];

  const filteredTechs = activeCategory === 'All Skills'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="tech" className="py-20 px-4 max-w-6xl mx-auto relative z-10 font-sans min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-wider relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-faint-yellow">Tech</span> Arsenal
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-l ${isDark ? 'from-neon-cyan' : 'from-red-600'} to-transparent`}></div>
        </h2>
        <p className={`mt-4 mb-8 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>A showcase of technologies I've mastered on my journey as a developer.</p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm transition-colors ${activeCategory === cat
                ? (isDark ? 'bg-gradient-to-r from-faint-yellow to-neon-cyan text-slate-900 font-bold border border-transparent' : 'bg-red-400 text-white font-medium border border-red-400')
                : (isDark ? 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10' : 'bg-white/50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-red-400')
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 min-h-[450px] content-start">
        <AnimatePresence>
          {filteredTechs.map((tech, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={tech.name}
              className={`backdrop-blur-md border rounded-xl p-5 relative overflow-hidden group cursor-pointer transition-all ${isDark ? 'bg-[#0f172a]/90 border-white/10 hover:border-indigo-500/50 hover:bg-[#1e293b]' : 'bg-white border-slate-200 hover:border-red-400 hover:bg-red-50/50'}`}
            >
              {/* Category Watermark / Floating Right */}
              <div className={`absolute bottom-3 right-4 text-[10px] uppercase tracking-wider font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {tech.category}
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                  {tech.icon}
                </div>
                <div className="flex-1 w-full flex flex-col pt-1">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className={`font-bold tracking-wide text-sm ${isDark ? 'text-white/90' : 'text-slate-800'}`}>{tech.name}</span>
                    <span className={`text-xs font-mono font-medium ${isDark ? 'text-neon-cyan' : 'text-red-400'}`}>{tech.proficiency}%</span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-faint-yellow to-neon-cyan' : 'bg-red-400'}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default TechStack;
