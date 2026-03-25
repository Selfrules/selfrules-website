import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0A0B",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 80,
          fontWeight: 700,
          color: "#F5F5F0",
          opacity,
          letterSpacing: -2,
        }}
      >
        selfrules.org
      </h1>
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 24,
          color: "#E8A838",
          opacity: interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" }),
          marginTop: 16,
        }}
      >
        Product Manager · Builder
      </p>
    </AbsoluteFill>
  );
};
