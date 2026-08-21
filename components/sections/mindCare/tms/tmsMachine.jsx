"use client";

import Image from '@/components/ui/Image';
import styles from "./tmsMachine.module.css";

export default function TmsMachine() {
  return (
    <section className={styles.machineContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/BehavioralHealth/tms/tmsMachine.jpeg" 
            alt="BrainsWay Deep TMS Technology" 
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>The TMS Machine & Deep TMS</h2>
          <p className={styles.leadText}>
            At Mind Care, we use <strong>BrainsWay technology</strong>, which provides a form of treatment known as <strong>Deep TMS</strong> utilizing a specialized helmet-like coil.
          </p>
          
          <ul className={styles.featureList}>
            <li>
              <strong>Comfortable Treatment Chair:</strong> During treatment, the patient sits comfortably in a chair while the device is positioned on the head.
            </li>
            <li>
              <strong>No Anesthesia or Sedation:</strong> Patients remain fully awake throughout the session and do not experience systemic side effects.
            </li>
            <li>
              <strong>Immediate Return to Routine:</strong> Patients can return to normal daily activities immediately following treatment.
            </li>
            <li>
              <strong>Targeted Therapy:</strong> Unlike medication that circulates through the whole body, TMS works directly on targeted areas of the brain.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}