import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    title: "Master Generative AI Tools (ChatGPT & more)",
    issuer: "Udemy",
    date: "Aug 2025",
    color: "#dc2626",
    icon: "🤖",
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    date: "Apr 2025",
    color: "#22d3ee",
    icon: "🌐",
  },
  {
    title: "Design and Analysis of Algorithms",
    issuer: "NPTEL",
    date: "Mar 2025",
    color: "#fde047",
    icon: "🧠",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep 2024",
    color: "#22d3ee",
    icon: "🔗",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    date: "Mar 2024",
    color: "#dc2626",
    icon: "🔐",
  },
];

const VISIBLE = 3; // how many cards visible at once on desktop

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = certificates.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % total);
  }, [total]);

  const prev = () => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + total) % total);
  };

  // Auto-advance every 3.5s
  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section id="certificates" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white uppercase tracking-wider relative inline-block">
          My{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-faint-yellow to-neon-cyan">
            Certificates
          </span>
          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-faint-yellow to-transparent" />
        </h2>
        <p className="text-obsidian-gray-light font-mono text-sm mt-6">
          Verified credentials from globally recognised platforms
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Desktop: show multiple side-by-side */}
        <div className="hidden md:flex gap-6">
          {Array.from({ length: VISIBLE }).map((_, offset) => {
            const certIdx = (current + offset) % total;
            const cert = certificates[certIdx];
            return (
              <motion.div
                key={certIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: offset * 0.08 }}
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 hover:-translate-y-2 transition-all duration-400 shadow-lg group cursor-default"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <div
                  className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-3 border"
                  style={{ color: cert.color, borderColor: cert.color + '55', background: cert.color + '11' }}
                >
                  {cert.issuer}
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-4 group-hover:text-neon-cyan transition-colors">
                  {cert.title}
                </h3>
                <p className="text-obsidian-gray-light font-mono text-xs mt-auto">{cert.date}</p>
                <div className="mt-4 h-[2px] rounded" style={{ background: `linear-gradient(to right, ${cert.color}, transparent)` }} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: single visible card sliding */}
        <div className="md:hidden relative h-64 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
            >
              <div className="text-4xl mb-3">{certificates[current].icon}</div>
              <div
                className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-3 border"
                style={{ color: certificates[current].color, borderColor: certificates[current].color + '55', background: certificates[current].color + '11' }}
              >
                {certificates[current].issuer}
              </div>
              <h3 className="text-white font-bold text-base leading-snug mb-2">{certificates[current].title}</h3>
              <p className="text-obsidian-gray-light font-mono text-xs">{certificates[current].date}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-neon-cyan/60 hover:bg-white/5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-neon-cyan scale-125' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-neon-cyan/60 hover:bg-white/5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
