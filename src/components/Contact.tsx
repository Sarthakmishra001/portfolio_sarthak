import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import MagneticButton from './MagneticButton';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_suferhb',
        'template_h6ck6u3',
        {
          from_name: formState.name,
          reply_to: formState.email,
          message: formState.message,
        },
        'Kmgh1Ss1E3aTMAOPw'
      );

      // Show success message
      alert('Message sent successfully');

      // Reset form fields
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Show error message
      alert('Failed to send message');
      console.error('EmailJS error:', error);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sarthakm0108@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9691382572' },
    { icon: MapPin, label: 'Location', value: 'Bhopal, India' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sarthakmishra001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sarthak-mishra-30902425a', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/smx_coder', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-gradient opacity-30" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative">
                <motion.label
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                  animate={{ color: focusedField === 'name' ? 'hsl(190, 100%, 50%)' : 'hsl(220, 10%, 60%)' }}
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Enter Your Name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <motion.label
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                  animate={{ color: focusedField === 'email' ? 'hsl(190, 100%, 50%)' : 'hsl(220, 10%, 60%)' }}
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Enter Your Email"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Message field */}
              <div className="relative">
                <motion.label
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                  animate={{ color: focusedField === 'message' ? 'hsl(190, 100%, 50%)' : 'hsl(220, 10%, 60%)' }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <MagneticButton>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:shadow-glow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </MagneticButton>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    {label === 'Email' ? (
                      <a href={`mailto:${value}`} className="font-medium hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <MagneticButton key={label} href={href}>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-center w-14 h-14 rounded-xl border border-border hover:border-primary hover:text-primary hover:shadow-glow-sm transition-all duration-300"
                    >
                      <Icon size={22} />
                    </motion.span>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-2">Ready to start a project?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                I'm currently available for freelance work and exciting opportunities.
              </p>
              <a
                href={`mailto:sarthakm0108@gmail.com?subject=${encodeURIComponent('Schedule a Call with Sarthak')}&body=${encodeURIComponent('Hi Sarthak,\n\nI would like to schedule a call with you.\nPlease let me know your available time slots.\n\nThanks.')}`}
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Schedule a call
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
