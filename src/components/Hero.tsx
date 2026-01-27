import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import FloatingOrbs from './FloatingOrbs';
import AnimatedText, { AnimatedLetters } from './AnimatedText';
import MagneticButton from './MagneticButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* 3D Orbs */}
      <FloatingOrbs />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for work
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
          <AnimatedText text="I Design & Build" className="block" delay={0.4} />
          <span className="gradient-text glow-text">
            <AnimatedLetters text="Digital Experiences" delay={0.8} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Full-Stack Developer crafting immersive web experiences with modern technologies. 
          Turning complex ideas into elegant, performant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton href="#projects">
            <span className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:shadow-glow-md transition-all duration-300">
              View My Work
            </span>
          </MagneticButton>
          
          <MagneticButton href="#contact">
            <span className="flex items-center gap-2 px-8 py-4 rounded-full border border-muted-foreground/30 text-foreground font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300">
              Get In Touch
            </span>
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label} href={href}>
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary hover:shadow-glow-sm transition-all duration-300">
                <Icon size={20} />
              </span>
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
