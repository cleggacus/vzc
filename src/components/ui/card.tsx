import styles from "./card.module.css";

export type CardProps = {
  variant?: "1" | "2";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function Card({
  className = "",
  variant = "1",
  ...props
}: CardProps) {
  return (
    <div
      className={`${styles.container} ${styles[`variant-${variant}`]} ${className}`}
      {...props}
    />
  );
}
