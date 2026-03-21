import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="min-h-screen py-20 px-4 max-w-6xl mx-auto relative z-10 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase tracking-wider relative inline-block">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-faint-yellow to-neon-cyan">ME</span>
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-faint-yellow to-transparent"></div>
            </h2>

            <div className="space-y-6 text-obsidian-gray-light leading-relaxed text-lg">
              <p>
                Hello! I'm <span className="text-white font-medium">Priyangshu Sett</span>, a passionate Computer Science student pursuing my B.Tech at LPU. My journey in tech is driven by an insatiable curiosity and a problem-solving mindset.
              </p>
              <p>
                I specialize in the <span className="text-neon-cyan font-medium">MERN Stack</span>, crafting highly responsive and visually striking web applications. However, my interests stretch beyond just writing code into the realm of <span className="text-faint-yellow font-medium">DevOps</span>, ensuring robust, scalable, and automated deployment pipelines.
              </p>
              <p>
                When I'm not deploying servers or centering divs, I'm constantly analyzing algorithms and striving to write cleaner, more efficient code.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/priyangshusett0011"
                  target="_blank" rel="noreferrer"
                  title="LinkedIn"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-white/20 text-white/60 hover:text-neon-cyan hover:border-neon-cyan/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] bg-white/5 hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:text-red-600 hover:border-red-600 hover:shadow-[0_0_12px_rgba(220,38,38,0.3)] bg-white hover:bg-slate-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Priyangshu0011"
                  target="_blank" rel="noreferrer"
                  title="GitHub"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-white/20 text-white/60 hover:text-neon-cyan hover:border-neon-cyan/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] bg-white/5 hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:text-red-600 hover:border-red-600 hover:shadow-[0_0_12px_rgba(220,38,38,0.3)] bg-white hover:bg-slate-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:priyangshusett2004@gmail.com"
                  title="Send Email"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-white/20 text-white/60 hover:text-faint-yellow hover:border-faint-yellow/60 hover:shadow-[0_0_12px_rgba(253,224,71,0.3)] bg-white/5 hover:bg-white/10' : 'border-slate-300 text-slate-700 hover:text-red-500 hover:border-red-500 hover:shadow-[0_0_12px_rgba(239,68,68,0.3)] bg-white hover:bg-slate-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[450px] w-full md:w-5/6 ml-auto mt-4 md:mt-0">
            {/* Glassmorphic card graphic for About section */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-space-black to-white/5 border border-white/10 backdrop-blur-sm p-6 flex flex-col shadow-[0_10px_30px_rgba(34,211,238,0.05)]"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 p-4 z-20">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 rounded-full bg-neon-cyan"></div>
                </div>
              </div>

              {/* Profile Image container (Circular Frame) */}
              <div className="flex-1 w-full flex items-center justify-center z-10 mt-2 mb-6">
                <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-neon-cyan/30 bg-space-black/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <img
                    src="/picture.png"
                    alt="Priyangshu Sett"
                    className="w-full h-full object-cover object-[center_0%] hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="text-left relative z-20 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
                  <h3 className={`text-sm font-mono uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-slate-800 font-bold'}`}>Current Status</h3>
                </div>
                <p className="text-neon-cyan font-mono text-sm font-medium mb-3">Building the web of tomorrow</p>
                <div className="h-1 w-full bg-white/10 rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-faint-yellow to-neon-cyan"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
