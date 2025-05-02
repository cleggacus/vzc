"use client";

import { FaLeaf, FaTree } from "react-icons/fa"
import Button from "../ui/button"
import Card from "../ui/card"
import styles from "./hero.module.css"
import { MdOutlineEnergySavingsLeaf } from "react-icons/md"
import Link from "next/link"
import { useScrollIntoView } from "@/hooks/scrollIntoView"

export default function Hero() {
  const {
    ref,
    isVisible
  } = useScrollIntoView<HTMLDivElement>();

  return <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ""}`} id="hero">
    <div className={styles.heading}>
      <h1 className={styles.fadeIn}>Welcome to <span className={styles.highlight}>Vision Zero Connect</span></h1>
      <p className={styles.fadeIn}>Select your platform to transform sustainability and building management</p>
      <div className={`${styles.buttons} ${styles.fadeIn}`}>
        <Link href="#contact"><Button>Contact Us</Button></Link>
        <Link href="#about">Learn More</Link>
      </div>
    </div>

    <div className={styles.cards}>
      <Card className={`${styles.card} ${styles.fadeIn}`} variant="1">
        <FaLeaf className={styles.icon1} />
        <h1>ESG</h1>
        <p>Transform your ESG data into strategic intelligence for sustainable business growth</p>
        <ul>
          <li>Comprehensive ESG data management</li>
          <li>Automated reporting for major frameworks</li>
          <li>Materiality assessment tools</li>
          <li>Automated report generation</li>
        </ul>
        <Button variant="2">Explore Platform</Button>
      </Card>

      <div className={styles.connector}>
        <div className={styles.fadeIn} />
        <MdOutlineEnergySavingsLeaf className={`${styles.icon} ${styles.fadeIn}`} />
        <div className={styles.fadeIn} />
      </div>

      <Card className={`${styles.card} ${styles.fadeIn}`} variant="2">
        <FaTree className={styles.icon2} />
        <h1>Portfolio One</h1>
        <p>Complete building management solution for portfolio optimisation and performance</p>
        <ul>
          <li>Active building performance dashboard</li>
          <li>Energy efficiency optimisation</li>
          <li>Portfolio-wide analytics dashboard</li>
          <li>Automated report generation</li>
        </ul>
        <Button variant="3">Explore Platform</Button>
      </Card>
    </div>
  </div>
}
