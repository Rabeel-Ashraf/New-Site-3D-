import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play, Zap, Rocket, DollarSign, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "FinGenie",
      subtitle: "AI Financial Research Tool",
      description: "Revolutionary AI-powered financial analysis platform that processes market data in real-time and provides intelligent investment insights.",
      features: ["Real-time Market Analysis", "AI-Powered Predictions", "Risk Assessment", "Portfolio Optimization"],
      tech: ["Python", "TensorFlow", "React", "FastAPI", "MongoDB"],
      status: "Live",
      icon: DollarSign,
      color: "#DAFF01",
      gradient: "from-yellow-400 to-green-400",
      mockUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Wallet Fusion",
      subtitle: "PKR Wallet System (Mobile-first)",
      description: "Next-generation mobile wallet application for Pakistani Rupee with seamless UX and advanced security features.",
      features: ["Instant Transfers", "Biometric Security", "QR Payments", "Bill Management"],
      tech: ["React Native", "Node.js", "PostgreSQL", "Blockchain", "AWS"],
      status: "Coming Soon",
      icon: Smartphone,
      color: "#8B5CF6",
      gradient: "from-purple-400 to-pink-400",
      mockUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "OrionixLabs.com",
      subtitle: "AI SaaS Automation Tools",
      description: "Comprehensive suite of AI-powered automation tools designed to streamline business processes and enhance productivity.",
      features: ["Process Automation", "AI Workflows", "Analytics Dashboard", "API Integration"],
      tech: ["Next.js", "OpenAI", "Supabase", "Tailwind", "Vercel"],
      status: "In Development",
      icon: Rocket,
      color: "#06B6D4",
      gradient: "from-cyan-400 to-blue-400",
      mockUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Rabeel.world",
      subtitle: "3D AI Portfolio Site",
      description: "This very portfolio website featuring cutting-edge 3D animations, AI interactions, and immersive user experience.",
      features: ["3D Animations", "AI Chatbot", "Thunder Effects", "Responsive Design"],
      tech: ["React", "Three.js", "Framer Motion", "WebGL", "GSAP"],
      status: "Live",
      icon: Globe,
      color: "#EF4444",
      gradient: "from-red-400 to-orange-400",
      mockUrl: "#",
      githubUrl: "https://github.com/Rabeel-Ashraf/Rabeel.world.portfolio"
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#DAFF01]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-[#DAFF01]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#DAFF01] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative solutions I've crafted, each project pushing the boundaries 
            of AI and modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden transition-all duration-500 hover:scale-105 hover:border-gray-600/70">
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Coming Soon' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-transform duration-500 group-hover:rotate-12"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <project.icon 
                      className="w-8 h-8 transition-colors duration-500" 
                      style={{ color: project.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#DAFF01] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-[#DAFF01] mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#DAFF01] mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-[#DAFF01]/20 text-[#DAFF01] text-xs rounded-full border border-[#DAFF01]/30">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-[#DAFF01] text-black font-medium rounded-lg hover:bg-[#DAFF01]/90 transition-colors duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-[#DAFF01] hover:text-[#DAFF01] transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${project.color}40, transparent 70%)`
                  }}
                ></div>

                {/* Top Accent */}
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                  style={{ backgroundColor: project.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeProjectModal}>
            <div 
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-90vh overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeProjectModal}
                className="absolute top-6 right-6 w-8 h-8 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                ×
              </button>

              {/* Modal Content */}
              <div className="flex items-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${selectedProject.color}20` }}
                >
                  <selectedProject.icon 
                    className="w-8 h-8" 
                    style={{ color: selectedProject.color }}
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-gray-400 text-lg">{selectedProject.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Full Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Zap className="w-4 h-4 text-[#DAFF01] mr-2" />
                  All Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-[#DAFF01] mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Tech Stack */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a 
                  href={selectedProject.mockUrl}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-[#DAFF01] text-black font-medium rounded-lg hover:bg-[#DAFF01]/90 transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Demo
                </a>
                <a 
                  href={selectedProject.githubUrl}
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-[#DAFF01] hover:text-[#DAFF01] transition-colors duration-300 flex items-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .max-h-90vh {
          max-height: 90vh;
        }
      `}</style>
    </section>
  );
};

export default Projects;