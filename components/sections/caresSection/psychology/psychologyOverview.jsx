"use client";

import styles from "./psychologyOverview.module.css";

export default function PsychologyOverview() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.overviewCard}>
          <h2 className={styles.sectionTitle}>Overview of Specialty & Involvement</h2>
          <p className={styles.leadText}>
            Our clinical psychology team provides comprehensive evaluations, evidence-based psychotherapy, and diagnostic testing tailored to each patient’s unique mental health needs.
          </p>
          <p className={styles.bodyText}>
            Clinical psychology focuses on understanding, preventing, and relieving psychologically-based distress or dysfunction. Through comprehensive testing and individual therapy, we work collaboratively with patients to promote emotional well-being, personal growth, and functional improvement across all areas of life.
          </p>
        </div>
      </div>
    </section>
  );
}