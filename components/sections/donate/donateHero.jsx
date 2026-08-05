import React from 'react';
import styles from './donateHero.module.css';

const DonateHero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background Image with Navy Overlay */}
      <div className={styles.imageContainer}>
        <img 
          src="/images/donate/Donate.jpg" 
          alt="Volunteers helping the Guam community" 
          className={styles.heroImage}
        />
        {/* Deep navy tint overlay */}
        <div className={styles.overlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          {/* Eyebrow Tag */}
          <span className={styles.eyebrow}>
            Make a Difference
          </span>

          {/* Serif Headline */}
          <h1 className={styles.title}>
            Your gift helps Guam heal.
          </h1>

          {/* Description Paragraph */}
          <p className={styles.subtitle}>
            Every donation goes directly to providing free healthcare, education, and support to residents who need it most — one person at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateHero