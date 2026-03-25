import { AbsoluteFill, useCurrentFrame, interpolate as remoteInterpolate } from "remotion";
import { AnimatedCounter } from "../components/AnimatedCounter";

export const SceneTwo: React.FC = () => {
  const frame = useCurrentFrame();
  const relativeFrame = frame; // Frame relative to scene start

  // Title fade in
  const titleOpacity = remoteInterpolate(relativeFrame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const subtitleOpacity = remoteInterpolate(relativeFrame, [20, 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Pass animations
  const passes = [
    {
      label: "Pass 1: Deterministic Filter",
      from: "1,029",
      to: "505 listings",
      startFrame: 50,
      endFrame: 80,
    },
    {
      label: "Pass 2: AI Scoring (Claude Sonnet)",
      content: "505 → scored & ranked",
      startFrame: 95,
      endFrame: 125,
    },
    {
      label: "Pass 3: Feedback Loop",
      content: "learns from your preferences",
      startFrame: 140,
      endFrame: 170,
    },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0A0B",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 100px",
      }}
    >
      <h1
        style={{
          fontSize: 64,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          color: "#F5F5F0",
          margin: 0,
          marginBottom: 16,
          opacity: titleOpacity,
          letterSpacing: -1,
        }}
      >
        CasaHunter
      </h1>

      <p
        style={{
          fontSize: 24,
          fontFamily: "Inter, sans-serif",
          color: "#E8A838",
          margin: 0,
          marginBottom: 60,
          opacity: subtitleOpacity,
          letterSpacing: 0.5,
        }}
      >
        Personal Apartment Intelligence
      </p>

      {/* Passes */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          width: "100%",
          maxWidth: 900,
        }}
      >
        {/* Pass 1 */}
        <PassItem
          label={passes[0].label}
          relativeFrame={relativeFrame}
          startFrame={passes[0].startFrame}
          endFrame={passes[0].endFrame}
        >
          <span style={{ color: "#F5F5F0" }}>1,029</span>
          <span style={{ color: "#E8A838", margin: "0 12px" }}>→</span>
          <span style={{ color: "#E8A838" }}>505</span>
          <span style={{ color: "#F5F5F0", marginLeft: 12 }}>listings</span>
        </PassItem>

        {/* Pass 2 */}
        <PassItem
          label={passes[1].label}
          relativeFrame={relativeFrame}
          startFrame={passes[1].startFrame}
          endFrame={passes[1].endFrame}
        >
          <span style={{ color: "#E8A838" }}>505</span>
          <span style={{ color: "#E8A838", margin: "0 12px" }}>→</span>
          <span style={{ color: "#F5F5F0" }}>scored & ranked</span>
        </PassItem>

        {/* Pass 3 */}
        <PassItem
          label={passes[2].label}
          relativeFrame={relativeFrame}
          startFrame={passes[2].startFrame}
          endFrame={passes[2].endFrame}
        >
          <span style={{ color: "#F5F5F0" }}>learns from your preferences</span>
        </PassItem>
      </div>
    </AbsoluteFill>
  );
};

interface PassItemProps {
  label: string;
  relativeFrame: number;
  startFrame: number;
  endFrame: number;
  children: React.ReactNode;
}

const PassItem: React.FC<PassItemProps> = ({
  label,
  relativeFrame,
  startFrame,
  endFrame,
  children,
}) => {
  const labelOpacity = remoteInterpolate(
    relativeFrame,
    [startFrame, startFrame + 10],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const contentOpacity = remoteInterpolate(
    relativeFrame,
    [startFrame + 5, startFrame + 20],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const slideX = remoteInterpolate(
    relativeFrame,
    [startFrame, startFrame + 10],
    [50, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        opacity: labelOpacity,
        transform: `translateX(${slideX}px)`,
      }}
    >
      <p
        style={{
          fontSize: 14,
          fontFamily: "JetBrains Mono, monospace",
          color: "#E8A838",
          margin: 0,
          marginBottom: 8,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {label}
      </p>
      <div
        style={{
          fontSize: 32,
          fontFamily: "JetBrains Mono, monospace",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          opacity: contentOpacity,
        }}
      >
        {children}
      </div>
    </div>
  );
};

