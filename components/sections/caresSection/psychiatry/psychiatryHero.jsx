"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./psychiatryHero.module.css";

export default function PsychiatryHero() {
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
          src="/images/CaresAndServices/Psychiatry/Hero.jpeg"
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
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · Cares and Services</h5>
        
        <h1 className={styles.title}>
          Psychiatry
        </h1>
        
        <p className={styles.description}>
          Psychiatric evaluation, diagnosis, medication management, and medical direction for holistic mental health care.
        </p>
      </motion.div>
      
    </section>
  );
}