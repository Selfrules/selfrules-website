import { useCurrentFrame, interpolate } from "remotion";

interface FadeInSequenceProps {
  items: string[];
  startFrame: number;
  delayBetweenItems: number;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  onItemRender?: (item: string, opacity: number) => React.ReactNode;
}

export const FadeInSequence: React.FC<FadeInSequenceProps> = ({
  items,
  startFrame,
  delayBetweenItems,
  fontSize = 24,
  color = "#F5F5F0",
  fontFamily = "Inter, sans-serif",
  onItemRender,
}) => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {items.map((item, index) => {
        const itemStartFrame = startFrame + index * delayBetweenItems;
        const itemEndFrame = itemStartFrame + 15;

        const opacity = interpolate(
          frame,
          [itemStartFrame, itemEndFrame],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );

        if (onItemRender) {
          return (
            <div key={index} style={{ opacity }}>
              {onItemRender(item, opacity)}
            </div>
          );
        }

        return (
          <div
            key={index}
            style={{
              fontSize,
              color,
              fontFamily,
              opacity,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
