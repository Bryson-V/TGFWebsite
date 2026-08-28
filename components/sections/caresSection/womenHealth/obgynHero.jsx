"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./obgynHero.module.css";

export default function ObgynHero() {
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
          src="/images/CaresAndServices/Obgyn/Hero.jpeg" 
          alt="OB/GYN Care Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Deep Burgundy Gradient Overlay */}
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
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · Cares and Services</h5>
          
          <h1 className={styles.title}>
            Obstetrics &amp;<br />
            <span className={styles.brightText}>Gynecology Center</span>
          </h1>

          <p className={styles.description}>
            Comprehensive care for every stage of life, from annual wellness screenings
            <br className={styles.desktopBreak} />
            to specialized obstetrics, delivered with empathy and expert support.
          </p>
        </div>
      </motion.div>
    </section>
  );
}