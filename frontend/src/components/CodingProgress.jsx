import React from 'react';
import { motion } from 'framer-motion';

const CodingProgress = () => {
  const platforms = [
    {
      name: "LeetCode",
      problemsSolved: 450,
      streak: 45,
      color: "from-yellow-500 to-orange-500",
      icon: "L" // In a real app, use an SVG icon
    },
    {
      name: "GeeksforGeeks",
      problemsSolved: 300,
      streak: 30,
      color: "from-green-500 to-emerald-700",
      icon: "G"
    },
    {
      name: "Codeforces",
      problemsSolved: "Pupil",
      streak: "Contests: 20+",
      color: "from-blue-500 to-indigo-600",
      icon: "C"
    }
  ];

  return (
    <section id="progress" className="py-20 px-4 max-w-6xl mx-auto relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-wider inline-block relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-faint-yellow to-neon-cyan">DSA</span> Progress
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-faint-yellow to-transparent"></div>
        </h2>
        <p className="text-obsidian-gray-light mt-6 max-w-2xl mx-auto">
          Consistency in problem-solving forms the backbone of my logic building and algorithmic thinking.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {platforms.map((platform, idx) => (
          <motion.div
            key={idx}
            className="relative group bg-space-black border border-white/5 rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5, type: 'spring' }}
            whileHover={{ y: -10 }}
          >
            {/* Background glow effect based on brand color */}
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-tr ${platform.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${platform.color} p-[1px] mb-6 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(253,224,71,0.2)] transition-shadow`}>
                <div className="w-full h-full bg-space-black rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {platform.icon}
                </div>
              </div>
              
              <h3 className="text-xl text-white font-medium mb-4">{platform.name}</h3>
              
              <div className="w-full space-y-4">
                <div className="bg-white/5 rounded-lg p-3 flex justify-between items-center border border-white/5">
                  <span className="text-sm text-obsidian-gray-light">Problems Solved</span>
                  <span className="text-lg font-mono text-neon-cyan">{platform.problemsSolved}</span>
                </div>
                
                <div className="bg-white/5 rounded-lg p-3 flex justify-between items-center border border-white/5">
                  <span className="text-sm text-obsidian-gray-light">Current Streak</span>
                  <span className="text-lg font-mono text-faint-yellow">{platform.streak}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CodingProgress;
