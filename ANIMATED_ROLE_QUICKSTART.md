# AnimatedRole Component - Quick Start Guide

## What You Got 🎉

A production-ready, premium animated role switcher component that rotates through words with cinematic GSAP animations.

## Files Created/Modified

✅ **[src/components/AnimatedRole.tsx](src/components/AnimatedRole.tsx)** - New component (171 lines)  
✅ **[src/components/Hero.tsx](src/components/Hero.tsx)** - Updated with AnimatedRole integration  
✅ **ANIMATED_ROLE_DOCS.md** - Full documentation  

## What It Does

```
Full-Stack Developer & Designer  ↓ rotates to ↓
Full-Stack Developer & Explorer  ↓ rotates to ↓
Full-Stack Developer & Gamer     ↓ ... and loops
```

Each word:
- 📤 Slides up and fades out smoothly
- 📥 New word slides down and fades in
- ✨ Gets a subtle purple glow pulse on change
- ⏱️ Stays visible for ~1 second

## How It Works Currently

In your Hero section, the description now reads:

```tsx
Full-Stack Developer & <AnimatedRole />
```

The component cycles through 5 roles by default. You can customize anytime.

## 🔧 How to Customize

### Change the Words

Simply update the `roles` array in Hero.tsx:

```tsx
<AnimatedRole
  roles={[
    'Engineer',
    'Architect', 
    'Builder',
    'Creator'
  ]}
  duration={1}
/>
```

### Change Animation Speed

Each word stays visible for this many seconds:

```tsx
<AnimatedRole 
  roles={roles}
  duration={2}  // 2 seconds instead of 1
/>
```

### Change the Color

The gradient is purple→pink→purple by default. To change it, edit this line in `AnimatedRole.tsx`:

```tsx
// Current (purple/pink):
className="... from-purple-400 via-pink-400 to-purple-600 ..."

// Try cyan/blue:
className="... from-cyan-400 via-blue-400 to-blue-600 ..."

// Try amber/orange:
className="... from-amber-400 via-orange-400 to-orange-600 ..."
```

### Change Glow Color

In the same file, find and update the glow colors:

```tsx
// Purple glow (current):
filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))'

// Cyan glow:
filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.8))'

// Blue glow:
filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))'
```

## 🎬 Animation Timeline

```
0.6s  - Current word slides up, fades out
↓
0.0s  - Text changes instantly, new word appears below (opacity 0)
↓
0.6s  - New word slides up, fades in
↓
0.2s  - Glow brightens (peak effect)
↓
0.2s  - Glow fades
↓
~1.0s - Word holds visible
↓
REPEAT
```

Total time per word: ~2.2 seconds

## ⚙️ Technical Details

### Component Props

```tsx
<AnimatedRole
  roles={['Designer', 'Developer']}  // Array of words to rotate
  duration={1}                        // Seconds each word stays visible
  className="text-2xl"                // Additional Tailwind classes
/>
```

### Features

✅ Infinite loop  
✅ Smooth GSAP animations  
✅ No layout jumps (fixed width: 140px)  
✅ Pauses when tab is inactive (performance)  
✅ Proper cleanup on unmount (no memory leaks)  
✅ Gradient text effect  
✅ Subtle glow pulse  
✅ Cinematic easing (power2.in/out)  

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers ✓

## 🎨 Styling

The component is Tailwind-friendly. Default styles include:

- **Gradient text**: Purple → Pink → Purple
- **Drop shadow glow**: 10px purple glow
- **Min width**: 140px (prevents jitter)
- **GPU acceleration**: `willChange: 'transform, opacity'`

## 📦 Dependencies

Already installed in your project:
- `gsap` ^3.14.2 ✓
- `react` ^18.x ✓
- `react-dom` ^18.x ✓

## 🚀 Usage Patterns

### Basic - Use as is
```tsx
<AnimatedRole />
```

### With Custom Roles
```tsx
<AnimatedRole 
  roles={['Designer', 'Developer', 'Architect']} 
/>
```

### In a Sentence
```tsx
I'm a <AnimatedRole roles={['Creative', 'Technical', 'Strategic']} /> thinker
```

### With Framer Motion
```tsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <AnimatedRole roles={roles} />
</motion.div>
```

### With Custom Size
```tsx
<AnimatedRole 
  roles={roles}
  className="text-3xl md:text-4xl"
/>
```

## 🐛 Troubleshooting

### Words are flickering?
→ This is likely a React re-render issue. Make sure roles array doesn't change every render:

```tsx
const roles = useMemo(() => ['Designer', 'Developer'], []);
<AnimatedRole roles={roles} />
```

### Animation stutters on low-end devices?
→ Reduce motion or increase duration:

```tsx
<AnimatedRole roles={roles} duration={1.5} />
```

### Glow not visible?
→ The glow is subtle by design. Check your background contrast. For brighter effect:

Edit the filter values in AnimatedRole.tsx from `0.8` opacity to `1.0`

### Words look cut off?
→ Increase the min-width. In AnimatedRole.tsx, change from:

```tsx
style={{ minWidth: '140px', ... }}
to
style={{ minWidth: '200px', ... }}
```

## 🎯 Next Steps

1. ✅ Component is installed and working
2. 💡 Customize the roles array for your portfolio
3. 🎨 Adjust colors if needed
4. 🚀 Deploy!

## 📚 Full Documentation

See `ANIMATED_ROLE_DOCS.md` for comprehensive documentation including:

- Advanced usage patterns
- Responsive design examples
- API reference
- Performance tips
- Custom styling guides

## 💡 Pro Tips

1. **Keep words similar length** to avoid layout shifts (140px min-width accounts for ~15 characters)

2. **Test on mobile** - The animation is smooth but uses GPU acceleration for best results

3. **Pause on visibility** - Component automatically pauses when your tab is in the background (saves battery!)

4. **Combine with motion** - Pair with Framer Motion for hero entrance effects

## Questions?

The component is fully self-contained and production-ready. All animation logic is in `AnimatedRole.tsx`, so you can always tweak it further if needed!

Happy animating! 🎉
