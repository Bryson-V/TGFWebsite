"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./directorHero.module.css";

export default function BoardHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.95]);

  return (
    <div ref={containerRef} className={styles.heroContainer}>
      
      <motion.div
        className={styles.backgroundImage}
        style={{ y: backgroundY }}
      />

      <motion.div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · ABOUT US</h5>
        
        <h1 className={styles.title}>
          Our <br />
          <span className={styles.brightText}>Board of Directors</span>
        </h1>
        
        <p className={styles.description}>
          Meet the dedicated leaders guiding the Todu Guam Foundation's mission 
          <br />to get Guam healthy—one man, one woman, and one child at a time.
        </p>
      </motion.div>
      
    </div>
  );
}