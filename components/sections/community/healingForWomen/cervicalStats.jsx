"use client";

import Container from "@/components/ui/Container";
import statsData from "@/content/site-data/cervicalstatsData.json";
import styles from "./cervicalStats.module.css";

export default function CervicalStatsModule() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.gridContainer}>
            {statsData.map((item) => (
              <div key={item.id} className={styles.statCard}>
                <div className={styles.iconBox}>
                  {/* Checkmark SVG Icon */}
                  <svg 
                    className={styles.checkmarkIcon} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className={styles.statText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}