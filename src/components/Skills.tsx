import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Server, 
  Palette, 
  Brain, 
  Users, 
  Zap, 
  Heart 
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 95, color: "#E34F26" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-teal-400 to-green-500",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Python", level: 80, color: "#3776AB" },
        { name: "PHP", level: 75, color: "#777BB4" },
        { name: "Express.js", level: 80, color: "#000000" },
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "MongoDB", level: 85, color: "#47A248" },
        { name: "MySQL", level: 80, color: "#4479A1" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "Redis", level: 70, color: "#DC382D" },
      ]
    },
    {
      title: "AI/ML",
      icon: Brain,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "TensorFlow", level: 75, color: "#FF6F00" },
        { name: "PyTorch", level: 70, color: "#EE4C2C" },
        { name: "Scikit-learn", level: 80, color: "#F7931E" },
        { name: "OpenAI API", level: 85, color: "#412991" },
      ]
    },
    {
      title: "Tools",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: "Docker", level: 75, color: "#2496ED" },
        { name: "AWS", level: 70, color: "#232F3E" },
        { name: "Figma", level: 80, color: "#F24E1E" },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-pink-400 to-rose-500",
      skills: [
        { name: "Leadership", level: 85, color: "#8B5CF6" },
        { name: "Problem Solving", level: 90, color: "#06B6D4" },
        { name: "Communication", level: 85, color: "#10B981" },
        { name: "Teamwork", level: 90, color: "#F59E0B" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/5"></div>
      
      {/* Floating Elements */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 h-full relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(0,212,255,0.3)",
                  borderColor: "rgba(0,212,255,0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          {/* Animated Glow */}
                          {hoveredSkill === `${category.title}-${skill.name}` && (
                            <motion.div
                              className="absolute inset-0 rounded-full opacity-70"
                              style={{ 
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}40)`,
                                filter: "blur(4px)"
                              }}
                              animate={{
                                opacity: [0.3, 0.8, 0.3],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Hover Effect Particles */}
                      {hoveredSkill === `${category.title}-${skill.name}` && (
                        <div className="absolute inset-0 pointer-events-none">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full"
                              style={{
                                backgroundColor: skill.color,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                y: [0, -10, -20],
                              }}
                              transition={{
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;