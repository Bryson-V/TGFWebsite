"use client";

import styles from "./tmsFactsMyths.module.css";
import items from "@/content/site-data/tmsMythsFactsData.json";

export default function TmsFactsMyths() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.sectionTitle}>Facts vs. Myths</h2>
        <p className={styles.subtitle}>Clearing up common misunderstandings about TMS therapy</p>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={item.id || index} className={styles.card}>
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