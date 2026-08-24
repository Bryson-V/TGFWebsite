import { FiAlertCircle, FiPhone } from "react-icons/fi";
import styles from "./obgynCta.module.css";

export default function ObgynCta() {
  return (
    <section className={styles.section}>
      <div className={styles.noticeCard}>
        <div className={styles.noticeHeader}>
          <FiAlertCircle className={styles.warningIcon} size={28} />
          <div>
            <h3 className={styles.noticeTitle}>Scheduling & Care Notice</h3>
            <p className={styles.noticeDesc}>
              <strong>Our OB-GYN Clinic is an outpatient care provider.</strong> If you are experiencing severe hyper/hypoglycemia or a medical emergency, please call 911 or visit the nearest emergency room immediately.
            </p>
          </div>
        </div>

        <div className={styles.contactBoxes}>
          <div className={styles.contactBox}>
            <span className={styles.contactTag}>CLINICAL DIRECT LINE</span>
            <a href="tel:6716498638" className={styles.contactNumber}>(671) 649-8638</a>
            <span className={styles.contactSub}>Mon–Fri 8:00 AM – 5:00 PM</span>
          </div>

          <div className={styles.contactBox}>
            <span className={styles.contactTag}>EMERGENCY SERVICES</span>
            <span className={styles.contactNumber}>Call 911</span>
            <span className={styles.contactSub}>Or visit the nearest Emergency Room</span>
          </div>
        </div>
      </div>
    </section>
  );
}