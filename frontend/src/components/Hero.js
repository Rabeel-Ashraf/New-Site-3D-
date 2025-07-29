import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Github, Instagram, MessageCircle, Zap } from 'lucide-react';

const Hero = () => {
  const [isUniverseEntered, setIsUniverseEntered] = useState(false);
  const canvasRef = useRef(null);

  // Lightning effect animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.speed = 2;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
        const size = (1000 - this.z) / 1000 * 2;

        ctx.fillStyle = `rgba(218, 255, 1, ${(1000 - this.z) / 1000 * 0.8})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleEnterUniverse = () => {
    setIsUniverseEntered(true);
    // Add lightning effect
    const lightning = document.createElement('div');
    lightning.className = 'fixed inset-0 pointer-events-none z-40';
    lightning.style.background = 'radial-gradient(circle, rgba(218,255,1,0.3) 0%, transparent 70%)';
    lightning.style.animation = 'flash 0.3s ease-out';
    document.body.appendChild(lightning);
    
    setTimeout(() => {
      document.body.removeChild(lightning);
    }, 300);

    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-[#DAFF01] shadow-2xl shadow-[#DAFF01]/20 animate-pulse">
            <img
              src="https://github.com/Rabeel-Ashraf/Rabeel.world.portfolio/blob/main/public/rabeel.jpg?raw=true"
              alt="Rabeel Ashraf"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUExQTJFIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0RBRkYwMSIvPgo8cGF0aCBkPSJNNzAgMTQwaDYwYzAgMCAwIDIwLTMwIDIwcy0zMC0yMC0zMC0yMFoiIGZpbGw9IiNEQUZGMDEiLz4KPC9zdmc+";
              }}
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#DAFF01] rounded-full animate-bounce opacity-80"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Rabeel Ashraf
          </h1>
          <h2 className="text-xl md:text-3xl text-[#DAFF01] font-semibold mb-4">
            AI Engineer & Owner of OrionixLabs
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "I create mind-blowing AI experiences & futuristic automations."
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Rabeel-Ashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-[#DAFF01] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 text-white group-hover:text-black" />
          </a>
          <a
            href="https://www.instagram.com/xavernox"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-[#DAFF01] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <Instagram className="w-6 h-6 text-white group-hover:text-black" />
          </a>
          <a
            href="https://wa.me/971501359046"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-[#DAFF01] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:text-black" />
          </a>
        </div>

        {/* Enter Universe Button */}
        <button
          onClick={handleEnterUniverse}
          className="group relative inline-flex items-center px-8 py-4 bg-[#DAFF01] text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#DAFF01]/40"
        >
          <span className="relative z-10 flex items-center">
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Enter My Universe
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          
          {/* Lightning effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>

        {/* 3D Earth Placeholder */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-green-500 to-blue-800 animate-spin-slow shadow-2xl shadow-blue-500/20 opacity-80">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-400 to-blue-600 opacity-70 animate-pulse"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-yellow-200 to-green-400 opacity-50"></div>
          </div>
        </div>

        {/* Dubai Future Museum - Realistic 3D */}
        <div className="absolute left-8 bottom-20 hidden lg:block perspective-1000">
          <div className="relative transform rotate-12 animate-float-museum">
            {/* Main Museum Structure */}
            <div className="relative w-40 h-48">
              {/* Base/Foundation */}
              <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-700 via-gray-600 to-gray-500 rounded-b-lg shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
              
              {/* Main Torus Ring */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-36 h-24 border-8 border-gray-300 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 shadow-2xl shadow-black/50 animate-ring-glow">
                {/* Inner Ring Detail */}
                <div className="absolute inset-2 border-2 border-gray-400 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-80"></div>
                
                {/* Ring Segments */}
                <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-[#DAFF01]/30 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-blue-400/30 to-transparent rounded-full animate-pulse delay-500"></div>
                
                {/* LED Strip Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-[#DAFF01]/20 animate-spin-slow"></div>
              </div>
              
              {/* Top Ring Section */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-20 border-6 border-gray-400 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-xl opacity-90">
                <div className="absolute inset-1 border border-gray-500 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-70"></div>
              </div>
              
              {/* Glass Panels Effect */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-28 h-16 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full backdrop-blur-sm border border-white/20 animate-glass-shimmer"></div>
              
              {/* Architectural Details */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-lg shadow-lg"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-gradient-to-t from-gray-500 to-gray-300 rounded-t-lg shadow-md"></div>
              
              {/* Futuristic Glow Effects */}
              <div className="absolute inset-0 bg-gradient-radial from-[#DAFF01]/10 via-transparent to-transparent rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-[#DAFF01]/30 rounded-full blur-sm animate-pulse"></div>
              
              {/* Holographic Grid Lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DAFF01] to-transparent animate-scan delay-1000"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan delay-2000"></div>
              </div>
              
              {/* Floating Particles Around Museum */}
              <div className="absolute -top-2 -left-2 w-1 h-1 bg-[#DAFF01] rounded-full animate-float-particle"></div>
              <div className="absolute -top-4 right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-particle delay-500"></div>
              <div className="absolute bottom-8 -right-3 w-1 h-1 bg-blue-400 rounded-full animate-float-particle delay-1000"></div>
              <div className="absolute top-1/3 -left-4 w-0.5 h-0.5 bg-white rounded-full animate-float-particle delay-1500"></div>
            </div>
            
            {/* Ground Shadow */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Flash animation for lightning effect */}
      <style jsx>{`
        @keyframes flash {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: rotate(12deg) translateY(0px); }
          50% { transform: rotate(12deg) translateY(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;