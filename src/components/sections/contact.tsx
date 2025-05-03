"use client";

import { FaLinkedinIn, FaLocationPin, FaPhone, FaTwitter } from "react-icons/fa6"
import Card from "../ui/card"
import styles from "./contact.module.css"
import { IoMail } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { useScrollIntoView } from "@/hooks/scrollIntoView"
import ContactForm from "../forms/contact";

export default function Contact() {
  const {
    ref,
    isVisible
  } = useScrollIntoView<HTMLDivElement>(0.25);

  return <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : 0}`} id="contact">
    <h1 className={styles.fadeIn}>Contact Us</h1>
    <p className={styles.fadeIn}>Any questions? Go write us a message!</p>

    <Card className={`${styles.card} ${styles.fadeIn}`}>
      <div className={styles.info}>
        <div>
          <h1>Contact Information</h1>
          <p>We will try to get in touch with you within 2 working days.</p>
        </div>

        <div className={styles.tag} >
          <FaPhone className={styles.icon} />
          <span>+44 (0)1156 783330</span>
        </div>

        <div className={styles.tag}>
          <IoMail className={styles.icon} />
          <span>info@visionzeroconnect.com</span>
        </div>

        <div className={styles.tag}>
          <FaLocationPin className={styles.icon} />
          <span>Hexgreave Hall NG22 8LS</span>
        </div>

        <div className={styles.tag}>
          <FcGoogle className={styles.icon} />
          <FaTwitter className={styles.icon} />
          <FaFacebook className={styles.icon} />
          <FaLinkedinIn className={styles.icon} />
        </div>
      </div>

      <div className={styles.form}>
        <h1>Send us a Message</h1>

        <ContactForm />
      </div>
    </Card>
  </div>
}
