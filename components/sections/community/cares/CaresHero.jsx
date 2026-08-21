"use client";

import { useRef } from "react";
import Image from '@/components/ui/Image';
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./CaresHero.module.css";

export default function CaresHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      <div className={styles.topAccentBar} />

      {/* Background Image Container with Parallax */}
      <motion.div
        className={styles.backgroundImageWrapper}
        style={{ y: backgroundY }}
      >
        <Image 
          src="/images/CommunityAndImpact/cares/CaresBanner.jpg" 
          alt="CARES Movement Background" 
          fill
          className={styles.bgImage}
          priority
        />
      </motion.div>

      {/* Soft Purple/Lavender Overlay */}
      <motion.div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      />

      {/* Parallax Content Container */}
      <motion.div
        className={styles.contentWrapper}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        
        <div className={styles.textBlock}>
          <h5 className={styles.subtitle}>TODU GUAM FOUNDATION · OUR WORK</h5>
          
          <h1 className={styles.title}>
            CARES<br />
            <span className={styles.brightText}>Movement</span>
          </h1>

          <p className={styles.description}>
            This is funded by the U.S. Department of Education under Grant #S425H210004 
            <br />and supported by the Office of the Governor of Guam&apos;s Education Stabilization Funds.
          </p>
        </div>

        <div className={styles.logoBlock}>
          <div className={styles.logoWrapper}>
            {/* Top Symbol Image */}
            <div className={styles.symbolContainer}>
              <Image 
                src="/images/CommunityAndImpact/cares/cares-thumb.jpeg" 
                alt="Kinder Days Ahead Symbol" 
                width={100} 
                height={100}
                priority
                className={styles.symbolImage}
              />
            </div>

            {/* Bottom Text Logo Image */}
            <div className={styles.textLogoContainer}>
              <Image 
                src="/images/CommunityAndImpact/cares/kinder-days-ahead.jpeg" 
                alt="Kinder Days Ahead - Join the Movement" 
                width={200} 
                height={150}
                priority
                className={styles.textLogoImage}
              />
            </div>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
}