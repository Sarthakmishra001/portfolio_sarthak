# AnimatedRole Component - Copy & Paste Snippets

## 🔧 Common Customizations

### 1. Change Colors (Copy & Paste)

#### Purple/Pink Gradient (Current - Default)
```tsx
className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent font-bold whitespace-nowrap"
```

#### Cyan/Blue Gradient
```tsx
className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent font-bold whitespace-nowrap"
```

#### Amber/Orange Gradient
```tsx
className="inline-block bg-gradient-to-r from-amber-400 via-orange-400 to-orange-600 bg-clip-text text-transparent font-bold whitespace-nowrap"
```

#### Lime/Green Gradient
```tsx
className="inline-block bg-gradient-to-r from-lime-400 via-green-400 to-green-600 bg-clip-text text-transparent font-bold whitespace-nowrap"
```

#### Rose/Red Gradient
```tsx
className="inline-block bg-gradient-to-r from-rose-400 via-red-400 to-red-600 bg-clip-text text-transparent font-bold whitespace-nowrap"
```

---

### 2. Change Glow Colors (Copy & Paste)

Replace in the animation sections of `AnimatedRole.tsx`:

#### Purple Glow (Current)
```tsx
filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))'   // Bright
filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))'   // Dim
```

#### Cyan Glow
```tsx
filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.8))'   // Bright
filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))'   // Dim
```

#### Blue Glow
```tsx
filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))'   // Bright
filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'   // Dim
```

#### Green Glow
```tsx
filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))'    // Bright
filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))'    // Dim
```

#### Orange Glow
```tsx
filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.8))'   // Bright
filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.3))'   // Dim
```

#### Red/Rose Glow
```tsx
filter: 'drop-shadow(0 0 20px rgba(244, 63, 94, 0.8))'    // Bright
filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.3))'    // Dim
```

---

### 3. Common Role Arrays (Copy & Paste)

#### Tech Skills
```tsx
roles={[
  'Designer',
  'Developer',
  'Architect',
  'Engineer',
  'Innovator',
]}
```

#### Creative Fields
```tsx
roles={[
  'Creator',
  'Builder',
  'Visionary',
  'Dreamer',
  'Artist',
]}
```

#### Personality Traits
```tsx
roles={[
  'Problem Solver',
  'Innovator',
  'Storyteller',
  'Mentor',
  'Leader',
]}
```

#### Freelancer Roles
```tsx
roles={[
  'Freelancer',
  'Consultant',
  'Strategist',
  'Expert',
  'Partner',
]}
```

#### Full Stack Dev
```tsx
roles={[
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Dev',
  'DevOps Engineer',
  'Tech Lead',
]}
```

#### Designer Portfolio
```tsx
roles={[
  'UI Designer',
  'UX Designer',
  'Brand Designer',
  'Motion Designer',
  'Creative Director',
]}
```

---

### 4. Hero Section Integration Examples

#### Simple One-Liner
```tsx
<p>Full-Stack Developer & <AnimatedRole /></p>
```

#### With Custom Roles
```tsx
<p>
  I'm a <AnimatedRole roles={['Designer', 'Developer', 'Thinker']} />
</p>
```

#### Longer Description
```tsx
<p className="text-lg">
  I'm a <AnimatedRole 
    roles={['Designer', 'Builder', 'Creator']} 
    duration={1.5}
  /> 
  crafting beautiful digital experiences
</p>
```

#### With Framer Motion
```tsx
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-xl"
>
  Full-Stack Developer & <AnimatedRole />
</motion.p>
```

#### In Heading
```tsx
<h2>
  I'm not just a <AnimatedRole 
    roles={['Coder', 'Designer', 'Creator']} 
    className="text-3xl"
  />
</h2>
```

---

### 5. Styling Variants (Copy & Paste)

#### Larger Text
```tsx
<AnimatedRole 
  roles={roles}
  className="text-2xl md:text-3xl font-bold"
/>
```

#### Smaller Text
```tsx
<AnimatedRole 
  roles={roles}
  className="text-sm md:text-base"
/>
```

#### Light/Subtle
```tsx
<AnimatedRole 
  roles={roles}
  className="text-opacity-70"
/>
```

#### Bold/Heavy
```tsx
<AnimatedRole 
  roles={roles}
  className="font-black"
/>
```

#### With Letter Spacing
```tsx
<AnimatedRole 
  roles={roles}
  className="tracking-wider"
/>
```

