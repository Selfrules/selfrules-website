import { AbsoluteFill, useCurrentFrame, interpolate as remoteInterpolate } from "remotion";
import { TypeWriter } from "../components/TypeWriter";

const LINES = [
  "$ casahunter --status",
  "scrapers: 8 active ✓",
  "ai_engine: claude-sonnet ✓",
  "dashboard: react + leaflet ✓",
  "notifications: telegram-bot ✓",
  "scheduler: github-actions ✓",
  "cost: €0.25/user/month ✓",
];

export const SceneFour: React.FC = () => {
  const frame = useCurrentFrame();

  // Terminal fade in
  const terminalOpacity = remoteInterpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

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
      {/* Terminal window */}
      <div
        style={{
          backgroundColor: "rgba(15, 15, 16, 0.9)",
          border: "1px solid rgba(232, 168, 56, 0.2)",
          borderRadius: 0,
          padding: "32px 40px",
          width: "100%",
          maxWidth: 900,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 18,
          color: "#F5F5F0",
          opacity: terminalOpacity,
          lineHeight: 1.8,
        }}
      >
        {LINES.map((line, index) => {
          const lineStartFrame = 30 + index * 25;

          return (
            <div key={index} style={{ marginBottom: 8 }}>
              {line === LINES[0] ? (
                // Command line with typed effect
                <TypeWriter
                  text={line}
                  startFrame={lineStartFrame}
                  speed={30}
                  fontSize={18}
                  color="#F5F5F0"
                  fontFamily="JetBrains Mono, monospace"
                  showCursor={false}
                />
              ) : (
                // Regular lines appear fully
                <LineAnimator
                  text={line}
                  startFrame={lineStartFrame}
                  frame={frame}
                />
              )}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

interface LineAnimatorProps {
  text: string;
  startFrame: number;
  frame: number;
}

const LineAnimator: React.FC<LineAnimatorProps> = ({
  text,
  startFrame,
  frame,
}) => {
  const opacity = remoteInterpolate(
    frame,
    [startFrame, startFrame + 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Split text at the checkmark to color it green
  const parts = text.split("✓");
  const hasCheckmark = parts.length > 1;

  return (
    <span style={{ opacity }}>
      {parts[0]}
      {hasCheckmark && <span style={{ color: "#22C55E" }}>✓</span>}
    </span>
  );
};

