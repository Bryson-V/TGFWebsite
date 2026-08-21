"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
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
    <section ref={containerRef} className={styles.heroContainer}>
      
      {/* Background Image Container with Parallax */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/AboutUs/directors/directorHero.webp" 
          alt="Board of Directors Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Text Content */}
      <motion.div 
        className={styles.content} 
        style={{ y: textY, opacity: textOpacity }} 
      >
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · ABOUT US</h5>
        
        <h1 className={styles.title}>
          Meet Our<br />
          <span className={styles.brightText}>Board of Directors</span>
        </h1>
        
        <p className={styles.description}>
          Meet the dedicated leaders guiding the Todu Guam Foundation's mission 
          <br />to get Guam healthy—one man, one woman, and one child at a time.
        </p>
      </motion.div>
      
    </section>
  );
}