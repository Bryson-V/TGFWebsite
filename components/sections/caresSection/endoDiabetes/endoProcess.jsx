import styles from "./endoProcess.module.css";

const steps = [
  {
    step: "01",
    title: "Reach Out & Schedule",
    desc: "Contact our team by phone at 671-649-8638. Our care coordinators will answer your questions and set up your initial visit."
  },
  {
    step: "02",
    title: "Comprehensive Evaluation",
    desc: "Meet with our clinical team to review your blood sugar history, labs, medication routines, and personalized health goals."
  },
  {
    step: "03",
    title: "Personalized Care Plan",
    desc: "Together, we craft an ongoing plan tailored to your lifestyle—whether involving CGM tech, nutrition guidance, or medical care."
  }
];

export default function EndoProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.containerCard}>
        <div className={styles.header}>
          <span className={styles.pillTag}>YOUR JOURNEY</span>
          <h2 className={styles.title}>What to Expect on Your First Visit</h2>
          <p className={styles.subtitle}>
            Taking the step toward proactive metabolic care is straightforward. We've simplified our process so you feel supported every step of the way.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((item, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.numberBadge}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}