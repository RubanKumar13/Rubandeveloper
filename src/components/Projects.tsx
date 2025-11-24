import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and real-time order tracking.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Spring Boot', 'React', 'MySQL', 'Stripe', 'AWS'],
      github: '#',
      live: '#',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and Kanban boards.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'WebSocket', 'Docker'],
      github: '#',
      live: '#',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Banking Application',
      description: 'Secure banking system with account management, transaction history, fund transfers, and JWT authentication.',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'Spring Security', 'React', 'MySQL', 'JWT'],
      github: '#',
      live: '#',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization, user insights, and reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Spring Boot', 'React', 'MongoDB', 'Chart.js', 'Redis'],
      github: '#',
      live: '#',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Inventory Management System',
      description: 'Enterprise inventory solution with stock tracking, supplier management, automated reordering, and reporting.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'JasperReports', 'AWS'],
      github: '#',
      live: '#',
      gradient: 'from-cyan-500 to-purple-600',
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling, medical records, prescription management, and telemedicine.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'WebRTC'],
      github: '#',
      live: '#',
      gradient: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-300"
                        >
                          <Github size={18} className="text-cyan-400" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-300"
                        >
                          <ExternalLink size={18} className="text-cyan-400" />
                        </motion.a>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 size={20} className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text`} />
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
