"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./healingHero.module.css";

export default function HealingHero() {
  return (
    <section className={styles.heroSection}>
      {/* Top Accent Strip matching your header line */}
      <div className={styles.topAccentBar} />

      <div className={styles.heroBackground}>
        {/* Background People/Community Image */}
        <div className={styles.imageWrapper}>

          {/* Pink Overlay Tint */}
          <div className={styles.pinkOverlay} />
        </div>

        <Container>
          <div className={styles.contentWrapper}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/healing/hinemo-logo.jpeg" // Update with your actual logo path if separate
                alt="Hinemlo' Famalao'an - Healing for Women by Todu Guam Foundation"
                width={400}
                height={150}
                priority
                className={styles.heroLogo}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}