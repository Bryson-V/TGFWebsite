"use client";

import styles from "./psychologyServices.module.css";

export default function PsychologyServices() {
  const psychologyServices = [
    "Outpatient Individual Psychotherapy (counseling) for Adults and Children/Adolescents",
    "Couples Therapy",
    "Autism, ADHD, & Learning Disorder Evaluations for Adults and Children/Adolescents",
    "Comprehensive Psychological Testing for Diagnosis of Mental Health Conditions"
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.servicesContainer}>
          <h2 className={styles.cardHeader}>Clinical Psychology Services Include:</h2>
          <ul className={styles.serviceList}>
            {psychologyServices.map((service, index) => (
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