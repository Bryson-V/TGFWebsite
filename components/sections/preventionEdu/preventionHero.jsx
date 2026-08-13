"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
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
    <section ref={containerRef} className={styles.heroContainer}>
      
      {/* Background Image Container with Parallax */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/preventionEdu/Education.jpg" 
          alt="Prevention and Education Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR WORK</h5>
        
        <h1 className={styles.title}>
          Prevention &<br />
          <span className={styles.brightText}>Education</span>
        </h1>
        
        <p className={styles.description}>
          Being proactive with your wellbeing. We bring health education 
          <br />directly to Guam's communities through forums, screenings, 
          <br />and the Functional Medicine approach.
        </p>
      </motion.div>
      
    </section>
  );
}