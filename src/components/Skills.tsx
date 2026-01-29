import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Database,
  Sparkles,
  Wrench,
  Boxes,
  Zap,
  Globe,
  Layers
} from 'lucide-react';

interface Technology {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  technologies: Technology[];
  features?: string[];
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  icon: typeof Code2;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    subtitle: 'Modern UI & application interfaces',
    icon: Code2,
    technologies: [
      { name: 'HTML5', icon: '🟧' },
      { name: 'CSS3', icon: '🔷' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'JavaScript', icon: '💛' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Framer Motion', icon: '🎬' },
    ],
    gradientFrom: 'from-blue-500',
    gradientVia: 'via-violet-500',
    gradientTo: 'to-purple-500',
  },
  {
    title: 'Backend Systems',
    subtitle: 'Logic, APIs & real-time backends',
    icon: Database,
    technologies: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Mongoose', icon: '🦡' },
      { name: 'JWT', icon: '🔐' },
      { name: 'WebSockets', icon: '🔌' },
    ],
    gradientFrom: 'from-green-500',
    gradientVia: 'via-teal-500',
    gradientTo: 'to-emerald-500',
  },
  {
    title: 'Creative Development',
    subtitle: 'Animation-driven web experiences',
    icon: Sparkles,
    technologies: [
      { name: 'GSAP', icon: '⚡' },
      { name: 'Three.js', icon: '🎲' },
      { name: 'WebGL', icon: '🌐' },
    ],
    features: ['Canvas', 'Scroll Animations', 'Interactive UI'],
    gradientFrom: 'from-purple-500',
    gradientVia: 'via-pink-500',
    gradientTo: 'to-fuchsia-500',
  },
  {
    title: 'Tools & Platform',
    subtitle: 'Design, collaboration & deployment',
    icon: Wrench,
    technologies: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Figma', icon: '🎨' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Netlify', icon: '💚' },
      { name: 'Render', icon: '🚀' },
    ],
    gradientFrom: 'from-cyan-500',
    gradientVia: 'via-teal-500',
    gradientTo: 'to-blue-500',
  },
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Gradient border wrapper */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradientFrom} ${category.gradientVia} ${category.gradientTo} opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

      {/* Card glow beneath */}
      <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${category.gradientFrom} ${category.gradientVia} ${category.gradientTo} opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl`} />

      {/* Main card */}
      <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.gradientFrom} ${category.gradientTo}`} />
            <h3 className="text-2xl font-bold text-white">{category.title}</h3>
          </div>
          <p className="text-sm text-gray-400 ml-6">{category.subtitle}</p>
        </div>

        {/* Technologies */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap gap-2">
            {category.technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group/tech relative"
              >
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} opacity-0 group-hover/tech:opacity-20 transition-opacity duration-300 blur-sm`} />
                <div className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm group-hover/tech:bg-white/10 group-hover/tech:border-white/20 transition-all duration-300">
                  {tech.icon && <span className="text-base">{tech.icon}</span>}
                  <span className="text-sm font-medium text-gray-200">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features (for Creative Development) */}
        {category.features && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {category.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
              >
                <Zap size={12} className="text-purple-400" />
                <span className="text-xs font-medium text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Floating icon decoration */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        >
          <Icon size={80} className="text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-black" />

      {/* Nebula gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[128px]" />

      {/* Particle effects */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6 bg-primary/5 backdrop-blur-sm">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of crafting digital experiences
          </p>
        </motion.div>

        {/* Skills Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex justify-center gap-12 opacity-20"
        >
          {[Boxes, Globe, Layers, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            >
              <Icon size={32} className="text-white" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
