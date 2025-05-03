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
  } = useScrollIntoView<HTMLDivElement>();

  return <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ""}`} id="services">
    <h1 className={styles.fadeIn}>Our Services</h1>
    <p className={styles.fadeIn}>We provide a multitude of services, here is a breif overview of our services</p>

    <div className={styles.cards}>
      <ServiceCard
        icon={FaUserTie}
        name="Expert Consultation"
        description="Get personalized guidance from our ESG specialists"
        points={[
          "One-on-one strategy call",
          "Industry-specific ESG advice",
          "Actionable insights, fast",
          "Align with global standards"
        ]}
      />

      <ServiceCard
        icon={MdAssessment}
        name="Free Assesment"
        description="Get a detailed analysis of your ESG needs"
        points={[
          "Identify ESG risk factors",
          "Customized gap analysis",
          "Quick readiness snapshot",
          "Prioritized improvement areas"
        ]}
      />

      <ServiceCard
        icon={FaComputer}
        name="Demo Session"
        description="See the platform in action with your data"
        points={[
          "Live walkthrough with expert",
          "Use your real data",
          "Interactive Q&A",
          "Explore key platform features",
        ]}
      />

      <ServiceCard
        icon={TiSpanner}
        name="Implementation Support"
        description="Full assistance with platform onboarding"
        points={[
          "Step-by-step onboarding",
          "Technical setup handled",
          "Team training included",
          "Ongoing success check-ins",

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
