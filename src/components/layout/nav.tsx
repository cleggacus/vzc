"use client";

import { IoMenu } from "react-icons/io5";
import styles from "./nav.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  }

  const handleScroll = () => {
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return <div
    className={styles.container}
    ref={ref}
  >
    <IoMenu
      onClick={() => setOpen(open => !open)}
      className={styles.menuIcon}
    />

    <div className={`${styles.links} ${open ? styles.open : styles.close}`}>
      <Link href="#hero" scroll={true}>Hero</Link>
      <Link href="#about" scroll={true}>About Us</Link>
      <Link href="#services" scroll={true}>Services</Link>
      <Link href="#projects" scroll={true}>Projects</Link>
      <Link href="#contact" scroll={true}>Contact</Link>
    </div>
  </div >
}
