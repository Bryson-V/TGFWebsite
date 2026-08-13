"use client";

import styles from "./impact.module.css";

export default function AboutMindCareImpact() {
  const impactAreas = [
    "Relationships & Family",
    "Physical Health",
    "Work & School Performance",
    "Personal Sense of Hope"
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <span className={styles.badge}>PATIENT-CENTERED GOALS</span>
          <h2 className={styles.title}>Treating the Person, Not Just the Diagnosis</h2>
          
          <p className={styles.leadText}>
            Mind Care represents the opportunity to deliver thoughtful, evidence-based behavioral health care while treating every patient as a unique human being.
          </p>

          <p className={styles.bodyText}>
            Mental health conditions can affect every dimension of a person's life. We structure our clinical care to directly support recovery across all key areas:
          </p>

          <ul className={styles.impactList}>
            {impactAreas.map((area, index) => (
              <li key={index} className={styles.impactItem}>
                <span className={styles.bulletIcon}>✓</span>
                <span className={styles.impactText}>{area}</span>
              </li>
            ))}
          </ul>

          <div className={styles.summaryFooter}>
            <p className={styles.summaryText}>
              <strong>Our Ultimate Purpose:</strong> To help our patients regain stability, restore daily functioning, and build a lasting quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}