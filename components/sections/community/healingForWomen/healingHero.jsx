"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./healingHero.module.css";

export default function HealingHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.85]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      
      <div className={styles.topAccentBar} />

      {/* Background Image Container */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/healing/Hinemlo.jpg" 
          alt="Healing Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Pink Overlay */}
      <motion.div
        className={styles.pinkOverlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR WORK</h5>
        
        <h1 className={styles.title}>
          Healing for<br />
          <span className={styles.brightText}>Women</span>
        </h1>
        
        <p className={styles.description}>
          Hinemlo' Famalao'an - Healing for Women. We help you make
          <br />informed health decisions through education and counseling.
          <br />Be a #wellwoman, and take charge of your well-being!
        </p>
      </motion.div>
      
    </section>
  );
}