import { FaLinkedin } from "react-icons/fa"
import Button from "../ui/button"
import Input from "../ui/input"
import styles from "./footer.module.css"
import { FaFacebook, FaTwitter } from "react-icons/fa6"

export default function Footer() {
  return <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.contact}>
        <div className={styles.form}>
          <h2>Subscribe to our newsletter</h2>
          <p>Stay updated with the latest insights, product updates, and industry news.</p>
          <div className={styles.inputs}>

            <Input
              className={styles.input}
              placeholder="Enter your email"
            />

            <Button>Subscribe</Button>
          </div>
        </div>

        <div className={styles.socials}>
          <h2>Follow Us</h2>
          <div className={styles.icons}>
            <FaLinkedin className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaFacebook className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <h3>Vision Zero Connect</h3>
        <p>{`© 2025 Vision Zero Connect. All rights reserved.`}</p>
      </div>
    </div>
  </div>
}
