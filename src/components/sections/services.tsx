"use client";

import { FaUserTie } from "react-icons/fa"
import Card from "../ui/card"
import styles from "./services.module.css"
import { IconType } from "react-icons"
import { MdAssessment } from "react-icons/md"
import { FaComputer } from "react-icons/fa6"
import { TiSpanner } from "react-icons/ti"
import { useScrollIntoView } from "@/hooks/scrollIntoView"

export default function Services() {
  const {
    ref,
    isVisible
  } = useScrollIntoView<HTMLDivElement>(0.25);

  return <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ""}`} id="services">
    <h1 className={styles.fadeIn}>Our Services</h1>
    <p className={styles.fadeIn}>We provide a multitude of services, here is a breif overview of our services</p>

    <div className={styles.cards}>
      <ServiceCard
        icon={FaUserTie}
        name="Expert Consultation"
        description="Get personalized guidance from our ESG specialists"
        points={[
          "fio aweoif joawie jfoiwaej fioaw jeofi woaef",
          "aweoif joawie jfoiwaej fioaw jeofi woaef",
          "joawie jfoiwaej fioaw jeofi woaef",
          "jfoiwaej fioaw jeofi woaef",
        ]}
      />

      <ServiceCard
        icon={MdAssessment}
        name="Free Assesment"
        description="Get a detailed analysis of your ESG needs"
        points={[
          "fio aweoif joawie jfoiwaej fioaw jeofi woaef",
          "aweoif joawie jfoiwaej fioaw jeofi woaef",
          "joawie jfoiwaej fioaw jeofi woaef",
          "jfoiwaej fioaw jeofi woaef",
        ]}
      />

      <ServiceCard
        icon={FaComputer}
        name="Demo Session"
        description="See the platform in action with your data"
        points={[
          "fio aweoif joawie jfoiwaej fioaw jeofi woaef",
          "aweoif joawie jfoiwaej fioaw jeofi woaef",
          "joawie jfoiwaej fioaw jeofi woaef",
          "jfoiwaej fioaw jeofi woaef",
        ]}
      />

      <ServiceCard
        icon={TiSpanner}
        name="Implementation Support"
        description="Full assistance with platform onboarding"
        points={[
          "fio aweoif joawie jfoiwaej fioaw jeofi woaef",
          "aweoif joawie jfoiwaej fioaw jeofi woaef",
          "joawie jfoiwaej fioaw jeofi woaef",
          "jfoiwaej fioaw jeofi woaef",
        ]}
      />
    </div>
  </div>
}

type ServiceCardProps = {
  icon: IconType,
  name: string,
  description: string,
  points: string[]
}

function ServiceCard(props: ServiceCardProps) {
  const Icon = props.icon;

  return <Card className={`${styles.card} ${styles.fadeIn}`}>
    <Icon className={styles.icon} />
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <ul>
      {props.points.map((point, i) => <li key={i}>{point}</li>)}
    </ul>
  </Card>
}
