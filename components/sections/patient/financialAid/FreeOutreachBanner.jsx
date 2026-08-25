"use client";

import Container from "@/components/ui/Container";
import { FaExclamationTriangle, FaHeart } from 'react-icons/fa';
import styles from "./FreeOutreachBanner.module.css";

export default function FreeOutreachBanner() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaHeart size={28} />
          </div>
          <div className={styles.content}>
            <h2>100% Free Community Outreaches</h2>
            <p>
              We believe quality healthcare should be accessible to everyone. All of our mobile clinic outreaches, 
              health screenings, and basic navigation services are provided completely free of charge to the community—no 
              insurance or hidden fees required.
            </p>
            <h6 className={styles.warningNote}>
              <FaExclamationTriangle className={styles.warningIcon} />
              <span> Not all services are available at outreaches. Every outreach also has different services available.</span>
            </h6>
          </div>
        </div>
      </Container>
    </section>
  );
}