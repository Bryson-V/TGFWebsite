"use client";

import styles from "./tmsEligibility.module.css";

export default function TmsEligibility() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.headerGroup}>
            <span className={styles.badge}>PATIENT EVALUATION & ELIGIBILITY</span>
            <h2 className={styles.title}>Is TMS Right for You?</h2>
          </div>
          
          <div className={styles.bodyContent}>
            <p className={styles.highlightText}>
              It is important to emphasize that Transcranial Magnetic Stimulation (TMS) is not appropriate for every person or every psychiatric condition.
            </p>
            <p className={styles.standardText}>
              Prior to initiating treatment, each patient receives a comprehensive clinical evaluation to determine whether TMS is a medically appropriate option for them and how it can be seamlessly integrated into their broader, personalized behavioral health care plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}