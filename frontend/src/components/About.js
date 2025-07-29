import React, { useEffect, useRef, useState } from 'react';
import { Zap, Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#DAFF01]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                About <span className="text-[#DAFF01]">Me</span>
              </h2>
              <div className="w-24 h-1 bg-[#DAFF01] mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="animate-fade-in delay-200">
                Welcome to my digital universe! I'm <span className="text-[#DAFF01] font-semibold">Rabeel Ashraf</span>, 
                an AI Engineer and the visionary behind <span className="text-[#DAFF01] font-semibold">OrionixLabs</span>. 
                My journey into the realm of artificial intelligence began with a simple fascination for creating 
                systems that think, learn, and evolve.
              </p>
              
              <p className="animate-fade-in delay-400">
                At OrionixLabs, I craft cutting-edge AI solutions that bridge the gap between imagination and reality. 
                From intelligent automation systems to mind-bending 3D experiences, I transform complex ideas into 
                elegant, powerful applications that push the boundaries of what's possible.
              </p>
              
              <p className="animate-fade-in delay-600">
                My passion lies in creating <span className="text-[#DAFF01] font-semibold">futuristic automations</span> 
                and AI-driven experiences that not only solve real-world problems but also inspire and amaze. 
                Every project is an opportunity to explore the infinite possibilities of artificial intelligence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAFF01] mb-2">50+</div>
                <div className="text-gray-400 text-sm">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAFF01] mb-2">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAFF01] mb-2">100%</div>
                <div className="text-gray-400 text-sm">Innovation</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAFF01] to-purple-500"></div>
                
                <div className="space-y-6">
                  {/* Philosophy Icons */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                      <Brain className="w-8 h-8 text-[#DAFF01]" />
                      <span className="text-white font-medium">AI Innovation</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                      <Code className="w-8 h-8 text-purple-400" />
                      <span className="text-white font-medium">Clean Code</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                      <Rocket className="w-8 h-8 text-blue-400" />
                      <span className="text-white font-medium">Future Tech</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
                      <Zap className="w-8 h-8 text-yellow-400" />
                      <span className="text-white font-medium">Performance</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="pt-6 border-t border-gray-700/50">
                    <blockquote className="text-gray-300 italic text-center">
                      "The future belongs to those who can dream in code and think in algorithms."
                    </blockquote>
                    <div className="text-[#DAFF01] text-center mt-2 font-semibold">- Rabeel Ashraf</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#DAFF01] rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#DAFF01]/20 to-purple-500/20 rounded-2xl blur-xl -z-10 opacity-50"></div>
            </div>
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

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default About;