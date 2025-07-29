import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import EnhancedHero from './components/EnhancedHero';
import EnhancedAbout from './components/EnhancedAbout';
import Skills from './components/Skills';
import EnhancedProjects from './components/EnhancedProjects';
import EnhancedContact from './components/EnhancedContact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Performance optimization - preload critical resources
  useEffect(() => {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = "https://github.com/Rabeel-Ashraf/Rabeel.world.portfolio/blob/main/public/rabeel.jpg?raw=true";
    
    // Add performance observer for Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }, []);

  return (
    <div className="App">
      <Helmet>
        {/* Additional meta tags for enhanced SEO */}
        <html lang="en" />
        <meta name="application-name" content="Rabeel Ashraf Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rabeel Ashraf" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Performance hints */}
        <link rel="preload" href="https://github.com/Rabeel-Ashraf/Rabeel.world.portfolio/blob/main/public/rabeel.jpg?raw=true" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Font loading optimization */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" 
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        
        {/* JSON-LD for better search results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            "name": "Rabeel Ashraf Portfolio",
            "author": {
              "@type": "Person",
              "name": "Rabeel Ashraf",
              "jobTitle": "AI Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "OrionixLabs"
              }
            },
            "url": "https://rabeel.world",
            "description": "Professional portfolio showcasing AI engineering projects and futuristic web development work",
            "inLanguage": "en-US",
            "dateModified": new Date().toISOString(),
            "publisher": {
              "@type": "Organization",
              "name": "OrionixLabs",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rabeel.world/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
      
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <Header />
          <main role="main">
            <EnhancedHero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;