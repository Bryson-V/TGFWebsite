"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
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
    <section ref={containerRef} className={styles.heroContainer}>
      
      {/* Background Image Container with Parallax */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/story/Rainbow.webp" 
          alt="Our Story Background" 
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
      
    </section>
  );
}