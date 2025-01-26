"use client";
import CountdownTimer from "@/components/countdown/Countdown";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h2 className={styles.welcomeText}>
          SELAMAT DATANG
        </h2>
        
        <h1 className={styles.title}>
          BANK SAMPAH <span className={styles.brDesktop} /> TANJUNG ASRI
        </h1>
        
        <div className={styles.countdownWrapper}>
          <CountdownTimer />
        </div>

        <p className={styles.description}>
          Bergabunglah dalam gerakan menjaga lingkungan sebelum waktu habis!
        </p>
      </div>
    </section>
  );
}