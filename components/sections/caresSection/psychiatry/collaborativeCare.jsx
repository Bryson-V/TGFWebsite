"use client";

import styles from "./collaborativeCare.module.css";

export default function CollaborativeCare() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.card}>
          <div className={styles.badge}>INTEGRATED CARE</div>
          <h3 className={styles.title}>The Power of In-House Collaboration</h3>
          <p className={styles.description}>
            Within the Mind Care program, our Psychiatrist and Clinical Psychologist work directly together under one roof. This close interdisciplinary collaboration bridges medical management and psychological therapy—delivering comprehensive, unified behavioral health treatment tailored to your complete well-being.
          </p>
        </div>
      </div>
    </section>
  );
}