"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./primaryTeam.module.css";

export default function PrimaryCareTeamSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerBlock}>
          <span className={styles.subTag}>EXPERT CLINICAL CARE</span>
          <h2 className={styles.title}>Meet Our Primary Care Team</h2>
          <p className={styles.description}>
            Our board-certified primary care physicians and family medicine specialists are
            dedicated to offering supportive, continuous, and compassionate clinical care.
          </p>
          <div className={styles.actionWrapper}>
            <Link href="../patient/doctors?category=primaryCare" className={styles.ctaButton}>
              Meet Our Team →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}