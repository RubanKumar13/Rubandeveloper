import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Backend Development',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Hibernate/JPA', level: 80 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'Microservices', level: 75 },
      ],
    },
    {
      title: 'Frontend Development',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript/TypeScript', level: 82 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Redux', level: 75 },
      ],
    },
    {
      title: 'Database & Cloud',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'Redis', level: 65 },
      ],
    },
    {
      title: 'Tools & DevOps',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Postman', level: 88 },
        { name: 'Maven/Gradle', level: 80 },
        { name: 'Jenkins', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
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
              Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className={`w-2 h-8 bg-gradient-to-b ${category.color} rounded-full mr-4`}></div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 1, ease: 'easeOut' }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
