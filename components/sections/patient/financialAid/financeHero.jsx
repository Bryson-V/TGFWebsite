"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./financeHero.module.css";

export default function FinancialHero() {
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
          src="/images/PatientResources/financial/Finance.jpg" 
          alt="Financial Assistance Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Green Overlay */}
      <motion.div
        className={styles.greenOverlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR WORK</h5>
        
        <h1 className={styles.title}>
          Financial<br />
          <span className={styles.brightText}>Assistance</span>
        </h1>
        
        <p className={styles.description}>
          Navigating medical and financial decisions shouldn't be done alone. 
          <br />We provide compassionate guidance, helping you access resources, 
          <br />coordinate treatments, and find affordable healthcare solutions.
        </p>
      </motion.div>
      
    </section>
  );
}