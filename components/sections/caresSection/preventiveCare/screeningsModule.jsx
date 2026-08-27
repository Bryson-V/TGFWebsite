import { FiCheckCircle } from "react-icons/fi";
import screeningsData from "@/content/site-data/screenings.json";
import styles from "./screeningsModule.module.css";

export default function ScreeningsModule() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <p className={styles.bannerText}>
             <strong>Early detection saves lives</strong>—stay up to date with routine annual health screenings.
          </p>
        </div>

        <div className={styles.header}>
          <h2 className={styles.title}>Regular Screenings & Checkups</h2>
        </div>

        <div className={styles.checklistGrid}>
          {screeningsData.map((item) => (
            <div key={item.id} className={styles.checkCard}>
              <div className={styles.cardHeader}>
                <FiCheckCircle className={styles.checkIcon} size={24} />
                <span className={styles.ageBadge}>{item.ageGroup}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}