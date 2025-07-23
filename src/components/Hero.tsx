import React, { useEffect, useState } from 'react';
import profileImg from '../pic/WhatsApp Image 2024-10-13 at 11.52.33_b21d52bb - Copy.jpg';
import { motion, useAnimation } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'KRISH SHARMA';
  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [currentIndex, fullText]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 }
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Make the right column static (no slide-in animation)
  const rightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  // Add this function inside the Hero component
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = profileImg;
    link.download = 'Resume-Krish-Sharma.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Cosmic Code Matrix Effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg font-mono text-cyan-400 opacity-20 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontFamily: "'Courier New', monospace"
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, -25, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {['<', '>', '{', '}', '[', ']', '(', ')', ';', ':', '='][Math.floor(Math.random() * 11)]}
        </motion.div>
      ))}

      {/* Holographic Grid Lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`grid-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          style={{
            top: `${(i + 1) * 8.33}%`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            variants={leftVariants}
          >
            {/* Terminal-Style Header */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 font-mono text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={16} className="text-cyan-400" />
                <span className="text-cyan-400">cosmic_terminal.exe</span>
                <div className="flex gap-1 ml-auto">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-green-400">
                <span className="text-cyan-400">$</span> initialize_developer.sh
              </div>
              <div className="text-gray-300">Loading developer profile...</div>
              <div className="text-green-400">✓ Profile loaded successfully</div>
            </motion.div>

            {/* Holographic Name with Sci-Fi Effects */}
            <div className="relative">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 relative"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  background: 'linear-gradient(45deg,rgb(175, 238, 250),rgb(202, 202, 202),rgb(202, 236, 233), #00d4ff)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(0,212,255,0.5)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {displayText}
                <motion.span
                  className="text-cyan-400"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.h1>

              {/* Holographic Scan Lines */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-2"
                animate={{
                  y: [0, 200, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Role with Matrix-Style Typography */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight font-mono">
                  <span className="block text-green-400">&gt; Full Stack Developer</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    &gt; AI/ML Engineer
                  </span>
                </h2>
                
                {/* Glitch Effect */}
                <motion.div
                  className="absolute inset-0 text-2xl md:text-4xl font-semibold font-mono text-red-400 opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                    x: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <span className="block">&gt; Full Stack Developer</span>
                  <span>&gt; AI/ML Engineer</span>
                </motion.div>
              </div>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                  boxShadow: '0 0 10px rgba(0,212,255,0.5)'
                }}
              />
            </motion.div>

            {/* Enhanced Description with Code Styling */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
                <span className="text-cyan-400">const</span> <span className="text-purple-400">developer</span> = {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-green-400">passion</span>: <span className="text-yellow-400">"enthusiastic tech learner"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">seeking</span>: <span className="text-yellow-400">"wonderful opportunities"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">goal</span>: <span className="text-yellow-400">"work with amazing people"</span>
                <br />
                {'}'};
              </p>
            </motion.div>

            {/* Cosmic Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative flex items-center gap-3 justify-center">
                  <ExternalLink size={20} />
                  <span>Explore Projects</span>
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </motion.a>
              
              <motion.button
                className="group relative border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0,212,255,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="relative flex items-center gap-3 justify-center">
                  <Download size={20} />
                  <span>Download Resume</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Cosmic Social Links */}
            <motion.div
              className="flex gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/krish1037", color: "from-gray-600 to-gray-800" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/krish-sharma-1ba645301/", color: "from-blue-600 to-blue-800" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`group relative w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white overflow-hidden`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <social.icon size={20} className="relative z-10" />
                  
                  {/* Orbital Ring */}
                  <motion.div
                    className="absolute inset-0 border border-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile & Contact Info */}
          <motion.div
            className="flex flex-col items-center space-y-8 mt-16 lg:mt-0"
            variants={rightVariants}
          >
            {/* Cosmic Profile Image */}
            <motion.div
              className="relative"
              // Removed initial/animate for static layout
            >
              <motion.div
                className="relative w-80 h-80 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {/* Cosmic Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 p-2">
                  <motion.div 
                    className="w-full h-full rounded-full bg-black p-2 relative overflow-hidden"
                    animate={{
                      boxShadow: [
                        "0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(157,78,221,0.3)",
                        "0 0 50px rgba(237, 35, 153, 0.6), 0 0 80px rgba(0,212,255,0.4)",
                        "0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(157,78,221,0.3)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    <img
                      src={profileImg}
                      alt="Krish Profile"
                      className="w-full h-full object-cover rounded-full relative z-10"
                    />
                    
                    {/* Holographic Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent rounded-full"
                      animate={{
                        y: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Orbiting Code Symbols */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-400 font-mono text-sm border border-cyan-400/50"
                    style={{
                      left: `${50 + 50 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      top: `${50 + 50 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }
                    }}
                  >
                    {['<', '>', '{', '}', '[', ']', '(', ')'][i]}
                  </motion.div>
                ))}

                {/* Constellation Lines */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={`constellation-${i}`}
                    className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                    style={{
                      left: '50%',
                      top: '10%',
                      height: '80%',
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'center',
                    }}
                    animate={{
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Cosmic Contact Information Cards */}
            <motion.div
              className="space-y-4 w-full max-w-md"
              // Removed initial/animate for static layout
            >
              {[
                { icon: Mail, text: "krishsharma1037@gmail.com", href: "#contact", color: "from-red-500 to-pink-500" },
                { icon: Phone, text: "+91 9214589991", href: "tel:+919214589991", color: "from-green-500 to-teal-500" },
                { icon: MapPin, text: "Jaipur, Rajasthan, India", href: "https://www.google.co.in/maps/place/124%2F349,+Sector+12,+Mansarovar,+Jaipur,+Rajasthan+302020/@26.8427489,75.7664836,17z/data=!3m1!4b1!4m6!3m5!1s0x396db5990a8b6451:0x4d76115ff28c5b7d!8m2!3d26.8427489!4d75.7690585!16s%2Fg%2F11c267nxrr?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D", color: "from-blue-500 to-purple-500" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="group relative flex items-center gap-4 p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 + index * 0.2 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <motion.div
                    className={`relative w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                    style={{
                      boxShadow: '0 0 20px rgba(0,212,255,0.3)'
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="relative text-gray-300 group-hover:text-cyan-400 transition-colors font-medium font-mono">
                    {item.text}
                  </span>
                  
                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Cosmic Availability Status */}
            <motion.div
              className="relative bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 text-center max-w-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Matrix Rain Effect */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ['0% 0%', '0% 100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,255,0,0.1) 10px, rgba(0,255,0,0.1) 11px)',
                }}
              />
              
              <div className="relative flex items-center justify-center gap-3 mb-3">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1], 
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      '0 0 5px rgba(34,197,94,0.5)',
                      '0 0 15px rgba(34,197,94,0.8)',
                      '0 0 5px rgba(34,197,94,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 font-semibold font-mono">&gt; AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <p className="relative text-gray-300 text-sm font-mono">
                <span className="text-cyan-400">status:</span> <span className="text-green-400">"seeking_opportunities"</span><br />
                <span className="text-cyan-400">type:</span> <span className="text-yellow-400">["full-time", "internships", "projects"]</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Cosmic Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-400 text-sm font-mono">&gt; scroll_to_explore()</span>
          <motion.div
            className="relative w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center overflow-hidden"
            whileHover={{ scale: 1.1 }}
            style={{
              boxShadow: '0 0 15px rgba(0,212,255,0.3)'
            }}
          >
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0.3, 1],
                boxShadow: [
                  '0 0 5px rgba(0,212,255,0.5)',
                  '0 0 10px rgba(0,212,255,0.8)',
                  '0 0 5px rgba(0,212,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Holographic Scan Line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-1"
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;