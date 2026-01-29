import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface AnimatedRoleProps {
  roles?: string[];
  className?: string;
  duration?: number;
}

const AnimatedRole = ({
  roles = [
    'Designer',
    'Explorer',
    'Gamer',
    'Tech Enthusiast',
    'Creative Coder',
  ],
  className = '',
  duration = 1,
}: AnimatedRoleProps) => {
  const wordRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const currentIndexRef = useRef(0);
  const isTabVisibleRef = useRef(true);

  // Handle page visibility (pause animation when tab is inactive)
  useEffect(() => {
    const handleVisibilityChange = () => {
      isTabVisibleRef.current = !document.hidden;
      if (timelineRef.current) {
        if (document.hidden) {
          timelineRef.current.pause();
        } else {
          timelineRef.current.play();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!wordRef.current) return;

    // Kill previous timeline if it exists
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create timeline
    const tl = gsap.timeline({ repeat: -1 });
    timelineRef.current = tl;

    // Initial state - set first word
    gsap.set(wordRef.current, {
      y: 0,
      opacity: 1,
      textContent: roles[0],
    });

    // Create animation sequence for each role
    roles.forEach((role, index) => {
      // Only animate transitions, not the initial state
      if (index > 0) {
        // Exit animation for current word (move up and fade out)
        tl.to(
          wordRef.current,
          {
            y: -30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in',
          },
          `<` // Start at the same time as the previous animation ends
        );

        // Update text and reset position (instant)
        tl.call(
          () => {
            if (wordRef.current) {
              wordRef.current.textContent = role;
              gsap.set(wordRef.current, { y: 30, opacity: 0 });
            }
          },
          [],
          `<` // Execute at the same time as exit completes
        );

        // Entry animation for new word (come from below and fade in)
        tl.to(
          wordRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '<'
        );

        // Add glow pulse effect on text change (out)
        tl.to(
          wordRef.current,
          {
            filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
            duration: 0.2,
          },
          '<'
        );

        // Glow pulse effect (in)
        tl.to(
          wordRef.current,
          {
            filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))',
            duration: 0.2,
          },
          '+=0.1'
        );
      } else {
        // For first word, add initial glow effect
        tl.to(
          wordRef.current,
          {
            filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))',
            duration: 0.3,
          },
          0
        );
      }

      // Hold word visible for specified duration
      tl.to(wordRef.current, { duration: duration }, '+=0.1');
    });

    // Pause if tab is hidden
    if (document.hidden) {
      tl.pause();
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [roles, duration]);

  return (
    <span
      className={`relative inline-grid items-center ${className}`}
      style={{ verticalAlign: 'bottom' }}
    >
      {/* Invisible spacer to set width based on longest word */}
      <span className="invisible font-bold whitespace-nowrap leading-none opacity-0 select-none" aria-hidden="true" style={{ gridArea: '1/1' }}>
        Creative Coder
      </span>

      <span
        ref={wordRef}
        className="inline-block bg-clip-text text-transparent font-bold whitespace-nowrap leading-none text-center"
        style={{
          gridArea: '1/1',
          willChange: 'transform, opacity, filter',
          background: 'linear-gradient(90deg, hsl(190, 100%, 60%), hsl(270, 100%, 70%), hsl(220, 100%, 65%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 15px hsl(190, 100%, 50%, 0.4))',
        }}
      >
        Designer
      </span>
    </span>
  );
};

export default AnimatedRole;
