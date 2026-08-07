"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./preventionHero.module.css";

export default function PreventionHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); 
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.95]);

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
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR WORK</h5>
        
        <h1 className={styles.title}>
          Prevention<br />
          &<br />
          <span className={styles.brightText}>Education.</span>
        </h1>
        
        <p className={styles.description}>
          Being proactive with your wellbeing. We bring health education 
          <br></br>directly to Guam's communities through forums, screenings, 
          <br></br>and the Functional Medicine approach.
        </p>
      </motion.div>
      
    </div>
  );
}