"use client";

import Image from '@/components/ui/Image';
import styles from "./mission.module.css";

export default function AboutMindCareMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Text Content */}
        <div className={styles.textContent}>
          <span className={styles.badge}>TODU GUAM FOUNDATION</span>
          <h2 className={styles.title}>About Mind Care</h2>
          <p className={styles.subhead}>
            Mind Care is the mental health division of Todu Guam Foundation.
          </p>
          <p className={styles.bodyText}>
            Our goal is to provide comprehensive, compassionate, and accessible healthcare—encompassing both physical and mental well-being—for individuals and families across our community.
          </p>

          <div className={styles.stigmaBox}>
            <h3 className={styles.stigmaTitle}>Breaking the Stigma</h3>
            <p className={styles.stigmaText}>
              Seeking help for depression, anxiety, trauma, or any other mental health condition should be viewed no differently than seeking treatment for physical health.
            </p>
          </div>
        </div>

        {/* Right Column: Floating Image with Soft Shadow */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/BehavioralHealth/mindCare/AshTMS.jpeg"
            alt="Mind Care Clinic"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}