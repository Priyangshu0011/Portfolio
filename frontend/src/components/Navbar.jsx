import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Update background styles based on scroll position
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Progress', href: '#progress' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    // Only intercept internal # links
    if (href.startsWith('#')) {
      e.preventDefault();

      if (href === '#') {
        // Scroll to very top for 'Home'
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Scroll to specific section ID smoothly
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled
          ? 'py-4 bg-space-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex-shrink-0 z-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-cyan to-faint-yellow flex items-center justify-center text-space-black font-bold font-mono text-xl transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                id="navbar-logo">
                P
              </div>
              <span className="font-mono font-bold text-white text-lg tracking-wider hidden sm:block">
                SETT<span className="text-neon-cyan"></span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-base font-mono text-white/70 hover:text-white relative group cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className="nav-underline absolute -bottom-1 left-0 w-0 h-[1px] bg-faint-yellow group-hover:w-full"></span>
              </motion.a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => {
                setResumeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                setResumeDropdownOpen(false);
              }}
            >
              <motion.button
                className="px-4 py-2 text-sm font-mono text-faint-yellow border border-faint-yellow/50 rounded hover:bg-faint-yellow/10 transition-colors shadow-[0_0_10px_rgba(253,224,71,0.1)] hover:shadow-[0_0_15px_rgba(253,224,71,0.3)] flex items-center gap-1 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
                onMouseEnter={() => setResumeDropdownOpen(true)}
                onMouseLeave={() => setResumeDropdownOpen(false)}
                onClick={(e) => {
                  e.preventDefault(); // allow hover to do the work on desktop
                }}
              >
                RESUME
                <motion.svg
                  key="resume-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: resumeDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.03, ease: 'easeInOut' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {resumeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-space-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 py-2"
                  >
                    <a
                      href="/general_cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm font-mono text-white/80 hover:text-neon-cyan hover:bg-white/5 transition-colors"
                    >
                      GENERAL CV
                    </a>
                    <a
                      href="/specialised_cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm font-mono text-white/80 hover:text-neon-cyan hover:bg-white/5 transition-colors"
                    >
                      SPECIALISED CV
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Theme Toggle Button ── */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-neon-cyan/60 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                // Sun icon (shown in dark mode → click to go light)
                <motion.svg
                  key="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-faint-yellow"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.18, ease: 'easeInOut' }}
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </motion.svg>
              ) : (
                // Crescent moon icon (shown in light mode → click to go dark)
                <motion.svg
                  key="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-neon-cyan"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.18, ease: 'easeInOut' }}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/80 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-space-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="text-2xl font-mono text-white hover:text-neon-cyan transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex flex-col items-center mt-8 gap-4 w-full px-8">
                <span className="text-sm font-mono text-faint-yellow opacity-70 mb-2">DOWNLOAD RESUME</span>
                <motion.a
                  href="/general_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-8 py-3 text-sm font-mono text-space-black bg-gradient-to-r from-neon-cyan to-faint-yellow rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GENERAL CV
                </motion.a>
                <motion.a
                  href="/specialised_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-8 py-3 text-sm font-mono text-space-black bg-gradient-to-r from-neon-cyan to-faint-yellow rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (navLinks.length * 0.1) + 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SPECIALISED CV
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
