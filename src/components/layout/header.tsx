import styles from "./header.module.css"
import Nav from "./nav"

export function Header() {
  return <div className={styles.container}>
    <div className={styles.left}>
      <h1>Some Logo</h1>
    </div>

    <div className={styles.right}>
      <Nav />
    </div>
  </div>
}
