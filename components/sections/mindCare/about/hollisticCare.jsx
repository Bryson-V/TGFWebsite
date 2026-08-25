"use client";

import Link from "next/link";
import Image from "@/components/ui/Image";
import styles from "./holisticCare.module.css";

export default function AboutMindCareHolisticCare() {
  const pillars = [
    {
      tier: "PILLAR 1",
      title: "Psychiatry",
      desc: "Biological and medical evaluations providing psychiatric care and medication management tailored to individual needs.",
      image: "/images/mindCare/psychiatry.jpg",
      href: "psychiatry"
    },
    {
      tier: "PILLAR 2",
      title: "Psychology",
      desc: "Comprehensive psychological testing, clinical diagnostic assessments, and evidence-based therapeutic modalities.",
      image: "/images/mindCare/psychology.jpg",
      href: "psychology"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.badge}>OUR PHILOSOPHY</span>
          <h2 className={styles.title}>A Truly Holistic Perspective</h2>
          <p className={styles.subtitle}>
            Integrating psychiatry, psychology, and counseling to address the biological, emotional, and social factors that influence overall well-being.
          </p>
        </div>

        {/* 3 Pillar Cards with Image Tops */}
        <div className={styles.cardsGrid}>
          {pillars.map((pillar, index) => (
            <Link key={index} href={pillar.href} className={styles.pillarCard}>
              <div className={styles.cardImageWrapper}>
                <Image src={pillar.image} alt={pillar.title} fill className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.tierTag}>{pillar.tier}</span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Floating Offset Overlay Block */}
        <div className={styles.overlapContainer}>
          <div className={styles.overlayCard}>
            <h3 className={styles.overlayTitle}>Honoring the Whole Person</h3>
            <p className={styles.overlayText}>
              We view behavioral health through the lens of each individual’s complete story—incorporating cultural context, biological factors, and unique personal experiences. Our clinical interventions focus on empowering patients to make choices aligned with their core values and desired future.
            </p>
          </div>
          <div className={styles.overlayImageWrapper}>
            <Image 
              src="/images/mindCare/whole-person.jpg" 
              alt="Honoring the Whole Person" 
              fill 
              className={styles.cardImage} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}