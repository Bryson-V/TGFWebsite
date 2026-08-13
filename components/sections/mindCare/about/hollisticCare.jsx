"use client";

import styles from "./holisticCare.module.css";

export default function AboutMindCareHolisticCare() {
  const pillars = [
    { title: "Psychiatry", desc: "Biological & medical evaluations" },
    { title: "Psychology", desc: "Comprehensive testing & therapy" },
    { title: "Counseling", desc: "Relational & emotional support" }
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <span className={styles.badge}>OUR PHILOSOPHY</span>
          <h2 className={styles.title}>A Truly Holistic Perspective</h2>
          
          <p className={styles.bodyText}>
            What makes Mind Care especially valuable is our multi-perspective approach. Our team integrates <strong>psychiatry, psychology, and counseling services</strong> to address the biological, psychological, emotional, relational, and social factors that influence well-being.
          </p>

          {/* Service Pillars Grid */}
          <div className={styles.pillarGrid}>
            {pillars.map((pillar, index) => (
              <div key={index} className={styles.pillarCard}>
                <span className={styles.pillarIcon}>✓</span>
                <div>
                  <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contextCard}>
            <h3 className={styles.contextTitle}>Honoring the Whole Person</h3>
            <p className={styles.bodyText}>
              We view behavioral health through the lens of each individual’s complete story—incorporating cultural context, biological and genetic factors, and unique personal experiences. Our clinical interventions focus on empowering patients to make choices aligned with their core values, cultural background, and desired future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}