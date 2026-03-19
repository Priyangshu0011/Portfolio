import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Crop Insurance System",
      description: "An integrated crop insurance portal that enables farmers to digitally register, access policy details and submit claims, ensuring a smoother and more transparent insurance experience.",
      techStack: ["MERN Stack", "REST APIs", "Vite"],
      outcomes: [
        "Built a responsive insurance-plan discovery interface with advanced filters for crops, region and coverage.",
        "Role & Challenges: Orchestrated secure multi-role access for farmers, proposers and administrators.",
        "Outcomes: Achieved 30% quicker claim resolution, 75% lower manual processing effort and improved end-to-end workflow reliability."
      ],
      imageUrl: "/AgriSurance.png",
      githubUrl: "https://github.com/Priyangshu0011/AgriSurance-Smart-Crop-Insurance-Portal",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Student Report Generator",
      description: "An efficient student record management system enabling teachers to maintain academic data with improved accuracy and operational ease.",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      outcomes: [
        "Engineered a responsive web-based platform with automated grade calculation, data validation and dynamic report generation.",
        "Outcomes: Achieved 40% faster data processing, reduced manual errors by over 60%.",
        "Role: Ensured full offline accessibility with seamless cross-device usability."
      ],
      imageUrl: "/student_report_generator.png",
      githubUrl: "https://github.com/Priyangshu0011/Student-Report-Generator",
      liveUrl: "#",
      featured: true
    },
    {
      title: "AI Smart Irrigation System",
      description: "An AI-driven irrigation system designed to analyze soil-moisture patterns and deliver crop-specific watering insights for precise and efficient water management.",
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      outcomes: [
        "Unified AI predictions, automated irrigation controls and real-time IoT monitoring into a single intuitive dashboard.",
        "Outcomes: Enhanced water efficiency by up to 35%, expanded user support through 30+ FAQs.",
        "Role: Strengthened system adaptability via a built-in feedback portal."
      ],
      imageUrl: "/ai_smart_irrigation_system.png",
      githubUrl: "https://github.com/Priyangshu0011/AI-powered-Smart-Irrigation-System",
      liveUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase tracking-wider relative inline-block">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-faint-yellow">Projects</span>
          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-neon-cyan to-transparent"></div>
        </h2>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>

            {/* Project Image Placeholder */}
            <motion.div
              className="w-full md:w-3/5 h-64 md:h-96 relative group cursor-pointer"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}>

              <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500 shadow-xl group-hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] flex items-center justify-center">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span className="text-white/20 font-mono text-4xl z-0 tracking-widest">{project.title.substring(0, 4).toUpperCase()}</span>
                )}
              </div>
            </motion.div>

            {/* Project Content */}
            <motion.div
              className={`w-full md:w-2/5 flex flex-col ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end md:text-right'} relative z-20`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-neon-cyan font-mono text-sm mb-2">{project.featured ? "Featured Project" : "Project"}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{project.title}</h3>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 text-obsidian-gray-light hover:bg-white/10 transition-colors shadow-lg z-30 mb-6 flex flex-col gap-4 text-left w-full">
                <div>
                  <h4 className="text-white font-bold mb-1 font-mono text-sm tracking-wide">DESCRIPTION</h4>
                  <p className="text-sm leading-relaxed">{project.description}</p>
                </div>
                {project.outcomes && (
                  <div>
                    <h4 className="text-white font-bold mb-2 font-mono text-sm tracking-wide">ROLE, CHALLENGES & OUTCOMES</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="leading-relaxed whitespace-normal break-words">{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-4 mt-4 w-full">
                <ul className="flex flex-wrap gap-2 font-mono text-sm text-faint-yellow flex-1">
                  {project.techStack.map((tech, tIdx) => (
                    <li
                      key={tIdx}
                      className="px-3 py-1 border border-faint-yellow/40 rounded-lg bg-faint-yellow/5 hover:bg-faint-yellow/15 hover:border-faint-yellow/80 hover:shadow-[0_0_10px_rgba(253,224,71,0.25)] transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a href={project.githubUrl} className="text-white hover:text-neon-cyan transition-colors flex-shrink-0 mt-1" target="_blank" rel="noreferrer" title="View on GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