---

### 6. Animation Speed Presets

#### Super Fast (0.5s per word)
```tsx
<AnimatedRole roles={roles} duration={0.5} />
```

#### Fast (0.75s per word)
```tsx
<AnimatedRole roles={roles} duration={0.75} />
```

#### Normal (1s per word) - Default
```tsx
<AnimatedRole roles={roles} duration={1} />
```

#### Slow (1.5s per word)
```tsx
<AnimatedRole roles={roles} duration={1.5} />
```

#### Very Slow (2s per word)
```tsx
<AnimatedRole roles={roles} duration={2} />
```

---

### 7. Complete Hero Examples

#### Minimalist
```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1>
      I'm a <AnimatedRole roles={['Designer', 'Developer']} />
    </h1>
  </div>
</section>
```

#### With Context
```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center max-w-2xl">
    <h1 className="text-4xl font-bold mb-4">
      Hi, I'm John
    </h1>
    <p className="text-xl text-gray-600">
      I'm a <AnimatedRole 
        roles={[
          'Creative Technologist',
          'Full Stack Developer',
          'UI/UX Designer',
          'Digital Explorer'
        ]}
        duration={1.2}
      /> based in San Francisco
    </p>
  </div>
</section>
```

#### With CTA
```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-6xl font-bold mb-6">
      I Design & Build Digital Experiences
    </h1>
    <p className="text-xl mb-12">
      Full-Stack Developer & <AnimatedRole />
    </p>
    <button className="px-8 py-3 bg-purple-600 text-white rounded-lg">
      Get In Touch
    </button>
  </div>
</section>
```

#### With Framer Motion
```tsx
<motion.section>
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.p>
      Full-Stack Developer & <AnimatedRole />
    </motion.p>
  </motion.div>
</motion.section>
```

---

### 8. Multiple Animated Roles (Advanced)

```tsx
<p>
  As a <AnimatedRole 
    roles={['Designer', 'Developer']} 
    duration={1.5}
  />, I also work as a <AnimatedRole 
    roles={['Mentor', 'Consultant']} 
    duration={1.5}
  />
</p>
```

---

### 9. Responsive Variants

#### Text Size Responsive
```tsx
<AnimatedRole 
  roles={roles}
  className="text-lg md:text-2xl lg:text-3xl"
/>
```

#### Duration Responsive (Advanced)
```tsx
import { useMediaQuery } from 'react-responsive';

export function HeroWithResponsiveDuration() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  
  return (
    <AnimatedRole 
      roles={roles}
      duration={isMobile ? 2 : 1}  // Longer on mobile
    />
  );
}
```

---

### 10. Dark Mode Variants

#### Works in Light Mode (Default)
```tsx
<AnimatedRole />
```

#### Works in Dark Mode (Brighten Glow)
```tsx
// In AnimatedRole.tsx, change glow opacity from 0.8 to 1.0
filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 1))'
```

---

## 🎯 Quick Copy-Paste for Your Hero

Replace your current description paragraph with this:

```tsx
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.2 }}
  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
>
  Full-Stack Developer &{' '}
  <AnimatedRole
    roles={[
      'Designer',
      'Explorer',
      'Gamer',
      'Tech Enthusiast',
      'Creative Coder',
    ]}
    duration={1}
  />
</motion.p>
```

---

## 🎨 Tailwind Color Reference

For creating custom gradients and glows:

| Color | Hex | Tailwind | Glow Code |
|-------|-----|----------|-----------|
| Purple | #a855f7 | purple-400 | `rgba(168, 85, 247, ...)`|
| Pink | #ec4899 | pink-400 | `rgba(236, 72, 153, ...)` |
| Blue | #3b82f6 | blue-500 | `rgba(59, 130, 246, ...)` |
| Cyan | #22d3ee | cyan-400 | `rgba(34, 211, 238, ...)` |
| Green | #22c55e | green-500 | `rgba(34, 197, 94, ...)` |
| Orange | #f97316 | orange-500 | `rgba(249, 115, 22, ...)` |
| Red | #ef4444 | red-500 | `rgba(239, 68, 68, ...)` |

---

## 💡 Mix & Match

Feel free to combine any of these snippets! For example:

```tsx
<AnimatedRole
  roles={[                          // Custom roles
    'Designer',
    'Developer',
    'Creator'
  ]}
  className="text-2xl font-bold"   // Custom size
  duration={1.5}                    // Custom speed
/>
```

Happy customizing! 🚀
