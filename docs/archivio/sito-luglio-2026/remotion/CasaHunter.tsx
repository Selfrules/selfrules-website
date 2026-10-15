import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { SceneOne } from "./scenes/SceneOne";
import { SceneTwo } from "./scenes/SceneTwo";
import { SceneThree } from "./scenes/SceneThree";
import { SceneFour } from "./scenes/SceneFour";
import { SceneFive } from "./scenes/SceneFive";

export const CasaHunter: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0B" }}>
      {/* Scene 1: The Problem (0-5s = 0-150 frames) */}
      <Sequence from={0} durationInFrames={150}>
        <SceneOne />
      </Sequence>

      {/* Scene 2: The Solution (5-12s = 150-360 frames) */}
      <Sequence from={150} durationInFrames={210}>
        <SceneTwo />
      </Sequence>

      {/* Scene 3: Real Data (12-25s = 360-750 frames) */}
      <Sequence from={360} durationInFrames={390}>
        <SceneThree />
      </Sequence>

      {/* Scene 4: The Stack (25-35s = 750-1050 frames) */}
      <Sequence from={750} durationInFrames={300}>
        <SceneFour />
      </Sequence>

      {/* Scene 5: CTA (35-45s = 1050-1350 frames) */}
      <Sequence from={1050} durationInFrames={300}>
        <SceneFive />
      </Sequence>
    </AbsoluteFill>
  );
};
