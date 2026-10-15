import { useCurrentFrame, interpolate } from "remotion";

interface TypeWriterProps {
  text: string;
  startFrame: number;
  speed?: number; // characters per second
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  showCursor?: boolean;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  startFrame,
  speed = 25, // characters per second
  fontSize = 18,
  color = "#F5F5F0",
  fontFamily = "JetBrains Mono, monospace",
  showCursor = true,
}) => {
  const frame = useCurrentFrame();
  const framesSinceStart = frame - startFrame;
  const charsToShow = Math.floor((framesSinceStart * speed) / 30); // 30fps
  const displayText = text.slice(0, Math.max(0, charsToShow));
  const isTyping = charsToShow < text.length;

  return (
    <span
      style={{
        fontSize,
        color,
        fontFamily,
        letterSpacing: 1,
      }}
    >
      {displayText}
      {showCursor && isTyping && (
        <span style={{ marginLeft: 4, opacity: 0.7 }}>|</span>
      )}
    </span>
  );
};
