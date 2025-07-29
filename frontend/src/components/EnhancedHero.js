import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Github, Instagram, MessageCircle, Zap } from 'lucide-react';

const EnhancedHero = () => {
  const [isUniverseEntered, setIsUniverseEntered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef(null);
  const thunderCanvasRef = useRef(null);

  // Star field animation
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

  // Thunder/Lightning animation
  const createThunderEffect = () => {
    const thunderCanvas = thunderCanvasRef.current;
    if (!thunderCanvas) return;

    const ctx = thunderCanvas.getContext('2d');
    thunderCanvas.width = window.innerWidth;
    thunderCanvas.height = window.innerHeight;

    // Create multiple lightning bolts
    const createLightningBolt = (startX, startY, endX, endY) => {
      const segments = 20;
      const points = [];
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = startX + (endX - startX) * t + (Math.random() - 0.5) * 100;
        const y = startY + (endY - startY) * t + (Math.random() - 0.5) * 50;
        points.push({ x, y });
      }

      ctx.strokeStyle = '#DAFF01';
      ctx.lineWidth = Math.random() * 8 + 2;
      ctx.shadowColor = '#DAFF01';
      ctx.shadowBlur = 20;
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      
      ctx.stroke();

      // Add branches
      if (Math.random() > 0.7) {
        const branchIndex = Math.floor(Math.random() * points.length);
        const branchPoint = points[branchIndex];
        const branchEndX = branchPoint.x + (Math.random() - 0.5) * 200;
        const branchEndY = branchPoint.y + Math.random() * 100;
        
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(branchPoint.x, branchPoint.y);
        ctx.lineTo(branchEndX, branchEndY);
        ctx.stroke();
      }
    };

    // Create multiple lightning bolts
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        ctx.clearRect(0, 0, thunderCanvas.width, thunderCanvas.height);
        
        // Main lightning bolt
        createLightningBolt(
          Math.random() * thunderCanvas.width,
          0,
          Math.random() * thunderCanvas.width,
          thunderCanvas.height
        );
        
        // Side bolts
        createLightningBolt(
          Math.random() * thunderCanvas.width * 0.3,
          Math.random() * thunderCanvas.height * 0.3,
          Math.random() * thunderCanvas.width * 0.7 + thunderCanvas.width * 0.3,
          Math.random() * thunderCanvas.height * 0.7 + thunderCanvas.height * 0.3
        );
        
        // Flash effect
        document.body.style.background = 'radial-gradient(circle, rgba(218,255,1,0.1) 0%, rgba(0,0,0,1) 50%)';
        
        setTimeout(() => {
          ctx.clearRect(0, 0, thunderCanvas.width, thunderCanvas.height);
          document.body.style.background = '';
        }, 100);
      }, i * 200);
    }
  };

  const handleEnterUniverse = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Start thunder effect
    createThunderEffect();
    
    // Screen flash
    const flashOverlay = document.createElement('div');
    flashOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: radial-gradient(circle, rgba(218,255,1,0.8) 0%, transparent 70%);
      pointer-events: none;
      z-index: 9999;
      animation: thunderFlash 1.5s ease-out;
    `;
    
    document.body.appendChild(flashOverlay);
    
    // Add thunder flash keyframes
    if (!document.getElementById('thunder-styles')) {
      const style = document.createElement('style');
      style.id = 'thunder-styles';
      style.textContent = `
        @keyframes thunderFlash {
          0% { opacity: 0; }
          10% { opacity: 1; }
          20% { opacity: 0; }
          30% { opacity: 0.8; }
          40% { opacity: 0; }
          50% { opacity: 1; }
          60% { opacity: 0; }
          70% { opacity: 0.6; }
          100% { opacity: 0; }
        }
        
        @keyframes universeEntry {
          0% { 
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
          }
          25% { 
            transform: scale(1.1) rotate(5deg);
            filter: brightness(1.5);
          }
          50% { 
            transform: scale(0.95) rotate(-3deg);
            filter: brightness(2);
          }
          75% { 
            transform: scale(1.05) rotate(2deg);
            filter: brightness(1.8);
          }
          100% { 
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
          }
        }
        
        @keyframes warpSpeed {
          0% { 
            transform: translateZ(0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateZ(1000px) scale(20);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.animation = 'universeEntry 1.5s ease-out';
    }
    
    // Warp speed effect on particles
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.style.animation = 'warpSpeed 1s ease-in forwards';
      }
    }, 500);
    
    // Cleanup and navigate
    setTimeout(() => {
      flashOverlay.remove();
      setIsUniverseEntered(true);
      setIsAnimating(false);
      
      // Smooth scroll to about section
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }, 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Star Field Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%)' }}
      />
      
      {/* Thunder/Lightning Canvas */}
      <canvas
        ref={thunderCanvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Realistic Dubai Museum of the Future */}
      <div className="absolute left-8 bottom-20 hidden lg:block perspective-1000">
        <div className="relative transform rotate-12 animate-float-museum">
          {/* Museum Base/Foundation */}
          <div className="relative w-44 h-52">
            {/* Ground Platform */}
            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-[#DAFF01]/30 rounded-full blur-sm"></div>
            </div>
            
            {/* Main Torus Ring Structure */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-28">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-8 border-gray-300 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 shadow-2xl shadow-black/50 animate-ring-glow">
                {/* Inner Ring Detail */}
                <div className="absolute inset-3 border-2 border-gray-400 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-90">
                  {/* Center Opening */}
                  <div className="absolute inset-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-full backdrop-blur-sm"></div>
                </div>
                
                {/* Ring Architectural Segments */}
                <div className="absolute top-2 left-1/4 w-1 h-24 bg-gradient-to-b from-[#DAFF01]/40 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-1/4 w-1 h-24 bg-gradient-to-b from-blue-400/40 to-transparent rounded-full animate-pulse delay-500"></div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-36 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                {/* LED Strip Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-[#DAFF01]/30 animate-spin-slow"></div>
                <div className="absolute inset-1 rounded-full border border-cyan-400/20 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
              </div>
            </div>
            
            {/* Top Ring Section */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-36 h-24 border-6 border-gray-400 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-xl opacity-95">
              <div className="absolute inset-2 border border-gray-500 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 opacity-80">
                <div className="absolute inset-4 bg-gradient-to-br from-blue-800/10 to-cyan-800/10 rounded-full"></div>
              </div>
            </div>
            
            {/* Glass Panel Effects */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full backdrop-blur-sm border border-white/30 animate-glass-shimmer">
              <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            </div>
            
            {/* Structural Support Columns */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-lg shadow-lg"></div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-lg shadow-md"></div>
            
            {/* Futuristic Lighting Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-[#DAFF01]/15 via-transparent to-transparent rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-44 h-4 bg-[#DAFF01]/20 rounded-full blur-lg animate-pulse"></div>
            
            {/* Holographic Scanning Lines */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DAFF01] to-transparent animate-scan delay-1000"></div>
              <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan delay-2000"></div>
            </div>
            
            {/* Ambient Particles */}
            <div className="absolute -top-2 -left-2 w-1 h-1 bg-[#DAFF01] rounded-full animate-float-particle"></div>
            <div className="absolute -top-4 right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-particle delay-500"></div>
            <div className="absolute bottom-8 -right-3 w-1 h-1 bg-blue-400 rounded-full animate-float-particle delay-1000"></div>
            <div className="absolute top-1/3 -left-4 w-0.5 h-0.5 bg-white rounded-full animate-float-particle delay-1500"></div>
            
            {/* Arabic Calligraphy Inspired Details */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-8 opacity-20">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
              <div className="mt-2 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent transform rotate-3"></div>
            </div>
          </div>
          
          {/* Ground Shadow and Reflection */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-52 h-12 bg-black/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-44 h-6 bg-gradient-to-r from-transparent via-[#DAFF01]/10 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Enhanced 3D Earth */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-52 h-52">
          {/* Main Earth Sphere */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-green-500 to-blue-800 animate-spin-slow shadow-2xl shadow-blue-500/30 relative overflow-hidden">
            {/* Continents */}
            <div className="absolute top-8 left-8 w-16 h-12 bg-green-600 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-20 right-12 w-12 h-8 bg-green-700 rounded-full opacity-70"></div>
            <div className="absolute bottom-16 left-16 w-20 h-10 bg-green-500 rounded-full opacity-75"></div>
            
            {/* Atmosphere Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-300/10 to-transparent"></div>
            
            {/* Cloud Layer */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-white/10 animate-float opacity-60"></div>
          </div>
          
          {/* Orbital Ring */}
          <div className="absolute inset-0 border-2 border-[#DAFF01]/40 rounded-full animate-spin-slow opacity-60" style={{animationDuration: '30s'}}></div>
          
          {/* Satellite */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#DAFF01] rounded-full animate-bounce opacity-80"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto hero-content">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-[#DAFF01] shadow-2xl shadow-[#DAFF01]/30 animate-pulse">
            <img
              src="https://github.com/Rabeel-Ashraf/Rabeel.world.portfolio/blob/main/public/rabeel.jpg?raw=true"
              alt="Rabeel Ashraf - AI Engineer and Owner of OrionixLabs"
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUExQTJFIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0RBRkYwMSIvPgo8cGF0aCBkPSJNNzAgMTQwaDYwYzAgMCAwIDIwLTMwIDIwcy0zMC0yMC0zMC0yMFoiIGZpbGw9IiNEQUZGMDEiLz4KPC9zdmc+";
              }}
            />
          </div>
          
          {/* Enhanced Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#DAFF01] rounded-full animate-bounce opacity-80 shadow-lg shadow-[#DAFF01]/50"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-60 shadow-lg shadow-purple-500/50"></div>
          <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
        </div>

        {/* Enhanced Name and Title */}
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
            aria-label="Visit Rabeel's GitHub Profile"
          >
            <Github className="w-6 h-6 text-white group-hover:text-black" />
          </a>
          <a
            href="https://www.instagram.com/xavernox"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-[#DAFF01] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Follow Rabeel on Instagram"
          >
            <Instagram className="w-6 h-6 text-white group-hover:text-black" />
          </a>
          <a
            href="https://wa.me/971501359046"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-[#DAFF01] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Contact Rabeel via WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:text-black" />
          </a>
        </div>

        {/* Enhanced Enter Universe Button */}
        <button
          onClick={handleEnterUniverse}
          disabled={isAnimating}
          className="group relative inline-flex items-center px-8 py-4 bg-[#DAFF01] text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#DAFF01]/50 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Enter Rabeel's digital universe"
        >
          <span className="relative z-10 flex items-center">
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            {isAnimating ? 'Entering Universe...' : 'Enter My Universe'}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          
          {/* Enhanced Lightning effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#DAFF01] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float-museum {
          0%, 100% { transform: rotate(12deg) translateY(0px) rotateX(5deg); }
          50% { transform: rotate(12deg) translateY(-8px) rotateX(-5deg); }
        }
        
        @keyframes ring-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(218, 255, 1, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 60px rgba(218, 255, 1, 0.8), inset 0 0 40px rgba(255, 255, 255, 0.2); }
        }
        
        @keyframes glass-shimmer {
          0% { background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(218,255,1,0.1)); }
          50% { background: linear-gradient(45deg, rgba(218,255,1,0.3), rgba(255,255,255,0.3)); }
          100% { background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(218,255,1,0.1)); }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          33% { transform: translateY(-8px) rotateZ(120deg); }
          66% { transform: translateY(4px) rotateZ(240deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float-museum {
          animation: float-museum 8s ease-in-out infinite;
        }
        
        .animate-ring-glow {
          animation: ring-glow 3s ease-in-out infinite;
        }
        
        .animate-glass-shimmer {
          animation: glass-shimmer 4s ease-in-out infinite;
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default EnhancedHero;