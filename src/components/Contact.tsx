import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rubanraav13@gmail.com',
      href: 'mailto:rubanraav13@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/RubanKumar13',
      href: 'https://github.com/RubanKumar13/',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rubankumar-5174ba216',
      href: 'https://www.linkedin.com/in/rubankumar-5174ba216/',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group relative block"
                    >
                      <div className="relative bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 bg-gradient-to-br ${link.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                            <link.icon size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{link.label}</p>
                            <p className="text-white font-medium">{link.value}</p>
                          </div>
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="relative bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>
                <div className="relative">
                  <h4 className="text-xl font-bold text-white mb-4">Location & Availability</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300">Remote / Open to Relocation</p>
                        <p className="text-gray-500 text-sm">Available for full-time opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300">+91 6382691959</p>
                        <p className="text-gray-500 text-sm">Mon-Fri, 9AM-6PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>

                  <div className="relative space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <Send size={20} />
                      Send Message
                    </motion.button>
                  </div>

                  <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                </div>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500">
              © 2025 Portfolio. Designed By RubanKumar &hearts;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
