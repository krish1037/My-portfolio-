import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, ExternalLink, Brain, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Cynbit Technologies",
      location: "Remote",
      duration: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: "Worked on full-stack web applications using modern technologies. Gained hands-on experience in React, Node.js, and database management. Collaborated with senior developers on client projects and delivered scalable solutions.",
      achievements: [
        "Developed 3 client-facing web applications",
        "Improved application performance by 40%",
        "Implemented responsive design principles",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Git"],
      color: "from-cyan-500 to-blue-500",
      icon: Code
    },
    {
      id: 2,
      title: "AI & ML Intern",
      company: "Linux World Informatics",
      location: "Jaipur, Rajasthan",
      duration: "Jan 2024 - Mar 2024",
      type: "Internship",
      description: "Focused on artificial intelligence and machine learning projects. Worked with data preprocessing, model training, and deployment. Gained experience in Python, TensorFlow, and various ML algorithms for real-world applications.",
      achievements: [
        "Built and deployed 2 ML models",
        "Improved model accuracy by 30%",
        "Implemented data preprocessing pipelines",
        "Created AI-powered automation solutions"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      color: "from-purple-500 to-pink-500",
      icon: Brain
    }
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/5 to-blue-500/5"></div>
      
      <motion.div
        ref={ref}
        className="container mx-auto max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            As a fresher looking for exciting opportunities, I have gained valuable experience through internships and am actively seeking full-time positions to grow my career
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 mb-12 text-center"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Currently Available</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Looking for Opportunities</h3>
          <p className="text-gray-300">
            Fresh graduate seeking full-time positions in Full Stack Development, AI/ML, or related fields. 
            Open to internships and entry-level positions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-teal-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex items-start gap-8 mb-12"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Timeline Node */}
              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <exp.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0,212,255,0.2)",
                  borderColor: "rgba(0,212,255,0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
                      <span>{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-2 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + achIndex * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,212,255,0.2)" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking opportunities to contribute to innovative projects and grow my skills 
              in a collaborative environment. Let's connect and explore how I can add value to your team.
            </p>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 flex items-center gap-2 mx-auto w-fit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,212,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;