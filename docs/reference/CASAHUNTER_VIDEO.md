# CasaHunter Motion Graphics Video

A 45-second (1350 frames @ 30fps) motion graphics video showcasing the CasaHunter apartment intelligence platform, built with Remotion.

## File Structure

```
remotion/
├── Root.tsx                          # Registers all compositions
├── CasaHunter.tsx                    # Main video composition (5 scenes)
├── HelloWorld.tsx                    # Example composition
├── components/
│   ├── AnimatedCounter.tsx           # Animates numeric counters
│   ├── TypeWriter.tsx                # Types out text character by character
│   └── FadeInSequence.tsx            # Fades in sequences of text
└── scenes/
    ├── SceneOne.tsx                  # The Problem (0-5s)
    ├── SceneTwo.tsx                  # The Solution (5-12s)
    ├── SceneThree.tsx                # Real Data (12-25s)
    ├── SceneFour.tsx                 # The Stack (25-35s)
    └── SceneFive.tsx                 # CTA (35-45s)
```

## Video Specs

- **Composition ID**: `CasaHunter`
- **Resolution**: 1920×1080 (Full HD)
- **Frame Rate**: 30 fps
- **Duration**: 45 seconds (1350 frames)
- **Background**: #0A0A0B (dark)
- **Text**: #F5F5F0 (cream)
- **Accent**: #E8A838 (gold)
- **Fonts**: Inter (body), JetBrains Mono (code/metrics)
- **Border Radius**: 0px everywhere

## Scene Breakdown

### Scene 1: The Problem (0-5s, frames 0-150)
Establishes the problem: apartment hunting in Italy is fragmented across 8 platforms.

**Elements:**
- Title: "Finding an apartment in Italy is broken" (fades in)
- 8 platform labels in a 2×4 grid, each appearing one by one with staggered fade-in + scale
- Bottom line: "8 platforms. Zero intelligence." (fades in last)

**Animations:**
- Title: fade in at frame 0-30
- Platforms: sequential fade + scale animation, each delayed ~12 frames
- Bottom text: fade in at frame 100-130

### Scene 2: The Solution (5-12s, frames 150-360)
Introduces CasaHunter and the three-pass architecture.

**Elements:**
- Title: "CasaHunter" (large, fades in)
- Subtitle: "Personal Apartment Intelligence" (gold, fades in slightly after)
- Three passes slide in from the right:
  1. Pass 1: Deterministic Filter → 1,029 → 505 listings (gold numbers)
  2. Pass 2: AI Scoring (Claude Sonnet) → 505 → scored & ranked
  3. Pass 3: Feedback Loop → learns from your preferences

**Animations:**
- Title: fade in at frame 0-30 (relative to scene)
- Subtitle: fade in at frame 20-40
- Each pass: slides in from right (0-50px) + fades in, with staggered timing
- Content within each pass fades in slightly after the label

### Scene 3: Real Data (12-25s, frames 360-750)
Shows impressive metrics and the three-tier distribution.

**Elements:**
- Large counter: "1,029" (listing processed today)
- Three tier bars with labels and counts:
  - GREEN: HIGH (75+) → 73
  - AMBER: MEDIUM (50-74) → 322
  - RED: LOW (<50) → 524
- Stats section:
  - Signal-to-noise ratio: 7%
  - €0.25/user/month
  - 95% margin (in green)

**Animations:**
- Counter: fades in at frame 0-30
- Tier bars: fade in at frame 60-90, each bar animates width from 0 to full over 30 frames
- Stats: fade in at frame 150-180

### Scene 4: The Stack (25-35s, frames 750-1050)
Terminal-style display of tech stack with typewriter effect.

**Elements:**
- Terminal window (dark with gold border)
- Command: `$ casahunter --status`
- 6 status lines, each with a checkmark in green:
  - scrapers: 8 active ✓
  - ai_engine: claude-sonnet ✓
  - dashboard: react + leaflet ✓
  - notifications: telegram-bot ✓
  - scheduler: github-actions ✓
  - cost: €0.25/user/month ✓

**Animations:**
- Terminal: fades in at frame 0-20
- Command line: types out character by character (speed: 30 chars/sec)
- Status lines: each fades in at staggered times (30 + index × 25 frames)
- Checkmarks: colored green when line appears

### Scene 5: CTA (35-45s, frames 1050-1350)
Call to action with builder credit and project link.

**Elements:**
- "Built by Mattia De Luca" (large heading)
- "selfrules.org/lab/casahunter" (gold, monospace)
- "Product thinking applied to a personal problem" (small tagline)

**Animations:**
- Builder name: fades in at frame 0-30
- URL: fades in at frame 40-70
- Tagline: fades in at frame 80-110
- All fade out together at frame 260-300

## Component APIs

### AnimatedCounter
Animates a numeric counter from one value to another.

```typescript
<AnimatedCounter
  from={1029}
  to={505}
  startFrame={150}
  endFrame={180}
  fontSize={48}
  color="#E8A838"
  fontFamily="JetBrains Mono, monospace"
/>
```

### TypeWriter
Types out text character by character with optional cursor.

```typescript
<TypeWriter
  text="$ casahunter --status"
  startFrame={30}
  speed={30}           // characters per second
  fontSize={18}
  color="#F5F5F0"
  fontFamily="JetBrains Mono, monospace"
  showCursor={false}
/>
```

### FadeInSequence
Fades in a sequence of items one by one.

```typescript
<FadeInSequence
  items={["Item 1", "Item 2", "Item 3"]}
  startFrame={0}
  delayBetweenItems={20}
  fontSize={24}
  color="#F5F5F0"
  fontFamily="Inter, sans-serif"
/>
```

## Animation Patterns Used

1. **Fade In**: `interpolate(frame, [start, end], [0, 1], { extrapolateRight: "clamp" })`
2. **Slide In**: `interpolate(frame, [start, end], [50, 0], { extrapolateLeft: "clamp" })`
3. **Scale**: `interpolate(frame, [start, end], [0.95, 1], { extrapolateRight: "clamp" })`
4. **Width Animation**: `interpolate(frame, [start, end], [0, maxWidth], { ... })`
5. **Sequential Timing**: Base frame + (index × delay) for staggered effects

## Design Consistency

- **Colors**: Strictly adhered to #0A0A0B (bg), #F5F5F0 (text), #E8A838 (accent)
- **Fonts**: Inter for body text, JetBrains Mono for metrics/code
- **Spacing**: Generous padding (80-160px between sections)
- **Borders**: 0px border-radius everywhere
- **Styling**: All inline styles (no Tailwind in Remotion components)

## Building & Rendering

The video composition is registered in `remotion/Root.tsx` with:
- Composition ID: "CasaHunter"
- Duration: 1350 frames
- FPS: 30
- Resolution: 1920×1080

To render:
```bash
npm run build  # Build the Next.js project (includes type checking Remotion files)
npx remotion render remotion/Root.tsx CasaHunter output.mp4  # Render to MP4
```

## Notes

- All animations use Remotion's native `interpolate` function (aliased to avoid TypeScript conflicts)
- No external animation libraries (Framer Motion, GSAP) were used
- Frame counts are precise to ensure smooth transitions between scenes
- Colors are hardcoded inline for maximum performance
- TypeScript strict mode is enforced throughout
