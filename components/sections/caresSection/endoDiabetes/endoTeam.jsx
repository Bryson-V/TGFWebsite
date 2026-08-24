"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import styles from "./endoTeam.module.css";

export default function EndoTeamSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerBlock}>
          <span className={styles.subTag}>EXPERT CLINICAL CARE</span>
          <h2 className={styles.title}>Meet Our Endocrinology Specialists</h2>
          <p className={styles.description}>
            Our board-certified endocrinologists and diabetes care specialists are dedicated
            to comprehensive hormonal care, continuous glucose management, and personalized health strategies.
          </p>

          <div className={styles.actionWrapper}>
            <Link 
              href="../patient/doctors?category=endocrinology" 
              className={styles.ctaButton}
            >
              Meet Our Team →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}