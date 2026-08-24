"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./insuranceHero.module.css";

export default function InsuranceHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 
  
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.90]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      
      <div className={styles.topAccentBar} />

      {/* Background Image Container */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/PatientResources/insurance/InsuranceHero.jpg" 
          alt="Accepted Insurances Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Dark Green Overlay */}
      <motion.div
        className={styles.greenOverlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · PATIENT RESOURCES</h5>
        
        <h1 className={styles.title}>
          Information About<br />
          <span className={styles.brightText}>Insurances</span>
        </h1>
        
        <p className={styles.description}>
          Understanding your coverage shouldn't be a barrier to care. 
          <br />We partner with a wide range of major insurance providers 
          <br />to ensure you and your family have access to the services you need.
        </p>
      </motion.div>
      
    </section>
  );
}