"use client";

import { useAtTop } from "@/hooks/atTop";
import styles from "./header.module.css"
import Nav from "./nav"

export function Header() {
  const atTop = useAtTop();

  return <div className={`${styles.container} ${atTop ? styles.atTop : ""}`}>
    <div className={styles.left}>
      <h1>Some Logo</h1>
    </div>

    <div className={styles.right}>
      <Nav />
    </div>
  </div>
}
