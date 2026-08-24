"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./obgynTeam.module.css";

export default function ObgynTeamSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerBlock}>
          <span className={styles.subTag}>EXPERT CLINICAL CARE</span>
          <h2 className={styles.title}>Meet Our OB/GYN Specialists</h2>
          <p className={styles.description}>
            Our board-certified gynecologists, obstetricians, and midwives are dedicated
            to offering supportive and compassionate clinical care.
          </p>
          <div className={styles.actionWrapper}>
            <Link href="../patient/doctors?category=obgyn" className={styles.ctaButton}>
              Meet Our Team →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}