"use client";
import CountdownTimer from "@/components/countdown/Countdown";
import styles from "./hero.module.css";
import heroBackground from "../../../public/assets/hero.png"; // Import gambar

export default function Hero() {
  return (
    <section 
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroBackground.src})`, // Gunakan gambar yang diimpor
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
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