"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./storyHero.module.css";

export default function StoryHero() {
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
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · ABOUT US</h5>
        
        <h1 className={styles.title}>
          Our <span className={styles.brightText}> Story</span>
        </h1>
        
        <p className={styles.description}>
          Established in 2016, TGF is an esteemed 501(c)(3) non-profit organization 
          <br />dedicated to addressing health disparities and promoting 
          <br />health equity on the beautiful island of Guam.
        </p>
      </motion.div>
      
    </div>
  );
}