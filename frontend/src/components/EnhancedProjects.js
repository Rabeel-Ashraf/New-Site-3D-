import React, { useState } from 'react';
import { ExternalLink, Github, Play, Zap, Rocket, DollarSign, Smartphone, Globe, Star, Code2, Sparkles } from 'lucide-react';
import { AnimatedElement, StaggeredContainer } from './ScrollAnimations';

const EnhancedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "FinGenie",
      subtitle: "AI Financial Research Tool",
      description: "Revolutionary AI-powered financial analysis platform that processes market data in real-time and provides intelligent investment insights using advanced machine learning algorithms.",
      features: ["Real-time Market Analysis", "AI-Powered Predictions", "Risk Assessment", "Portfolio Optimization", "Automated Trading Signals", "Sentiment Analysis"],
      tech: ["Python", "TensorFlow", "React", "FastAPI", "MongoDB", "WebSocket"],
      status: "Live",
      icon: DollarSign,
      color: "#DAFF01",
      gradient: "from-yellow-400 to-green-400",
      category: "FinTech",
      mockUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Wallet Fusion",
      subtitle: "PKR Wallet System (Mobile-first)",
      description: "Next-generation mobile wallet application for Pakistani Rupee with seamless UX, advanced security features, and blockchain integration for secure transactions.",
      features: ["Instant Transfers", "Biometric Security", "QR Payments", "Bill Management", "Multi-Bank Integration", "Blockchain Security"],
      tech: ["React Native", "Node.js", "PostgreSQL", "Blockchain", "AWS", "Redux"],
      status: "Coming Soon",
      icon: Smartphone,
      color: "#8B5CF6",
      gradient: "from-purple-400 to-pink-400",
      category: "Mobile App",
      mockUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "OrionixLabs.com",
      subtitle: "AI SaaS Automation Tools",
      description: "Comprehensive suite of AI-powered automation tools designed to streamline business processes, enhance productivity, and provide intelligent solutions for modern enterprises.",
      features: ["Process Automation", "AI Workflows", "Analytics Dashboard", "API Integration", "Custom AI Models", "Team Collaboration"],
      tech: ["Next.js", "OpenAI", "Supabase", "Tailwind", "Vercel", "TypeScript"],
      status: "In Development",
      icon: Rocket,
      color: "#06B6D4",
      gradient: "from-cyan-400 to-blue-400",
      category: "SaaS Platform",
      mockUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Rabeel.world",
      subtitle: "3D AI Portfolio Site",
      description: "This very portfolio website featuring cutting-edge 3D animations, AI interactions, thunder effects, and immersive user experience built with modern web technologies.",
      features: ["3D Animations", "AI Chatbot", "Thunder Effects", "Responsive Design", "WebGL Graphics", "Interactive Elements"],
      tech: ["React", "Three.js", "Framer Motion", "WebGL", "GSAP", "Tailwind"],
      status: "Live",
      icon: Globe,
      color: "#EF4444",
      gradient: "from-red-400 to-orange-400",
      category: "Portfolio",
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
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating code symbols */}
        {[...Array(15)].map((_, i) => {
          const symbols = ['</>', '{}', '[]', '<AI/>', '()', '!=', '&&', '||'];
          return (
            <div
              key={i}
              className="absolute text-[#DAFF01]/10 font-mono text-2xl animate-float-code"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {symbols[Math.floor(Math.random() * symbols.length)]}
            </div>
          );
        })}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <AnimatedElement variant="morphIn" duration={1000}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#DAFF01]/10 border border-[#DAFF01]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#DAFF01] mr-2 animate-pulse" />
              <span className="text-[#DAFF01] font-medium">Featured Work</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Featured <span className="text-[#DAFF01] relative">
                Projects
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DAFF01] via-purple-500 to-transparent animate-gradient-flow"></div>
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the innovative solutions I've crafted, each project pushing the boundaries 
              of AI and modern web development with cutting-edge technology.
            </p>
          </div>
        </AnimatedElement>

        {/* Enhanced Projects Grid */}
        <StaggeredContainer 
          variant="scaleUp" 
          staggerDelay={200}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openProjectModal(project)}
            >
              {/* Project Card */}
              <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 h-full overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-gray-600/50">
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 rounded-2xl animate-border-glow"
                    style={{ 
                      background: `linear-gradient(45deg, ${project.color}40, transparent, ${project.color}40)`,
                      backgroundSize: '200% 200%'
                    }}
                  ></div>
                </div>

                {/* Status Badge with enhanced animation */}
                <div className="absolute top-6 right-6 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/40 animate-pulse' :
                    project.status === 'Coming Soon' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' :
                    'bg-blue-500/20 text-blue-400 border-blue-500/40'
                  }`}>
                    {project.status}
                    {project.status === 'Live' && <div className="inline-block w-2 h-2 bg-green-400 rounded-full ml-2 animate-ping"></div>}
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="px-3 py-1 bg-black/40 backdrop-blur-sm border border-gray-600/30 rounded-full text-xs text-gray-300">
                    {project.category}
                  </div>
                </div>

                {/* Project Icon with enhanced animation */}
                <div className="flex items-center mb-6 mt-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative overflow-hidden"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <project.icon 
                      className="w-8 h-8 transition-all duration-500 relative z-10" 
                      style={{ color: project.color }}
                    />
                    {/* Icon glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${project.color}30, transparent 70%)` }}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#DAFF01] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                {/* Enhanced Description */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Features with staggered animation */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-[#DAFF01] mr-2 group-hover:animate-pulse" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <Star className="w-3 h-3 text-[#DAFF01] mr-2 animate-pulse" style={{ animationDelay: `${idx * 200}ms` }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack with enhanced hover effects */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gray-700/40 backdrop-blur-sm text-gray-300 text-xs rounded-full border border-gray-600/30 hover:border-[#DAFF01]/50 hover:text-[#DAFF01] transition-all duration-300 hover:scale-105"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-[#DAFF01]/20 text-[#DAFF01] text-xs rounded-full border border-[#DAFF01]/40 animate-pulse">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center px-4 py-3 bg-[#DAFF01] text-black font-medium rounded-xl hover:bg-[#DAFF01]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DAFF01]/30 group/btn">
                    <Play className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                    View Details
                  </button>
                  <button className="px-4 py-3 border border-gray-600/50 text-gray-300 rounded-xl hover:border-[#DAFF01] hover:text-[#DAFF01] transition-all duration-300 hover:scale-105 group/github">
                    <Github className="w-4 h-4 group-hover/github:animate-spin" />
                  </button>
                </div>

                {/* Enhanced Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)`
                  }}
                ></div>

                {/* Particle effect on hover */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full animate-float-particle"
                        style={{
                          backgroundColor: project.color,
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggeredContainer>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fade-in">
            <div 
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 max-w-3xl w-full max-h-90vh overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced close button */}
              <button 
                onClick={closeProjectModal}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-700/50 hover:bg-red-600/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
              >
                ×
              </button>

              {/* Modal content with animations */}
              <AnimatedElement variant="slideUp" duration={500}>
                <div className="flex items-center mb-6">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mr-6"
                    style={{ backgroundColor: `${selectedProject.color}20` }}
                  >
                    <selectedProject.icon 
                      className="w-10 h-10" 
                      style={{ color: selectedProject.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-400 text-lg">{selectedProject.subtitle}</p>
                    <div className="flex items-center mt-2">
                      <Code2 className="w-4 h-4 text-[#DAFF01] mr-2" />
                      <span className="text-[#DAFF01] font-medium">{selectedProject.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {selectedProject.description}
                </p>

                {/* Full features with animation */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center text-xl">
                    <Zap className="w-5 h-5 text-[#DAFF01] mr-2" />
                    All Features
                  </h4>
                  <StaggeredContainer 
                    variant="slideRight" 
                    staggerDelay={100}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-400 hover:text-gray-200 transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-[#DAFF01] mr-3 animate-pulse"></div>
                        {feature}
                      </div>
                    ))}
                  </StaggeredContainer>
                </div>

                {/* Tech stack with enhanced styling */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-xl">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-gray-700/40 backdrop-blur-sm text-gray-300 rounded-xl border border-gray-600/30 hover:border-[#DAFF01]/50 hover:text-[#DAFF01] transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced action buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.mockUrl}
                    className="flex-1 flex items-center justify-center px-6 py-4 bg-[#DAFF01] text-black font-medium rounded-xl hover:bg-[#DAFF01]/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#DAFF01]/30"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubUrl}
                    className="px-6 py-4 border border-gray-600/50 text-gray-300 rounded-xl hover:border-[#DAFF01] hover:text-[#DAFF01] transition-all duration-300 flex items-center hover:scale-105"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </AnimatedElement>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float-code {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-30px) rotate(8deg);
            opacity: 0.4;
          }
        }
        
        @keyframes gradient-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes border-glow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) translateX(-5px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-gradient-flow {
          animation: gradient-flow 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-border-glow {
          animation: border-glow 2s ease infinite;
        }
        
        .animate-float-code {
          animation: float-code var(--duration, 10s) ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 2s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .max-h-90vh {
          max-height: 90vh;
        }
      `}</style>
    </section>
  );
};

export default EnhancedProjects;