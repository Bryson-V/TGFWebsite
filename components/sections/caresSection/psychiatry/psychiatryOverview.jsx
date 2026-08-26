"use client";

import styles from "./psychiatryOverview.module.css";

export default function PsychiatryOverview() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.overviewCard}>
          <h2 className={styles.sectionTitle}>Overview of Specialty & Involvement</h2>
          <p className={styles.leadText}>
            I am a psychiatrist and serve as Medical Director of Todu Guam Foundation. Within Mind Care, my role includes psychiatric evaluation, diagnosis, medication management, development of treatment plans, and collaboration with the other mental health professionals on our team.
          </p>
          <p className={styles.bodyText}>
            Psychiatry is a medical specialty focused on understanding and treating conditions that affect mood, thinking, behavior, sleep, concentration, and overall functioning. Because psychiatrists are physicians, we also consider physical health, medications, neurological conditions, substance use, and other medical factors that may contribute to psychiatric symptoms.
          </p>
          <p className={styles.bodyText}>
            My approach is to look at the whole person rather than focusing only on symptoms. Treatment may involve medication, psychotherapy, lifestyle changes, collaboration with our psychologist or counselor, or other evidence-based treatments when appropriate.
          </p>
          <p className={styles.bodyText}>
            One of my specialties at Mind Care is Transcranial Magnetic Stimulation, or TMS. We offer BrainsWay TMS as an additional treatment option for appropriate patients, particularly when traditional approaches such as medications have not provided sufficient improvement or have caused problematic side effects.
          </p>
        </div>
      </div>
    </section>
  );
}