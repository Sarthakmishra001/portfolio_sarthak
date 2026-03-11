import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  downloadUrl?: string;
  imageContain?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'RGPV StudyPoint',
    description: 'Complete study resource platform for RGPV students',
    longDescription: 'A comprehensive study resource platform designed for RGPV university students, providing notes, previous year papers, syllabus, and study materials all in one place.',
    image: '/imgs/rgpv_studypointgif.gif',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    liveUrl: 'https://rgpv-study-point.vercel.app',
    githubUrl: 'https://github.com/Sarthakmishra001/RGPV-StudyPoint',
    color: 'hsl(190, 100%, 50%)',
  },
  {
    id: 2,
    title: 'EchoChat',
    description: 'Real-time chat platform with text and video calling',
    longDescription: 'A comprehensive real-time communication platform allowing users to seamlessly exchange text messages and make one-to-one video calls directly from the browser.',
    image: '/imgs/echochat.gif',
    tags: ['Node.js', 'Express.js', 'Tailwind CSS', 'EJS', 'MongoDB', 'WebRTC', 'WebSockets'],
    liveUrl: 'https://echochat-app-upsw.onrender.com',
    githubUrl: 'https://github.com/Sarthakmishra001/EchoChat_App',
    color: 'hsl(270, 100%, 60%)',
  },
  {
    id: 3,
    title: 'Daily Habit Tracker',
    description: 'Progressive web app to track habits and maintain streaks',
    longDescription: 'An intuitive and responsive progressive web application designed to help users track their daily habits, maintain streaks, and analyze their progress over time.',
    image: '/imgs/daily habit tracker.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Local Storage', 'PWA'],
    liveUrl: 'https://daily-habit-keepersarthak.vercel.app',
    githubUrl: 'https://github.com/Sarthakmishra001/daily-habit-keeper',
    color: 'hsl(220, 100%, 60%)',
    downloadUrl: '/Daily Habit Tracker.apk',
    imageContain: true,
  },
  {
    id: 4,
    title: 'Crypto Tracker',
    description: 'Real-time cryptocurrency tracking app',
    longDescription: 'A feature-rich cryptocurrency tracking application with real-time price updates, portfolio management, and price alerts.',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=600&fit=crop',
    tags: ['React', 'WebSocket', 'Chart.js', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    color: 'hsl(45, 100%, 50%)',
  },
];

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-card border border-border"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: isHovered ? `0 20px 60px ${project.color}20` : 'none',
        }}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: (project.image.endsWith('.gif') || project.imageContain) ? '#0a0a0a' : undefined }}>
          {project.image.endsWith('.gif') ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          ) : (
            <motion.img
              src={project.image}
              alt={project.title}
              className={`w-full h-full ${project.imageContain ? 'object-contain pt-4 pb-4' : 'object-cover'}`}
              animate={{ scale: isHovered ? (project.imageContain ? 1.05 : 1.1) : 1 }}
              transition={{ duration: 0.6 }}
            />
          )}

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
          />

          {/* Hover content */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:shadow-glow-sm transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} className="text-primary-foreground" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Glow border */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `1px solid ${project.color}`,
            opacity: isHovered ? 0.5 : 0,
          }}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    // Save original overflow
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="relative w-full max-w-xl max-h-[85vh] rounded-3xl bg-card border border-border overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-background transition-colors shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="aspect-video shrink-0 p-4" style={{ backgroundColor: (project.image.endsWith('.gif') || project.imageContain) ? '#0a0a0a' : undefined }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full"
            style={{ objectFit: (project.image.endsWith('.gif') || project.imageContain) ? 'contain' : 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{project.title}</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-primary/30 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow-sm transition-shadow text-sm"
            >
              <ExternalLink size={18} />
              View Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary transition-colors text-sm"
            >
              <Github size={18} />
              Source Code
            </a>
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                download
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-800 text-white border border-neutral-700 font-medium hover:bg-neutral-700 transition-colors text-sm"
              >
                <Download size={18} />
                Download App
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    console.log('Scroll button clicked:', direction);

    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 432;

      console.log('Current scrollLeft:', container.scrollLeft);
      console.log('scrollWidth:', container.scrollWidth);
      console.log('clientWidth:', container.clientWidth);

      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }

      console.log('New scrollLeft:', container.scrollLeft);
    } else {
      console.error('scrollRef.current is NULL');
    }
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div ref={ref} className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great products
          </p>
        </motion.div>

        {/* Navigation arrows for horizontal scroll */}

        {/* Projects - Horizontal scroll on large screens, grid on mobile */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div
          ref={scrollRef}
          className="hidden lg:flex gap-8 pb-4"
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="flex-shrink-0 w-[400px]">
              <ProjectCard
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
