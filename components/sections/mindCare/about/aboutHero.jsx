"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./aboutHero.module.css";

export default function AboutMindCareHero() {
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
          alt="About Mind Care Background" 
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
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR MISSION</h5>
        
        <h1 className={styles.title}>
          About Mind Care
        </h1>
        
        <p className={styles.description}>
          A holistic, whole-person approach to behavioral health integrating biological, cultural, and personal care.
        </p>
      </motion.div>
      
    </section>
  );
}