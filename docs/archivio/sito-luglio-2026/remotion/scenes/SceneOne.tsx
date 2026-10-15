import { AbsoluteFill, useCurrentFrame, interpolate as remoteInterpolate } from "remotion";

const PLATFORMS = [
  "Immobiliare.it",
  "Idealista",
  "Subito",
  "Casa.it",
  "Bakeca",
  "Airbnb",
  "Facebook",
  "Agency sites",
];

export const SceneOne: React.FC = () => {
  const frame = useCurrentFrame();

  // Title fade in
  const titleOpacity = remoteInterpolate(frame, [0, 30], [0, 1], {
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
      <h1
        style={{
          fontSize: 72,
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          color: "#F5F5F0",
          textAlign: "center",
          margin: 0,
          marginBottom: 60,
          opacity: titleOpacity,
          letterSpacing: -1,
          lineHeight: 1.2,
        }}
      >
        Finding an apartment
        <br />
        in Italy is broken
      </h1>

      {/* Grid of platforms */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
          marginBottom: 60,
          width: "100%",
          maxWidth: 800,
        }}
      >
        {PLATFORMS.map((platform, index) => {
          const platformStartFrame = 40 + index * 12;
          const platformEndFrame = platformStartFrame + 15;

          const opacity = remoteInterpolate(
            frame,
            [platformStartFrame, platformEndFrame],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }
          );

          const scale = remoteInterpolate(
            frame,
            [platformStartFrame, platformEndFrame],
            [0.95, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }
          );

          return (
            <div
              key={platform}
              style={{
                padding: "16px 24px",
                backgroundColor: "rgba(245, 245, 240, 0.05)",
                border: "1px solid rgba(232, 168, 56, 0.2)",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 16,
                color: "#F5F5F0",
                textAlign: "center",
                opacity,
                transform: `scale(${scale})`,
              }}
            >
              {platform}
            </div>
          );
        })}
      </div>

      {/* Bottom text */}
      <div
        style={{
          fontSize: 28,
          fontFamily: "Inter, sans-serif",
          color: "#E8A838",
          textAlign: "center",
          fontWeight: 600,
          opacity: remoteInterpolate(frame, [100, 130], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        8 platforms. Zero intelligence.
      </div>
    </AbsoluteFill>
  );
};
