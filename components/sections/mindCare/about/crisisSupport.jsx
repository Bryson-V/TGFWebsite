"use client";

import styles from "./crisisSupport.module.css";

export default function CrisisSupportBanner() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.bannerContainer}>
          <div className={styles.headerGroup}>
            <span className={styles.alertIcon}>⚠️</span>
            <div>
              <h3 className={styles.title}>Immediate & Crisis Support Notice</h3>
              <p className={styles.disclaimerText}>
                <strong>Mind Care is an outpatient behavioral health clinic and is not an immediate crisis or walk-in emergency facility.</strong> If you or someone you know is experiencing a mental health emergency, life-threatening situation, or severe emotional distress, please seek help immediately using the resources below.
              </p>
            </div>
          </div>

          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <span className={styles.resourceLabel}>National Crisis Line</span>
              <a href="tel:988" className={styles.resourceValue}>Call or Text 988</a>
              <span className={styles.resourceSub}>Available 24/7 · Free & Confidential</span>
            </div>

            <div className={styles.resourceCard}>
              <span className={styles.resourceLabel}>Guam Behavioral Health (GBHWC)</span>
              <a href="tel:6716478833" className={styles.resourceValue}>(671) 647-8833</a>
              <span className={styles.resourceSub}>24/7 Guam Crisis Hotline</span>
            </div>

            <div className={styles.resourceCard}>
              <span className={styles.resourceLabel}>Emergency Services</span>
              <a href="tel:911" className={styles.resourceValue}>Call 911</a>
              <span className={styles.resourceSub}>Or visit the nearest Emergency Room</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}