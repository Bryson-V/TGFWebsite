"use client";

import { useRef } from "react";
import Image from "@/components/ui/Image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./doctorHero.module.css";

export default function DoctorHero() {
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
          src="/images/PatientResources/doctors/hero.jpg" 
          alt="Doctors Team Background" 
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
        <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · PATIENT RESOURCES</h5>
        
        <h1 className={styles.title}>
          Meet Our Renowned<br />
          <span className={styles.brightText}>Team of Doctors</span>
        </h1>
        
        <p className={styles.description}>
          Dedicated, compassionate, and highly skilled specialists working together 
          <br />to deliver exceptional medical care across our Guam community.
        </p>
      </motion.div>
      
    </section>
  );
}