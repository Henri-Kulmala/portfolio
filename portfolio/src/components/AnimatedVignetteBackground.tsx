import styles from "./AnimatedVignetteBackground.module.css";

type Props = {
  className?: string;
  intensity?: number;
};

export default function AnimatedVignetteBackground({
  className,
  intensity = 0.85,
}: Props) {
  return (
    <div
      className={[styles.bg, className].filter(Boolean).join(" ")}
      style={{ ["--vig-intensity" as any]: intensity }}
      aria-hidden="true"
    />
  );
}
