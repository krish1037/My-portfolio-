import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Users, Code } from 'lucide-react';
import aboutImg from '../pic/about me  .jpg';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const achievements = [
    { icon: Code, number: "10+", label: "Projects Completed" },
    { icon: Award, number: "5+", label: "Certificate" },
    { icon: Users, number: "2", label: "Internships" },
    { icon: Target, number: "100%", label: "Dedication" },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-teal-500/5"></div>
      
      <motion.div
        ref={ref}
        className="container mx-auto max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <img
                src={aboutImg}
                alt="About Krish"
                className="relative w-full h-[22rem] max-h-[24rem] object-cover rounded-2xl shadow-2xl border-4 border-cyan-500/20 bg-black"
                style={{ background: '#222' }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Full Stack Developer & AI/ML Engineer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a passionate and enthusiastic technology professional with a strong foundation in full-stack development 
                and artificial intelligence. My journey in tech has been driven by curiosity and the desire to create 
                innovative solutions that make a real impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With hands-on experience in modern web technologies and AI/ML frameworks, I bring a unique perspective 
                to every project. I'm currently seeking opportunities to work with forward-thinking teams where I can 
                contribute my skills while continuing to grow as a developer.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Key Strengths</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Full Stack Development",
                  "AI/ML Implementation",
                  "Problem Solving",
                  "Team Collaboration",
                  "Quick Learning",
                  "Project Leadership"
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    className="flex items-center gap-2 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                {achievement.number}
              </motion.div>
              <div className="text-gray-400 text-sm">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;