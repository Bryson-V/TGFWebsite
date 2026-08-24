"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./primaryHero.module.css";

export default function PrimaryCareHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      {/* Parallax Background Image */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/Services/primarycare/primarycare-banner.jpg" 
          alt="Primary Care Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Deep Emerald Gradient Overlay */}
      <motion.div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Hero Content */}
      <motion.div
        className={styles.contentWrapper}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className={styles.textBlock}>
          <span className={styles.subtitle}>FAMILY & ADULT MEDICINE</span>
          
          <h1 className={styles.title}>
            Primary Care<br />
            <span className={styles.brightText}>&amp; Wellness Center</span>
          </h1>

          <p className={styles.description}>
            Comprehensive healthcare for every stage of life, routine preventative physicals,
            <br className={styles.desktopBreak} />
            and dedicated chronic disease management tailored for you and your family.
          </p>
        </div>
      </motion.div>
    </section>
  );
}