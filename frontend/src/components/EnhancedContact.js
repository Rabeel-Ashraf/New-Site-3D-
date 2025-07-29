import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Zap, User, AtSign, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { AnimatedElement, StaggeredContainer } from './ScrollAnimations';

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [focusedField, setFocusedField] = useState(null);

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
    setSubmitStatus(null);

    try {
      // Simulate API call with enhanced animation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      
      // Success animation sequence
      setSubmitStatus('success');
      
      // Paper plane animation
      const paperPlane = document.createElement('div');
      paperPlane.innerHTML = '✈️';
      paperPlane.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl z-50 animate-paper-plane';
      document.body.appendChild(paperPlane);
      
      setTimeout(() => {
        if (document.body.contains(paperPlane)) {
          document.body.removeChild(paperPlane);
        }
      }, 3000);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after showing success
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
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
      color: "#DAFF01",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+971 50 135 9046",
      href: "https://wa.me/971501359046",
      color: "#25D366",
      description: "Quick chat and instant replies"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: "#",
      color: "#8B5CF6",
      description: "Where innovation meets opportunity"
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "GMT+4 (Dubai)",
      href: "#",
      color: "#06B6D4",
      description: "Available 24/7 for urgent projects"
    }
  ];

  const inputFields = [
    {
      name: 'name',
      label: 'Your Name',
      type: 'text',
      placeholder: 'Enter your full name',
      icon: User,
      required: true
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'your.email@example.com',
      icon: AtSign,
      required: true
    },
    {
      name: 'message',
      label: 'Your Message',
      type: 'textarea',
      placeholder: 'Tell me about your project, ideas, or just say hello...',
      icon: MessageSquare,
      required: true,
      rows: 5
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-message"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <MessageCircle className="w-4 h-4 text-[#DAFF01]/20" />
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <AnimatedElement variant="morphIn" duration={1000}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#DAFF01]/10 border border-[#DAFF01]/30 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-[#DAFF01] mr-2 animate-pulse" />
              <span className="text-[#DAFF01] font-medium">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Let's <span className="text-[#DAFF01] relative">
                Connect
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DAFF01] via-purple-500 to-transparent animate-gradient-flow"></div>
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your AI vision to life? Let's discuss how we can create 
              something extraordinary together. Every great project starts with a conversation.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <AnimatedElement variant="slideRight" duration={800} delay={200}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 relative overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAFF01] via-purple-500 to-cyan-500 animate-gradient-x"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <MessageCircle className="w-6 h-6 text-[#DAFF01] mr-3 animate-pulse" />
                  Contact Information
                </h3>
                
                <StaggeredContainer 
                  variant="glowUp" 
                  staggerDelay={150}
                  className="space-y-6"
                >
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="group flex items-start p-6 bg-gray-800/20 rounded-2xl border border-gray-700/20 hover:border-gray-600/40 transition-all duration-500 hover:transform hover:scale-[1.02] relative overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                        style={{ 
                          background: `radial-gradient(circle at 20% 50%, ${info.color}60, transparent 70%)`
                        }}
                      ></div>
                      
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mr-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <info.icon 
                          className="w-7 h-7 transition-colors duration-300" 
                          style={{ color: info.color }}
                        />
                      </div>
                      
                      <div className="flex-1 relative z-10">
                        <div className="text-gray-400 text-sm font-medium mb-1">{info.label}</div>
                        <div className="text-white font-semibold text-lg group-hover:text-[#DAFF01] transition-colors duration-300 mb-1">
                          {info.value}
                        </div>
                        <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                          {info.description}
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"
                           style={{ backgroundColor: info.color }}></div>
                    </a>
                  ))}
                </StaggeredContainer>

                {/* Enhanced Quick Actions */}
                <div className="mt-8 pt-8 border-t border-gray-700/30">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Zap className="w-4 h-4 text-[#DAFF01] mr-2 animate-pulse" />
                    Quick Connect
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://wa.me/971501359046"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-green-600/20 border border-green-600/40 text-green-400 rounded-xl hover:bg-green-600/30 hover:scale-105 transition-all duration-300 group"
                    >
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      WhatsApp
                    </a>
                    <a
                      href="mailto:mrperfect6ft@gmail.com"
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-[#DAFF01]/20 border border-[#DAFF01]/40 text-[#DAFF01] rounded-xl hover:bg-[#DAFF01]/30 hover:scale-105 transition-all duration-300 group"
                    >
                      <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Enhanced Contact Form */}
          <AnimatedElement variant="slideLeft" duration={800} delay={400}>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-[#DAFF01] to-cyan-500 animate-gradient-x"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Send className="w-6 h-6 text-[#DAFF01] mr-3 animate-pulse" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <StaggeredContainer 
                  variant="slideUp" 
                  staggerDelay={100}
                  className="space-y-6"
                >
                  {inputFields.map((field, index) => (
                    <div key={field.name} className="relative">
                      <label 
                        htmlFor={field.name} 
                        className="block text-gray-300 font-medium mb-2 flex items-center"
                      >
                        <field.icon className="w-4 h-4 mr-2 text-[#DAFF01]" />
                        {field.label}
                        {field.required && <span className="text-red-400 ml-1">*</span>}
                      </label>
                      
                      <div className="relative">
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            required={field.required}
                            rows={field.rows}
                            className={`w-full px-4 py-4 bg-gray-900/50 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 resize-none ${
                              focusedField === field.name 
                                ? 'border-[#DAFF01] shadow-lg shadow-[#DAFF01]/20 bg-gray-900/70' 
                                : 'border-gray-600/50 hover:border-gray-500/70'
                            }`}
                            placeholder={field.placeholder}
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            required={field.required}
                            className={`w-full px-4 py-4 bg-gray-900/50 border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 ${
                              focusedField === field.name 
                                ? 'border-[#DAFF01] shadow-lg shadow-[#DAFF01]/20 bg-gray-900/70' 
                                : 'border-gray-600/50 hover:border-gray-500/70'
                            }`}
                            placeholder={field.placeholder}
                          />
                        )}
                        
                        {/* Focus indicator */}
                        {focusedField === field.name && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#DAFF01] rounded-full animate-ping"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </StaggeredContainer>

                {/* Enhanced Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-4 font-bold text-lg rounded-xl transition-all duration-300 relative overflow-hidden ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-[#DAFF01] text-black hover:bg-[#DAFF01]/90 hover:scale-105 hover:shadow-xl hover:shadow-[#DAFF01]/30'
                    }`}
                  >
                    {/* Button content based on state */}
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2 animate-bounce" />
                        Message Sent Successfully!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <AlertCircle className="w-5 h-5 mr-2 animate-pulse" />
                        Failed to Send - Try Again
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                    
                    {/* Button glow effect */}
                    {!isSubmitting && submitStatus !== 'success' && submitStatus !== 'error' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                    )}
                  </button>
                </div>
              </form>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-[#DAFF01] rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000 opacity-40"></div>
            </div>
          </AnimatedElement>
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
        
        @keyframes gradient-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float-message {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px) rotate(-3deg);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-20px) rotate(8deg);
            opacity: 0.5;
          }
        }
        
        @keyframes paper-plane {
          0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(300px, -300px) scale(0.3) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes grid-move {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(20px) translateY(10px);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-flow {
          animation: gradient-flow 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float-message {
          animation: float-message var(--duration, 8s) ease-in-out infinite;
        }
        
        .animate-paper-plane {
          animation: paper-plane 3s ease-out forwards;
        }
        
        .animate-grid-move {
          animation: grid-move 20s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(218, 255, 1, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(218, 255, 1, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default EnhancedContact;