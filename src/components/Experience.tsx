import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code, Database, Wrench, Rocket } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: '2023 - Present',
      role: 'Java Full Stack Developer',
      company: 'Izeon Innovative Pvt Ltd.',
      type: 'Full Time',
      responsibilities: [
        {
          icon: Code,
          text: 'Developed RESTful APIs using Spring Boot, improving application performance by 40%',
          color: 'from-cyan-500 to-blue-500',
        },
        {
          icon: Code,
          text: 'Built responsive React applications with Redux for state management',
          color: 'from-purple-500 to-pink-500',
        },
        {
          icon: Database,
          text: 'Designed and optimized MySQL database schemas, reducing query time by 35%',
          color: 'from-green-500 to-emerald-500',
        },
        {
          icon: Wrench,
          text: 'Implemented comprehensive unit and integration tests using JUnit and Mockito',
          color: 'from-orange-500 to-red-500',
        },
        {
          icon: Rocket,
          text: 'Deployed applications to AWS using Docker containers and CI/CD pipelines',
          color: 'from-cyan-500 to-purple-500',
        },
      ],
    },
    {
      period:' March,2022 - June,2022',
      role: 'FrontEnd Developer',
      company: 'NetAxis It SOlution',
      type: 'Full Time',
      // responsibilities: [
      //   {
      //     icon: Code,
      //     text: 'Collaborated in agile teams to develop microservices architecture',
      //     color: 'from-blue-500 to-indigo-500',
      //   },
      //   {
      //     icon: Code,
      //     text: 'Created reusable React components following best practices and design patterns',
      //     color: 'from-pink-500 to-rose-500',
      //   },
      //   {
      //     icon: Database,
      //     text: 'Managed PostgreSQL databases and wrote complex SQL queries for reporting',
      //     color: 'from-emerald-500 to-teal-500',
      //   },
      //   {
      //     icon: Wrench,
      //     text: 'Debugged and resolved production issues, ensuring 99.9% application uptime',
      //     color: 'from-amber-500 to-orange-500',
      //   },
      //   {
      //     icon: Rocket,
      //     text: 'Participated in code reviews and mentored junior developers',
      //     color: 'from-violet-500 to-purple-500',
      //   },
      // ],
      responsibilities: [
  {
    icon: Code,
    text: 'Developed responsive, high-performance user interfaces using React and modern JavaScript',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Code,
    text: 'Built reusable component libraries and implemented clean UI architecture with best practices',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Database,
    text: 'Integrated REST APIs and optimized data handling with efficient state management',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Wrench,
    text: 'Identified UI bugs and performance issues, delivering smooth and stable user experiences',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Rocket,
    text: 'Collaborated with designers and backend teams to deliver scalable, production-ready UIs',
    color: 'from-violet-500 to-purple-500',
  },
  ],

  },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
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
              Work <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            ></motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, expIndex) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: expIndex % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + expIndex * 0.2 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    expIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl"></div>

                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                            <p className="text-cyan-400 font-semibold mb-1">{exp.company}</p>
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400">
                              {exp.type}
                            </span>
                          </div>
                          <Briefcase className="text-cyan-400" size={32} />
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>

                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-20"></div>
                    </motion.div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.6 + expIndex * 0.2, type: 'spring' }}
                      className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black shadow-lg shadow-cyan-500/50"
                    ></motion.div>
                  </div>

                  <div className="w-full md:w-5/12">
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <motion.div
                          key={respIndex}
                          initial={{ opacity: 0, x: expIndex % 2 === 0 ? 50 : -50 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + expIndex * 0.2 + respIndex * 0.1 }}
                          whileHover={{ scale: 1.02, x: expIndex % 2 === 0 ? 5 : -5 }}
                          className="group relative"
                        >
                          <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-4 hover:border-cyan-500/30 transition-all duration-300">
                            <div className="flex items-start gap-3">
                              <div className={`p-2 bg-gradient-to-br ${resp.color} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <resp.icon size={18} className="text-white" />
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">{resp.text}</p>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-br ${resp.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
