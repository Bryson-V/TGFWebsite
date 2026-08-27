import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import styles from "./prepCTA.module.css";

const prepSteps = [
  "Bring your valid government ID and active health insurance card.",
  "Compile a full list of current prescription medications, OTC drugs, and supplements.",
  "Follow fasting instructions (typically 8–12 hours) if blood work is scheduled.",
  "Write down any health symptoms or specific questions for your provider."
];

export default function PreparationCTA() {
  return (
    <>
      <section className={styles.prepSection}>
        <div className={styles.container}>
          <h2 className={styles.prepTitle}>What to Expect & How to Prepare</h2>
          <div className={styles.listWrapper}>
            {prepSteps.map((step, idx) => (
              <div key={idx} className={styles.stepItem}>
                <div className={styles.iconCircle}>
                  <FiCheck size={18} />
                </div>
                <p className={styles.stepText}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to take charge of your health?</h2>
          <p className={styles.ctaSub}>
            Reach out via direct phone, WhatsApp, or request financial assistance options today.
          </p>
          <div className={styles.ctaActions}>
            <Link href="tel:+16710000000" className={styles.primaryBtn}>
              Call Clinic
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Patient Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}