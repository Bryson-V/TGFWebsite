import React from 'react';
import styles from './missionHero.module.css';

const MissionHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.tagline}>MISSION & VISION</span>
        <h1 className={styles.headline}>Championing Health Equity for Guam</h1>
        <p className={styles.description}>
          To achieve health equity across Guam and the Micronesian region — breaking down barriers, delivering compassionate care, and reducing disparities through mobile clinics, preventative programs, and local specialty care.
        </p>
      </div>
    </section>
  );
};

export default MissionHero;