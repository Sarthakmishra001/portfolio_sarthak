import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // const stats = [
  //   { value: '5+', label: 'Years Experience' },
  //   { value: '50+', label: 'Projects Delivered' },
  //   { value: '30+', label: 'Happy Clients' },
  // ];

  const highlights = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
    { icon: Sparkles, title: 'Modern Design', description: 'Creating stunning user interfaces' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed & efficiency' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[128px]" />

      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ padding: '2px' }}
              >
                <div className="w-full h-full rounded-3xl bg-background" />
              </motion.div>

              {/* Content */}
              <div className="absolute inset-2 rounded-3xl bg-card-gradient overflow-hidden 
              flex items-center justify-center">
                <motion.div
                  className="text-8xl font-bold gradient-text"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  SM
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 rounded-xl bg-primary/20 
                  backdrop-blur-sm flex items-center justify-center"
                  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Code2 className="text-primary" size={28} />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 w-14 h-14 rounded-xl bg-secondary/20
                   backdrop-blur-sm flex items-center justify-center"
                  animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Sparkles className="text-secondary" size={24} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              About Me
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turning ideas into{' '}
              <span className="gradient-text">immersive digital</span> experiences
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm Sarthak Mishra — a passionate Full-Stack Developer based in India. <br />
              I specialize in creating beautiful, performant web applications using modern
              technologies like React, Next.js, Node.js, and more.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              With a keen eye for design and a love for clean code, I bridge the gap between
              aesthetics and functionality. Every project is an opportunity to create something
              meaningful that users will love.
            </p>

            {/* Stats */}
            {/* 
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div> 
            */}

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
