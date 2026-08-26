"use client";

import styles from "./firstVisitSteps.module.css";

export default function FirstVisitSteps() {
  const steps = [
    {
      number: "01",
      title: "Reach Out & Schedule",
      description: "Contact our team via phone or online inquiry. Our compassionate care coordinators will help guide you through initial questions and schedule your first appointment."
    },
    {
      number: "02",
      title: "Initial Intake & Assessment",
      description: "During your first session, you'll meet with our clinical team for a comprehensive evaluation to discuss your background, concerns, and overall goals in a supportive space."
    },
    {
      number: "03",
      title: "Personalized Care Plan",
      description: "Together, we craft a tailored treatment plan aligned with your needs—whether that involves therapy, medical evaluation, TMS, or a combination of collaborative services."
    }
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardContainer}>
          <span className={styles.badge}>YOUR JOURNEY</span>
          <h2 className={styles.title}>What to Expect on Your First Visit</h2>
          <p className={styles.subtitle}>
            Taking the first step toward behavioral healthcare can feel overwhelming. We've simplified our process to ensure you feel supported every step of the way.
          </p>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}