
import styles from "./AnimatedBlobBackground.module.css";

type Props = {
  className?: string;
  baseColor?: string; 
  strength?: number; 
};

export default function AnimatedBlobBackground({
  className,
  baseColor = "#FFFCF2",
  strength = 0.9,
}: Props) {
  return (
    <div
      className={[styles.bg, className].filter(Boolean).join(" ")}
      style={
        {
          ["--base" as any]: baseColor,
          ["--strength" as any]: String(strength),
        } as React.CSSProperties
      }
      aria-hidden="true"
    />
  );
}
