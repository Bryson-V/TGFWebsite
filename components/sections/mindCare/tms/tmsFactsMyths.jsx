"use client";

import styles from "./tmsFactsMyths.module.css";

export default function TmsFactsMyths() {
  const items = [
    {
      myth: "TMS is administered or prescribed by a psychologist.",
      fact: "TMS is a medical procedure prescribed and overseen by a Psychiatrist (a medical doctor), though psychologists and therapists may refer patients for evaluation."
    },
    {
      myth: "TMS uses electrical currents or shocks like ECT.",
      fact: "TMS uses gentle magnetic fields (similar to an MRI machine). No electricity passes into the body, and no sedation or anesthesia is required."
    },
    {
      myth: "TMS circulates medication throughout your entire body.",
      fact: "TMS is non-systemic and non-invasive. It acts directly on targeted areas of the brain involved in mood regulation without systemic side effects."
    },
    {
      myth: "TMS requires downtime and recovery time afterward.",
      fact: "There is zero recovery time. Patients remain awake throughout treatment and can immediately drive or return to work right after their session."
    }
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.sectionTitle}>Facts vs. Myths</h2>
        <p className={styles.subtitle}>Clearing up common misunderstandings about TMS therapy</p>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            {/* Myth Header */}
            <div className={styles.mythBox}>
              <span className={styles.mythTag}>MYTH</span>
              <p className={styles.mythText}>{item.myth}</p>
            </div>

            {/* Fact Body */}
            <div className={styles.factBox}>
              <span className={styles.factTag}>FACT</span>
              <p className={styles.factText}>{item.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}