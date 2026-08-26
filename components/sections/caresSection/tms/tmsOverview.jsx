"use client";

import styles from "./tmsOverview.module.css";

export default function TmsOverview() {
  return (
    <section className={styles.overviewContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>What is TMS?</h2>

        <div className={styles.mainCard}>
          {/* Main Definition Highlight */}
          <div className={styles.leadBox}>
            <p className={styles.leadText}>
              Transcranial Magnetic Stimulation (TMS) is a noninvasive medical treatment that uses magnetic pulses to recalibrate specific areas of electrical activity in the brain involved in mood regulation.
            </p>
          </div>

          {/* Breakdown / Takeaway Points */}
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <div className={styles.iconBadge}>01</div>
              <div>
                <h3 className={styles.detailTitle}>How It Works</h3>
                <p className={styles.detailText}>
                  <strong>“Transcranial”</strong> means treatment acts through the skull from the outside. <strong>“Magnetic stimulation”</strong> uses a controlled magnetic field—no surgery, no electrical shocks, and no systemic medication.
                </p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconBadge}>02</div>
              <div>
                <h3 className={styles.detailTitle}>The Goal</h3>
                <p className={styles.detailText}>
                  Think of TMS as a way to "exercise" or reactivate underactive brain networks that aren't functioning normally in conditions like depression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}