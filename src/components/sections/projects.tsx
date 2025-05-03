"use client";

import Image from "next/image";
import Card from "../ui/card";
import styles from "./projects.module.css"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import pp1 from "../../../public/pp1.jpg";
import pp2 from "../../../public/pp2.jpg";
import pp3 from "../../../public/pp3.jpg";
import { useScrollIntoView } from "@/hooks/scrollIntoView";

type Testimonial = {
  title: string,
  message: string,
  name: string,
  occupation: string,
  image: string | StaticImport,
}

export default function Projects() {
  const {
    ref,
    isVisible
  } = useScrollIntoView<HTMLDivElement>(0.25);

  return <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ""}`} id="projects">
    <h1 className={styles.fadeUp}>Testimonials</h1>
    <p className={styles.fadeUp}>We value our relationship with customer</p>

    <div className={styles.testimonials}>
      <div className={`${styles.column} ${styles.fadeDown}`}>
        <Card className={styles.flex1} />
        <Card className={styles.flex2} />
        <Card className={styles.flex1} />
      </div>

      {
        testimonials.map((testimonial, i) =>
          <div key={i} className={`${styles.column} ${i % 2 == 0 ? styles.fadeUp : styles.fadeDown}`}>
            <Card className={styles[`flex${(i % 2) + 1}`]} />
            <Card className={styles.real} variant="1">
              <h2>{testimonial.title}</h2>
              <p>{testimonial.message}</p>

              <div className={styles.profile}>
                <Image
                  className={styles.image}
                  alt={`Image of ${testimonial.name}`}
                  src={testimonial.image}
                />

                <div className={styles.info}>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p>{testimonial.occupation}</p>
                </div>
              </div>
            </Card>
            <Card className={styles[`flex${((i + 1) % 2) + 1}`]} />
          </div>
        )
      }

      <div className={`${styles.column} ${styles.fadeDown}`}>
        <Card className={styles.flex1} />
        <Card className={styles.flex2} />
        <Card className={styles.flex1} />
      </div>

      <div className={styles.overlay} />
    </div>
  </div >
}

const testimonials: Testimonial[] = [
  {
    title: "Transforming Our ESG Strategy with ESG Navigate",
    message: "Implementing ESG Navigate revolutionized our approach to sustainability. The platform's intuitive design and comprehensive analytics provided us with actionable insights, enabling us to align our operations with global ESG standards seamlessly.",
    name: "Bob Smith",
    occupation: "CSO, GreenFuture Corp",
    image: pp1
  },
  {
    title: "Exceptional Support and Insightful Guidance",
    message: "The team at Vision Zero Connect offered unparalleled support throughout our ESG reporting journey. Their expertise and dedication ensured we met compliance requirements while fostering a culture of sustainability within our organization.",
    name: "Sophie Dubois",
    occupation: "CSR Director, EcoDynamics",
    image: pp2
  },
  {
    title: "A Game-Changer in ESG Reporting",
    message: "Partnering with Vision Zero Connect has been transformative. Their innovative tools and strategic advice have not only streamlined our reporting processes but also enhanced our overall ESG performance, positioning us as leaders in sustainable practices.",
    name: "Anush Varma",
    occupation: "Env. Lead, TerraNova",
    image: pp3
  }
];
