"use client";
import { motion } from "framer-motion"; 
import CountdownTimer from "@/components/countdown/Countdown";
import styles from "./hero.module.css";
import heroBackground from "../../../public/assets/hero.png"; 

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("pencapaian");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroBackground.src})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handleScroll} 
    >
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.welcomeText}>SELAMAT DATANG</h2>

        <h1 className={styles.title}>
          BANK SAMPAH <span className={styles.brDesktop} /> TANJUNG ASRI
        </h1>

        <div className={styles.countdownWrapper}>
          <CountdownTimer />
        </div>

        <p className={styles.description}>
          Bergabunglah dalam gerakan menjaga lingkungan sebelum waktu habis!
        </p>
      </motion.div>
    </section>
  );
}
