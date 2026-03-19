import React from 'react';
import { motion } from 'framer-motion';

// Deterministic "random" positions for stars to avoid SSR mismatch
const stars = [
  { top: '10%', left: '5%', size: 2, delay: 0 },
  { top: '20%', left: '15%', size: 1, delay: 0.4 },
  { top: '35%', left: '80%', size: 2, delay: 0.8 },
  { top: '50%', left: '90%', size: 1, delay: 1.2 },
  { top: '70%', left: '72%', size: 2, delay: 0.3 },
  { top: '80%', left: '30%', size: 1, delay: 0.9 },
  { top: '15%', left: '55%', size: 1, delay: 1.5 },
  { top: '90%', left: '10%', size: 2, delay: 0.6 },
  { top: '60%', left: '45%', size: 1, delay: 0.2 },
  { top: '40%', left: '25%', size: 2, delay: 1.1 },
  { top: '5%',  left: '70%', size: 1, delay: 0.7 },
  { top: '75%', left: '60%', size: 2, delay: 1.3 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-faint-yellow to-neon-cyan mb-6 uppercase tracking-wider"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Priyangshu Sett
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-obsidian-gray-light font-light mb-8 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span>MERN Stack Developer | CSE Student at LPU</span>
          </motion.div>
        </motion.div>

        {/* Floating Explore Orb with orbiting rings */}
        <div className="relative mx-auto w-32 h-32 md:w-48 md:h-48 mt-12 flex items-center justify-center">
          {/* Outer orbiting ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-neon-cyan/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{ scale: 1.3 }}
          />
          {/* Inner orbiting ring (reverse) */}
          <motion.div
            className="absolute inset-0 rounded-full border border-faint-yellow/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ scale: 1.1 }}
          />

          {/* Core floating orb */}
          <motion.div
            className="w-full h-full rounded-full border border-faint-yellow/30 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(255,255,150,0.1)]"
            animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-faint-yellow to-neon-cyan blur-xl opacity-60" />
            <span className="absolute text-white font-mono text-sm tracking-widest uppercase opacity-80 z-20 hover:scale-105 transition-transform cursor-default">
              Explore
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

