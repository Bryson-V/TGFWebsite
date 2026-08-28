"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./faqHero.module.css";

/**
 * FaqHero
 * The opening banner for the "FAQs & Resources" page, featuring parallax 
 * background effects, smooth scroll animations, and a styled overlay.
 */
export default function FaqHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.95]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      
      {/* Background Image Container with Parallax */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/PatientResources/faq/Hero.jpeg"
          alt="FAQs and Patient Resources Background"
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Dynamic Overlay */}
      <motion.div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div
        className={styles.content}
        style={{ y: textY, opacity: textOpacity }}
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · PATIENT RESOURCES</h5>

        <h1 className={styles.title}>
          Frequently Asked<br />
          <span className={styles.brightText}>Questions &amp; Resources</span>
        </h1>

        <p className={styles.description}>
          Get answers to common questions about our healthcare services,
          <br />community outreach programs, and foundation operations.
        </p>
      </motion.div>

    </section>
  );
}