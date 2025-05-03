"use client";

import { useAtTop } from "@/hooks/atTop";
import styles from "./header.module.css"
import Nav from "./nav"
import Image from "next/image";
import logoImage from "../../../public/logo.png";

export function Header() {
  const atTop = useAtTop();

  return <div className={`${styles.container} ${atTop ? styles.atTop : ""}`}>
    <div className={styles.left}>
      <Image
        src={logoImage}
        alt="Company logo"
        className={styles.logo}
      />
      <h1>ision Connect Zero</h1>
    </div>

    <div className={styles.right}>
      <Nav />
    </div>
  </div>
}
