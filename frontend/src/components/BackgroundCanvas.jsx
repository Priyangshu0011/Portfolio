import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Deterministic star positions spread across full page height
const stars = [
  { top: '3%',  left: '8%',  size: 2, delay: 0 },
  { top: '9%',  left: '55%', size: 1, delay: 0.7 },
  { top: '14%', left: '82%', size: 2, delay: 0.3 },
  { top: '22%', left: '33%', size: 1, delay: 1.1 },
  { top: '28%', left: '68%', size: 2, delay: 0.5 },
  { top: '35%', left: '12%', size: 1, delay: 0.9 },
  { top: '41%', left: '90%', size: 2, delay: 1.4 },
  { top: '48%', left: '47%', size: 1, delay: 0.2 },
  { top: '55%', left: '72%', size: 2, delay: 0.8 },
  { top: '60%', left: '20%', size: 1, delay: 1.6 },
  { top: '67%', left: '60%', size: 2, delay: 0.4 },
  { top: '73%', left: '5%',  size: 1, delay: 1.2 },
  { top: '79%', left: '38%', size: 2, delay: 0.6 },
  { top: '85%', left: '78%', size: 1, delay: 1.0 },
  { top: '91%', left: '25%', size: 2, delay: 0.1 },
  { top: '96%', left: '88%', size: 1, delay: 1.3 },
  { top: '18%', left: '95%', size: 2, delay: 0.35 },
  { top: '52%', left: '3%',  size: 1, delay: 0.85 },
];

const BackgroundCanvas = () => {
  const { isDark } = useTheme();
  const starColor = isDark ? '#ffffff' : '#334155'; // white in dark, slate in light

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Radial glow at center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_var(--tw-gradient-stops))] from-faint-yellow/5 via-transparent to-transparent" />

      {/* Subtle dot-grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff55 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating ambient orbs - static position, gentle pulse only */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[130px]"
        style={{ top: '-5%', left: '-8%' }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-faint-yellow/6 blur-[110px]"
        style={{ bottom: '20%', right: '-6%' }}
        animate={{ opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-neon-cyan/4 blur-[90px]"
        style={{ top: '55%', left: '30%' }}
        animate={{ opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Twinkling stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: starColor,
          }}
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.5, 0.8] }}
          transition={{
            duration: 2.5 + star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCanvas;
