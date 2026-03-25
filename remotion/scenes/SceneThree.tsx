import { AbsoluteFill, useCurrentFrame, interpolate as remoteInterpolate } from "remotion";

export const SceneThree: React.FC = () => {
  const frame = useCurrentFrame();

  // Big counter fade in
  const counterOpacity = remoteInterpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Tier bars fade in
  const barsOpacity = remoteInterpolate(frame, [60, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Stats fade in
  const statsOpacity = remoteInterpolate(frame, [150, 180], [0, 1], {
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
      {/* Big counter */}
      <div
        style={{
          fontSize: 128,
          fontFamily: "JetBrains Mono, monospace",
          fontWeight: 700,
          color: "#E8A838",
          textAlign: "center",
          marginBottom: 80,
          opacity: counterOpacity,
          letterSpacing: 2,
        }}
      >
        1,029
        <div
          style={{
            fontSize: 32,
            color: "#F5F5F0",
            marginTop: 16,
            letterSpacing: 0.5,
          }}
        >
          listings processed today
        </div>
      </div>

      {/* Tier bars */}
      <div
        style={{
          width: "100%",
          maxWidth: 800,
          marginBottom: 80,
          opacity: barsOpacity,
        }}
      >
        <TierBar
          label="HIGH (75+)"
          count={73}
          color="#22C55E"
          totalWidth={800}
          maxCount={524}
          frame={frame}
          barStartFrame={60}
        />
        <TierBar
          label="MEDIUM (50-74)"
          count={322}
          color="#F59E0B"
          totalWidth={800}
          maxCount={524}
          frame={frame}
          barStartFrame={80}
        />
        <TierBar
          label="LOW (<50)"
          count={524}
          color="#EF4444"
          totalWidth={800}
          maxCount={524}
          frame={frame}
          barStartFrame={100}
        />
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          opacity: statsOpacity,
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 600,
            color: "#E8A838",
            textAlign: "center",
          }}
        >
          Signal-to-noise ratio: 7%
        </div>
        <div
          style={{
            fontSize: 28,
            fontFamily: "JetBrains Mono, monospace",
            color: "#F5F5F0",
            textAlign: "center",
          }}
        >
          €0.25/user/month
          <div
            style={{
              fontSize: 18,
              color: "#22C55E",
              marginTop: 8,
            }}
          >
            95% margin
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

interface TierBarProps {
  label: string;
  count: number;
  color: string;
  totalWidth: number;
  maxCount: number;
  frame: number;
  barStartFrame: number;
}

const TierBar: React.FC<TierBarProps> = ({
  label,
  count,
  color,
  totalWidth,
  maxCount,
  frame,
  barStartFrame,
}) => {
  const barWidth = (count / maxCount) * totalWidth;

  const animatedWidth = remoteInterpolate(
    frame,
    [barStartFrame, barStartFrame + 30],
    [0, barWidth],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
          fontSize: 14,
          fontFamily: "JetBrains Mono, monospace",
          color: "#F5F5F0",
        }}
      >
        <span>{label}</span>
        <span style={{ color }}>{count}</span>
      </div>
      <div
        style={{
          height: 24,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: 0,
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: color,
            width: animatedWidth,
            borderRadius: 0,
            transition: "none",
          }}
        />
      </div>
    </div>
  );
};

