"use client";

import styles from "./about.module.css"
import treesImage from "../../../public/trees.jpg";
import analyticsImage from "../../../public/analytics.jpg";
import Image from "next/image";
import { useScrollIntoView } from "@/hooks/scrollIntoView";

export default function About() {
  const {
    ref,
    isVisible
  } = useScrollIntoView<HTMLDivElement>();

  return <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ""}`} id="about">
    <div className={styles.left}>
      <Image
        className={`${styles.mainImage} ${styles.fadeIn}`}
        alt="Green image of trees"
        src={treesImage}
      />

      <Image
        className={`${styles.secondaryImage} ${styles.fadeIn}`}
        alt="Analytics graphs"
        src={analyticsImage}
      />
    </div>

    <div className={styles.right}>
      <h1 className={styles.fadeIn}>Our Mission</h1>

      <p className={styles.fadeIn}>
        At Vision Zero Connect, we are dedicated to transforming safety solutions through innovative technology. Our platform empowers businesses and organizations to reduce risk, increase efficiency, and achieve safety goals with data-driven insights. We strive to create safer environments for all by harnessing the power of connectivity, real-time data, and collaboration. With a passion for sustainability and operational excellence, Vision Zero Connect is your trusted partner in advancing safety standards across industries.
      </p>

      <ul className={styles.fadeIn}>
        <li>Active building performance dashboard</li>
        <li>Energy efficiency optimisation</li>
        <li>Portfolio-wide analytics dashboard</li>
        <li>Automated report generation</li>
      </ul>
    </div>
  </div>
}
