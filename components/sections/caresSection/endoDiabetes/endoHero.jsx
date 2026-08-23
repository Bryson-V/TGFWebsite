import { FiPhoneCall, FiCalendar } from "react-icons/fi";
import styles from "./endoHero.module.css";

export default function EndoHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCard}>
        <span className={styles.categoryPill}>TODU GUAM FOUNDATION</span>
        <h1 className={styles.title}>About Endocrinology & Metabolic Care</h1>
        
        <p className={styles.subtextBold}>
          Comprehensive, compassionate hormonal and diabetes health management for individuals and families in Guam.
        </p>

        <p className={styles.description}>
          Our goal is to support your continuous wellness through personalized treatment plans, advanced metabolic technologies, and preventative lifestyle education.
        </p>

        <div className={styles.highlightCallout}>
          <div className={styles.accentBar} />
          <div>
            <h4 className={styles.calloutHeading}>Empowering Patient Health</h4>
            <p className={styles.calloutText}>
              Managing chronic conditions like diabetes or thyroid disorders should feel supported, clear, and integrated seamlessly into your daily life.
            </p>
          </div>
        </div>

        <div className={styles.ctaGroup}>
          <a href="#appointment" className={styles.primaryBtn}>
            <FiCalendar size={18} /> Request an Appointment
          </a>
          <a href="tel:6716498638" className={styles.secondaryBtn}>
            <FiPhoneCall size={18} /> Call Clinic: 671-649-8638
          </a>
        </div>
      </div>
    </section>
  );
}