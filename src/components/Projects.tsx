import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Hotel Management & Booking System",
      description: "A comprehensive hotel booking system where customers can access hotel lists, features, and make reservations. Built with full-stack architecture including user authentication, payment integration, and real-time availability.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API", "Socket.io"],
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "PG Finder Platform",
      description: "A platform connecting students and working professionals with paying guest accommodations. Features include advanced search filters, virtual tours, verified listings, and secure booking system.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "Google Maps API", "Cloudinary"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Sexual Health Adviser (Gen AI)",
      description: "An AI-powered health advisory platform providing personalized sexual health guidance using generative AI. Features include confidential consultations, educational resources, and AI-driven recommendations.",
      technologies: ["Python", "OpenAI GPT", "React", "Flask", "TensorFlow", "Natural Language Processing"],
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "In Development",
      year: "2024"
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      description: "An interactive educational technology platform with course management, video streaming, assessments, and progress tracking. Includes features for both students and instructors.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Video.js", "Chart.js"],
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      id: 5,
      title: "Civic Connect",
      description: "A citizen engagement platform connecting local communities with government services. Features include issue reporting, service requests, community forums, and real-time updates on civic matters.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io", "Google Maps API"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      id: 6,
      title: "Payment Gateway Integration",
      description: "A secure and robust payment gateway solution built with Node.js and Express. Features include seamless payment processing, database integration for transaction records, and Razorpay API for real-time payments. Designed for e-commerce and SaaS platforms requiring reliable online transactions.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Razorpay API", "REST API"],
      image: "https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Completed",
      year: "2024"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5"></div>
      
      <motion.div
        ref={ref}
        className="container mx-auto max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications, AI/ML projects, and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 h-full relative"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,212,255,0.3)",
                    borderColor: "rgba(0,212,255,0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    {/* Action Buttons */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye size={20} />
                      </motion.button>
                      <motion.a
                        href={project.liveUrl}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </motion.div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-2 rounded-full">
                          <Star size={16} className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-400">{project.year}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,212,255,0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-gray-400 text-xs px-3 py-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-400">{selectedProject.year} • {selectedProject.status}</p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Responsive design for all devices</li>
                      <li>• Modern user interface</li>
                      <li>• Secure authentication system</li>
                      <li>• Real-time data updates</li>
                      <li>• Optimized performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;