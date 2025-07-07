import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars and cosmic particles
    const stars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      twinkle: number;
    }> = [];

    // Code symbols for meteor shower
    const codeSymbols = ['<', '>', '{', '}', '[', ']', '(', ')', ';', ':', '=', '+', '-', '*', '/', '&', '|', '!', '?'];
    const meteors: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      symbol: string;
      opacity: number;
      size: number;
      trail: Array<{x: number, y: number, opacity: number}>;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.7 ? '#00d4ff' : Math.random() > 0.5 ? '#4ecdc4' : '#9d4edd',
        twinkle: Math.random() * Math.PI * 2
      });
    }

    // Create meteors
    for (let i = 0; i < 8; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: -50,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 3 + 2,
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        opacity: Math.random() * 0.8 + 0.2,
        size: Math.random() * 20 + 15,
        trail: []
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling effect
      stars.forEach((star, index) => {
        star.x += star.vx;
        star.y += star.vy;
        star.twinkle += 0.02;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = twinkleOpacity;
        ctx.fill();

        // Add glow effect for larger stars
        if (star.size > 2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = twinkleOpacity * 0.2;
          ctx.fill();
        }
      });

      // Draw meteors with code symbols
      meteors.forEach((meteor, index) => {
        // Update trail
        meteor.trail.unshift({ x: meteor.x, y: meteor.y, opacity: meteor.opacity });
        if (meteor.trail.length > 10) {
          meteor.trail.pop();
        }

        meteor.x += meteor.vx;
        meteor.y += meteor.vy;

        // Reset meteor when it goes off screen
        if (meteor.y > canvas.height + 50 || meteor.x < -50 || meteor.x > canvas.width + 50) {
          meteor.x = Math.random() * canvas.width;
          meteor.y = -50;
          meteor.vx = (Math.random() - 0.5) * 2;
          meteor.vy = Math.random() * 3 + 2;
          meteor.symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
          meteor.trail = [];
        }

        // Draw trail
        meteor.trail.forEach((point, trailIndex) => {
          const trailOpacity = point.opacity * (1 - trailIndex / meteor.trail.length);
          ctx.font = `${meteor.size * (1 - trailIndex / meteor.trail.length)}px 'Courier New', monospace`;
          ctx.fillStyle = '#00d4ff';
          ctx.globalAlpha = trailOpacity * 0.3;
          ctx.fillText(meteor.symbol, point.x, point.y);
        });

        // Draw main meteor
        ctx.font = `${meteor.size}px 'Courier New', monospace`;
        ctx.fillStyle = '#00d4ff';
        ctx.globalAlpha = meteor.opacity;
        ctx.fillText(meteor.symbol, meteor.x, meteor.y);

        // Add glow
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 10;
        ctx.fillText(meteor.symbol, meteor.x, meteor.y);
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ 
          background: 'radial-gradient(ellipse at center, #1a0033 0%, #0a0a0a 70%, #000000 100%)'
        }}
      />
      
      {/* Floating Code Symbols */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed text-2xl font-mono text-cyan-400 pointer-events-none z-10 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontFamily: "'Courier New', monospace"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {['<', '>', '{', '}', '[', ']', '(', ')'][Math.floor(Math.random() * 8)]}
        </motion.div>
      ))}

      {/* Constellation Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="fixed w-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            height: `${Math.random() * 200 + 50}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Nebula Effects */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`nebula-${i}`}
          className="fixed rounded-full pointer-events-none z-5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            background: `radial-gradient(circle, ${
              Math.random() > 0.5 ? 'rgba(0,212,255,0.1)' : 'rgba(157,78,221,0.1)'
            } 0%, transparent 70%)`,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  );
};

export default BackgroundAnimation;