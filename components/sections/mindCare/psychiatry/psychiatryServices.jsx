"use client";

import styles from "./psychiatryServices.module.css";

export default function PsychiatryServices() {
  const psychiatryServices = [
    "Psychiatric Evaluation & Diagnosis",
    "Psychiatric Medication Management",
    "Development of Comprehensive Treatment Plans",
    "Transcranial Magnetic Stimulation (BrainsWay Deep TMS)",
    "Collaboration with Multidisciplinary Mental Health Professionals"
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        
        {/* Outer White Card Container */}
        <div className={styles.servicesContainer}>
          <h2 className={styles.cardHeader}>Psychiatry Services Include:</h2>
          <ul className={styles.serviceList}>
            {psychiatryServices.map((service, index) => (
              <li key={index} className={styles.serviceItem}>
                <span className={styles.bulletIcon}>✓</span>
                <span className={styles.serviceText}>{service}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}