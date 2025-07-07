import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CodeTrail {
  id: number;
  x: number;
  y: number;
  symbol: string;
  opacity: number;
  size: number;
}

const CustomCursor: React.FC = () => {
  const [codeTrails, setCodeTrails] = useState<CodeTrail[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 50 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 50 });

  const codeSymbols = ['<', '>', '{', '}', '[', ']', '(', ')', ';', ':', '=', '+', '-', '*', '/', '&', '|', '!', '?'];

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);

      // Create code trail on mouse move
      if (Math.random() > 0.7) {
        const newTrail: CodeTrail = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
          opacity: 0.8,
          size: Math.random() * 16 + 12
        };
        setCodeTrails(prev => [...prev, newTrail]);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Remove code trails after animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCodeTrails(prev => prev.filter(trail => Date.now() - trail.id < 2000));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          background: isHovering 
            ? 'radial-gradient(circle, #00d4ff 0%, #9d4edd 100%)'
            : 'radial-gradient(circle, #00d4ff 0%, #4ecdc4 100%)',
          boxShadow: isHovering 
            ? '0 0 20px #00d4ff, 0 0 40px #9d4edd'
            : '0 0 15px #00d4ff'
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Cursor Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-40 border border-cyan-400"
        style={{
          x: springX,
          y: springY,
          marginLeft: -6,
          marginTop: -6,
        }}
        animate={{
          scale: isHovering ? 3 : 1.5,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Code Trail */}
      {codeTrails.map((trail) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-40 font-mono font-bold"
          style={{
            left: trail.x - trail.size / 2,
            top: trail.y - trail.size / 2,
            fontSize: trail.size,
            color: '#00d4ff',
            textShadow: '0 0 10px #00d4ff',
            fontFamily: "'Courier New', monospace"
          }}
          initial={{ scale: 0, opacity: 0.8, rotate: 0 }}
          animate={{ 
            scale: [0, 1.2, 0],
            opacity: [0.8, 0.6, 0],
            y: [0, -30, -60],
            rotate: [0, Math.random() * 360],
            x: [0, (Math.random() - 0.5) * 40]
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {trail.symbol}
        </motion.div>
      ))}

      {/* Constellation Effect on Hover */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-35"
          style={{
            left: springX,
            top: springY,
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${30 * Math.cos((i * Math.PI * 2) / 6)}px`,
                top: `${30 * Math.sin((i * Math.PI * 2) / 6)}px`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
          
          {/* Connecting Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute w-px bg-cyan-400 origin-bottom"
              style={{
                left: '0px',
                top: '0px',
                height: '30px',
                transform: `rotate(${(i * 60)}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;