"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./mindCareHero.module.css";

export default function MindCareHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      
      <div className={styles.topAccentBar} />

      {/* Background Image Container */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/mindCare/MindCare.jpg" 
          alt="Mind Care Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Cyan Overlay */}
      <motion.div
        className={styles.cyanOverlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR WORK</h5>
        
        <h1 className={styles.title}>
          Mind Care
        </h1>
        
        <p className={styles.description}>
          Prioritizing mental well-being and emotional wellness. We offer 
          <br />compassionate support, community resources, and guidance 
          <br />to help build a stronger, healthier mind.
        </p>
      </motion.div>
      
    </section>
  );
}