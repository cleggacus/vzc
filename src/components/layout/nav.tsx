import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return <div className={styles.container}>
    <Link
      href="#hero"


      scroll
    >Hero</Link>

    <Link href="#about" scroll={true}>About Us</Link>

    <Link href="#services" scroll={true}>Services</Link>

    <Link href="#projects" scroll={true}>Projects</Link>

    <Link href="#contact" scroll={true}>Contact</Link>
  </div>
}
