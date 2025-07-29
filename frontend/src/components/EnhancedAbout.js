import React from 'react';
import { Zap, Code, Brain, Rocket, Star, TrendingUp, Award } from 'lucide-react';
import { AnimatedElement, StaggeredContainer } from './ScrollAnimations';

const EnhancedAbout = () => {
  const philosophyCards = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Pushing the boundaries of artificial intelligence",
      color: "#DAFF01"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing elegant, maintainable solutions",
      color: "#8B5CF6"
    },
    {
      icon: Rocket,
      title: "Future Tech",
      description: "Building tomorrow's applications today",
      color: "#06B6D4"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed and efficiency",
      color: "#F59E0B"
    }
  ];

  const achievements = [
    { number: "50+", label: "AI Projects", icon: Star },
    { number: "3+", label: "Years Experience", icon: TrendingUp },
    { number: "100%", label: "Innovation", icon: Award }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#DAFF01]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#DAFF01]/30 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatedElement variant="slideRight" duration={1000}>
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  About <span className="text-[#DAFF01] relative">
                    Me
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DAFF01] to-transparent"></div>
                  </span>
                </h2>
              </div>
            </AnimatedElement>

            <StaggeredContainer variant="slideUp" staggerDelay={200} className="space-y-6">
              <div className="text-gray-300 text-lg leading-relaxed relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#DAFF01] to-transparent rounded-full"></div>
                Welcome to my digital universe! I'm <span className="text-[#DAFF01] font-semibold">Rabeel Ashraf</span>, 
                an AI Engineer and the visionary behind <span className="text-[#DAFF01] font-semibold">OrionixLabs</span>. 
                My journey into the realm of artificial intelligence began with a simple fascination for creating 
                systems that think, learn, and evolve.
              </div>
              
              <div className="text-gray-300 text-lg leading-relaxed relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
                At OrionixLabs, I craft cutting-edge AI solutions that bridge the gap between imagination and reality. 
                From intelligent automation systems to mind-bending 3D experiences, I transform complex ideas into 
                elegant, powerful applications that push the boundaries of what's possible.
              </div>
              
              <div className="text-gray-300 text-lg leading-relaxed relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent rounded-full"></div>
                My passion lies in creating <span className="text-[#DAFF01] font-semibold">futuristic automations</span> 
                and AI-driven experiences that not only solve real-world problems but also inspire and amaze. 
                Every project is an opportunity to explore the infinite possibilities of artificial intelligence.
              </div>
            </StaggeredContainer>

            {/* Enhanced Stats */}
            <AnimatedElement variant="scaleUp" delay={800} duration={1000}>
              <div className="grid grid-cols-3 gap-6 pt-8">
                {achievements.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DAFF01]/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4">
                      <stat.icon className="w-6 h-6 text-[#DAFF01] mx-auto mb-2 group-hover:animate-bounce" />
                      <div className="text-3xl font-bold text-[#DAFF01] mb-2 group-hover:text-white transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>

          {/* Right Visual - Enhanced Philosophy Cards */}
          <div className="relative">
            <AnimatedElement variant="morphIn" duration={1200} delay={400}>
              <div className="relative">
                {/* Main Container */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 relative overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAFF01] via-purple-500 to-cyan-500 animate-gradient-x"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <Brain className="w-6 h-6 text-[#DAFF01] mr-3 animate-pulse" />
                    Philosophy & Values
                  </h3>
                  
                  <StaggeredContainer 
                    variant="glowUp" 
                    staggerDelay={150}
                    className="grid grid-cols-2 gap-4"
                  >
                    {philosophyCards.map((card, index) => (
                      <div
                        key={index}
                        className="group p-4 bg-gray-800/20 rounded-xl border border-gray-700/20 hover:border-gray-600/40 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 relative overflow-hidden cursor-pointer"
                      >
                        {/* Hover glow effect */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"
                          style={{ 
                            background: `radial-gradient(circle at 50% 50%, ${card.color}40, transparent 70%)`
                          }}
                        ></div>
                        
                        <div className="relative">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                            style={{ backgroundColor: `${card.color}20` }}
                          >
                            <card.icon 
                              className="w-5 h-5 transition-colors duration-300" 
                              style={{ color: card.color }}
                            />
                          </div>
                          <h4 className="text-white font-semibold mb-2 group-hover:text-[#DAFF01] transition-colors duration-300">
                            {card.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {card.description}
                          </p>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                             style={{ backgroundColor: card.color }}></div>
                      </div>
                    ))}
                  </StaggeredContainer>

                  {/* Inspirational Quote */}
                  <AnimatedElement variant="particles" delay={1200} duration={800}>
                    <div className="mt-8 pt-8 border-t border-gray-700/30">
                      <div className="relative">
                        <blockquote className="text-gray-300 italic text-center text-lg leading-relaxed">
                          "The future belongs to those who can dream in code and think in algorithms."
                        </blockquote>
                        <div className="text-[#DAFF01] text-center mt-3 font-semibold text-lg">- Rabeel Ashraf</div>
                        
                        {/* Quote decoration */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-6xl text-[#DAFF01]/20 font-serif">"</div>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>

                {/* Enhanced Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#DAFF01]/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl -z-10 opacity-60 animate-pulse"></div>
                
                {/* Floating elements around the card */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#DAFF01] rounded-full animate-bounce opacity-70 shadow-lg shadow-[#DAFF01]/50"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-60 shadow-lg shadow-purple-500/50"></div>
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float-random {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
          }
          75% {
            transform: translateY(-15px) translateX(8px);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float-random {
          animation: float-random var(--duration, 4s) ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EnhancedAbout;