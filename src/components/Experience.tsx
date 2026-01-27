import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  company: string;
  date: string;
  description: string;
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: 'work',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    date: '2022 - Present',
    description: 'Leading development of enterprise applications, mentoring junior developers, and architecting scalable solutions.',
    skills: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    date: '2020 - 2022',
    description: 'Built and maintained multiple client projects, focusing on performance optimization and user experience.',
    skills: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Science',
    company: 'Tech University',
    date: '2016 - 2020',
    description: 'Graduated with honors. Focused on software engineering and artificial intelligence.',
    skills: ['Algorithms', 'Data Structures', 'Machine Learning'],
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    company: 'StartUp Hub',
    date: '2019 - 2020',
    description: 'Developed responsive web interfaces and contributed to the company\'s design system.',
    skills: ['React', 'SCSS', 'JavaScript'],
  },
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:w-1/2 ${isLeft ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'}`}
    >
      {/* Content */}
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
          style={{
            boxShadow: isInView ? '0 0 30px hsla(190, 100%, 50%, 0.05)' : 'none',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.type === 'work' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
              {item.type === 'work' ? (
                <Briefcase className="text-primary" size={20} />
              ) : (
                <GraduationCap className="text-secondary" size={20} />
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={14} />
              {item.date}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-primary mb-3 font-medium">{item.company}</p>
          <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

          {item.skills && (
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-glow-sm flex-shrink-0"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-primary"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[128px]" />

      <div ref={ref} className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and academic achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"
          />
          
          {/* Mobile line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:hidden"
          />

          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-0">
                {/* Mobile dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="absolute left-2 top-8 w-4 h-4 rounded-full bg-primary shadow-glow-sm md:hidden"
                />
                <TimelineCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
