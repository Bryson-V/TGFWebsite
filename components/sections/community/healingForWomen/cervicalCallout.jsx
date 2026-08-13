"use client";

import Container from "@/components/ui/Container";
import styles from "./cervicalCallout.module.css";

export default function CervicalCalloutModule() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {/* Outer wrapper that holds and clips the rotating glow border */}
          <div className={styles.rotatingBorderCard}>
            <div className={styles.calloutCard}>
              <h2 className={styles.calloutText}>
                The good news is cervical cancer is preventable and treatable when caught early. Together, we will continue the fight to prevent and treat cervical cancer.
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}