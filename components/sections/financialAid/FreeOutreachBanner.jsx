"use client";

import Container from "@/components/ui/Container";
import styles from "./FreeOutreachBanner.module.css";

const HeartIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function FreeOutreachBanner() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <HeartIcon />
          </div>
          <div className={styles.content}>
            <h2>100% Free Community Outreaches</h2>
            <p>
              We believe quality healthcare should be accessible to everyone. All of our mobile clinic outreaches, 
              health screenings, and basic navigation services are provided completely free of charge to the community—no 
              insurance or hidden fees required.
            </p>
            <h6>
                *Note: Not all services are available at outreaches.  Every outreach also has different services available.
            </h6>
          </div>
        </div>
      </Container>
    </section>
  );
}