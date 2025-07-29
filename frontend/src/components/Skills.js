import React, { useEffect, useRef, useState } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Zap, 
  Cpu, 
  Globe,
  Layers,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "#DAFF01",
      skills: ["LangChain", "OpenAI GPT", "Gemini", "Hugging Face", "TensorFlow", "PyTorch"],
      delay: 0
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "#8B5CF6",
      skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "GSAP", "Framer Motion"],
      delay: 200
    },
    {
      title: "Backend & APIs",
      icon: Database,
      color: "#06B6D4",
      skills: ["Python", "Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"],
      delay: 400
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "#F59E0B",
      skills: ["Supabase", "Railway", "Netlify", "Docker", "GitHub Actions", "AWS"],
      delay: 600
    },
    {
      title: "Automation Tools",
      icon: Zap,
      color: "#EF4444",
      skills: ["Make.com", "n8n", "Zapier", "Python Scripts", "Selenium", "API Integration"],
      delay: 800
    },
    {
      title: "3D & Design",
      icon: Layers,
      color: "#10B981",
      skills: ["Blender", "Three.js", "WebGL", "Canvas API", "UI/UX Design", "Figma"],
      delay: 1000
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#DAFF01]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="text-[#DAFF01]">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-[#DAFF01] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powered by cutting-edge technologies and fueled by innovation, 
            I craft AI solutions that push the boundaries of possibility.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`skill-card group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${category.delay}ms` }}
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden transition-all duration-500 hover:scale-105 hover:border-gray-600/70">
                {/* Top Accent */}
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                  style={{ backgroundColor: category.color }}
                ></div>

                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mr-4 transition-transform duration-500 group-hover:rotate-12"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <category.icon 
                      className="w-7 h-7 transition-colors duration-500" 
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#DAFF01] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center group/skill"
                      style={{ animationDelay: `${category.delay + skillIndex * 100}ms` }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full mr-3 transition-all duration-300 group-hover/skill:scale-150"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${category.color}40, transparent 70%)`
                  }}
                ></div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20 animate-ping group-hover:bg-[#DAFF01]/60"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full bg-white/30 animate-pulse delay-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} delay-1200`}>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DAFF01]/10 to-purple-500/10 border border-[#DAFF01]/30 rounded-full">
            <Cpu className="w-5 h-5 text-[#DAFF01] mr-3 animate-spin-slow" />
            <span className="text-white font-medium">Always learning, always innovating</span>
            <Zap className="w-5 h-5 text-[#DAFF01] ml-3 animate-pulse" />
          </div>
        </div>
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

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .skill-card:hover .skill-card-bg {
          transform: scale(1.05);
        }

        .delay-1200 {
          animation-delay: 1.2s;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .skill-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;