# Remotion Quick Start

## Files Created

**Main Composition:**
- `/remotion/CasaHunter.tsx` — Main 45-second video with 5 scenes

**Helper Components:**
- `/remotion/components/AnimatedCounter.tsx` — Animated number transitions
- `/remotion/components/TypeWriter.tsx` — Character-by-character text animation
- `/remotion/components/FadeInSequence.tsx` — Sequential fade-in effects

**Scenes (each is a self-contained React component):**
- `/remotion/scenes/SceneOne.tsx` — The Problem (platforms scattered)
- `/remotion/scenes/SceneTwo.tsx` — The Solution (architecture explanation)
- `/remotion/scenes/SceneThree.tsx` — Real Data (metrics and tiers)
- `/remotion/scenes/SceneFour.tsx` — The Stack (terminal display)
- `/remotion/scenes/SceneFive.tsx` — Call to Action (attribution)

**Updated:**
- `/remotion/Root.tsx` — Now exports both HelloWorld and CasaHunter compositions

## Key Features

✅ 1920×1080 @ 30fps = 1350 frames (45 seconds)
✅ Design system colors: #0A0A0B (dark), #F5F5F0 (text), #E8A838 (gold)
✅ Typography: Inter + JetBrains Mono
✅ 0px border-radius everywhere
✅ All animations via Remotion's native `interpolate()`
✅ No external animation libraries
✅ Full TypeScript support with strict mode

## How to Render the Video

```bash
# Build the Next.js project (which validates Remotion files)
npm run build

# Render the CasaHunter composition to MP4
npx remotion render remotion/Root.tsx CasaHunter output.mp4

# Preview in Remotion UI (if you want to iterate)
npx remotion preview
```

## Scene Timing Reference

| Scene | Start (s) | Duration (s) | Frames | Description |
|-------|-----------|--------------|--------|-------------|
| 1 | 0 | 5 | 0–150 | The Problem |
| 2 | 5 | 7 | 150–360 | The Solution |
| 3 | 12 | 13 | 360–750 | Real Data |
| 4 | 25 | 10 | 750–1050 | The Stack |
| 5 | 35 | 10 | 1050–1350 | CTA |

## Animation Patterns

All animations are built with Remotion's `interpolate()` function:

```typescript
const opacity = interpolate(frame, [startFrame, endFrame], [0, 1], {
  extrapolateRight: "clamp",
});
```

Common patterns:
- **Fade in**: `[0, 1]` on opacity
- **Slide in**: `[50, 0]` on translateX
- **Scale**: `[0.95, 1]` on transform
- **Bar width**: `[0, maxWidth]` on width

## Next Steps

1. **Render the video** using the command above
2. **Host it** on your portfolio or lab page (selfrules.org/lab/casahunter)
3. **Iterate** if needed — all scenes are modular and easy to adjust
4. **Add to portfolio** as a case study demonstrating motion design skills

## Design System Compliance

✓ All colors match CLAUDE.md specifications
✓ All fonts are correct (Inter for body, JetBrains Mono for code)
✓ Border radius is 0px everywhere
✓ Spacing is generous (80px + padding per scene)
✓ No Tailwind classes (inline styles only)
✓ Clean, professional typography
