// components/Achievements.tsx
"use client";

import { useEffect, useRef } from "react";
import styles from "./achievements.module.css";

const Achievements = () => {
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    counterRefs.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  const animateCounter = (element: Element) => {
    const target = +(element.getAttribute("data-target") || 0);
    const duration = 2000;
    const startTime = Date.now();

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentNumber = Math.floor(progress * target);
      element.textContent = formatNumber(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = formatNumber(target);
      }
    };

    requestAnimationFrame(updateCount);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}rb`;
    return num.toString();
  };

  const achievements = [
    { icon: "/icons/money.svg", target: 2400000, title: "pendapatan" },
    { icon: "/icons/trash.svg", target: 1244, title: "KG" },
    { icon: "/icons/people.svg", target: 51, title: "Nasabah" },
    { icon: "/icons/box.svg", target: 48, title: "Jenis Barang Yang Diterima" },
  ];

  return (
    <section className={styles.achievements}>
      <h2 className={styles.sectionTitle}>Pencapaian Kita</h2>

      <div className={styles.achievementGrid}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievementItem}>
            <img
              src={achievement.icon}
              alt={achievement.title}
              className={styles.achievementIcon}
            />
            <div
              ref={(el) => {
                counterRefs.current[index] = el;
              }}
              className={styles.counter}
              data-target={achievement.target}
            >
              0
            </div>
            <h3 className={styles.achievementTitle}>{achievement.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
