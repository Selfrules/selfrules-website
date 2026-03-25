import { useCurrentFrame, interpolate } from "remotion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  startFrame: number;
  endFrame: number;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  startFrame,
  endFrame,
  fontSize = 48,
  color = "#E8A838",
  fontFamily = "JetBrains Mono, monospace",
}) => {
  const frame = useCurrentFrame();

  const displayValue = Math.round(
    interpolate(frame, [startFrame, endFrame], [from, to], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <span
      style={{
        fontSize,
        color,
        fontFamily,
        fontWeight: 700,
        letterSpacing: 1,
      }}
    >
      {displayValue.toLocaleString()}
    </span>
  );
};
