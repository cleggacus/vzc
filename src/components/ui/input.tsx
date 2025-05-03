"use client";

import { useEffect, useState } from "react";
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
  const [errorInput, setErrorInput] = useState(false);

  useEffect(() => {
    setErrorInput(!!error);
  }, [error]);

  return (
    <div
      className={`${styles.container} ${className ?? ""} ${errorInput ? styles.error : ""} ${grow ? styles.grow : ""}`}
    >
      {label && <label className={styles.label}>{label}</label>}

      <input
        onChange={(e) => {
          setErrorInput(false);

          if (onChange) {
            onChange(e);
          }
        }}
        {...props}
      />
      {errorInput && (
        <p data-testid="input-error" className={styles.errorMessage}>
          {error}
        </p>
      )}
    </div>
  );
}
