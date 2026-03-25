import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Provide Web3Forms specific payload structure
      const payload = {
        ...formData,
        access_key: "0a796db8-0e12-4195-adfb-2b3e34f50588" // <--- The User needs to drop their key here!
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        throw new Error(data.message || 'Transmission failed. Verify API Key.');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto relative z-10 w-full mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-wider relative inline-block">
          Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-faint-yellow to-neon-cyan">Link</span>
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent ${isDark ? 'via-neon-cyan' : 'via-red-500'} to-transparent`}></div>
        </h2>
        <p className="text-obsidian-gray-light mt-6 text-lg">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-lg relative overflow-hidden"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-faint-yellow/50 rounded-tl-xl m-4"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50 rounded-br-xl m-4"></div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className={`text-sm font-mono block ${isDark ? 'text-white/70' : 'text-slate-800 font-semibold'}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none transition-all font-sans ${isDark ? 'bg-space-black/80 border-white/10 text-white focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50' : 'bg-white border-slate-300 text-slate-900 focus:border-red-500 focus:ring-1 focus:ring-red-500'}`}
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className={`text-sm font-mono block ${isDark ? 'text-white/70' : 'text-slate-800 font-semibold'}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none transition-all font-sans ${isDark ? 'bg-space-black/80 border-white/10 text-white focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50' : 'bg-white border-slate-300 text-slate-900 focus:border-red-500 focus:ring-1 focus:ring-red-500'}`}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className={`text-sm font-mono block ${isDark ? 'text-white/70' : 'text-slate-800 font-semibold'}`}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none transition-all font-sans resize-none ${isDark ? 'bg-space-black/80 border-white/10 text-white focus:border-faint-yellow/50 focus:ring-1 focus:ring-faint-yellow/50' : 'bg-white border-slate-300 text-slate-900 focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder:text-slate-500'}`}
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <div className="flex flex-col items-center pt-4">
            <button
              type="submit"
              disabled={status.submitting}
              className="relative group px-8 py-4 bg-transparent border border-white/20 rounded-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-neon-cyan/20 to-faint-yellow/20 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
              <span className="relative z-10 text-white font-mono uppercase tracking-widest text-sm flex items-center gap-2">
                {status.submitting ? 'Transmitting...' : 'Send Message'}
                {!status.submitting && (
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </span>
            </button>

            {/* Status Messages */}
            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-neon-cyan font-mono text-sm"
              >
                Message transmitted successfully.
              </motion.div>
            )}
            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-400 font-mono text-sm"
              >
                Error: {status.error}
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
