import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'hsl(190, 100%, 50%)' },
      { name: 'Next.js', level: 90, color: 'hsl(190, 100%, 50%)' },
      { name: 'TypeScript', level: 88, color: 'hsl(220, 100%, 60%)' },
      { name: 'Tailwind CSS', level: 92, color: 'hsl(190, 100%, 50%)' },
      { name: 'Framer Motion', level: 85, color: 'hsl(270, 100%, 60%)' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 88, color: 'hsl(120, 60%, 50%)' },
      { name: 'Express', level: 85, color: 'hsl(190, 100%, 50%)' },
      { name: 'MongoDB', level: 82, color: 'hsl(120, 60%, 40%)' },
      { name: 'PostgreSQL', level: 78, color: 'hsl(220, 100%, 60%)' },
      { name: 'GraphQL', level: 75, color: 'hsl(320, 100%, 50%)' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90, color: 'hsl(10, 100%, 50%)' },
      { name: 'Figma', level: 80, color: 'hsl(270, 100%, 60%)' },
      { name: 'Docker', level: 70, color: 'hsl(200, 100%, 50%)' },
      { name: 'AWS', level: 65, color: 'hsl(35, 100%, 50%)' },
      { name: 'GSAP', level: 85, color: 'hsl(120, 80%, 45%)' },
    ],
  },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 30px ${skill.color}30`,
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
              boxShadow: `0 0 20px ${skill.color}50`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-gradient opacity-50" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of crafting digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech icons floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 opacity-60"
        >
          {['⚛️', '🔷', '🟢', '🔺', '⚡', '🎨', '🐳', '☁️'].map((emoji, index) => (
            <motion.span
              key={index}
              className="text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
