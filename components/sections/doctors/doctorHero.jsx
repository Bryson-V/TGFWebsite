"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./doctorHero.module.css";

export default function DoctorHero() {

  return (
    <section className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.content}>
          {/* Eyebrow Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Guam's Trusted Healthcare Providers
          </div>

          <h1 className={styles.title}>
            Meet Our Renowned <br />
            <span className={styles.highlight}>Team of Doctors</span>
          </h1>

          <p className={styles.description}>
            Dedicated, compassionate, and highly skilled specialists working together 
            to deliver exceptional medical care across our Guam community.
          </p>

          <div className={styles.actions}>
            <a href="mailto:info@toduguam.com" className={styles.secondaryBtn}>
              Contact Medical Office
            </a>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/doctors/hero.jpg"
              alt="Todu Guam Medical Team of Doctors"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
          {/* Decorative Backing Frame */}
          <div className={styles.imageBackdrop}></div>
        </div>
      </Container>
    </section>
  );
}