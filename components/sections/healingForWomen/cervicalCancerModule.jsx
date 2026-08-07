"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./cervicalCancerModule.module.css";

export default function CervicalCancerModule() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {/* Left Column: Content Card */}
          <div className={styles.cardColumn}>
            <div className={styles.infoCard}>
              <div className={styles.headerGroup}>
                <span className={styles.eyebrow}>Addressing</span>
                <h2 className={styles.cardTitle}>Cervical Cancer</h2>
              </div>

              <p className={styles.introText}>
                Let&apos;s first understand what this type of cancer is.
              </p>

              <p className={styles.cardDescription}>
                When cancer starts in the cervix, it is called cervical cancer. Anyone with a cervix is at risk for this cancer. It occurs most often in people over the age of 30. Long-lasting infection with certain types of human papillomavirus (HPV) is its main cause.
              </p>

              <p className={styles.cardDescription}>
                HPV is a common virus that is passed from one person to another during sex.
              </p>
            </div>
          </div>

          {/* Right Column: Circular Graphic */}
          <div className={styles.imageColumn}>
            <div className={styles.circleWrapper}>
              <Image
                src="/images/healing/cervical-cancer.jpeg" // Update with your actual image path
                alt="Cervical Cancer Awareness Ribbon and Syringe"
                width={420}
                height={420}
                className={styles.graphicImage}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}