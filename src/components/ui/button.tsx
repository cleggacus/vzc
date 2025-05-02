import styles from "./button.module.css";

type ButtonProps = {
  variant?: "1" | "2" | "3";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  children,
  variant = "1",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.container} ${styles[`variant-${variant}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
