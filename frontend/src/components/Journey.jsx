import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const educationList = [
  { year: 'August 2023 - Present', degree: 'Bachelor of Technology - Computer Science and Engineering', institution: 'Lovely Professional University', details: 'CGPA: 8.2/10' },
  { year: 'April 2022 - March 2023', degree: 'Intermediate', institution: "St. Xavier's Institution", details: 'Percentage: 71.5%' },
  { year: 'April 2020 - March 2021', degree: 'Matriculation', institution: "St. Xavier's Institution", details: 'Percentage: 95.4%' },
];

const hackerRankBadges = [
  { name: 'Problem Solving', stars: 4, bg: 'bg-gray-300' },
  { name: 'CPP', stars: 5, bg: 'bg-amber-400' },
  { name: 'Java', stars: 5, bg: 'bg-amber-400' },
  { name: 'Python', stars: 5, bg: 'bg-amber-400' },
  { name: '10 Days of JS', stars: 4, bg: 'bg-gray-300' },
  { name: 'Sql', stars: 2, bg: 'bg-rose-400' }
];

const hackerRankCerts = [
  'Java (Basic)',
  'Node (Basic)',
  'Problem Solving (Basic)'
];

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 hover:text-neon-cyan transition-colors cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const Journey = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('education');
  const [leetcodeStats, setLeetcodeStats] = useState({ solved: 450, streak: 45 });

  // Real-time Leetcode fetch
  useEffect(() => {
    const LEETCODE_LINK = 'https://leetcode.com/u/priyangshu0011';

    if (LEETCODE_LINK.includes('leetcode.com')) {
      // Extract username from link (e.g. 'priyangshu0011')
      const usernameMatch = LEETCODE_LINK.match(/leetcode\.com\/u\/([^\/]+)/);
      const username = usernameMatch ? usernameMatch[1] : 'priyangshu0011';

      Promise.all([
        fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`).then(res => res.ok ? res.json() : {}),
        fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`).then(res => res.ok ? res.json() : {})
      ])
        .then(([solvedData, calendarData]) => {
          setLeetcodeStats({
            solved: solvedData.solvedProblem || 0,
            streak: calendarData.streak || 0
          });
        })
        .catch(err => console.log('Error fetching LeetCode stats:', err));
    }
  }, []);

  const renderTimelineItem = (content, index) => {
    const isLeft = index % 2 === 0;
    return (
      <div key={index} className="relative flex min-h-[90px] items-center justify-between md:justify-normal w-full mb-6 last:mb-0">
        {/* Center Timeline Dot */}
        <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-space-black border-[2px] border-indigo-500 transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_8px_rgba(99,102,241,0.5)]">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
        </div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`relative w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-auto md:ml-0 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
        >
          {/* Arrow pointing to node */}
          <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-[10px] border-transparent ${isLeft ? 'border-l-white/10 -right-[19px]' : 'border-r-white/10 -left-[19px]'}`}></div>

          <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow duration-300">
            {content}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="journey" className="py-20 px-4 max-w-6xl mx-auto relative z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-faint-yellow to-neon-cyan">Journey</span>
        </h2>
        <p className="text-obsidian-gray-light mt-2 max-w-2xl mx-auto text-sm">
          A complete view of my learning journey including education and coding practice progress.
        </p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('education')}
          className={`px-8 py-3 rounded-full border transition font-semibold tracking-wide ${activeTab === 'education'
            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-transparent shadow-[0_4px_15px_rgba(79,70,229,0.4)]'
            : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab('coding')}
          className={`px-8 py-3 rounded-full border transition font-semibold tracking-wide ${activeTab === 'coding'
            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-transparent shadow-[0_4px_15px_rgba(79,70,229,0.4)]'
            : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
        >
          Coding Progress
        </button>
      </div>

      <div className="relative max-w-5xl mx-auto py-4">
        {/* Center line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/80 via-blue-500/50 to-transparent transform md:-translate-x-1/2"></div>

        {activeTab === 'education' && (
          <div className="flex flex-col gap-4">
            {educationList.map((item, idx) => (
              renderTimelineItem(
                <div className="flex flex-col text-left">
                  <h3 className={`text-xl md:text-2xl font-bold mb-1 leading-snug ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{item.degree}</h3>
                  <p className="text-indigo-400 text-base font-medium mb-1.5">{item.year}</p>
                  <p className="text-slate-300 text-base mb-1">{item.institution}</p>
                  <p className="text-slate-400 text-sm">{item.details}</p>
                </div>,
                idx
              )
            ))}
          </div>
        )}

        {activeTab === 'coding' && (
          <div className="flex flex-col gap-4">
            {/* LeetCode */}
            {renderTimelineItem(
              <div className="flex flex-col text-left">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-8 h-8 object-contain filter invert opacity-90" />
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>LeetCode</h3>
                  </div>
                  <a href="https://leetcode.com/u/priyangshu0011" target="_blank" rel="noreferrer" title="Profile Link"><LinkIcon /></a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                    <p className="text-sm text-slate-400 mb-1">Problems Solved</p>
                    <p className="text-2xl text-amber-500 font-bold font-mono">{leetcodeStats.solved}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                    <p className="text-sm text-slate-400 mb-1">Current Streak</p>
                    <p className="text-2xl text-orange-500 font-bold font-mono">{leetcodeStats.streak}</p>
                  </div>
                </div>
              </div>,
              0
            )}

            {/* HackerRank */}
            {renderTimelineItem(
              <div className="flex flex-col text-left">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center font-bold text-white font-mono text-xl">H</div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>HackerRank</h3>
                  </div>
                  <a href="https://www.hackerrank.com/profile/priyangshu0011" target="_blank" rel="noreferrer" title="Profile Link"><LinkIcon /></a>
                </div>

                <div className="mb-6">
                  <h4 className={`flex items-center gap-2 text-md font-medium mb-3 block ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    My Badges
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {hackerRankBadges.map(badge => (
                      <div key={badge.name} className={`relative flex flex-col items-center justify-center p-2 w-[72px] h-[80px] ${badge.bg} text-slate-900 overflow-hidden shadow-lg`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <p className="text-[10px] font-bold text-center leading-tight z-10 mb-1">{badge.name}</p>
                        <div className="flex space-x-[1px] z-10">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-2 h-2 ${i < badge.stars ? 'text-black fill-current' : 'text-slate-500/40 fill-current'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`flex items-center gap-2 text-md font-medium mb-3 block ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    My Certifications
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {hackerRankCerts.map(cert => (
                      <div key={cert} className="flex flex-col justify-between w-[120px] h-[80px] bg-green-600 rounded shadow-md p-2 overflow-hidden relative">
                        <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white/20"></div>
                        <div className="text-white/80 mb-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                          <p className="text-white text-[10px] font-bold leading-tight">{cert}</p>
                          <p className="text-white/80 text-[9px] mt-0.5 font-medium">Verified</p>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-green-500 text-[8px] font-bold px-1 py-0.5 text-white">SKILL</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>,
              1
            )}

            {/* GeeksforGeeks */}
            {renderTimelineItem(
              <div className="flex flex-col text-left">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-green-700 font-bold text-xl">G</div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>GeeksforGeeks</h3>
                  </div>
                  <a href="https://www.geeksforgeeks.org/profile/priyangshu0011" target="_blank" rel="noreferrer" title="Profile Link"><LinkIcon /></a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                    <p className="text-sm text-slate-400 mb-1">Problems Solved</p>
                    <p className="text-2xl text-emerald-400 font-bold font-mono">88</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center border border-white/5">
                    <p className="text-sm text-slate-400 mb-1">Coding Score</p>
                    <p className="text-2xl text-green-500 font-bold font-mono">440</p>
                  </div>
                </div>
              </div>,
              2
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;
