"use client";
import { useEffect, useState } from "react";
import styles from './countdown.module.css'

export default function CountdownTimer() {
  const targetDate = new Date("2025-02-28T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasExpired: false,
    isLast12Hours: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      const twelveHours = 12 * 60 * 60 * 1000;

      if (difference < 0) {
        setTimeLeft(prev => ({ ...prev, hasExpired: true }));
        clearInterval(timer);
      } else if (difference <= twelveHours) {
        setTimeLeft(prev => ({
          ...prev,
          isLast12Hours: true,
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        }));
      } else {
        setTimeLeft({
          hasExpired: false,
          isLast12Hours: false,
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.hasExpired) {
    return (
      <div className={styles.expiredMessage}>
        <p className={styles.messageText}>
          🎉 Hitung Mundur telah berakhir!<br/>
          Tetap semangat menjaga lingkungan!<br/>
          Silahkan bawa sampah Anda ke pos bank sampah terdekat.
        </p>
      </div>
    );
  }

  if (timeLeft.isLast12Hours) {
    return (
      <div className={styles.urgentMessage}>
        <p className={styles.messageTitle}>
          🙏 Terima Kasih!<br/>
          Atas partisipasi dalam program hari ini<br/>
          Mari terus jaga kebersihan lingkungan!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.countdown}>
      <div className={styles.timerItem}>
        <div className={styles.number}>{timeLeft.days}</div>
        <div className={styles.label}>Hari</div>
      </div>
      <div className={styles.timerItem}>
        <div className={styles.number}>{timeLeft.hours}</div>
        <div className={styles.label}>Jam</div>
      </div>
      <div className={styles.timerItem}>
        <div className={styles.number}>{timeLeft.minutes}</div>
        <div className={styles.label}>Menit</div>
      </div>
      <div className={styles.timerItem}>
        <div className={styles.number}>{timeLeft.seconds}</div>
        <div className={styles.label}>Detik</div>
      </div>
    </div>
  );
}