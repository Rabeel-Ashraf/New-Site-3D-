import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Zap } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission - will be replaced with Supabase integration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      // Show success animation
      const paperPlane = document.createElement('div');
      paperPlane.innerHTML = '✈️';
      paperPlane.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl z-50 animate-bounce';
      document.body.appendChild(paperPlane);
      
      setTimeout(() => {
        paperPlane.style.animation = 'fly-away 1s ease-out forwards';
      }, 1000);
      
      setTimeout(() => {
        document.body.removeChild(paperPlane);
      }, 2000);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message (using console for now)
      console.log('Message sent successfully!');
      
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mrperfect6ft@gmail.com",
      href: "mailto:mrperfect6ft@gmail.com",
      color: "#DAFF01"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+971 50 135 9046",
      href: "https://wa.me/971501359046",
      color: "#25D366"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: "#",
      color: "#8B5CF6"
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "GMT+4 (Dubai)",
      href: "#",
      color: "#06B6D4"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#DAFF01]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-[#DAFF01]">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-[#DAFF01] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your AI vision to life? Let's discuss how we can create 
            something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="w-6 h-6 text-[#DAFF01] mr-3" />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300 group"
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon 
                        className="w-6 h-6" 
                        style={{ color: info.color }}
                      />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-medium">{info.label}</div>
                      <div className="text-white font-semibold group-hover:text-[#DAFF01] transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Zap className="w-4 h-4 text-[#DAFF01] mr-2" />
                  Quick Actions
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://wa.me/971501359046"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-3 bg-green-600/20 border border-green-600/30 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:mrperfect6ft@gmail.com"
                    className="flex-1 flex items-center justify-center px-4 py-3 bg-[#DAFF01]/20 border border-[#DAFF01]/30 text-[#DAFF01] rounded-lg hover:bg-[#DAFF01]/30 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAFF01] to-purple-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Send className="w-6 h-6 text-[#DAFF01] mr-3" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-[#DAFF01] focus:outline-none focus:ring-2 focus:ring-[#DAFF01]/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-[#DAFF01] focus:outline-none focus:ring-2 focus:ring-[#DAFF01]/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-[#DAFF01] focus:outline-none focus:ring-2 focus:ring-[#DAFF01]/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-4 bg-[#DAFF01] text-black font-bold rounded-lg hover:bg-[#DAFF01]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DAFF01]/30 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-[#DAFF01] rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
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

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes fly-away {
          from {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          to {
            transform: translate(200px, -200px) scale(0.5);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;