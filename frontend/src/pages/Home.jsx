import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import CodingProgress from '../components/CodingProgress';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import ContactForm from '../components/ContactForm';
import BackgroundCanvas from '../components/BackgroundCanvas';

const Home = () => {
  return (
    <div className="bg-space-black min-h-screen text-white font-sans overflow-x-hidden selection:bg-faint-yellow/30 selection:text-white">
      <BackgroundCanvas />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <CodingProgress />
        <ContactForm />
      </main>

      <footer className="py-8 text-center text-obsidian-gray-light font-mono text-sm border-t border-white/5">
        <p>Built with a brain and a laptop:)</p>
        <p className="mt-2 text-white/40">© {new Date().getFullYear()} Priyangshu Sett. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
