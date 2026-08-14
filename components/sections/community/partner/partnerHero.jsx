"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./partnerHero.module.css";

export default function PartnerHero() {
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
          src="/images/partners/Hero.jpg"
          alt="Todu Guam Partnership Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Blue Overlay */}
      <motion.div
        className={styles.blueOverlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · COMMUNITY & IMPACT</h5>
        
        <h1 className={styles.title}>
          Partnership<br />
          <span className={styles.brightText}>Programs</span>
        </h1>
        
        <p className={styles.description}>
          We collaborate with local organizations to bring vital health resources, 
          <br />specialized medical care, and essential community networks 
          <br />directly to the people of Guam.
        </p>
      </motion.div>
      
    </section>
  );
}