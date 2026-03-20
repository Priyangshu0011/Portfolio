import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Social Networks",
    issuer: "NPTEL",
    date: "Apr 2025",
    color: "#22d3ee",
    image: "/social_networks.png",
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS65S64750122104445616",
  },
  {
    title: "Master Generative AI Tools (ChatGPT & more)",
    issuer: "Udemy",
    date: "Aug 2025",
    color: "#dc2626",
    image: "/master.png",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "NPTEL",
    date: "Mar 2025",
    color: "#fde047",
    image: "/cyber.png",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sep 2024",
    color: "#22d3ee",
    image: "/picture.png",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Coursera",
    date: "Mar 2024",
    color: "#dc2626",
    image: "/AgriSurance.png",
  },
];

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayTitle, setDisplayTitle] = useState('');
  const [selected, setSelected] = useState(null);

  const total = certificates.length;

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 3.5s unless paused by user control click
  useEffect(() => {
    if (isPaused || selected !== null) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next, isPaused, selected]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  // Typewriter animation for certificate title
  useEffect(() => {
    const title = certificates[current].title;
    let i = 0;
    setDisplayTitle('');
    const tw = setInterval(() => {
      i += 1;
      setDisplayTitle(title.slice(0, i));
      if (i >= title.length) clearInterval(tw);
    }, 40);
    return () => clearInterval(tw);
  }, [current]);

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.slice(0, 3).map((cert, idx) => (
          <button
            key={cert.title}
            onClick={() => { setSelected(idx); setIsPaused(true); }}
            className="group block text-left rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a]/90 hover:bg-[#1e293b] transition-all flex flex-col h-full"
          >
            <div className="w-full h-48 overflow-hidden bg-white">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-5 flex gap-4 flex-1">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full h-full">
                <div>
                  <h3 className="text-base font-bold text-white mb-1 leading-snug">{cert.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 w-full mt-auto">
                  <span>{cert.date}</span>
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-white font-medium hover:text-neon-cyan transition-colors ml-auto shadow-[0_0_10px_rgba(34,211,238,0.1)]" onClick={(e) => { e.stopPropagation(); }}>
                      Verify
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-white font-medium hover:text-neon-cyan transition-colors ml-auto shadow-[0_0_10px_rgba(34,211,238,0.1)] cursor-pointer">
                      Verify
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/20 bg-slate-950/95 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white">
              <img
                src={certificates[selected].image}
                alt={certificates[selected].title}
                className="w-full max-h-[60vh] object-contain"
              />
            </div>

            <div className="p-6 bg-slate-950/90 border-t border-white/10 z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{certificates[selected].title}</h3>
                <p className="text-slate-400 text-sm">{certificates[selected].issuer} • <span className="text-white/70">{certificates[selected].date}</span></p>
              </div>
              <div className="flex items-center gap-4 shrink-0 mt-2 md:mt-0">
                {certificates[selected].url && (
                  <a href={certificates[selected].url} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg bg-neon-cyan text-slate-900 font-semibold text-sm hover:opacity-90 transition-opacity">
                    Verify Certificate
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 text-sm font-medium transition-colors bg-white/5 active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer relative z-50 overflow-visible"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
