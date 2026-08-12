"use client";

import Image from '@/components/ui/Image';
import Container from "@/components/ui/Container";
import styles from "./womenHealth.module.css";

export default function WomenHealthModule() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {/* Left Column: Rounded Photo */}
          <div className={styles.imageColumn}>
            <div className={styles.photoWrapper}>
              <Image
                src="/images/healing/womens-health-care.jpeg" // Update with your actual image path
                alt="Healthcare provider examining a patient"
                width={520}
                height={360}
                className={styles.staffPhoto}
              />
            </div>
          </div>

          {/* Right Column: Content Card */}
          <div className={styles.cardColumn}>
            <div className={styles.infoCard}>
              <h2 className={styles.cardTitle}>Women&apos;s health matters.</h2>
              
              <p className={styles.cardDescription}>
                As mothers, wives, sisters, friends, workers, and caregivers, women have a significant impact on the family and the community as a whole. Your health will help shape generations. So take the first step. Be a <span className={styles.hashtag}>#wellwoman</span>, and take charge of your well-being!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}