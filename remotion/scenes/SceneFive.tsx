import { AbsoluteFill, useCurrentFrame, interpolate as remoteInterpolate } from "remotion";

export const SceneFive: React.FC = () => {
  const frame = useCurrentFrame();

  // Builder fade in
  const nameOpacity = remoteInterpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // URL fade in
  const urlOpacity = remoteInterpolate(frame, [40, 70], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Tagline fade in
  const taglineOpacity = remoteInterpolate(frame, [80, 110], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Final fade out
  const finalOpacity = remoteInterpolate(frame, [260, 300], [1, 0], {
    extrapolateLeft: "clamp",
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
        opacity: finalOpacity,
      }}
    >
      <div
        style={{
          fontSize: 56,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          color: "#F5F5F0",
          textAlign: "center",
          marginBottom: 24,
          opacity: nameOpacity,
          letterSpacing: -1,
        }}
      >
        Built by Mattia De Luca
      </div>

      <div
        style={{
          fontSize: 40,
          fontFamily: "JetBrains Mono, monospace",
          fontWeight: 600,
          color: "#E8A838",
          textAlign: "center",
          marginBottom: 32,
          opacity: urlOpacity,
          letterSpacing: 0.5,
        }}
      >
        selfrules.org/lab/casahunter
      </div>

      <div
        style={{
          fontSize: 16,
          fontFamily: "Inter, sans-serif",
          color: "#F5F5F0",
          textAlign: "center",
          maxWidth: 600,
          opacity: taglineOpacity,
          lineHeight: 1.6,
          letterSpacing: 0.2,
        }}
      >
        Product thinking applied to a personal problem
      </div>
    </AbsoluteFill>
  );
};

