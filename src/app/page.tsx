import About from "@/components/sections/about";
import styles from "./page.module.css";
import { Header } from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return <div className={styles.container}>
    <Header />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Contact />
  </div>
}
