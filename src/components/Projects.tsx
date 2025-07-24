import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Star, X } from 'lucide-react';
import hotelImg from '../pic/Screenshot 2025-05-09 134529.png';
import pgFinderImg from '../pic/Screenshot 2025-07-22 120037.png';
import civicConnectImg from '../pic/Screenshot 2025-07-12 135906.png';
import multiServiceImg from '../pic/Screenshot 2025-07-22 115906.png';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: 1,
    title: "Hotel Management & Booking System",
    description: "A comprehensive hotel booking system where customers can access hotel lists, features, and make reservations. Built with full-stack architecture including user authentication, payment integration, and real-time availability.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API", "Next.js"],
    image: hotelImg,
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/hotel-booking-systems-",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 2,
    title: "PG Finder Platform",
    description: "A platform connecting students and working professionals with paying guest accommodations. Features include advanced search filters, virtual tours, verified listings, and secure booking system.",
    technologies: ["JavaScript", "HTML","CSS", "MYSQL", "Google Maps API"],
    image: pgFinderImg,
    category: "frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/PG-_FINDER",
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
    githubUrl: "https://github.com/krish1037/Sex-health-advisor-",
    featured: true,
    status: "completed",
    year: "2025"
  },
  {
    id: 5,
    title: "Civic Connect",
    description: "A citizen engagement platform connecting local communities with government services. Features include issue reporting, service requests, community forums, and real-time updates on civic matters.",
    technologies: ["React", "Node.js", "MongoDB", "Gemini API", "Google Maps API"],
    image: civicConnectImg,
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/Civic-Connect",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 6,
    title: "Payment Gateway Integration",
    description: "A secure and robust payment gateway solution built with Node.js and Express. Features include seamless payment processing, database integration for transaction records, and Razorpay API for real-time payments. Designed for e-commerce and SaaS platforms requiring reliable online transactions.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Razorpay API", "REST API"],
    image: "https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "backend",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/Payment-Gateway_By-Krish",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: 7,
    title: "Multiple Service Platform ",
    description: "A Python-based automation suite offering multiple services: email, SMS, phone call, LinkedIn post, X (Twitter) message, WhatsApp message, and more. Designed for seamless communication and outreach automation.",
    purpose: "Automate and unify communication tasks across multiple platforms.",
    problemSolved: "Reduces manual effort in sending messages and posts across various channels, saving time and ensuring consistency.",
    useCase: "Businesses or individuals needing to send bulk or scheduled messages, posts, or notifications across different services from a single interface.",
    workflow: "User selects a service (Email, SMS, LinkedIn, etc.) -> Enters the recipient(s) and message content -> Configures scheduling options -> The platform uses the appropriate API to dispatch the message -> The status is logged and displayed to the user.",
    technologies: ["Python", "Twilio API", "Selenium", "LinkedIn API", "WhatsApp Web", "SMTP", "LangChain"],
    image: multiServiceImg,
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/Service-base-Menu-Platform-",
    featured: true,
    status: "Completed",
    year: "2025"
  },
];

export const agenticTools = [
  {
    id: 8,
    title: "Agentic AI: LinkedIn Post Automation",
    description: "An AI-powered tool that automates the creation and posting of LinkedIn content based on user prompts, leveraging LLMs for content generation.",
    purpose: "Save time and boost engagement by automating professional social media presence.",
    problemSolved: "Manual content creation and posting on LinkedIn is time-consuming and inconsistent.",
    useCase: "Professionals and businesses wanting to maintain an active LinkedIn profile with minimal effort.",
    workflow: "User provides a topic or a prompt -> The LangChain agent uses an LLM (OpenAI GPT) to generate a professional LinkedIn post -> The user reviews and approves the content -> The tool uses the LinkedIn API to post to the user's profile.",
    technologies: ["Python", "GoogleGemini", "Selenium", "LangChain"],
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/Automation-tool-for-LinkedIn-",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 9,
    title: "Agentic AI: Document/PDF Summarizer",
    description: "A tool that summarizes documents and PDFs using advanced AI models, providing concise and accurate overviews for quick understanding.",
    purpose: "Enable users to quickly grasp the essence of lengthy documents or research papers.",
    problemSolved: "Reading and understanding long documents is time-consuming and inefficient.",
    useCase: "Students, researchers, and professionals needing quick summaries of large documents.",
    workflow: "User uploads a PDF/document -> The backend extracts text -> The text is chunked and processed by a LangChain summarization chain using an LLM -> The final, coherent summary is presented to the user.",
    technologies: ["Python", "GoogleGemini", "PyPDF2", "LangChain"],
    image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/Automation-tools",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 10,
    title: "Agentic AI: Tool Chain Automation",
    description: "A chain-of-tools framework that executes a sequence of automation tasks based on a single prompt, orchestrating multiple AI and automation tools for complex workflows.",
    purpose: "Automate multi-step tasks and workflows using AI-driven tool chaining.",
    problemSolved: "Manual execution of chained tasks is error-prone and inefficient.",
    useCase: "Anyone needing to automate a series of tasks (e.g., 'Summarize this document, then post the summary to LinkedIn').",
    workflow: "User provides a high-level prompt -> An orchestrator agent breaks the prompt into tasks -> It invokes the 'Summarizer' tool -> The output is passed to the 'LinkedIn Post' tool -> The agent executes the chain and provides a final report.",
    technologies: ["Python", "LangChain", "GoogleGemini", "Gen-AI"],
    image: "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    liveUrl: "#",
    githubUrl: "https://github.com/krish1037/Automation-tools",
    featured: true,
    status: "Completed",
    year: "2025"
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'agentic', label: 'Agentic AI' },
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

        {/* Agentic AI Tools Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Agentic AI Tools for Automation
          </h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {agenticTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
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
                        src={tool.image}
                        alt={tool.title}
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
                          onClick={() => setSelectedProject(tool)}
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye size={20} />
                        </motion.button>
                        <motion.a
                          href={tool.liveUrl}
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={tool.githubUrl}
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
                          tool.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {tool.status}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {tool.featured && (
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
                          {tool.title}
                        </h3>
                        <span className="text-sm text-gray-400">{tool.year}</span>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {tool.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.technologies.slice(0, 3).map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,212,255,0.2)" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {tool.technologies.length > 3 && (
                          <span className="text-gray-400 text-xs px-3 py-1">
                            +{tool.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Full-Screen Overlay on Click */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Left Column: Image and Links */}
              <div className="relative h-full flex flex-col">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none"
                />
                <div className="p-6 flex-grow flex flex-col justify-end">
                  <div className="flex flex-col gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="p-8 relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6">{selectedProject.year} • {selectedProject.status}</p>

                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">Description</h4>
                    <p>{selectedProject.description}</p>
                  </div>
                  {selectedProject.purpose && (
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">Purpose</h4>
                      <p>{selectedProject.purpose}</p>
                    </div>
                  )}
                  {selectedProject.problemSolved && (
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">Problem Solved</h4>
                      <p>{selectedProject.problemSolved}</p>
                    </div>
                  )}
                  {selectedProject.useCase && (
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">Use Case</h4>
                      <p>{selectedProject.useCase}</p>
                    </div>
                  )}
                   {selectedProject.workflow && (
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">Workflow</h4>
                      <p>{selectedProject.workflow}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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