import React from 'react';
import { Github, Instagram, MessageCircle, Mail, Zap, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#DAFF01]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#DAFF01] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">OrionixLabs</h3>
                <p className="text-[#DAFF01] text-sm font-medium">by Rabeel Ashraf</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Crafting the future of AI and automation. Transforming ideas into intelligent, 
              beautiful, and powerful applications that push the boundaries of possibility.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Zap className="w-4 h-4 text-[#DAFF01] animate-pulse" />
              <span>in Dubai</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-[#DAFF01] transition-colors duration-300 font-medium"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mrperfect6ft@gmail.com"
                  className="flex items-center text-gray-400 hover:text-[#DAFF01] transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 mr-3 group-hover:animate-bounce" />
                  Email Me
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971501359046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                >
                  <MessageCircle className="w-4 h-4 mr-3 group-hover:animate-bounce" />
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="flex items-center text-gray-400">
                  <span className="w-4 h-4 mr-3 text-center">🇦🇪</span>
                  Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="py-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-gray-400 font-medium">Follow the Journey:</span>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Rabeel-Ashraf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/xavernox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://wa.me/971501359046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-[#DAFF01]/10 border border-[#DAFF01]/30 text-[#DAFF01] rounded-full hover:bg-[#DAFF01]/20 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              <span className="font-medium">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} OrionixLabs. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2">
                <span>Powered by</span>
                <span className="text-[#DAFF01] font-medium">AI & Innovation</span>
                <Zap className="w-4 h-4 text-[#DAFF01] animate-pulse" />
              </span>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="absolute bottom-4 right-6 text-xs text-gray-600">
          v1.0.0 - Futuristic Edition
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#DAFF01] rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-500 rounded-full animate-ping delay-2000"></div>
      </div>
    </footer>
  );
};

export default Footer;