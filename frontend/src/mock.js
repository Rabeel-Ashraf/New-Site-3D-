// Mock Data for Rabeel Ashraf Portfolio
// This file contains all mock data used in the frontend-only implementation
// Will be replaced with real backend data during integration

export const mockProjects = [
  {
    id: 1,
    title: "FinGenie",
    subtitle: "AI Financial Research Tool",
    description: "Revolutionary AI-powered financial analysis platform that processes market data in real-time and provides intelligent investment insights using advanced machine learning algorithms.",
    features: [
      "Real-time Market Analysis",
      "AI-Powered Predictions", 
      "Risk Assessment",
      "Portfolio Optimization",
      "Automated Trading Signals",
      "Sentiment Analysis",
      "Custom Alerts",
      "Multi-Asset Support"
    ],
    tech: ["Python", "TensorFlow", "React", "FastAPI", "MongoDB", "Redis", "WebSocket", "Chart.js"],
    status: "Live",
    githubUrl: "https://github.com/Rabeel-Ashraf/FinGenie",
    liveUrl: "https://fingenie.demo.com",
    imageUrl: "/images/fingenie-preview.jpg"
  },
  {
    id: 2,
    title: "Wallet Fusion",
    subtitle: "PKR Wallet System (Mobile-first)",
    description: "Next-generation mobile wallet application for Pakistani Rupee with seamless UX, advanced security features, and blockchain integration for secure transactions.",
    features: [
      "Instant Transfers",
      "Biometric Security",
      "QR Payments", 
      "Bill Management",
      "Multi-Bank Integration",
      "Blockchain Security",
      "Offline Transactions",
      "Merchant Dashboard"
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "Blockchain", "AWS", "Redis", "Push Notifications"],
    status: "Coming Soon",
    githubUrl: "https://github.com/Rabeel-Ashraf/WalletFusion",
    liveUrl: "#",
    imageUrl: "/images/wallet-fusion-preview.jpg"
  },
  {
    id: 3,
    title: "OrionixLabs.com",
    subtitle: "AI SaaS Automation Tools",
    description: "Comprehensive suite of AI-powered automation tools designed to streamline business processes, enhance productivity, and provide intelligent solutions for modern enterprises.",
    features: [
      "Process Automation",
      "AI Workflows",
      "Analytics Dashboard", 
      "API Integration",
      "Custom AI Models",
      "Team Collaboration",
      "Real-time Monitoring",
      "Enterprise Security"
    ],
    tech: ["Next.js", "OpenAI", "Supabase", "Tailwind", "Vercel", "Prisma", "TypeScript"],
    status: "In Development",
    githubUrl: "https://github.com/Rabeel-Ashraf/OrionixLabs",
    liveUrl: "https://orionixlabs.com",
    imageUrl: "/images/orionixlabs-preview.jpg"
  },
  {
    id: 4,
    title: "Rabeel.world",
    subtitle: "3D AI Portfolio Site",
    description: "This very portfolio website featuring cutting-edge 3D animations, AI interactions, thunder effects, and immersive user experience built with modern web technologies.",
    features: [
      "3D Animations",
      "AI Chatbot",
      "Thunder Effects", 
      "Responsive Design",
      "WebGL Graphics",
      "Smooth Transitions",
      "Interactive Elements",
      "Performance Optimized"
    ],
    tech: ["React", "Three.js", "Framer Motion", "WebGL", "GSAP", "Tailwind", "Vite"],
    status: "Live",
    githubUrl: "https://github.com/Rabeel-Ashraf/Rabeel.world.portfolio",
    liveUrl: "https://rabeel.world",
    imageUrl: "/images/portfolio-preview.jpg"
  }
];

export const mockSkills = {
  "AI & Machine Learning": [
    "LangChain", "OpenAI GPT", "Gemini", "Hugging Face", 
    "TensorFlow", "PyTorch", "Scikit-learn", "NLTK"
  ],
  "Frontend Development": [
    "React", "Next.js", "Tailwind CSS", "Three.js", 
    "GSAP", "Framer Motion", "TypeScript", "Vite"
  ],
  "Backend & APIs": [
    "Python", "Node.js", "Express", "FastAPI", 
    "REST APIs", "GraphQL", "WebSocket", "Prisma"
  ],
  "Cloud & DevOps": [
    "Supabase", "Railway", "Netlify", "Docker", 
    "GitHub Actions", "AWS", "Vercel", "Redis"
  ],
  "Automation Tools": [
    "Make.com", "n8n", "Zapier", "Python Scripts", 
    "Selenium", "API Integration", "Cron Jobs", "Webhooks"
  ],
  "3D & Design": [
    "Blender", "Three.js", "WebGL", "Canvas API", 
    "UI/UX Design", "Figma", "Adobe Creative Suite", "Spline"
  ]
};

export const mockStats = {
  projectsCompleted: 50,
  yearsExperience: 3,
  happyClients: 25,
  technologiesUsed: 30
};

export const mockTestimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    position: "CEO, TechVentures Dubai",
    content: "Rabeel's AI solutions transformed our business operations. His expertise in automation and machine learning is exceptional.",
    rating: 5,
    avatar: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Product Manager, FinTech Solutions",
    content: "Working with Rabeel was a game-changer. His 3D web development skills and AI integration capabilities are truly impressive.",
    rating: 5,
    avatar: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Dr. Hassan Ahmed",
    position: "Research Director, AI Institute",
    content: "Rabeel combines technical excellence with creative vision. His portfolio showcases the future of web development.",
    rating: 5,
    avatar: "/images/testimonial-3.jpg"
  }
];

export const mockContactMessages = [
  // This will store form submissions temporarily
  // Will be replaced with Supabase database storage
];

// Mock API responses
export const mockApiResponses = {
  contactForm: {
    success: {
      message: "Thank you for your message! I'll get back to you within 24 hours.",
      status: "success"
    },
    error: {
      message: "Sorry, there was an error sending your message. Please try again.",
      status: "error"
    }
  },
  
  projectDetails: {
    // Detailed project information for modals
    fetchSuccess: true,
    loadTime: 1000 // ms
  }
};

// Export all mock data as default
export default {
  projects: mockProjects,
  skills: mockSkills,
  stats: mockStats,
  testimonials: mockTestimonials,
  contactMessages: mockContactMessages,
  apiResponses: mockApiResponses
};