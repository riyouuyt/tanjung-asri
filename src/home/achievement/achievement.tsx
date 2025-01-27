"use client";

import { useEffect, useRef, useCallback } from "react";
import styles from "./achievements.module.css";
import { MoneyIcon, TrashIcon, PeopleIcon, BoxIcon } from "./Icons";

const Achievements = () => {
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animateCounter = useCallback((element: Element) => {
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
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}rb`;
    return num.toString();
  };

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
  }, [animateCounter]);

  const achievements = [
    { icon: <MoneyIcon className={styles.achievementIcon} />, target: 2400000, title: "Pendapatan" },
    { icon: <TrashIcon className={styles.achievementIcon} />, target: 1244, title: "KG" },
    { icon: <PeopleIcon className={styles.achievementIcon} />, target: 51, title: "Nasabah" },
    { icon: <BoxIcon className={styles.achievementIcon} />, target: 48, title: "Jenis Barang Yang Diterima" },
  ];

  return (
    <section className={styles.achievements}>
      <h2 className={styles.sectionTitle}>Pencapaian Kita</h2>

      <div className={styles.achievementGrid}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievementItem}>
            {achievement.icon}
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
