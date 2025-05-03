"use client";

import styles from "./input.module.css";

type InputProps = {
  label?: string;
  error?: string;
  grow?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({
  label,
  error,
  onChange,
  grow,
  className,
  ...props
}: InputProps) {
  return (
    <div
      className={`${styles.container} ${className ?? ""} ${error ? styles.error : ""} ${grow ? styles.grow : ""}`}
    >
      {label && <label className={styles.label}>{label}</label>}

      <input
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        {...props}
      />
      {error && (
        <p data-testid="input-error" className={styles.errorMessage}>
          {error}
        </p>
      )}
    </div>
  );
}
