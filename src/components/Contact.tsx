import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Linkedin,
  Github,
  User,
  MessageSquare,
  FileText
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS (you'll need to set up your service ID, template ID, and user ID)
      await emailjs.send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'your_user_id' // Replace with your EmailJS user ID
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "krishsharma1037@gmail.com",
      link: "mailto:krishsharma1037@gmail.com",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9214589991",
      link: "tel:+919214589991",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jaipur, Rajasthan, India",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-cyan-500/5"></div>
      
      {/* Floating Elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm actively looking for opportunities and would love to hear from you. 
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm a passionate developer looking for exciting opportunities to contribute to innovative projects. 
                Whether you have a project in mind, want to collaborate, or just want to say hi, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-gray-300">
                I'm actively seeking full-time positions, internships, and freelance opportunities. 
                Open to remote work and relocation.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 20px 40px rgba(0,212,255,0.1)" }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute left-3 top-3 text-gray-400">
                  <User size={20} />
                </div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute left-3 top-3 text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </motion.div>

              {/* Subject Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute left-3 top-3 text-gray-400">
                  <FileText size={20} />
                </div>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute left-3 top-3 text-gray-400">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Your message..."
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600'
                } text-white`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-400">Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;