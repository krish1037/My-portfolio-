import React from 'react';
import CustomCursor from './components/CustomCursor';
import BackgroundAnimation from './components/BackgroundAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Custom cursor with cosmic effects */}
      <style>{`
        * {
          cursor: none !important;
        }
        
        a, button, input, textarea, select {
          cursor: none !important;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Cosmic Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00d4ff, #9d4edd);
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(0,212,255,0.5);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #00b8e6, #8b5cf6);
          box-shadow: 0 0 15px rgba(0,212,255,0.8);
        }

        /* Cosmic Glow Effects */
        .cosmic-glow {
          text-shadow: 0 0 10px currentColor;
        }

        /* Matrix Text Effect */
        .matrix-text {
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 5px currentColor;
        }

        /* Holographic Effect */
        .holographic {
          background: linear-gradient(45deg, transparent 30%, rgba(0,212,255,0.1) 50%, transparent 70%);
          background-size: 200% 200%;
          animation: holographic-scan 3s linear infinite;
        }

        @keyframes holographic-scan {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }

        /* Glitch Effect */
        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          animation: glitch-1 0.5s infinite;
          color: #ff0000;
          z-index: -1;
        }

        .glitch::after {
          animation: glitch-2 0.5s infinite;
          color: #00ff00;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% {
            transform: translate(0);
          }
          15%, 49% {
            transform: translate(-2px, 2px);
          }
        }

        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% {
            transform: translate(0);
          }
          21%, 62% {
            transform: translate(2px, -2px);
          }
        }
      `}</style>
      
      {/* Cosmic Background Effects */}
      <BackgroundAnimation />
      
      {/* Custom Cosmic Cursor */}
      <CustomCursor />
      
      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;