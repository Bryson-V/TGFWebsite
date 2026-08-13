"use client";

import styles from "./mission.module.css";

export default function AboutMindCareMission() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <span className={styles.badge}>TODU GUAM FOUNDATION</span>
          <h2 className={styles.title}>About Mind Care</h2>
          
          <p className={styles.leadText}>
            Mind Care is the mental health division of Todu Guam Foundation. Our goal is to provide comprehensive, compassionate, and accessible healthcare—encompassing both physical and mental well-being—for individuals and families across our community.
          </p>

          <div className={styles.stigmaBox}>
            <h3 className={styles.stigmaTitle}>Breaking the Stigma around Mental Healthcare</h3>
            <p className={styles.stigmaText}>
              Seeking help for depression, anxiety, trauma, or any other mental health condition should be viewed no differently than seeking treatment for a physical medical condition. We are committed to fostering a supportive, stigma-free environment where care is accessible and normalized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}